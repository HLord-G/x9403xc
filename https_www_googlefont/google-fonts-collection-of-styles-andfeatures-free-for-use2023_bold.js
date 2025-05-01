/*
Google Fonts offers bold font styles that help emphasize important text and improve readability. 
Bold fonts are useful for headings, buttons, and calls to action, making your content stand out. 
With just a few lines of code, you can easily load bold weights from the font family you choose.
© 2023 Google Fonts – Free and open-source for personal and commercial use.
*/ 

let  __mfdhe3 = [
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
          { component: ` 
<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    
    
    <title>Freamfy Studio</title>

 
  </head>
  <body class="overflow-x-hidden">

   <nav class="p-[10px] flex flex-flow justify-between items-center mb-[45px]">
        <div>
            <h4 class=" text-2xl px-[20px] font-bold font-sans">
                Studio Freamfy®
            </h4>
        </div>
        <div class="flex flex-row gap-x-[30px] px-[20px] text-lg max-[768px]:hidden">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
        </div>
   </nav>



   <section class="w-full mb-[22px]">
    <h1 animatiomotion="headertitled" class="opacity-0 text-full px-[40px] whitespace-nowrap font-bold leading-none tracking-tight text-left text-9xl max-[514px]:px-[20px] max-[994px]:text-8xl max-[442px]:text-7xl max-[337px]:text-6xl">
        Freamfy®
      </h1>
   </section>
 


   <section class="mb-[80px] min-h-[40vh] px-[40px] max-[514px]:px-[20px]">
        <h3 animatiomotion="subtitles_06785" class="opacity-0 mb-[50px] text-3xl max-[622px]:text-2xl max-[514px]:text-lg max-[368px]:text-[15px]">
            A design studio crafting timeless <span class="italic font-mono font-semibold">Design</span>
        </h3>


        <div class="mb-[80px] flex flex-row gap-[20px] max-[469px]:gap-[10px]">
            <div class="overflow-hidden shadow-2xl flex-2 h-[370px] max-[691px]:h-[320px] max-[639px]:h-[285px] max-[469px]:h-[200px] max-[769px]:flex-1">
                <img animatiomotion="imagefron_fsefdsl" class="opacity-0 object-center max-[708px]:object-center object-cover h-full w-full" src="https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
            <div class="overflow-hidden shadow-2xl flex-1 h-[370px] max-[691px]:h-[320px] max-[639px]:h-[285px] max-[469px]:h-[200px] max-[769px]:flex-1">
                <img animatiomotion="imagefron_fsefdsr" class="opacity-0 object-center object-cover h-full w-full" src="https://images.pexels.com/photos/7709017/pexels-photo-7709017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
        </div>

        <article class="text-5xl max-[530px]:text-3xl max-[425px]:text-2xl">
            <p class="max-w-[500px] font-semibold font-sans italic indent-[20px] ml-[50px]  max-[530px]:ml-[10px]">
                Where brand stories meet sleek, timeless identity design.
            </p>
        </article>
   </section>


   <section animatiomotion="selectionshovers" class="mb-[130px] min-h-[40vh] p-[20px] flex flex-row your-section" min-scalesize="1176" max-scalesize="990">
        <div class="flex-[2]  relative">

            <div class="sticky w-[300px] h-[300px] overflow-hidden top-[5%] left-[3%] shadow max-[991px]:hidden">
                <img animatiomotion="hoverview"   class="opacity-0 object-center object-cover h-full w-full" src="https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>


            <aside animatiomotion="item1" class="triggerss opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="1" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="1" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside animatiomotion="item2" class=" opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="2" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="2" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside  animatiomotion="item3" class="opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="3" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="3" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/8438964/pexels-photo-8438964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside animatiomotion="item4" class="opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="4" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="4" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/8679914/pexels-photo-8679914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside animatiomotion="item5" class="opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="5" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="5" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/8265905/pexels-photo-8265905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>

            <aside animatiomotion="item6" class="opacity-0 hidden flex-row justify-between items-center mb-[40px] max-[990px]:flex max-[494px]:mb-[80px] max-[494px]:flex-col-reverse">
                <div class="px-[20px] max-[494px]:mt-[10px]">
                    <h3 text_view="6" class="text-4xl font-bold max-[372px]:text-2xl">Motion graphic</h3>
                </div>
                <div class="h-[200px] w-[182px] max-[644px]:h-[150px] max-[644px]:w-[136px]">
                    <img hover_image="6" class="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/16453474/pexels-photo-16453474/free-photo-of-drone-and-controller.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </aside>
        </div>
        <div class="flex-[2.5] px-[20px] transition duration-1000 font-bold text-7xl space-y-6 max-[991px]:hidden">
            <h3 hover_view="1" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Brand strategy</h3>
            <h3 hover_view="2" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Motion graphic</h3>
            <h3 hover_view="3" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Video editing</h3>
            <h3 hover_view="4" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">3D Animation</h3>
            <h3 hover_view="5" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Advertising</h3>
            <h3 hover_view="6" class="hoverview opacity-0 cursor-pointer text-base-content/50 hover:text-base-content hover:indent-3" style="transition: .3s;">Web design</h3>
        </div>
   </section>

 

<article animatiomotion="futuresanims" class="opacity-0 text-5xl mb-[80px] max-[530px]:text-3xl max-[425px]:text-2xl">
    <p class="max-w-[500px] font-semibold font-sans italic indent-[20px] ml-[50px] text-6xl max-[530px]:ml-[10px]">
        Featured <br> Work©
    </p>
</article>

<div class="scroll-content  gap-[14px] mx-[10px]">

    <div class="min-w-[230px] p-5 h-[145px] "></div>

    <div class="min-w-[430px] p-5 border h-[245px] "></div>
    <div class="min-w-[430px] p-5 border h-[245px] "></div>
    <div class="min-w-[430px] p-5 border h-[245px] "></div>
    <div class="min-w-[430px] p-5 border h-[245px] "></div>
    <div class="w-[120px]"></div>

  </div>

   <section class="h-[200vh] border"></section>



</body>
</html>
 
  
` }
        ]
      }
    },
  ]


 const x_fu33fd_x  = (x) => {
    return __mfdhe3
 }