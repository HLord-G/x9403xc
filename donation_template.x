

__mfdhe3.push({
    id: 'template5', 
    name: 'Template 5', 
    data: {
        pages: [
        {
            name: 'index',
            component: `<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <title>TELA BORDS</title>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="robots" content="index,follow">
  <meta name="generator" content="FlexBoy Studio">
  <meta name="description" content="FlexBoy description"/>
  <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
  

  <style>* { box-sizing: border-box; } body {margin: 0;}</style>

  
  </head>
  <body data-theme="dark">
    
    <!--===================[] NAV SECTIONS []===================-->

    <style>
      .scale-in-ver-bottom{-webkit-animation:scale-in-ver-bottom .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-ver-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
        @-webkit-keyframes scale-in-ver-bottom{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes scale-in-ver-bottom{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}
      .scale-out-ver-bottom { -webkit-animation: scale-out-ver-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both; animation: scale-out-ver-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;}
        @-webkit-keyframes scale-out-ver-bottom {
          0% {
            -webkit-transform: scaleY(1);
                    transform: scaleY(1);
            -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
            opacity: 1;
          }
          100% {
            -webkit-transform: scaleY(0);
                    transform: scaleY(0);
            -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
            opacity: 1;
          }
        }
        @keyframes scale-out-ver-bottom {
          0% {
            -webkit-transform: scaleY(1);
                    transform: scaleY(1);
            -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
            opacity: 1;
          }
          100% {
            -webkit-transform: scaleY(0);
                    transform: scaleY(0);
            -webkit-transform-origin: 0% 100%;
                    transform-origin: 0% 100%;
            opacity: 1;
          }
        }

    </style>

    <nav class="fixed flex flex-row w-full p-[10px] py-[20px] transition duration-300 px-[50px] max-[666px]:px-[20px] z-[99] justify-between items-center"> <!-- bg-base-300  -->
      <div>
        <h1 class="font-black text-3xl"><a href="index.html">TELA BORDS</a></h1>
      </div>
      <div>
        <h1 menuview="true" class="text-2xl text-base-content cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </h1>
            <h1 menuclose="true" class="text-2xl text-base-content cursor-pointer hidden">
            
    <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </h1>
        </div>
        </nav>
        

        <aside navbar="true" class="fixed flex bg-base-300 flex-col top-0 left-0 overflow-hidden w-[0px] h-[0px] opacity-0 p-[10px] py-[20px] transition duration-300 px-[60px] max-[666px]:px-[20px] z-[90] justify-center items-start gap-[30px]">
            <a href="index.html"> 
            <h2 class="text-5xl">
                Home
            </h2> 
            </a>
            <a href="about.html"> 
            <h2 class="text-5xl">
                About
            </h2> 
            </a>
            <a href="blog.html"> 
            <h2 class="text-5xl">
                News
            </h2> 
            </a>
            <a href="contact.html"> 
            <h2 class="text-5xl">
                Contact
            </h2> 
            </a>
        </aside>


        <script>
        function trackScrollPosition() {
            window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if (scrollPos >= 100) {
                $('nav').addClass('bg-base-300');
            }else{
                $('nav').removeClass('bg-base-300');
            }
            });
        }
        
        // Tawga ang function para mo-register ang event listener
        trackScrollPosition();



        let menuact = false;

    const navbar = $('[navbar="true"]');
    const menuOpen = $('[menuview="true"]');
    const menuClose = $('[menuclose="true"]');

    $(document).on("click", '[menuview="true"]', function(e){
    e.preventDefault();
    if (menuact) return;
    menuact = true;

    menuOpen.hide();
    menuClose.show();

    navbar.removeClass('scale-out-ver-bottom w-[0px] h-[0px] opacity-0');
    navbar.addClass('w-full h-full opacity-1');

    setTimeout(() => {
        navbar.addClass('scale-in-ver-bottom');
    }, 100);

    // Set to false after animation is done
    setTimeout(() => {
        menuact = false;
    }, 700); // 600ms animation + 100ms buffer
    });


    $(document).on("click", '[menuclose="true"]', function(e){
    e.preventDefault();
    if (menuact) return;
    menuact = true;

    menuClose.hide();
    menuOpen.show();

    navbar.removeClass('scale-in-ver-bottom');
    navbar.addClass('scale-out-ver-bottom');

    setTimeout(() => {
        navbar.removeClass('w-full h-full opacity-1');
        navbar.addClass('w-[0px] h-[0px] opacity-0');
    }, 800); // match sa animation duration

    setTimeout(() => {
        menuact = false;
    }, 800); // 1000ms animation + buffer
    });

    </script>
    <!--===================[] NAV SECTIONS []===================-->
    


    <section class="flex flex-row p-[10px] justify-center items-center min-h-[100vh] max-[782px]:flex-col-reverse" style="background: #2d5433; background: radial-gradient(circle, rgba(45, 84, 51, 1) 25%, rgba(16, 23, 17, 1) 100%);">
        <div class="flex-1 py-[10px] px-[40px] max-[475px]:px-[20px] max-[782px]:my-[70px]"> 
            <h1 class="text-5xl font-bold my-[60px] max-[524px]:my-[20px] max-[1004px]:text-4xl">
              The Future of Marketing is Here. 
            </h1> 

            <p class="text-3xl mb-[40px] max-[1004px]:text-2xl">
                Precisely engineered digital solutions that eliminate sales funnel bottlenecks and boost revenue.
            </p>

            <button class="btn btn-lg rounded-2xl text-3xl max-[374px]:text-2xl font-bold text-base-content py-[10px] px-[40px] mask-r-to-180%"> 
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="currentColor"><path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg> Contact Us  </button>
        </div>
        <div class="flex-[1.45] max-[880px]:flex-1 min-h-[100vh] max-[413px]:min-h-[60vh] flex justify-center items-center">
            <img src="cube.png" class="object-cover object-center w-[70%] opacity-[.8] max-[782px]:w-[100%]" alt="">
        </div>
    </section>


    <section class="flex flex-row justify-center items-center min-h-[100vh] max-[716px]:min-h-[10vh] gap-[10px] p-[20px] my-[120px] max-[888px]:flex-col">
 
          <div class="grid grid-cols-3 grid-rows-4 gap-0 parent min-h-[100vh] w-[90vw] 
          max-[984px]:grid-cols-4 max-[984px]:grid-rows-3 
          max-[716px]:flex  max-[716px]:flex-col
          max-[370px]:w-full
          ">

            <div class="flex flex-col justify-between overflow-hidden items-center col-start-1 col-end-2 row-start-[1] min-h-[534px] row-end-[7] m-[10px] max-[984px]:col-start-1 max-[984px]:col-end-3 max-[984px]:row-start-[1] max-[984px]:row-end-[3] max-[716px]:col-start-1 max-[716px]:col-end-2 max-[716px]:row-start-1 max-[716px]:row-end-2 bg-base-300 px-[20px]">
              <h1 class="text-2xl p-[17px] mb-[10px]">
                <b>attack season mysterious took include</b> found pool chair date blew where hide factor children  
              </h1>

              <aside class="w-full min-h-[380px] max-[736px]:min-h-[280px] flex justify-center items-end">
                  <img src="https://dummyimage.com/337x400" class="object-cover rounded-tl-[10px] rounded-tr-[10px] object-center" alt="">
              </aside>
            </div>


            <div class="col-start-2 col-end-3 row-start-[1] min-h-[257px] max-[716px]:h-[150px] row-end-[3] m-[10px] max-[984px]:col-start-3 max-[984px]:col-end-5 max-[984px]:row-start-[1] max-[984px]:row-end-[2] max-[716px]:col-start-1 max-[716px]:col-end-2 max-[716px]:row-start-2 max-[716px]:row-end-3 bg-base-300 p-[20px] flex flex-col justify-around items-start">
              <div class="avatar avatar-placeholder">
                <div class="bg-neutral text-neutral-content w-20 rounded-full">
                  <span class="text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-airplane-engines" viewBox="0 0 16 16">
                      <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z"/>
                    </svg>
                  </span>
                </div>
              </div>

              <h1 class="text-2xl font-bold">
                Strategic Planning
              </h1>
               <p class="text-sm">
                answer gray facing himself belt border cabin blind twenty tiny us deeply drove rope matter swung rhythm rapidly movie base cover locate gain mostly
               </p>
            </div>

            <div class="col-start-3 col-end-4 row-start-[1] min-h-[257px] max-[716px]:h-[150px] row-end-[3] m-[10px] max-[984px]:col-start-3 max-[984px]:col-end-5 max-[984px]:row-start-[2] max-[984px]:row-end-[3] max-[716px]:col-start-1 max-[716px]:col-end-2 max-[716px]:row-start-3 max-[716px]:row-end-4 bg-base-300 p-[20px] flex flex-col justify-around items-start">
              <div class="avatar avatar-placeholder">
                <div class="bg-neutral text-neutral-content w-20 rounded-full">
                  <span class="text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                      <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                    </svg>
                  </span>
                </div>
              </div>
              <h1 class="text-2xl font-bold">Market Analysis</h1>
              <p class="text-sm">
                easier thousand vote language body secret list imagine women vapor well telephone nails this measure oil now handsome can built both thick everywhere fewer
              </p>
            </div>


            <div class="col-start-2 col-end-3 row-start-[3] min-h-[257px] max-[716px]:h-[150px] row-end-[5] m-[10px] max-[984px]:col-start-1 max-[984px]:col-end-3 max-[984px]:row-start-[3] max-[984px]:row-end-[4] max-[716px]:col-start-1 max-[716px]:col-end-2 max-[716px]:row-start-4 max-[716px]:row-end-5 bg-base-300 p-[20px] flex flex-col justify-around items-start">
              <div class="avatar avatar-placeholder">
                <div class="bg-neutral text-neutral-content w-20 rounded-full">
                  <span class="text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16">
                      <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
                    </svg>
                  </span>
                </div>
              </div>
              <h1 class="text-2xl font-bold">Development</h1>
              <p class="text-sm">
                store sport thou strike situation sky today stretch vast problem finger simply laugh dried something surrounded up breath hall me tea rich rope youth
              </p>
            </div>


            <div class="col-start-3 col-end-4 row-start-[3] min-h-[257px] max-[716px]:h-[150px] row-end-[5] m-[10px] max-[984px]:col-start-3 max-[984px]:col-end-5 max-[984px]:row-start-[3] max-[984px]:row-end-[4] max-[716px]:col-start-1 max-[716px]:col-end-2 max-[716px]:row-start-5 max-[716px]:row-end-6 bg-base-300 p-[20px] flex flex-col justify-around items-start">
              <div class="avatar avatar-placeholder">
                <div class="bg-neutral text-neutral-content w-20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-currency-bitcoin" viewBox="0 0 16 16">
                    <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927z"/>
                  </svg>
                  </span>
                </div>
              </div>
              <h1 class="text-2xl font-bold">Paid Media</h1>
              <p class="text-sm">
                cut making fireplace finest so wagon outline church cloth explain finally touch pleasure basic street variety coal soon crop wheat was folks curious movie
              </p>
            </div>
          </div>
    </section>


    <section class="min-h-[40vh]  my-[120px] flex flex-row justify-center gap-[20px] p-[20px] max-[425px]:p-[10px] items-center">
        <div class="w-[90vw] max-[425px]:w-full flex flex-row justify-center gap-[20px]  max-[425px]:p-[0px]  p-[20px] items-center max-[902px]:flex-col">
              <div class="flex-1 p-[20px] max-[902px]:w-full">
                 <p class="text-2xl">Enabling the progress of newly established companies.</p>
                  <button class="btn mt-[20px] bg-base-200 btn btn-lg rounded-2xl text-2xl font-bold text-base-content py-[10px] px-[40px]"> Work with us </button>
              </div>
            <div class="flex-2 max-[902px]:w-full">
              <div class="grid grid-cols-3 grid-rows-2 gap-0 max-[502px]:grid-cols-2 max-[502px]:grid-rows-3">
                <div class="col-start-1 text-[24px] font-bold px-[30px] card bg-base-300 row-start-1 col-end-2 row-end-2 flex flex-col justify-center items-center p-[20px] min-h-[120px] m-[5px] max-[502px]:col-start-1 max-[502px]:row-start-1 max-[502px]:col-end-2 max-[502px]:row-end-2">Gaisano</div>
                <div class="col-start-2 text-[24px] font-bold px-[30px] card bg-base-300 row-start-1 col-end-3 row-end-2 flex flex-col justify-center items-center p-[20px] min-h-[120px] m-[5px] max-[502px]:col-start-2 max-[502px]:row-start-1 max-[502px]:col-end-3 max-[502px]:row-end-2">Limkitkai</div>
                <div class="col-start-3 text-[24px] font-bold px-[30px] card bg-base-300 row-start-1 col-end-4 row-end-2 flex flex-col justify-center items-center p-[20px] min-h-[120px] m-[5px] max-[502px]:col-start-1 max-[502px]:row-start-2 max-[502px]:col-end-2 max-[502px]:row-end-3">Robinson</div>
                <div class="col-start-1 text-[24px] font-bold px-[30px] card bg-base-300 row-start-2 col-end-2 row-end-3 flex flex-col justify-center items-center p-[20px] min-h-[120px] m-[5px] max-[502px]:col-start-2 max-[502px]:row-start-2 max-[502px]:col-end-3 max-[502px]:row-end-3">SM</div>
                <div class="col-start-2 text-[24px] font-bold px-[30px] card bg-base-300 row-start-2 col-end-3 row-end-3 flex flex-col justify-center items-center p-[20px] min-h-[120px] m-[5px] max-[502px]:col-start-1 max-[502px]:row-start-3 max-[502px]:col-end-2 max-[502px]:row-end-4">Ayala</div>
                <div class="col-start-3 text-[24px] font-bold px-[30px] card bg-base-300 row-start-2 col-end-4 row-end-3 flex flex-col justify-center items-center p-[20px] min-h-[120px] m-[5px] max-[502px]:col-start-2 max-[502px]:row-start-3 max-[502px]:col-end-3 max-[502px]:row-end-4">Cogon</div>
              </div>
            </div>
        </div>
    </section>



    <section class="flex flex-col justify-center  items-center w-full mb-[120px]">
        <div class="text-center w-[90vw] my-[40px]">
            <h1 class="text-4xl font-bold mb-[10px]">Case study</h1>
            <p class="text-2xl">
              Authentic, tangible project with practical <i class="text-base-content/50">applications and real-world impact.</i>
            </p>
        </div>
        <div class="flex flex-row justify-center items-center min-h-[80vh] w-[70vw] max-[1058px]:w-[80vw]  max-[768px]:w-[90vw]">
          <div class="grid grid-cols-2 grid-rows-2  max-[508px]:flex max-[508px]:flex-col gap-8 w-full">
            <div class="col-start-1 row-start-1 min-h-[520px] overflow-hidden max-[1058px]:min-h-[420px] max-[768px]:min-h-[400px] max-[696px]:min-h-[300px] w-full max-[508px]:min-h-[430px] card relative">
                <img src="https://dummyimage.com/415x520" class="absolute object-cover object-center top-0 left-0 w-full h-full" alt="">
                <div class="absolute top-0 left-0 w-full h-full z-3 flex justify-center items-center">
                  <h1 class="text-4xl font-bold">
                      Harold
                  </h1>
                </div>
                <aside class="absolute bottom-[3%] left-0 px-[20px] z-5 flex flex-row justify-between items-center w-full max-[734px]:flex-col">
                    <div class="max-[734px]:mb-[10px]">
                      <h2 class="text-3xl">
                        limram
                      </h2>
                    </div>
                    <div>
                      <button class="btn px-[20px] py-[10px]">
                        View full project
                      </button>
                    </div>
                </aside>
            </div>
            <div class="col-start-2 row-start-1 min-h-[520px] overflow-hidden max-[1058px]:min-h-[420px] max-[768px]:min-h-[400px] max-[696px]:min-h-[300px] w-full max-[508px]:min-h-[430px] card relative">
                <img src="https://dummyimage.com/415x520" class="absolute object-cover object-center top-0 left-0 w-full h-full" alt="">
                <div class="absolute top-0 left-0 w-full h-full z-3 flex justify-center items-center">
                  <h1 class="text-4xl font-bold">
                      Harold
                  </h1>
                </div>
                <aside class="absolute bottom-[3%] left-0 px-[20px] z-5 flex flex-row justify-between items-center w-full max-[734px]:flex-col">
                    <div class="max-[734px]:mb-[10px]">
                      <h2 class="text-3xl">
                        limram
                      </h2>
                    </div>
                    <div>
                      <button class="btn px-[20px] py-[10px]">
                        View full project
                      </button>
                    </div>
                </aside>
            </div>
            <div class="col-start-1 row-start-2 min-h-[520px] overflow-hidden max-[1058px]:min-h-[420px] max-[768px]:min-h-[400px] max-[696px]:min-h-[300px] w-full max-[508px]:min-h-[430px] card relative">
                <img src="https://dummyimage.com/415x520" class="absolute object-cover object-center top-0 left-0 w-full h-full" alt="">
                <div class="absolute top-0 left-0 w-full h-full z-3 flex justify-center items-center">
                  <h1 class="text-4xl font-bold">
                      Harold
                  </h1>
                </div>
                <aside class="absolute bottom-[3%] left-0 px-[20px] z-5 flex flex-row justify-between items-center w-full max-[734px]:flex-col">
                    <div class="max-[734px]:mb-[10px]">
                      <h2 class="text-3xl">
                        limram
                      </h2>
                    </div>
                    <div>
                      <button class="btn px-[20px] py-[10px]">
                        View full project
                      </button>
                    </div>
                </aside>
            </div>
            <div class="col-start-2 row-start-2 min-h-[520px] overflow-hidden max-[1058px]:min-h-[420px] max-[768px]:min-h-[400px] max-[696px]:min-h-[300px] w-full max-[508px]:min-h-[430px] card relative">
                <img src="https://dummyimage.com/415x520" class="absolute object-cover object-center top-0 left-0 w-full h-full" alt="">
                <div class="absolute top-0 left-0 w-full h-full z-3 flex justify-center items-center">
                  <h1 class="text-4xl font-bold">
                      Harold
                  </h1>
                </div>
                <aside class="absolute bottom-[3%] left-0 px-[20px] z-5 flex flex-row justify-between items-center w-full max-[734px]:flex-col">
                    <div class="max-[734px]:mb-[10px]">
                      <h2 class="text-3xl">
                        limram
                      </h2>
                    </div>
                    <div>
                      <button class="btn px-[20px] py-[10px]">
                        View full project
                      </button>
                    </div>
                </aside>
            </div>
          </div>
          
        </div>
    </section>

 
    <!--=================[] Slides []=================-->
    <section class="mt-[20px] flex flex-row justify-center relative mb-[10px]">
      <h2 class="mb-[20px] w-[90vw] text-2xl text-base-content/60">
        A network of over 100 trusted clients around the world.
      </h2>
    </section>
    <section class="flex justify-center items-center w-full  mb-[120px]">

        <swiper-container flexboy_id="sliders" class="w-[90vw] max-[726px]:w-full"  slides-per-view="2" centered-slides="true" space-between="30" pagination="true"
        pagination-type="none" navigation="true"  loop="true">
        <swiper-slide class="bg-base-300 relative p-[10px] w-[480px] h-[370px] max-[726px]:min-w-[320px]"> 
            <div class="absolute gap-[10px] h-full w-full top-0 left-0 px-[30px] flex flex-col justify-around items-start p-[20px]">
              <h3></h3>
              <h1 class="text-4xl font-bold"> element</h1>
              <p class="text-lg">
                lonely funny percent on vertical extra box pay each fish ill double gradually very magnet distance blind whom happen minute number broke largest truth
              </p>
            </div>
        </swiper-slide>
        <swiper-slide class="bg-base-300 relative p-[10px] w-[480px] h-[370px] max-[726px]:min-w-[320px]"> 
            <div class="absolute gap-[10px] h-full w-full top-0 left-0 px-[30px] flex flex-col justify-around items-start p-[20px]">
              <h3></h3>
              <h1 class="text-4xl font-bold"> dozen</h1>
              <p class="text-lg">
                border zoo ability feature magic uncle fifth religious thirty straw wide lunch evidence depend knife possibly if powerful factor knew service purpose tiny stood
              </p>
            </div>
        </swiper-slide>
        <swiper-slide class="bg-base-300 relative p-[10px] w-[480px] h-[370px] max-[726px]:min-w-[320px]"> 
            <div class="absolute gap-[10px] h-full w-full top-0 left-0 px-[30px] flex flex-col justify-around items-start p-[20px]">
              <h3></h3>
              <h1 class="text-4xl font-bold"> report</h1>
              <p class="text-lg">
                powerful knew tribe salmon planet explain sale entirely after organization pan government cover directly cross additional gray dull size onto instead turn shop pictured
              </p>
            </div>
        </swiper-slide>
        <swiper-slide class="bg-base-300 relative p-[10px] w-[480px] h-[370px] max-[726px]:min-w-[320px]"> 
            <div class="absolute gap-[10px] h-full w-full top-0 left-0 px-[30px] flex flex-col justify-around items-start p-[20px]">
              <h3></h3>
              <h1 class="text-4xl font-bold"> managed</h1>
              <p class="text-lg">
                activity depth printed man walk young classroom brass song forward did itself nails brother funny us impossible milk ring like hair whom influence steam
              </p>
            </div>
        </swiper-slide>
      </swiper-container>

      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      <script>
            let alreadyAlerted = false;

            function checkScreenWidth() {
              if (!alreadyAlerted && window.innerWidth <= 557) {
                alreadyAlerted = true;
                $('[flexboy_id="sliders"]').attr("slides-per-view", "1");
                setTimeout(() => {
                  alreadyAlerted = false;
                }, 100);
              }else{
                alreadyAlerted = true;
                $('[flexboy_id="sliders"]').attr("slides-per-view", "2");
                setTimeout(() => {
                  alreadyAlerted = false;
                }, 100);
              }
            }

            window.addEventListener("load", checkScreenWidth);
      </script>
    </section>
    <!--=================[] Slides []=================-->


    <!--================[] FORM []================-->
    <style>
      .form_flexboy {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;

      .label_flexboy1 { grid-area: 1 / 1 / 2 / 2; }
      .label_flexboy2 { grid-area: 1 / 2 / 2 / 3; }
      .label_flexboy3 { grid-area: 2 / 1 / 3 / 2; }
      .label_flexboy4 { grid-area: 2 / 2 / 3 / 3; }
      .label_flexboy5 { grid-area: 3 / 1 / 4 / 3; }
      }

      @media(max-width:584px){
        .form_flexboy {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(5, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;

            .label_flexboy1 { grid-area: 1 / 1 / 2 / 2; }
            .label_flexboy2 { grid-area: 2 / 1 / 3 / 2; }
            .label_flexboy3 { grid-area: 3 / 1 / 4 / 3; }
            .label_flexboy4 { grid-area: 4 / 1 / 5 / 2; }
            .label_flexboy5 { grid-area: 5 / 1 / 6 / 2; }
          }
      }

      @media(max-width:425px){
        .z_zoom{
          zoom:.9;
        }
      }
    </style>
    <section class="mt-[20px] relative flex flex-col justify-center items-center mb-[120px]">
        <div class="flex flex-row justify-center items-start w-[90vw] min-h-[40vh] p-[30px] max-[506px]:p-[6px] bg-[#4d5959]">
            <div class="flex-2">

                <article class="my-[10px]">
                  <p class="text-3xl px-[20px]">
                    Get in touch today to receive our expert <span class="text-base-content/40">financial consultation.</span>
                  </p>
                </article>

                <div class="form_flexboy w-full p-[20px] max-[666px]:scale-[.9] max-[584px]:scale-[1] z_zoom">

                    <div class="label_flexboy1 p-[5px] m-[5px]">
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend text-lg">Full Name</legend>
                        <input type="text" class="input input-lg bg-transparent w-full " placeholder="Type here" />
                      </fieldset>
                    </div>

                    <div class="label_flexboy2 p-[5px] m-[5px]">
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend text-lg">Email</legend>
                        <input type="text" class="input input-lg bg-transparent w-full " placeholder="Type here" />
                      </fieldset>
                    </div>

                    <div class="label_flexboy3 p-[5px] m-[5px]">
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend text-lg">Phone</legend>
                        <input type="text" class="input input-lg bg-transparent w-full " placeholder="Type here" />
                      </fieldset>
                    </div>

                    <div class="label_flexboy4 p-[5px] m-[5px]">
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend text-lg">Schedule to receive call</legend>
                        <input type="text" class="input input-lg bg-transparent w-full " placeholder="Type here" />
                      </fieldset>
                    </div>

                    <div class="label_flexboy5 p-[5px] m-[5px]">
                      <fieldset class="fieldset">
                         <button class="btn btn-lg w-full">Contact us</button>
                      </fieldset>
                    </div>
                </div>
            </div>
            <div class="flex-1 max-[1026px]:hidden flex flex-col justify-center items-center relative">
              <img src="https://dummyimage.com/337x480" class="object-cover object-center absolute top-0 left-0 w-full h-[480px] border" alt="">
            </div>
        </div>
    </section>
    <!--================[] FORM []================-->

    <section class="flex flex-col justify-center items-center w-full my-[120px] mb-[120px]">
        <div class="mb-[25px] p-[10px]">
          <h1 class="text-3xl text-center font-black">
            Comprehensive guide to commonly <span class="text-base-content/40">asked questions.</span>
          </h1>
        </div>
        <div class="flex flex-row justify-center items-start gap-[40px] w-[90vw] flex-wrap">
            <div class="w-[310px] p-[10px]">
               <h1 class="text-2xl mb-[15px]">Ready to secure your future with estate planning?</h1>
               <p class="text-lg text-justify text-base-content/80">herself please chief mirror account yesterday smell breeze visit older right arm mental weak official whether taught shaking fireplace where wife audience friend trap</p>
            </div>
            <div class="w-[310px] p-[10px]">
               <h1 class="text-2xl mb-[15px]">Facing legal troubles? Wondering how we can help?</h1>
               <p class="text-lg text-justify text-base-content/80">be shelf nodded recent center finger natural heard crop atmosphere loss scared manner plant tank corn alike pattern mirror raw aid above thing planned</p>
            </div>
            <div class="w-[310px] p-[10px]">
               <h1 class="text-2xl mb-[15px]">Questions about your defense?</h1>
               <p class="text-lg text-justify text-base-content/80">tobacco dozen herd shoe curious later recent market factory length troops hit among student broad missing wall join machinery how cost place shorter brought</p>
            </div>
        </div>
    </section>


    <section class="bg-[#4d5959] w-full min-h-[100vh] py-[90px] px-[20px]">

      <article class="my-[90px] flex flex-row justify-center items-center">
        <h1 class="text-3xl text-center">
          Discover the latest tips, <span class="text-base-content/50">trends and ideas.</span>
        </h1>
      </article>

      <div class="flex flex-row justify-center items-start gap-[30px] flex-wrap" style="zoom:.8;">

        <a href="#">
          <aside class="p-[15px] card w-96 shadow-sm cursor-pointer">
            <figure>
              <img src="https://dummyimage.com/353x305" class="w-full rounded-2xl h-[305px]" alt="">
            </figure>
         
            <div class="gap-[16px] flex flex-col mt-[15px] p-[10px]">
              <a href="#"><span class="badge badge-xl mb-[10px]">Code</span></a>
              <h1 class="text-2xl font-bold">
                <a href="explain.html">Our design process explained</a>
              </h1>
              <p class="text-base-content/70">
                April 27, 2023
              </p>
            </div>
          </aside>
        </a>

        <a href="#">
          <aside class="p-[15px] card w-96 shadow-sm cursor-pointer">
            <figure>
              <img src="https://dummyimage.com/353x305" class="w-full rounded-2xl h-[305px]" alt="">
            </figure>
         
            <div class="gap-[16px] flex flex-col mt-[15px] p-[10px]">
              <a href="#"><span class="badge badge-xl mb-[10px]">Marketing</span></a>
              <h1 class="text-2xl font-bold">
                <a href="explain.html">A peek into our branding strategy</a>
              </h1>
              <p class="text-base-content/70">
                May 10, 2023
              </p>
            </div>
          </aside>
        </a>

          <aside class="p-[15px] card w-96 shadow-sm cursor-pointer">
            <figure>
              <img src="https://dummyimage.com/353x305" class="w-full rounded-2xl h-[305px]" alt="">
            </figure>
         
            <div class="gap-[16px] flex flex-col mt-[15px] p-[10px]">
              <a href="#"><span class="badge badge-xl mb-[10px]">Design</span></a>
              <h1 class="text-2xl font-bold">
               <a href="explain.html">
                Developing Seamless mobile apps
               </a>
              </h1>
              <p class="text-base-content/70">
                April 1, 2023
              </p>
            </div>
          </aside>
     
      </div>

    </section>

    <!--[]============= FOOTER SECTION =============[]-->
    <footer class="min-h-[40vh] p-[20px] py-[30px] flex flex-row max-[564px]:flex-col max-[564px]:mb-[60px]">
      <div class="flex-2"> 
          <div class="mb-[20px]">
          <button class="btn btn-lg rounded-2xl px-[20px]"> Visit us</button>
          </div>
          <div class="flex flex-row gap-[15px] px-[20px] flex-wrap">
              <aside class="p-[5px] w-[210px] relative">
                  <h1 class="link text-lg font-bold mb-[10px] text-base-content/60">Manila</h1>
                  <p class="text-sm">Intramuros, Manila, 1002 Metro Manila, Philippines.</p>
              </aside>
              <aside class="p-[5px] w-[210px] relative">
                  <h1 class="link text-lg font-bold mb-[10px] text-base-content/60">Mactan</h1>
                  <p class="text-sm">Lapu-Lapu City, Cebu, Philippines.</p>
              </aside>
              <aside class="p-[5px] w-[210px] relative">
                  <h1 class="link text-lg font-bold mb-[10px] text-base-content/60">Cagayan de Oro City</h1>
                  <p class="text-sm">041 San Roque Lapasan</p>
              </aside>
          </div> 
      </div>
      <div class="flex-1 max-[564px]:mt-[70px]"> 
          <div class="mb-[20px]">
          <button class="btn btn-lg rounded-2xl px-[20px]"> Stay in touch</button>
          </div>
          <div class="flex flex-col gap-[2px] justify-center items-start px-[20px] flex-wrap">
          <a href="#" class="btn btn-link m-[0px] p-[0px] text-base-content text-lg text-base-content/60">+639958548020</a>
          <a href="#" class="btn btn-link m-[0px] p-[0px] text-base-content text-lg text-base-content/60">gzmn.h10195@gmail.com</a>
          <div class="mt-[20px] flex flex-row justify-start gap-[20px] items-center w-[300px]">
              <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>
              </a>
              <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
              </a>
              <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
              </a>
              <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                      <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
                    </svg>
              </a>
          </div>
          </div> 
      </div>
    </footer>
    <footer class="flex flex-row justify-between items-center px-[30px] py-[20px] max-[763px]:flex-col">
    <div class="flex flex-row justify-center items-center text-center">
        <p>© This is a Masterthemes template powered by <a href="#" class="btn btn-link text-md text-base-content p-[0px] m-[0px] text-[15px]">Flexboy</a></p>
    </div>
    <div class="flex flex-row justify-center gap-[20px]"> 
        <a href="#" class="btn btn-link text-base-content text-[15px]">Style Guide</a>
        <a href="#" class="btn btn-link text-base-content text-[15px]">Image Licensing</a>
    </div>
    </footer>
    <!--[]============= FOOTER SECTION =============[]-->


  </body>
 
</html>
 `
        },
        {
            name: 'contact',
            component: `
            <!DOCTYPE html>
<html lang="en">
        <head>
            <title>TELA BORDS</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="index,follow">
        <meta name="generator" content="FlexBoy Studio">
        <meta name="description" content="FlexBoy description"/>
        <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
        
        <style>* { box-sizing: border-box; } body {margin: 0;}</style>

        
        </head>
        <body data-theme="dark">
            
            <!--===================[] NAV SECTIONS []===================-->
            <style>
            .scale-in-ver-bottom{-webkit-animation:scale-in-ver-bottom .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-ver-bottom .5s cubic-bezier(.25,.46,.45,.94) both}
                @-webkit-keyframes scale-in-ver-bottom{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}@keyframes scale-in-ver-bottom{0%{-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}100%{-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:0 100%;transform-origin:0 100%;opacity:1}}
            .scale-out-ver-bottom { -webkit-animation: scale-out-ver-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both; animation: scale-out-ver-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;}
                @-webkit-keyframes scale-out-ver-bottom {
                0% {
                    -webkit-transform: scaleY(1);
                            transform: scaleY(1);
                    -webkit-transform-origin: 0% 100%;
                            transform-origin: 0% 100%;
                    opacity: 1;
                }
                100% {
                    -webkit-transform: scaleY(0);
                            transform: scaleY(0);
                    -webkit-transform-origin: 0% 100%;
                            transform-origin: 0% 100%;
                    opacity: 1;
                }
                }
                @keyframes scale-out-ver-bottom {
                0% {
                    -webkit-transform: scaleY(1);
                            transform: scaleY(1);
                    -webkit-transform-origin: 0% 100%;
                            transform-origin: 0% 100%;
                    opacity: 1;
                }
                100% {
                    -webkit-transform: scaleY(0);
                            transform: scaleY(0);
                    -webkit-transform-origin: 0% 100%;
                            transform-origin: 0% 100%;
                    opacity: 1;
                }
                }

            </style>

            <nav class="fixed flex flex-row w-full p-[10px] py-[20px] transition duration-300 px-[50px] max-[666px]:px-[20px] z-[99] justify-between items-center"> <!-- bg-base-300  -->
            <div>
                <h1 class="font-black text-3xl"><a href="index.html">TELA BORDS</a></h1>
            </div>
            <div>
                <h1 menuview="true" class="text-2xl text-base-content cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </h1>
                <h1 menuclose="true" class="text-2xl text-base-content cursor-pointer hidden">
                
        <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </h1>
            </div>
            </nav>

            <aside navbar="true" class="fixed flex bg-base-300 flex-col top-0 left-0 overflow-hidden w-[0px] h-[0px] opacity-0 p-[10px] py-[20px] transition duration-300 px-[60px] max-[666px]:px-[20px] z-[90] justify-center items-start gap-[30px]">
                <a href="index.html"> 
                <h2 class="text-5xl">
                    Home
                </h2> 
                </a>
                <a href="about.html"> 
                <h2 class="text-5xl">
                    About
                </h2> 
                </a>
                <a href="blog.html"> 
                <h2 class="text-5xl">
                    News
                </h2> 
                </a>
                <a href="contact.html"> 
                <h2 class="text-5xl">
                    Contact
                </h2> 
                </a>
            </aside>

            <script>
            function trackScrollPosition() {
                window.addEventListener('scroll', () => {
                const scrollPos = window.scrollY;
                if (scrollPos >= 100) {
                    $('nav').addClass('bg-base-300');
                }else{
                    $('nav').removeClass('bg-base-300');
                }
                });
            }
            
            // Tawga ang function para mo-register ang event listener
            trackScrollPosition();



            let menuact = false;

        const navbar = $('[navbar="true"]');
        const menuOpen = $('[menuview="true"]');
        const menuClose = $('[menuclose="true"]');

        $(document).on("click", '[menuview="true"]', function(e){
        e.preventDefault();
        if (menuact) return;
        menuact = true;

        menuOpen.hide();
        menuClose.show();

        navbar.removeClass('scale-out-ver-bottom w-[0px] h-[0px] opacity-0');
        navbar.addClass('w-full h-full opacity-1');

        setTimeout(() => {
            navbar.addClass('scale-in-ver-bottom');
        }, 100);

        // Set to false after animation is done
        setTimeout(() => {
            menuact = false;
        }, 700); // 600ms animation + 100ms buffer
        });


        $(document).on("click", '[menuclose="true"]', function(e){
        e.preventDefault();
        if (menuact) return;
        menuact = true;

        menuClose.hide();
        menuOpen.show();

        navbar.removeClass('scale-in-ver-bottom');
        navbar.addClass('scale-out-ver-bottom');

        setTimeout(() => {
            navbar.removeClass('w-full h-full opacity-1');
            navbar.addClass('w-[0px] h-[0px] opacity-0');
        }, 800); // match sa animation duration

        setTimeout(() => {
            menuact = false;
        }, 800); // 1000ms animation + buffer
        });

            </script>
            <!--===================[] NAV SECTIONS []===================-->
            





    <section class="min-h-[100vh] w-full flex flex-col justify-start items-center mb-[80px]">

        <main class=" w-[90vw] flex flex-col justify-start items-center">
            <div class="mt-[130px] mb-[120px]">
           
                <h1 class="text-6xl font-bold w-full text-center max-[670px]:text-5xl">
                    Stay in <span class="text-base-content/60">touch</span>
                </h1>
            </div>
    

                <!--================[] FORM []================-->
    <style>
        .form_flexboy {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
  
        .label_flexboy1 { grid-area: 1 / 1 / 2 / 2; }
        .label_flexboy2 { grid-area: 1 / 2 / 2 / 3; }
        .label_flexboy3 { grid-area: 2 / 1 / 3 / 2; }
        .label_flexboy4 { grid-area: 2 / 2 / 3 / 3; }
        .label_flexboy5 { grid-area: 3 / 1 / 4 / 3; }
        }
  
        @media(max-width:584px){
          .form_flexboy {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: repeat(5, 1fr);
              grid-column-gap: 0px;
              grid-row-gap: 0px;
  
              .label_flexboy1 { grid-area: 1 / 1 / 2 / 2; }
              .label_flexboy2 { grid-area: 2 / 1 / 3 / 2; }
              .label_flexboy3 { grid-area: 3 / 1 / 4 / 3; }
              .label_flexboy4 { grid-area: 4 / 1 / 5 / 2; }
              .label_flexboy5 { grid-area: 5 / 1 / 6 / 2; }
            }
        }
  
        @media(max-width:425px){
          .z_zoom{
            zoom:.9;
          }
        }
      </style>
      <section class="mt-[20px] relative flex flex-col justify-center items-center mb-[120px]">
          <div class="flex flex-row justify-center items-start w-[90vw] min-h-[40vh] p-[30px] max-[506px]:p-[6px] bg-[#4d5959]">
              <div class="flex-2">
  
                  <article class="my-[10px]">
                    <p class="text-3xl px-[20px]">
                      Get in touch today to receive our expert <span class="text-base-content/40">financial consultation.</span>
                    </p>
                  </article>
  
                  <div class="form_flexboy w-full p-[20px] max-[666px]:scale-[.9] max-[584px]:scale-[1] z_zoom">
  
                      <div class="label_flexboy1 p-[5px] m-[5px]">
                        <fieldset class="fieldset">
                          <legend class="fieldset-legend text-lg">Full Name</legend>
                          <input type="text" class="input input-lg bg-transparent w-full " placeholder="Type here" />
                        </fieldset>
                      </div>
  
                      <div class="label_flexboy2 p-[5px] m-[5px]">
                        <fieldset class="fieldset">
                          <legend class="fieldset-legend text-lg">Email</legend>
                          <input type="text" class="input input-lg bg-transparent w-full " placeholder="Type here" />
                        </fieldset>
                      </div>
  
                      <div class="label_flexboy3 p-[5px] m-[5px]">
                        <fieldset class="fieldset">
                          <legend class="fieldset-legend text-lg">Phone</legend>
                          <input type="text" class="input input-lg bg-transparent w-full " placeholder="Type here" />
                        </fieldset>
                      </div>
  
                      <div class="label_flexboy4 p-[5px] m-[5px]">
                        <fieldset class="fieldset">
                          <legend class="fieldset-legend text-lg">Schedule to receive call</legend>
                          <input type="text" class="input input-lg bg-transparent w-full " placeholder="Type here" />
                        </fieldset>
                      </div>
  
                      <div class="label_flexboy5 p-[5px] m-[5px]">
                        <fieldset class="fieldset">
                           <button class="btn btn-lg w-full">Contact us</button>
                        </fieldset>
                      </div>
                  </div>
              </div>
              <div class="flex-1 max-[1026px]:hidden flex flex-col justify-center items-center relative">
                <img src="https://dummyimage.com/337x480" class="object-cover object-center absolute top-0 left-0 w-full h-[480px] border" alt="">
              </div>
          </div>
      </section>
      <!--================[] FORM []================-->
  
      <section class="flex flex-col justify-center items-center w-full my-[20px] mb-[120px]">
          <div class="mb-[25px] p-[10px]">
            <h1 class="text-3xl text-center font-black">
              Comprehensive guide to commonly <span class="text-base-content/40">asked questions.</span>
            </h1>
          </div>
          <div class="flex flex-row justify-center items-start gap-[40px] w-[90vw] flex-wrap">
              <div class="w-[310px] p-[10px]">
                 <h1 class="text-2xl mb-[15px]">Ready to secure your future with estate planning?</h1>
                 <p class="text-lg text-justify text-base-content/80">herself please chief mirror account yesterday smell breeze visit older right arm mental weak official whether taught shaking fireplace where wife audience friend trap</p>
              </div>
              <div class="w-[310px] p-[10px]">
                 <h1 class="text-2xl mb-[15px]">Facing legal troubles? Wondering how we can help?</h1>
                 <p class="text-lg text-justify text-base-content/80">be shelf nodded recent center finger natural heard crop atmosphere loss scared manner plant tank corn alike pattern mirror raw aid above thing planned</p>
              </div>
              <div class="w-[310px] p-[10px]">
                 <h1 class="text-2xl mb-[15px]">Questions about your defense?</h1>
                 <p class="text-lg text-justify text-base-content/80">tobacco dozen herd shoe curious later recent market factory length troops hit among student broad missing wall join machinery how cost place shorter brought</p>
              </div>
          </div>
      </section>
            
    </section>



    <!--[]============= FOOTER SECTION =============[]-->
    <footer class="min-h-[40vh] p-[20px] py-[30px] flex flex-row max-[564px]:flex-col max-[564px]:mb-[60px]">
    <div class="flex-2"> 
        <div class="mb-[20px]">
        <button class="btn btn-lg rounded-2xl px-[20px]"> Visit us</button>
        </div>
        <div class="flex flex-row gap-[15px] px-[20px] flex-wrap">
            <aside class="p-[5px] w-[210px] relative">
                <h1 class="link text-lg font-bold mb-[10px] text-base-content/60">Manila</h1>
                <p class="text-sm">Intramuros, Manila, 1002 Metro Manila, Philippines.</p>
            </aside>
            <aside class="p-[5px] w-[210px] relative">
                <h1 class="link text-lg font-bold mb-[10px] text-base-content/60">Mactan</h1>
                <p class="text-sm">Lapu-Lapu City, Cebu, Philippines.</p>
            </aside>
            <aside class="p-[5px] w-[210px] relative">
                <h1 class="link text-lg font-bold mb-[10px] text-base-content/60">Cagayan de Oro City</h1>
                <p class="text-sm">041 San Roque Lapasan</p>
            </aside>
        </div> 
    </div>
    <div class="flex-1 max-[564px]:mt-[70px]"> 
        <div class="mb-[20px]">
        <button class="btn btn-lg rounded-2xl px-[20px]"> Stay in touch</button>
        </div>
        <div class="flex flex-col gap-[2px] justify-center items-start px-[20px] flex-wrap">
        <a href="#" class="btn btn-link m-[0px] p-[0px] text-base-content text-lg text-base-content/60">+639958548020</a>
        <a href="#" class="btn btn-link m-[0px] p-[0px] text-base-content text-lg text-base-content/60">gzmn.h10195@gmail.com</a>
        <div class="mt-[20px] flex flex-row justify-start gap-[20px] items-center w-[300px]">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                    <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
                  </svg>
            </a>
        </div>
        </div> 
    </div>
    </footer>
    <footer class="flex flex-row justify-between items-center px-[30px] py-[20px] max-[763px]:flex-col">
    <div class="flex flex-row justify-center items-center text-center">
        <p>© This is a Masterthemes template powered by <a href="#" class="btn btn-link text-md text-base-content p-[0px] m-[0px] text-[15px]">Flexboy</a></p>
    </div>
    <div class="flex flex-row justify-center gap-[20px]"> 
        <a href="#" class="btn btn-link text-base-content text-[15px]">Style Guide</a>
        <a href="#" class="btn btn-link text-base-content text-[15px]">Image Licensing</a>
    </div>
    </footer>
    <!--[]============= FOOTER SECTION =============[]-->

  </body>
</html>
            `
        },

        ]
    }
});