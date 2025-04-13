import './style/style.css';
import './style/mytemps.css';
import {loadmore} from "./libs/loadmore.js"



  loadmore(3, 5); // First show 3, then load 2 more per click



  getDesign(".container_layout_a");
  function getDesign(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn("Element not found:", selector);
        return;
    }

    // Get HTML content
    const htmlContent = element.outerHTML;

    // Get all computed styles recursively
    function getComputedStyleRecursive(el) {
        const allStyles = new Map();

        function traverse(node) {
            const computed = window.getComputedStyle(node);
            const styles = {};
            for (let i = 0; i < computed.length; i++) {
                const prop = computed[i];
                styles[prop] = computed.getPropertyValue(prop);
            }
            allStyles.set(node, styles);

            for (const child of node.children) {
                traverse(child);
            }
        }

        traverse(el);
        return allStyles;
    }

    const computedStylesMap = getComputedStyleRecursive(element);

    // Format CSS for each element with unique selector path
    function getElementPath(el) {
        if (!el || el.tagName === "BODY") return "body";
        const index = [...el.parentNode.children].indexOf(el) + 1;
        return `${getElementPath(el.parentNode)} > ${el.tagName.toLowerCase()}:nth-child(${index})`;
    }

    let cssOutput = "";
    for (const [node, styles] of computedStylesMap.entries()) {
        const path = getElementPath(node);
        cssOutput += `${path} {\n`;
        for (const prop in styles) {
            cssOutput += `  ${prop}: ${styles[prop]};\n`;
        }
        cssOutput += `}\n\n`;
    }

    // Output HTML and CSS
    const design = {
        html: htmlContent,
        css: cssOutput
    };

    console.log("HTML Output:\n", design.html);
    console.log("CSS Output:\n", design.css);

    return design;
}













document.querySelectorAll('.tempload').forEach(tempholder => {
    const sample = tempholder.querySelector('iframe');
    const size1 = tempholder.querySelector('.size1');
    const size2 = tempholder.querySelector('.size2');
    const size3 = tempholder.querySelector('.size3');
  
    size1.addEventListener('click', () => {
      sample.style.width = '375px'; // Android
    });
  
    size2.addEventListener('click', () => {
      sample.style.width = '768px'; // Tablet
    });
  
    size3.addEventListener('click', () => {
      sample.style.width = '100%'; // Window
    });
  });