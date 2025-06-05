"use strict";

var datacompiler = [];
var data = [{
  title: "Tela Bords",
  tags: "Landing Page",
  img: "public/img_temp/temp1.webp",
  link: "../../templates/temp_1/",
  discription: "* step high stretch colony phrase later any is spell brother bad mirror quarter till lion molecular long unit future coffee rhyme heard ocean variety",
  date: "10-05-95"
}, {
  title: "compine",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "../../templates/temp_2/",
  discription: "* movement secret nervous hot pine cabin unhappy wore walk cost happened partly writer managed herself activity older charge window raw crack garage build straw",
  date: "10-05-95"
}, {
  title: "side walker",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "../../templates/temp_3/",
  discription: "* stairs greatly chart married taught glass crop pure edge yellow dress hit whom pine comfortable start boy many weight blood cross cloud song bottle",
  date: "10-05-95"
}, {
  title: "degree",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* simple that terrible claws nuts bark visit city special pictured sort difficulty damage good sugar society trap count receive feel giving stems hand closer",
  date: "10-05-95"
}, {
  title: "degree",
  tags: "Landing Page",
  img: "https://dummyimage.com/400x325",
  link: "www.sample.com",
  discription: "* simple that terrible claws nuts bark visit city special pictured sort difficulty damage good sugar society trap count receive feel giving stems hand closer",
  date: "10-05-95"
}];
var isTemplateViewOpen = false;

function toggleTemplateView(show) {
  $("#tempaltes").toggle(show);
  $("body").css("overflow", show ? "hidden" : "auto");
  if (!show) $("#template_discriptiom").hide();
  isTemplateViewOpen = show;
}

$(document).on("click", ".viewtemps, #tamplates_close", function () {
  toggleTemplateView(!isTemplateViewOpen);
});
var itemsPerPage = 8;
var currentPage = 1;

function renderCards() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var start = (page - 1) * itemsPerPage;
  var slicedData = data.slice(start, start + itemsPerPage);
  var container = $("#template_views").empty();
  slicedData.forEach(function (item, idx) {
    container.append("\n          <aside class=\"p-[20px] h-[410px] w-3xl relative max-[489px]:h-[270px] cursor-pointer overflow-hidden\" template_view=\"".concat(start + idx, "\">\n            <article class=\"absolute bottom-[10%] left-[6%] z-[4] flex justify-start flex-col\">\n              <h2 class=\"card-title text-3xl mb-[6px]\">").concat(item.title, "</h2>\n              <div class=\"badge badge-secondary\">").concat(item.tags, "</div>\n            </article>\n            <img src=\"").concat(item.img, "\" class=\"absolute object-cover object-center top-0 left-0 z-1 w-full h-full\" alt=\"\">\n            <div class=\"filter absolute top-0 left-0 h-full w-full z-[2] bg-[rgba(15,14,14,0.00)] hover:bg-[rgba(15,14,14,0.56)]\"></div>\n          </aside>\n        "));
  });
  updatePaginationButtons();
}

function updatePaginationButtons() {
  var totalPages = Math.ceil(data.length / itemsPerPage);
  var pagination = $("#paginationBtns").empty();

  var addButton = function addButton(label, disabled, onClick) {
    var btn = $("<button class=\"btn\">".concat(label, "</button>"));
    if (disabled) btn.prop("disabled", true);
    btn.on("click", onClick);
    pagination.append(btn);
  };

  addButton("Previous", currentPage === 1, function () {
    return renderCards(--currentPage);
  });

  var _loop = function _loop(i) {
    var btn = $("<button class=\"btn ".concat(i === currentPage ? 'btn-active' : '', "\">").concat(i, "</button>"));
    btn.on("click", function () {
      return renderCards(currentPage = i);
    });
    pagination.append(btn);
  };

  for (var i = 1; i <= totalPages; i++) {
    _loop(i);
  }

  addButton("Next", currentPage === totalPages, function () {
    return renderCards(++currentPage);
  });
}

function randomNums(max, count) {
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var nums = new Set();
  var excludeSet = new Set(Array.isArray(exclude) ? exclude : [exclude]);
  var tries = 0;

  while (nums.size < count && tries < 100) {
    var rand = Math.floor(Math.random() * max);

    if (!nums.has(rand) && !excludeSet.has(rand)) {
      nums.add(rand);
    }

    tries++;
  }

  return Array.from(nums);
}

function setDetailView(index) {
  var item = data[index];
  var picker = randomNums(data.length, 4, index);
  $("#imgdis").attr("src", item.img);
  $("#title").text(item.title);
  $("#tags").text(item.tags);
  $("#description").text(item.discription);
  $("#link, #previewlinks").attr("href", item.link);
  var ids = ['a', 'b', 'c', 'd'];
  picker.forEach(function (id, i) {
    $("#othername".concat(ids[i])).attr("src", data[id].img);
    $("#othername".concat(ids[i], "_title")).html(data[id].title);
    $("#othername".concat(ids[i], "_tag")).html(data[id].tags);
    $("#othername".concat(ids[i], "_")).attr("template_view", id);
  });
  $("#template_discriptiom").show();
}

$(document).on("click", "[template_view]", function () {
  var id = +$(this).attr("template_view");
  var item = data[id];
  var picks = randomNums(data.length, 4, id); // Main content update

  $("#imgdis").attr("src", item.img);
  $("#title").text(item.title);
  $("#tags").text(item.tags);
  $("#description").text(item.discription);
  $("#link, #previewlinks").attr("href", item.link); // Other picks

  var others = [picks[0], picks[1], picks[2], picks[3]];
  ["a", "b", "c", "d"].forEach(function (key, idx) {
    var d = data[others[idx]];
    $("#othername".concat(key)).attr("src", d.img);
    $("#othername".concat(key, "_title")).text(d.title);
    $("#othername".concat(key, "_tag")).text(d.tags);
    $("#othername".concat(key, "_")).attr("template_view", others[idx]);
  });
  $("#template_discriptiom").show();
});
$(document).on("click", "#closeempview", function () {
  $("#template_discriptiom").hide();
});
$(window).on("DOMContentLoaded", function () {
  renderCards();
  setTimeout(function () {
    for (var i = 0; i < 4; i++) {
      $("#tempboard".concat(String.fromCharCode(97 + i))).attr("src", data[i].img);
      $("#tempboard_title_".concat(String.fromCharCode(97 + i))).text(data[i].title);
    }
  }, 700);
});