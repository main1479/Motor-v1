let header = document.querySelector('.header');
header.addEventListener('mousemove',function(e){
    let parallax1 = document.querySelector('.parallax1');
    let y = e.offsetY / 15;
    parallax1.style.transform = `rotateY(${y}deg)`
})

// ================================================
// ================================================
let details = document.querySelector('.details');

document.addEventListener('scroll', function(){
    let img = document.querySelector('.parallax2 img');
    let value = window.scrollY;

    if(window.screen.availWidth <= 575){
        img.style.top = '50%'
        img.style.top = '50%'
        img.style.transform = `translate(-50%,-50%)`
    }else if(window.screen.availWidth <= 1000){
        img.style.transform = `translate(-50%,${value/8}%)`;
    }else if(window.screen.availWidth <= 1100){
        img.style.transform = `translate(-50%,${value/10}%)`;
    }else if(window.screen.availWidth <= 1200){
        img.style.transform = `translate(-50%,${value/11}%)`;
    }else if(window.screen.availWidth <= 1300){
        img.style.transform = `translate(-50%,${value/12}%)`;
    }
    else if(window.screen.availWidth < 1400 || window.screen.availWidth > 1400){
        img.style.transform = `translate(-50%,${value/14}%)`;
    }

    
})

// ============================================
// ============================================

let pop = document.querySelectorAll('.pop__trigger');
pop.forEach(popup =>{
    popup.addEventListener('click', ()=>{
        let pop__box = document.querySelector('.popup__box');
        pop__box.classList.toggle('active');

    })
})


