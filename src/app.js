 

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


GrapesJsStudioSDK.createStudioEditor({
  root: '#studio',
  blocks: {
  default: tempholder()
  },


  plugins: [
    StudioSdkPlugins_flexComponent.init({ /* Plugin options: https://app.grapesjs.com/docs-sdk/plugins/components/flex */ })
  ],


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
  onLoad: async () => [
    {
      id: 'template1',
      name: 'Template 1',
      data: {
        pages: [
          {
            name: 'Home',
            component: '<h1 class="title">Template 1</h1><style>.title { color: red; font-size: 10rem; text-align: center }</style>'
          },
          {
            name: 'About',
            component: '<h1 class="title">Template 1</h1><style>.title { color: red; font-size: 10rem; text-align: center }</style>'
          }
        ]
      }
    },
    {
      id: 'template2',
      name: 'Template 2',
      data: {
        pages: [
          { component: '<h1 class="title">Template 2</h1><style>.title { color: blue; font-size: 10rem; text-align: center }</style>' }
        ]
      }
    },
    {
      id: 'template3',
      name: 'Template 3',
      data: {
        pages: [
          { component: '<h1 class="title">Template 3</h1><style>.title { color: green; font-size: 10rem; text-align: center }</style>' }
        ]
      }
    },
    {
      id: 'template4',
      name: 'Template 4',
      data: {
        pages: [
          { component: '<h1 class="title">Template 4</h1><style>.title { color: violet; font-size: 10rem; text-align: center }</style>' }
        ]
      }
    },
  ]
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



/*
home
builder
*/ 

 
$(document).on("click", "#viewbuilder", ()=>{
    $("#home").hide()
    $("#bmc-wbtn").hide()
    $("#builder").css({
      "display":"flex"
    })
})


$(document).on("click", "#backhome", () => {
  $("#home").show()
  $("#bmc-wbtn").show()
  $("#builder").hide()
  
  // Scroll to top of the page
  $('html, body').animate({ scrollTop: 0 }) // 'slow' can be replaced with a number like 500 (ms)
})




// setTimeout(() => {
//     console.clear()
// }, 1000);






const scrollContainer = document.querySelector('.scroll-loop-container');
let isDown = false;
let startX;
let scrollLeft;

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
    const walk = (x - startX) * 1.5; // 1.5 = scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// For touch devices
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
    const walk = (x - startX) * 1.5;
    scrollContainer.scrollLeft = scrollLeft - walk;
});
 


window.addEventListener("load", function () {
  // Check kung ang URL hash kay #home
  if (window.location.hash === "#builder") {
    $("#home").hide()
    $("#bmc-wbtn").hide()
    $("#builder").css({
      "display":"flex"
    })
  }
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
