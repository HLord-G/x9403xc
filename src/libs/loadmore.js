function loadmore(firstseen, loadcount) {
    const items = document.querySelectorAll('.tempload');
    const loadMoreBtn = document.getElementById('loadmore');
    let visibleCount = firstseen;
  
    // Hide all items first
    items.forEach((item, index) => {
      item.style.display = index < firstseen ? 'block' : 'none';
    });
  
    // Handle click event for Load More
    loadMoreBtn.addEventListener('click', () => {
      for (let i = visibleCount; i < visibleCount + loadcount && i < items.length; i++) {
        items[i].style.display = 'block';
      }
      visibleCount += loadcount;
  
      // If all items are shown, hide the Load More button
      if (visibleCount >= items.length) {
        loadMoreBtn.style.display = 'none';
      }
    });
  }
  
  // Call it like this:
//   loadmore(3, 2); // First show 3, then load 2 more per click

export {loadmore}