 

let timeoutID;
 
function startInactivityTimer() {
  clearTimeout(timeoutID); // Reset the timer if naay movement

 
  timeoutID = setTimeout(() => {
    document.getElementById("popupdialog").style.display = "block";
  }, 60000); // 3 minutes = 180000 milliseconds
}
// 120000
// Mo-reset siya every time naay mouse movement
document.addEventListener("mousemove", startInactivityTimer);

// Initial call to start tracking inactivity
startInactivityTimer();

// Close button logic
document.getElementById("popupclosediag").addEventListener("click", () => {
  document.getElementById("popupdialog").style.display = "none";
  startInactivityTimer(); // Resume watching for inactivity
});






let scriptHolder = "script"

try {
  GrapesJsStudioSDK.createStudioEditor({
    root: '#studio',
    blocks: {
    default: _xx947xfee_()
    },
  
    layout: {
      default: {
        type: 'row',
        style: { height: '100%' },
        children: [
          {
            type: 'sidebarLeft',
            children: {
              type: 'tabs',
              value: 'blocks',
              tabs: [
                {
                  id: 'pages',
                  label: '🗃️',
                  children: {    
                  media: '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>',
  
                    type: 'panelPages', style: { height: '100%' } },
                },
                {
                  id: 'layers',
                  label: '⚙️',
                  children: { type: 'panelLayers', style: { height: '100%' } },
                },
                {
                  id: 'blocks',
                  label: '🧩',
                  children: { type: 'panelBlocks', style: { height: '100%' } },
                },
                {
                  id: 'template',
                  label: '🎨',
                  
                  children: { type: 'panelTemplates', style: { height: '100%', padding:"20px 5px" },
                  content: { itemsPerRow: 1 },
                  },
                },
                
  
                // panelTemplates
              ],
            },
          },
          {
            type: 'canvasSidebarTop',
            sidebarTop: { leftContainer: { buttons: [] } },
          },
          {
            type: 'sidebarRight',
            children: {
              type: 'tabs',
              value: 'styles',
              tabs: [
                {
                  id: 'styles',
                  label: 'Styles',
                  children: {
                    type: 'column',
                    style: { height: '100%' },
                    children: [
                      { type: 'panelSelectors', style: { padding: 5 } },
                      { type: 'panelStyles' },
                    ],
                  },
                },
                {
                  id: 'props',
                  label: 'Properties',
                  children: { type: 'panelProperties', style: { padding: 5, height: '100%' } },
                },
                {
                  id: 'custom',
                  label: 'Custom',
                  children: ['New custom tab'],
                },
              ],
            },
          },
        ],
      },
  },
  
  
  
  
  templates: {
    layout: {
      type: 'panelTemplates',
      content: { itemsPerRow: 2 },
  
    },
    // The onLoad can be an asyncronous function, so you can fetch templates from your API
    onLoad: async () => x_fu33fd_x()
  },
  
  
  
    project: {
      type: 'web',
  
      default: {
        custom: {
            globalPageSettings: {
              generator:"FlexBoy Studio",
              title: 'FlexBoy Web Design',
              description: 'FlexBoy description',
              customCodeHead: `
      <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
      <${scriptHolder} src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></${scriptHolder}>
      <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
      <${scriptHolder} src="https://code.jquery.com/jquery-3.7.1.js"></${scriptHolder}>
      <${scriptHolder} src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></${scriptHolder}>
      <${scriptHolder} src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></${scriptHolder}>
      <${scriptHolder} src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></${scriptHolder}>
              `,
              // customCodeBody: '<div>de</div>',
            }
          },
  
  
        pages: [
          {
            name: 'index',
            component: `<h1 class="p-[2rem] text-center">
              Hello Welcome to FlexBoy Web Design 👋 
            </h1>`,
            styles: '#comp3 { color: blue }',
          } 
        ],
      },
    }
  });
} catch (error) {
  location.reload();
}


 










/*
home
builder
*/ 


let builder_click = 0
 let clickonce = false
$(document).on("click", "#viewbuilder", ()=>{
  if (!clickonce) {
    clickonce = !clickonce
    builder_click +=1
    $("#home").hide()
    $("#bmc-wbtn").hide()
    $("#builder").css({
      "visibility":"visible"
    })
  
      if(builder_click >= 2){
        // localStorage.clear();
        builder_click =1
        location.reload();
  
        setTimeout(() => {
              $("#home").hide()
              $("#bmc-wbtn").hide()
              $("#builder").css({
                "visibility":"visible"
              })
        }, 200);
  
      }

      setTimeout(() => {
        clickonce = !clickonce
      }, 100);
  }
})


$(document).on("click", "#backhome", () => {
  setTimeout(() => {
    builder_click -=1

  $("#home").show()
  $("#bmc-wbtn").show()
  $("#builder").css({
    "visibility":"hidden"
  })
  
  // Scroll to top of the page
  $('html, body').animate({ scrollTop: 0 }) // 'slow' can be replaced with a number like 500 (ms)
  }, 200);
})




// setTimeout(() => {
//     console.clear()
// }, 1000);






const scrollContainer = document.querySelector('.scroll-loop-container');
let isDown = false;
let startX;
let scrollLeft;

// Drag to scroll (mouse)
scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * .5; // adjust scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Touch to scroll (mobile)
scrollContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('touchend', () => {
    isDown = false;
});

scrollContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * .5;
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Horizontal scroll using mouse wheel
scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault(); // block default vertical scroll
    scrollContainer.scrollLeft += e.deltaY; // scroll sideways instead
}, { passive: false });

 



window.addEventListener("load", function () {
  // Check kung ang URL hash kay #home
  // if (window.location.hash === "#builder") {

  //   // localStorage.clear();


  //   setTimeout(() => {
  //     $("#home").hide()
  //     $("#bmc-wbtn").hide()
  //     $("#builder").css({
  //       "visibility":"visible"
  //     })
  //   }, 100);
  // }
});







function isFullScreen() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
}

// Example usage
if (isFullScreen()) {
  $("#jdh38d").hide()
} else {
  $("#jdh38d").show()
}


/*
jdh38d
hideads
*/ 

let adshide = false
$(document).on("click", "#hideads", function () {
  const $target = $("#jdh38d");
  const isVisible = $target.is(":visible");

  if (isVisible) {
    adshide= true
    $target.hide();
    $(this).text("Show Ads");
  } else {
    adshide = false
    $target.show();
    $(this).text("Hide Ads");
  }
});

// You can also listen to the fullscreen change event
document.addEventListener('fullscreenchange', function() {
  if (isFullScreen()) {
       $("#jdh38d").hide()
  } else {
    if (!adshide) {
      $("#jdh38d").show()
    }
  }
});



 
$(document).on("click", "#disqusms", function () {
  const $chat = $("#disquschat");
  $chat.removeClass("slide-out").show().addClass("slide-in");
});


$(document).on("click", "#viewchats", function () {
  const $chat = $("#disquschat");
  $chat.removeClass("slide-out").show().addClass("slide-in");
});


function closeChat() {
  const $chat = $("#disquschat");
  $chat.removeClass("slide-in").addClass("slide-out");
  setTimeout(() => {
    $chat.hide();
  }, 300); // same duration as animation
}

$(document).on("click", "#closechat", function () {
  closeChat() 
});


// When clicking the close button
$(document).on("click", "#closechat", closeChat);

// When pressing the ESC key
$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    closeChat();
  }
});



// about

$(document).on("click", ".about", function () {
  let aboutMe = $("#aboutme");

  if (aboutMe.hasClass("hidden")) {
    $("body").css({
      "overflow":"hidden"
    })
      aboutMe
          .removeClass("hidden")
          .css({ position: "fixed", left: "-100%", top: "0" }) // initial offscreen
          .animate({ left: "0" }, 300); // slide in
  } else {
      aboutMe
          .animate({ left: "-100%" }, 300, function() {
              aboutMe.addClass("hidden").css("left", "0"); // hide after slide out
          });
          $("body").css({
            "overflow":"auto"
          })
      }
});




$(document).on("click", ".term", function () {
  let termme = $("#termsme");

  if (termme.hasClass("hidden")) {
    $("body").css({
      "overflow":"hidden"
    })
      termme
          .removeClass("hidden")
          .css({ position: "fixed", left: "-100%", top: "0" }) // initial offscreen
          .animate({ left: "0" }, 300); // slide in
  } else {
      termme
          .animate({ left: "-100%" }, 300, function() {
              termme.addClass("hidden").css("left", "0"); // hide after slide out
          });
          $("body").css({
            "overflow":"auto"
          })
      }
});




$(document).on("click", ".privacy", function () {
  let privacy = $("#privacyme");

  if (privacy.hasClass("hidden")) {
    $("body").css({
      "overflow":"hidden"
    })
      privacy
          .removeClass("hidden")
          .css({ position: "fixed", left: "-100%", top: "0" }) // initial offscreen
          .animate({ left: "0" }, 300); // slide in
  } else {
      privacy
          .animate({ left: "-100%" }, 300, function() {
              privacy.addClass("hidden").css("left", "0"); // hide after slide out
          });
          $("body").css({
            "overflow":"auto"
          })
      }
});




// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault(); // Required for some browsers
//   e.returnValue = 'Sure ka? Ma-reload ang page, basin mawala imong mga changes.';
// });















let previewWindow = null;

$(document).on("click", "#previewcode", function() {
  let iframe = document.querySelector("iframe.gjs-frame");
  let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Kuhaon nato ang current document as clone para pwede nato ma-edit
  let fullDoc = iframeDoc.documentElement.cloneNode(true);

  // I-access ang <head> sa document
  let head = fullDoc.querySelector("head");

  // I-append nato ang custom meta tags ug title
  head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlexBoy Web Builder</title>
  ` + head.innerHTML; // i-append before existing head contents

  // Konvert nato balik sa outerHTML ang full document
  let updatedHTML = '<!DOCTYPE html>\n' + fullDoc.outerHTML;

  // I-check kung wala pa gi-open or na-close ang preview window
  if (previewWindow == null || previewWindow.closed) {
    previewWindow = window.open("", "gjsPreviewWindow");
  } else {
    previewWindow.focus();
  }

  // I-display ang updated HTML
  previewWindow.document.open();
  previewWindow.document.write(updatedHTML);
  previewWindow.document.close();
});


// Kuhaa ang tanan buttons sulod sa toolbar gamit jQuery


const targetNode = document.getElementById('studio');

if (targetNode) {
  const observer = new MutationObserver((mutationsList, observer) => {
      if (targetNode.innerHTML.trim() !== '') {
          observer.disconnect(); // stop observing

          // Run your code here
         
          setTimeout(() => {
            $(".gs-cmp-topbar-right").append(`<button id="previewcode" style="margin-left:10px; margin-right:10px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
</svg></button>`);

          let $buttons = $('.gs-cmp-topbar-right .gs-cmp-tooltip button');
          $buttons.eq(6).css({
              "display":"none"
          })
          $buttons.eq(1).css({
            "display":"none"
          })



          // if ($saveButton.length) {
          //     $saveButton.on('click', function () {
          //         console.log("Save button clicked!");
          //         alert("Data Saved Successfully!");
          //     });
          // } else {
          //     console.error("Save button not found");
          // }
          }, 1000);

      }
  });

  observer.observe(targetNode, { childList: true, subtree: true });
}