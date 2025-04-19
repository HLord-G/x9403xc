import "./style/lordggripes_ds.css";
import { tempholder } from "./templates";







        let scriptHolder = "script"

        
        GrapesJsStudioSDK.createStudioEditor({
          root: '#studio',
          blocks: {
          default: tempholder()
          },


          // plugins: [
          //   editor => {
          //     // ...
          //     // Add new custom component type to block manager
          //     editor.Blocks.add('card', {
          //       label: 'Card',
          //       category: 'My Components',
          //       media: '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>',
          //       content: '<div class="card"><img src="https://picsum.photos/seed/my-image/150/150"/><p>Content text here</p></div>'
          //     });
          //   }
          // ],


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
<link href="https://flexboy.vercel.app/public_temp/mytemps.css" rel="stylesheet" type="text/css" />

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


 



setTimeout(() => {
    console.clear()

}, 1000);



 