let datacompiler = [];
const data = [
    { title: "Tela Bords", tags:"Landing Page", img: "public/img_temp/temp1.webp", link: "../../templates/temp_1/",  discription:"* step high stretch colony phrase later any is spell brother bad mirror quarter till lion molecular long unit future coffee rhyme heard ocean variety", date:"10-05-95"},
    { title: "compine", tags:"Landing Page", img: "https://dummyimage.com/400x325", link: "../../templates/temp_2/", discription:"* movement secret nervous hot pine cabin unhappy wore walk cost happened partly writer managed herself activity older charge window raw crack garage build straw", date:"10-05-95"},
    { title: "side walker", tags:"Landing Page", img: "https://dummyimage.com/400x325", link: "../../templates/temp_3/", discription:"* stairs greatly chart married taught glass crop pure edge yellow dress hit whom pine comfortable start boy many weight blood cross cloud song bottle", date:"10-05-95"},
    { title: "degree", tags:"Landing Page", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"* simple that terrible claws nuts bark visit city special pictured sort difficulty damage good sugar society trap count receive feel giving stems hand closer", date:"10-05-95"},
    { title: "degree", tags:"Landing Page", img: "https://dummyimage.com/400x325", link: "www.sample.com", discription:"* simple that terrible claws nuts bark visit city special pictured sort difficulty damage good sugar society trap count receive feel giving stems hand closer", date:"10-05-95"}
    ];


    let isTemplateViewOpen = false;

    function toggleTemplateView(show) {
      $("#tempaltes").toggle(show);
      $("body").css("overflow", show ? "hidden" : "auto");
      if (!show) $("#template_discriptiom").hide();
      isTemplateViewOpen = show;
    }
    
    $(document).on("click", ".viewtemps, #tamplates_close", () => {
      toggleTemplateView(!isTemplateViewOpen);
    });
    
    const itemsPerPage = 8;
    let currentPage = 1;
    
    function renderCards(page = 1) {
      const start = (page - 1) * itemsPerPage;
      const slicedData = data.slice(start, start + itemsPerPage);
      const container = $("#template_views").empty();
    
      slicedData.forEach((item, idx) => {
        container.append(`
          <aside class="p-[20px] h-[410px] w-3xl relative max-[489px]:h-[270px] cursor-pointer overflow-hidden" template_view="${start + idx}">
            <article class="absolute bottom-[10%] left-[6%] z-[4] flex justify-start flex-col">
              <h2 class="card-title text-3xl mb-[6px]">${item.title}</h2>
              <div class="badge badge-secondary">${item.tags}</div>
            </article>
            <img src="${item.img}" class="absolute object-cover object-center top-0 left-0 z-1 w-full h-full" alt="">
            <div class="filter absolute top-0 left-0 h-full w-full z-[2] bg-[rgba(15,14,14,0.00)] hover:bg-[rgba(15,14,14,0.56)]"></div>
          </aside>
        `);
      });
    
      updatePaginationButtons();
    }
    
    function updatePaginationButtons() {
      const totalPages = Math.ceil(data.length / itemsPerPage);
      const pagination = $("#paginationBtns").empty();
    
      const addButton = (label, disabled, onClick) => {
        const btn = $(`<button class="btn">${label}</button>`);
        if (disabled) btn.prop("disabled", true);
        btn.on("click", onClick);
        pagination.append(btn);
      };
    
      addButton("Previous", currentPage === 1, () => renderCards(--currentPage));
    
      for (let i = 1; i <= totalPages; i++) {
        const btn = $(`<button class="btn ${i === currentPage ? 'btn-active' : ''}">${i}</button>`);
        btn.on("click", () => renderCards(currentPage = i));
        pagination.append(btn);
      }
    
      addButton("Next", currentPage === totalPages, () => renderCards(++currentPage));
    }
    
    function randomNums(max, count, exclude = []) {
      const nums = new Set();
      const excludeSet = new Set(Array.isArray(exclude) ? exclude : [exclude]);
      let tries = 0;
    
      while (nums.size < count && tries < 100) {
        const rand = Math.floor(Math.random() * max);
        if (!nums.has(rand) && !excludeSet.has(rand)) {
          nums.add(rand);
        }
        tries++;
      }
    
      return Array.from(nums);
    }
    
    
    function setDetailView(index) {
      const item = data[index];
      const picker = randomNums(data.length, 4, index);
    
      $("#imgdis").attr("src", item.img);
      $("#title").text(item.title);
      $("#tags").text(item.tags);
      $("#description").text(item.discription);
      $("#link, #previewlinks").attr("href", item.link);
    
      const ids = ['a', 'b', 'c', 'd'];
      picker.forEach((id, i) => {
        $(`#othername${ids[i]}`).attr("src", data[id].img);
        $(`#othername${ids[i]}_title`).html(data[id].title);
        $(`#othername${ids[i]}_tag`).html(data[id].tags);
        $(`#othername${ids[i]}_`).attr("template_view", id);
      });
    
      $("#template_discriptiom").show();
    }
    
    $(document).on("click", "[template_view]", function(){
      const id = +$(this).attr("template_view");
      const item = data[id];
      const picks = randomNums(data.length, 4, id);
    
      // Main content update
      $("#imgdis").attr("src", item.img);
      $("#title").text(item.title);
      $("#tags").text(item.tags);
      $("#description").text(item.discription);
      $("#link, #previewlinks").attr("href", item.link);
    
      // Other picks
      const others = [picks[0], picks[1], picks[2], picks[3]];
      ["a", "b", "c", "d"].forEach((key, idx) => {
        const d = data[others[idx]];
        $(`#othername${key}`).attr("src", d.img);
        $(`#othername${key}_title`).text(d.title);
        $(`#othername${key}_tag`).text(d.tags);
        $(`#othername${key}_`).attr("template_view", others[idx]);
      });
    
      $("#template_discriptiom").show();
    });
    
    
    $(document).on("click", "#closeempview", () => {
      $("#template_discriptiom").hide();
    });
    
    $(window).on("DOMContentLoaded", () => {
      renderCards();
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          $(`#tempboard${String.fromCharCode(97 + i)}`).attr("src", data[i].img);
          $(`#tempboard_title_${String.fromCharCode(97 + i)}`).text(data[i].title);
        }
      }, 700);
    });