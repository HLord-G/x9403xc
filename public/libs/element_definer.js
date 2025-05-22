
let tampview = false;

  $(document).on("click", "#viewtemps", function () {
  if (!tampview) {
      $("#tempaltes").show(); // show container
      $("body").css({"overflow":"hidden"})
  } else {
      $("#tempaltes").hide(); // hide container
      $("body").css({"overflow":"auto"})
      $("#template_discriptiom").hide()
  }
  tampview = !tampview; // toggle switch
  });


  $(document).on("click", "#tamplates_close", function(){
    if (!tampview) {
      $("#tempaltes").show(); // show container
      $("body").css({"overflow":"hidden"})
  } else {
      $("#tempaltes").hide(); // hide container
      $("body").css({"overflow":"auto"})
  }
  tampview = !tampview; // toggle switch
  })


const data = [
  { title: "telor", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "compine", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "side walker", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "degree", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "route", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "degree", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "becoming", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "degree", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "route", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "degree", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "becoming", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""},
  { title: "degree", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"", date:""}
];

const itemsPerPage = 12;
let currentPage = 1;

function renderCards(page = 1) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const slicedData = data.slice(start, end);

  const container = document.querySelector('#template_views');
  container.innerHTML = '';

  slicedData.forEach((item, index) => {
    container.innerHTML += `
        <aside template_view="${index}" class="card w-[325px] cursor-pointer p-[5px] py-[10px]">
          <fieldset>
            <img src="${item.img}" class="w-full object-cover object-center h-[400px] border" alt="${item.title}">
          </fieldset>
          <div class="mt-[10px] font-bold">
            <h1 class="text-2xl">${item.title}</h1>
          </div>
        </aside>
    `;
  });

  updateButtons();
}

function updateButtons() {
  const pagination = document.getElementById('paginationBtns');
  const totalPages = Math.ceil(data.length / itemsPerPage);
  pagination.innerHTML = '';

  // Previous button
  const prevBtn = document.createElement('button');
  prevBtn.className = 'btn';
  prevBtn.textContent = 'Previous';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderCards(currentPage);
    }
  };
  pagination.appendChild(prevBtn);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = `btn ${i === currentPage ? 'btn-active' : ''}`;
    btn.textContent = i;
    btn.onclick = () => {
      currentPage = i;
      renderCards(currentPage);
    };
    pagination.appendChild(btn);
  }

  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn';
  nextBtn.textContent = 'Next';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCards(currentPage);
    }
  };
  pagination.appendChild(nextBtn);
}

window.addEventListener("DOMContentLoaded", () => {
  renderCards(currentPage); // first render
});


$(document).on("click", "[template_view]", function(){
  // alert($(this).attr("template_view"))

  $("#template_discriptiom").show()

})

$(document).on("click", "#closeempview", function(){
  // alert($(this).attr("template_view"))

  $("#template_discriptiom").hide()

})
