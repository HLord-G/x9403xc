  // Create the popup container
  const popup = document.createElement('div');
  popup.id = 'imagePopup';

  // ✅ Initial hidden style
  popup.style.display = 'none';
  popup.style.position = 'fixed';
  popup.style.top = '0';
  popup.style.left = '0';
  popup.style.right = '0';
  popup.style.bottom = '0';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  popup.style.justifyContent = 'center';
  popup.style.alignItems = 'center';
  popup.style.zIndex = '9999';

  // Create the image inside popup
  const popupImg = document.createElement('img');
  popupImg.style.maxWidth = '90%';
  popupImg.style.maxHeight = '90%';
  popupImg.style.border = '5px solid white';
  popupImg.style.borderRadius = '10px';

  popup.appendChild(popupImg);
  document.body.appendChild(popup);

  // Add event to thumbnails
  document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', () => {
      popupImg.src = img.src;
      popup.style.display = 'flex';
    });
  });

  // Click anywhere to close
  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  });






  let datacompiler = [
    {
      code:`<menu popup="openpops" openview="false" popstyle="fixed" popindex="99" class="flex flex-col justify-start items-center top-0 left-0 w-full h-full  bg-base-300">

    <button class="absolute top-[4%] right-[6%]"  popup_cls="openpops" popup_cls_ani="slide-out-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
    </button>

    <main class="flex flex-col justify-start mt-[140px] items-center">
        <div class="mb-[80px]"><button class="btn btn-lg rounded-2xl px-[40px]">Reserve My Spot</button></div>
        <div class="flex flex-row justify-between items-center gap-[40px]">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                    <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
                </svg>
            </a>
        </div>
    </main>

    <div class="absolute bottom-[5%] left-[7%]">
        <div attr_size_changer="('[style]', 490, 'zoom:.8;')" class="flex flex-row gap-[15px] justify-center items-center">
            <div class="flex flex-col justify-between items-center">
                <img src="https://dummyimage.com/42x42" class="w-[42px] border border-base-content/40 object-cover object-center h-[42px]" alt="">
            </div>
            <div class="flex flex-col justify-center items-start font-bold leading-[14px]">
                <h1 class="text-lg">Harold Guzman</h1>
                <h1 class="font-light mb-[6px]">Digital Media Expert</h1>
            </div>
        </div>
    </div>
</menu>

<nav class="px-[40px] fixed top-[7%] z-[8] left-0 flex w-full flex-row justify-between items-center max-[490px]:px-[10px] max-[780px]:top-[3%]">
    <div attr_size_changer="('[style]', 490, 'zoom:.8;')" class="flex flex-row gap-[15px] justify-center items-center">
        <div class="flex flex-col justify-between items-center">
            <img src="https://dummyimage.com/42x42" class="w-[42px] border border-base-content/40 object-cover object-center h-[42px]" alt="">
        </div>
        <div class="flex flex-col justify-center items-start font-bold leading-[14px]">
            <h1 class="text-lg">Harold Guzman</h1>
            <h1 class="font-light">Digital Media Expert</h1>
        </div>
    </div>
    <button popup_opn="openpops" popup_opn_ani="swing-in-right-bck" class="hidden flex-row justify-end items-center max-[780px]:flex" >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
    </button>
    <div class="flex flex-row justify-end items-center max-[780px]:hidden">
            <a href="#" class="font-bold">Online Courses</a>

            <div class="ml-[50px] flex flex-row gap-[20px]">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">
                        <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
                    </svg>
                </a>
            </div>
    </div>
</nav>`
    },
    {
      code:`<section class="min-h-[120vh] relative">
 
    <img src="https://dummyimage.com/1326x665" class="top-0 left-0 object-cover object-center absolute h-full w-full z-1" alt="">

    <main class="p-[20px] space-y-10 absolute bottom-[20%] left-[8%] z-3 max-[474px]:left-[3%]">
        <div>
            <h1 class="text-5xl font-bold mb-[20px]">
                Free Digital Marketing Webinar.
            </h1>
            <p class="text-2xl font-light">
                Unlock Marketing Secrets That Work 
            </p>
        </div>

        <button class="btn btn-lg">Reserve My Spot</button>
    </main>

</section>`
    },{
      code:`<section class="p-[20px] flex flex-col justify-center items-center max-[549px]:p-[0px]">

    <main class="my-[30px] flex flex-row w-[80vw] py-[80px] px-[20px] gap-[40px] max-[1008px]:w-full max-[832px]:flex-col">
        <div class="flex-1 flex flex-col relative justify-center items-center ">
            <h1 class="absolute top-[10%] right-[-120px] text-4xl font-bold line-clamp-2 max-[832px]:right-[0px] max-[832px]:bottom-[10%] max-[832px]:top-[unset] max-[832px]:left-[20px]">Hi, <br>
                I'm Harold</h1>
            <img src="https://dummyimage.com/500x380" class="object-cover h-[380px] object-center   w-full" alt="">
        </div>
        <div class="flex-1 flex flex-col justify-end items-start">

            <span class="h-[10vh] max-[832px]:hidden"></span>

            <h1 class="text-lg mb-[10px]">
                Digital Media Expert with <br>12+ Years of Professional Experience.
            </h1>

            <p class="font-light">
                This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
            </p>
        </div>
    </main>

</section>`
    },{
      code:`<section class="p-[20px] flex flex-col justify-center items-center overflow-hidden">

   <main class="min-h-[30vh] my-[20px] w-full flex flex-col justify-center items-center">
    <h2 class="text-3xl font-bold text-center mb-[30px]">
        You Will Learn How To
    </h2>

    <div class="mt-[7px] mb-[80px] w-full flex flex-row justify-around items-center gap-5 flex-wrap">
        <aside class="min-h-[160px] w-[300px] py-[20px] relative px-[30px]">
            <div class="absolute top-0 left-0 w-full h-full z-2 flex flex-col justify-center items-center">
                <h1 class="text-[10em] text-base-content/20 font-bold">01</h1>
            </div>
            <div class="absolute top-0 left-0 w-full h-full z-2 flex flex-col justify-center items-center">
                <p class="relative top-[30px] left-[70px] w-[200px] font-bold text-lg max-[384px]:left-[50px]">
                    Use Instagram &
                Facebook to increase conversions
                </p>
            </div>
        </aside>
        <aside class="min-h-[160px] w-[300px] py-[20px] relative px-[30px]">
            <div class="absolute top-0 left-0 w-full h-full z-2 flex flex-col justify-center items-center">
                <h1 class="text-[10em] text-base-content/20 font-bold">02</h1>
            </div>
            <div class="absolute top-0 left-0 w-full h-full z-2 flex flex-col justify-center items-center">
                <p class="relative top-[30px] left-[70px] w-[200px] font-bold text-lg max-[384px]:left-[50px]">
                    Improve your brand awareness using analytics
                </p>
            </div>
        </aside>
        <aside class="min-h-[160px] w-[300px] py-[20px] relative px-[30px]">
            <div class="absolute top-0 left-0 w-full h-full z-2 flex flex-col justify-center items-center">
                <h1 class="text-[10em] text-base-content/20 font-bold">03</h1>
            </div>
            <div class="absolute top-0 left-0 w-full h-full z-2 flex flex-col justify-center items-center">
                <p class="relative top-[30px] left-[70px] w-[200px] font-bold text-lg max-[384px]:left-[50px]">
                    Design marketing materials that drive sales
                </p>
            </div>
        </aside>
    </div>

    <div>
        <button class="btn btn-lg">Reserve My Spot</button>
    </div>

   </main> 

</section>`
    },{
      code:`<section class="min-h-[10vh] flex justify-center items-center flex-col bg-base-300">
    <h1 class="text-3xl font-bold mt-[90px] mb-[30px]">
        What People Say
    </h1>
    <swiper-container class="w-[80vw] mb-[50px]" pagination="true" pagination-dynamic-bullets="true" centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
        <swiper-slide class="w-full min-h-[70vh] flex flex-col justify-center items-center">
            <div class="text-5xl text-center max-[700px]:text-3xl">
                I'm a testimonial. Click to edit me and add text that says something nice about you and your services.
            </div>
            <h3 class="text-center mt-[30px] text-[20px]">
                <span class="font-bold">Kim Lee</span>, <span class="font-light">Cebu</span>
            </h3>
        </swiper-slide>
        <swiper-slide class="w-full min-h-[70vh] flex flex-col justify-center items-center">
            <div class="text-5xl text-center max-[700px]:text-3xl">
                I'm a testimonial. Click to edit me and add text that says something nice about you and your services.
            </div>
            <h3 class="text-center mt-[30px] text-[20px]">
                <span class="font-bold">Henry Guzman</span>, <span class="font-light">Manila</span>
            </h3>
        </swiper-slide>
        <swiper-slide class="w-full min-h-[70vh] flex flex-col justify-center items-center">
            <div class="text-5xl text-center max-[700px]:text-3xl">
                I'm a testimonial. Click to edit me and add text that says something nice about you and your services.
            </div>
            <h3 class="text-center mt-[30px] text-[20px]">
                <span class="font-bold">Ivan Lim</span>, <span class="font-light">CDO</span>
            </h3>
        </swiper-slide>
      </swiper-container>
</section>`
    },{
      code:`<section class="flex flex-col justify-center items-center my-[30px]">
    <div class="my-[40px]">
        <h2 class="text-3xl font-black">
            Featured on
        </h2>
    </div>

    <div class="flex mt-[20px] justify-center items-center gap-[30px] flex-row flex-wrap px-[30px]" style="zoom:.8;">
        <aside class="w-[251px] h-[251px]">
            <img src="https://dummyimage.com/251x251" class="h-[251px] w-[251px] object-cover object-center" alt="">
        </aside>
        <aside class="w-[251px] h-[251px]">
            <img src="https://dummyimage.com/251x251" class="h-[251px] w-[251px] object-cover object-center" alt="">
        </aside>
        <aside class="w-[251px] h-[251px]">
            <img src="https://dummyimage.com/251x251" class="h-[251px] w-[251px] object-cover object-center" alt="">
        </aside>
        <aside class="w-[251px] h-[251px]">
            <img src="https://dummyimage.com/251x251" class="h-[251px] w-[251px] object-cover object-center" alt="">
        </aside>
        <aside class="w-[251px] h-[251px]">
            <img src="https://dummyimage.com/251x251" class="h-[251px] w-[251px] object-cover object-center" alt="">
        </aside>
    </div>
</section>`
    },{
      code:`<section class="flex flex-col justify-center items-center my-[80px]">
    <main class="w-[80vw]  min-h-[100vh] flex flex-row justify-center items-center max-[1100px]:w-[90vw] max-[894px]:min-h-[20vh] max-[894px]:flex-col-reverse">

        <div class="flex-1 h-full bg-base-300 min-h-[100vh] max-[894px]:w-full max-[894px]:min-h-[70vh] flex flex-col justify-start items-center">
           
            <article class="text-center space-y-3.5 my-[15%] w-[80%]">
                <div>
                    <h1 class="font-bold text-">Sign up for all the latest tips, tricks, and trends</h1>
                </div>

                <div class="text-left w-full mt-[30px]">
                    <fieldset class="fieldset">
                        <legend class="fieldset-legend">Enter your email here</legend>
                        <input type="text" class="input w-full" placeholder="Email" />
                      </fieldset>
                </div>


                <div class="flex flex-row gap-[20px] mt-[30px]">
                    <input type="checkbox"   class="checkbox checkbox-sm" />
                    <p>
                        Yes, subscribe me to your newsletter.
                    </p>
                </div>

                <div class="mt-[20px]">
                    <button class="btn btn-wide rounded-2xl bg-base-200">Sent</button>
                </div>

                <div class="mt-[130px] font-light">
                    <p>
                        Cagayan de Oro City. <br>
                        041 San Roque, Lapasan
                    </p>
                </div>
                <div class="mt-[10px] font-light">
                    <p>
                        +639958548020     |     gzmn.h10195@gmail.com
                    </p>
                </div>
            </article>
             
        </div>

        <div class="flex-1 h-full min-h-[100vh] max-[894px]:w-full max-[894px]:min-h-[70vh] relative flex flex-col justify-start items-center">
            <img src="https://dummyimage.com/546x641" class="top-0 left-0 absolute object-cover object-center w-full h-full z-1" alt="">
            <article class="text-center space-y-3.5 my-[15%] w-[80%] relative z-2">
                    <h2 class="text-lg font-bold w-full text-center">Yes, I want to join the webinar,
                        Sign me up!</h2>

                        <div class="mt-[40px]">
                            <button class="btn btn-wide rounded-2xl bg-base-200 border">Reserve My Spot</button>
                        </div>
            </article>
        </div>

    </main>
</section>`
    },{
      code:`<footer class="p-[20px] w-full flex flex-row justify-center items-center bg-base-300">
    <p class="text-center">© 2035 by Harold Guzman. Powered and secured by <a href="#">flexBoy</a></p>
</footer>`
    }
]

 





function extractCommentBlocksFromDOM() {
    const result = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_COMMENT, null, false);
    let node;

    while ((node = walker.nextNode())) {
        const commentText = node.nodeValue.trim();

        // Check kung nagsugod ug [x] ug nagtapos ug [x]
        if (commentText.startsWith('[x]') || commentText.startsWith('[x]\n') || commentText.includes('<section')) {
        const cleaned = commentText.replace(/^\[x\]|\[x\]$/g, '').trim();

        // Split sections
        const sections = cleaned.split(/(?=<section[\s>])/); // split by each <section>

        sections.forEach((section, index) => {
            const trimmed = section.trim();
            if (trimmed) {
            result.push({
                content_name: `element ${index + 1}`,
                code: trimmed
            });
            }
        });
        }
    }

    return result;
    }

    const extracted = extractCommentBlocksFromDOM();
console.log(extracted);

 


let iframeStation = document.querySelector("#iframeStation");

datacompiler.forEach((item, index) => {
  // Create wrapper div
  let wrapper = document.createElement("div");
  wrapper.className = "mb-[90px] shadow-2xl";

  // Add menu with buttons and iframe
  wrapper.innerHTML = `
    <menu class="flex flex-row justify-between items-center mb-[5px]">
      <div class="text-2xl font-bold">Component ${index + 1}</div>
      <div class="join">
        <button class="btn copy-btn" data-index="${index}">Copy</button>
        <button class="btn theme-toggle" data-index="${index}">Dark</button>
      </div>
    </menu>
    <iframe class="w-full h-[100vh] border border-base-content/30 iframe-preview" data-theme="dark" data-index="${index}" srcdoc=""></iframe>
  `;
  
  iframeStation.appendChild(wrapper);

  // Inject srcdoc content
  const theme = "dark";
  const htmlContent = `
    <html data-theme="${theme}">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css"/>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css"/>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <script defer src="https://www.flexboy.online/script/flexboy_script.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      </head>
      <body>
        ${item.code}
      </body>
    </html>
  `;
  wrapper.querySelector("iframe").srcdoc = htmlContent;
});

// Handle Copy & Theme Toggle
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("copy-btn")) {
    const index = e.target.dataset.index;
    const iframe = document.querySelector(`iframe[data-index="${index}"]`);
    const parser = new DOMParser();
    const doc = parser.parseFromString(iframe.srcdoc, "text/html");
    const bodyContent = doc.body.innerHTML.trim();

    // Copy to clipboard
    navigator.clipboard.writeText(bodyContent).then(() => {
      e.target.innerText = "Copied!";
      setTimeout(() => e.target.innerText = "Copy", 1000);
    });
  }

  if (e.target.classList.contains("theme-toggle")) {
    const index = e.target.dataset.index;
    const iframe = document.querySelector(`iframe[data-index="${index}"]`);
    const currentDoc = new DOMParser().parseFromString(iframe.srcdoc, "text/html");
    let currentTheme = currentDoc.documentElement.getAttribute("data-theme");
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    e.target.innerText = newTheme.charAt(0).toUpperCase() + newTheme.slice(1);

    // Rebuild srcdoc with new theme
    const htmlContent = `
      <html data-theme="${newTheme}">
        <head>
          <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css"/>
          <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css"/>
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
          <script defer src="https://www.flexboy.online/script/flexboy_script.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
        </head>
        <body>
          ${datacompiler[index].code}
        </body>
      </html>
    `;
    iframe.srcdoc = htmlContent;
  }
});