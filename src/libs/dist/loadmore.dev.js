"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadmore = loadmore;

function loadmore(firstseen, loadcount) {
  var items = document.querySelectorAll('.loaditem');
  var loadMoreBtn = document.getElementById('loadmore');
  var visibleCount = firstseen; // Hide all items first

  items.forEach(function (item, index) {
    item.style.display = index < firstseen ? 'block' : 'none';
  }); // Handle click event for Load More

  loadMoreBtn.addEventListener('click', function () {
    for (var i = visibleCount; i < visibleCount + loadcount && i < items.length; i++) {
      items[i].style.display = 'block';
    }

    visibleCount += loadcount; // If all items are shown, hide the Load More button

    if (visibleCount >= items.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
} // Call it like this:
//   loadmore(3, 2); // First show 3, then load 2 more per click