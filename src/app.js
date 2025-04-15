import './style/mytemps.css';
import './style/main.css';
import {filterTemplatesWithPagination} from "./libs/loadmore.js"
import './libs/animation.js';


// Initial Load (show all)
document.addEventListener("DOMContentLoaded", () => {
    filterTemplatesWithPagination("all", 0, 5); // change loadcount if needed
});

 





// document.querySelectorAll('.tempload').forEach(tempholder => {
//     const sample = tempholder.querySelector('.temp_displayer');
//     const size1 = tempholder.querySelector('.size1');
//     const size2 = tempholder.querySelector('.size2');
//     const size3 = tempholder.querySelector('.size3');
  
//     size1.addEventListener('click', () => {
//       sample.style.width = '375px'; // Android
//     });
  
//     size2.addEventListener('click', () => {
//       sample.style.width = '768px'; // Tablet
//     });
  
//     size3.addEventListener('click', () => {
//       sample.style.width = '100%'; // Window
//     });
//   });
  