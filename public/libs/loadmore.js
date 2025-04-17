// function loadmore(firstseen, loadcount) {
//   const items = document.querySelectorAll('.tempload');
//   const paginationWrapper = document.getElementById('numbersdivider');
//   const prevBtn = document.querySelector('#prev');
//   const nextBtn = document.querySelector('#next');
//   const totalPages = Math.ceil(items.length / loadcount);
//   let currentPage = 1;

//   function showPage(page) {
//       const start = (page - 1) * loadcount;
//       const end = start + loadcount;

//       items.forEach((item, index) => {
//           item.style.display = index >= start && index < end ? 'block' : 'none';
//       });

//       // Update active page button
//       [...paginationWrapper.children].forEach((btn, index) => {
//           if (btn.tagName === 'BUTTON') {
//               btn.classList.toggle('btn-active', (index + 1) === page);
//           }
//       });

//       // Disable Prev/Next if needed
//       prevBtn.disabled = currentPage === 1;
//       nextBtn.disabled = currentPage === totalPages;
//   }

//   function renderPagination() {
//       paginationWrapper.innerHTML = '';
//       for (let i = 1; i <= totalPages; i++) {
//           const btn = document.createElement('button');
//           btn.className = 'join-item btn' + (i === currentPage ? ' btn-active' : '');
//           btn.textContent = i;
//           btn.addEventListener('click', () => {
//               currentPage = i;
//               showPage(currentPage);
//           });
//           paginationWrapper.appendChild(btn);
//       }
//   }

//   // Prev and Next button events
//   prevBtn.addEventListener('click', () => {
//       if (currentPage > 1) {
//           currentPage--;
//           showPage(currentPage);
//       }
//   });

//   nextBtn.addEventListener('click', () => {
//       if (currentPage < totalPages) {
//           currentPage++;
//           showPage(currentPage);
//       }
//   });

//   // Init
//   renderPagination();
//   showPage(currentPage);
// }





let currentFilter = "all";

// FILTER FUNCTION
function filterTemplatesWithPagination(filter, firstseen, loadcount) {
    currentFilter = filter;

    const allTemplates = document.querySelectorAll(".template.tempload");

    allTemplates.forEach(template => {
        const tempName = template.querySelector(".temp_name")?.innerText.toLowerCase();
        const shouldShow = filter === "all" || tempName.includes(filter);

        template.style.display = shouldShow ? "block" : "none";
        template.dataset.filtered = shouldShow ? "true" : "false";
    });

    loadmore(firstseen, loadcount);
}

// EVENT BINDING SA FILTER BUTTONS
document.querySelectorAll("#selectiontoggle button").forEach(button => {
    button.addEventListener("click", () => {
        const selected = button.getAttribute("search");

        document.querySelectorAll("#selectiontoggle button").forEach(btn => {
            btn.classList.remove("btn-active");
        });
        button.classList.add("btn-active");

        filterTemplatesWithPagination(selected, 0, 5); // change 0 and 2 if you want different defaults
    });
});

function loadmore(firstseen, loadcount) {
    const items = Array.from(document.querySelectorAll('.tempload')).filter(item => item.dataset.filtered !== "false");
    const paginationWrapper = document.getElementById('numbersdivider');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    const totalPages = Math.ceil(items.length / loadcount);
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * loadcount;
        const end = start + loadcount;

        items.forEach((item, index) => {
            item.style.display = index >= start && index < end ? 'block' : 'none';
        });

        // Update active page button
        [...paginationWrapper.children].forEach((btn, index) => {
            if (btn.tagName === 'BUTTON') {
                btn.classList.toggle('btn-active', (index + 1) === page);
            }
        });

        // Disable Prev/Next if needed
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    function renderPagination() {
        paginationWrapper.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = 'join-item btn' + (i === currentPage ? ' btn-active' : '');
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
            });
            paginationWrapper.appendChild(btn);
        }
    }

    // Prev and Next button events
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    };

    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    };

    renderPagination();
    showPage(currentPage);
}


export { filterTemplatesWithPagination };
