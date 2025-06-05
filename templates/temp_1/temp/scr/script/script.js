try {
        
    const timeline = gsap.timeline({ defaults: { duration: 1 }});
    const menuOpen = document.querySelector('.openmenu');
    const menuClose = document.querySelector(".closemenu");

    menuOpen.addEventListener('click', () => {
    timeline
    .to('.phone_menu', {  x: 0})
    })

    menuClose.addEventListener('click', () => {
    timeline
    .to('.phone_menu', {  x: -999})
    });

} catch (error) {
    
}