const timeline = gsap.timeline({ defaults: { duration: .4, ease: 'elastic' }})
const menuview = document.querySelector("#menu")
let toggle_animation_menu = true

menuview.addEventListener('click', () => {

 if (!toggle_animation_menu) {
    
    timeline
    .from('.menu_view', { width: '0px'})
    .from('.lutao', { left: '1%'})

    .to('.menu_view', { width:"300px"}, '<.1')
    .to('.lutao', { left: '300px'}, '<')

    toggle_animation_menu = true
 }else{

    timeline
    .from('.menu_view', { width: '300px'})
    .from('.lutao', { left: '300px'})

    .to('.menu_view', { width:"0px"}, '<.1')
    .to('.lutao', { left: '1%'}, '<')


    toggle_animation_menu = false
 }

})


/*
menu
menu_view
views


 .from('.header', { y: '-100%', ease: 'bounce' })
 .from('.link', { opacity: 0, stagger: .5 })
 .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
 .from('.left', { x: '-100%' }, '<.5')
 .to('.footer', {  y: 0, ease: 'elastic', backgroundColor: 'red' })
    
*/ 