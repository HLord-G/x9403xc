"use strict";

var tampview = false;
$(document).on("click", ".viewtemps", function () {
  if (!tampview) {
    $("#tempaltes").show(); // show container

    $("body").css({
      "overflow": "hidden"
    });
  } else {
    $("#tempaltes").hide(); // hide container

    $("body").css({
      "overflow": "auto"
    });
    $("#template_discriptiom").hide();
  }

  tampview = !tampview; // toggle switch
});
$(document).on("click", "#tamplates_close", function () {
  if (!tampview) {
    $("#tempaltes").show(); // show container

    $("body").css({
      "overflow": "hidden"
    });
  } else {
    $("#tempaltes").hide(); // hide container

    $("body").css({
      "overflow": "auto"
    });
  }

  tampview = !tampview; // toggle switch
});
var itemsPerPage = 12;
var currentPage = 1;

function renderCards() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var start = (page - 1) * itemsPerPage;
  var end = start + itemsPerPage;
  var slicedData = data.slice(start, end);
  var container = document.querySelector('#template_views');
  container.innerHTML = '';
  slicedData.forEach(function (item, index) {
    container.innerHTML += "\n        <aside class=\"p-[20px] h-[410px] w-3xl relative max-[489px]:h-[270px] cursor-pointer\" template_view=\"".concat(start + index, "\">\n            <article class=\"absolute bottom-[10%] left-[6%] z-[4] flex justify-start flex-col\">\n                <h2 class=\"card-title text-3xl mb-[6px]\">").concat(item.title, "</h2>\n                <div class=\"badge badge-secondary\">").concat(item.tags, "</div>\n            </article>\n            <img src=\"").concat(item.img, "\" class=\"absolute object-cover object-center top-0 left-0 z-1 w-full h-full\" alt=\"\">\n            <div class=\"filter absolute top-0 left-0 h-full w-full z-[2] bg-[rgba(15,14,14,0.00)] hover:bg-[rgba(15,14,14,0.56)]\"></div>\n        </aside>\n\n    ");
  });
  updateButtons();
}

function updateButtons() {
  var pagination = document.getElementById('paginationBtns');
  var totalPages = Math.ceil(data.length / itemsPerPage);
  pagination.innerHTML = ''; // Previous button

  var prevBtn = document.createElement('button');
  prevBtn.className = 'btn';
  prevBtn.textContent = 'Previous';
  prevBtn.disabled = currentPage === 1;

  prevBtn.onclick = function () {
    if (currentPage > 1) {
      currentPage--;
      renderCards(currentPage);
    }
  };

  pagination.appendChild(prevBtn); // Page numbers

  var _loop = function _loop(i) {
    var btn = document.createElement('button');
    btn.className = "btn ".concat(i === currentPage ? 'btn-active' : '');
    btn.textContent = i;

    btn.onclick = function () {
      currentPage = i;
      renderCards(currentPage);
    };

    pagination.appendChild(btn);
  };

  for (var i = 1; i <= totalPages; i++) {
    _loop(i);
  } // Next button


  var nextBtn = document.createElement('button');
  nextBtn.className = 'btn';
  nextBtn.textContent = 'Next';
  nextBtn.disabled = currentPage === totalPages;

  nextBtn.onclick = function () {
    if (currentPage < totalPages) {
      currentPage++;
      renderCards(currentPage);
    }
  };

  pagination.appendChild(nextBtn);
}

window.addEventListener("DOMContentLoaded", function () {
  renderCards(currentPage); // first render
});

function randomNums(max, count) {
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var nums = [];
  var excludeSet = new Set(Array.isArray(exclude) ? exclude : [exclude]);

  while (nums.length < count) {
    var rand = Math.floor(Math.random() * max);

    if (!nums.includes(rand) && !excludeSet.has(rand)) {
      nums.push(rand);
    }
  }

  return nums;
}

$(document).on("click", "[template_view]", function () {
  var idnumber = $(this).attr("template_view");
  var picker = randomNums(data.length, 4, Number(idnumber));
  $("#imgdis").attr("src", data[idnumber].img);
  $("#title").text(data[idnumber].title);
  $("#tags").text(data[idnumber].tags);
  $("#description").text(data[idnumber].discription);
  $("#link").attr("href", data[idnumber].link);
  $("#previewlinks").attr("href", data[idnumber].link);
  $("#othera").text(data[picker[0]].title);
  $("#otherb").text(data[picker[1]].title);
  $("#otherc").text(data[picker[2]].title);
  $("#othernamea").attr("src", data[picker[0]].img);
  $("#othernameb").attr("src", data[picker[1]].img);
  $("#othernamec").attr("src", data[picker[2]].img);
  $("#othernamed").attr("src", data[picker[3]].img);
  $("#othernamea_title").html(data[picker[0]].title);
  $("#othernameb_title").html(data[picker[1]].title);
  $("#othernamec_title").html(data[picker[2]].title);
  $("#othernamed_title").html(data[picker[3]].title);
  $("#othernamea_tag").html(data[picker[0]].tags);
  $("#othernameb_tag").html(data[picker[1]].tags);
  $("#othernamec_tag").html(data[picker[2]].tags);
  $("#othernamed_tag").html(data[picker[3]].tags);
  $("#othernamea_").attr("template_view", picker[0]);
  $("#othernameb_").attr("template_view", picker[1]);
  $("#othernamec_").attr("template_view", picker[2]);
  $("#othernamed_").attr("template_view", picker[3]);
  $("#template_discriptiom").show();
});
$(document).on("click", "#closeempview", function () {
  $("#template_discriptiom").hide();
});
setTimeout(function () {
  $("#tempboarda").attr("src", data[0].img);
  $("#tempboardb").attr("src", data[1].img);
  $("#tempboardc").attr("src", data[2].img);
  $("#tempboardd").attr("src", data[3].img);
  $("#tempboard_title_a").text(data[0].title);
  $("#tempboard_title_b").text(data[1].title);
  $("#tempboard_title_c").text(data[2].title);
  $("#tempboard_title_d").text(data[3].title);
}, 700);