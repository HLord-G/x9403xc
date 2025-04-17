import "./style/lordggripes_ds.css";
import { tempholder } from "./templates";







        let scriptHolder = "script"
        GrapesJsStudioSDK.createStudioEditor({
          root: '#studio',
          blocks: {
          default: tempholder()
          },

          project: {
            default: {
              type: 'web',

              custom: {
                  globalPageSettings: {
                    generator:"FlexBoy Studio",
                    title: 'FlexBoy Web Design',
                    description: 'FlexBoy description',
                    customCodeHead: `
 <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<${scriptHolder} src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></${scriptHolder}>
<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
<link href="https://flexboy.vercel.app/public_temp/sitebuilder.css" rel="stylesheet" type="text/css" />

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