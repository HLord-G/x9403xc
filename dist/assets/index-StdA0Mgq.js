(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=()=>[{id:"section-1",label:"Full block",category:"Sections",media:'<svg viewBox="0 0 24 24"><path d="M21 3H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1m0 10H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1Z"/></svg>',content:`<section class="bg-base-300 p-[20px]">
              Simple section
              <h1> sdfgdsfgsdrgdsrg </h1>
              </section>`,attributes:{class:"custom-class"}},{id:"my-block-section-html",label:"Section A",category:"Sections",media:'<svg viewBox="0 0 24 24"><path d="M21 3H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1m0 10H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1Z"/></svg>',content:` 
                <section id="section_041725_a" class="min-h-[80px] flex fex-row w-full max-[919px]:flex-col">
    
    <div class="flex-1 min-h-[100vh] flex flex-row justify-center items-center p-[10px] pr-[5px]  max-[919px]:pr-[10px] max-[919px]:pb-[5px]">
        <div class="w-full min-h-[100vh] bg-base-300 rounded-[15px] p-[10px] flex flex-col relative">
            <img 
            class="h-full w-full z-[1px] absolute rounded-[15px] top-0 left-0 border"
            src="https://images.pexels.com/photos/7144714/pexels-photo-7144714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" >
            <div class="px-[20px] pt-[20px] z-[2px] relative">
                <span class="text-base-300">MORE OFFERS</span>
                <h1 class="text-5xl text-base-300 font-simibold">There is something elese for you</h1>
            </div>
            <div>
                SDFSEFsdf
            </div>
        </div>
    </div>
    
    
    <div class="flex-1 p-[10px] min-h-[100vh] pl-[5px] flex flex-col gap-[10px] max-[919px]:pl-[10px] max-[919px]:pt-[5px]">
    
        <div class="w-full flex-1 h-full rounded-[15px] bg-base-200 p-[10px]">
            <div></div>
            <div></div>
        </div>
    
        <div class="w-full flex-1 h-full flex flex-row gap-[10px] max-[471px]:flex-col">
    
            <div class="flex-1 border p-[10px] rounded-[15px] bg-info">
                Lorem ipsum dolor sit amet.
            </div>
            <div class="flex-1 border p-[10px] rounded-[15px] bg-warning">
                Lorem ipsum dolor sit amet.
            </div>
    
        </div>
    
    </div>
    
    </section>
            `}];let i="script";GrapesJsStudioSDK.createStudioEditor({root:"#studio",blocks:{default:c()},project:{default:{type:"web",custom:{globalPageSettings:{generator:"FlexBoy Studio",title:"FlexBoy Web Design",description:"FlexBoy description",customCodeHead:`
 <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<${i} src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></${i}>
<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
                    `}},pages:[{name:"index",component:`<h1 class="p-[2rem] text-center">
                    Hello Welcome to FlexBoy Web Design 👋 
                  </h1>`,styles:"#comp3 { color: blue }"}]}}});setTimeout(()=>{console.clear()},1e3);
