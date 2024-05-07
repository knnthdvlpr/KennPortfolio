let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");

});


// mixer =======================================================

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


//active menu==================================================

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 <section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


// side progress arrow ===========================================

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #34cfcc ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



// Parallax Spacer ========================================

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
    
        var parallaxAbout = document.getElementById('parallaxAbout');
        var parallaxMe = document.getElementById('parallaxMe');
        var parallaxSpotlight = document.getElementById('parallaxSpotlight');
        var parallaxGradient = document.getElementById('parallaxGradient');
        var parallaxMain = document.getElementById('parallaxMain');
        
    
        if (parallaxMe) {
            var newPositionAbout = -1800  + scrollPosition*.9;
            parallaxMe.style.right = newPositionAbout + 'px'; 
        }

        if (parallaxAbout) {
            var newPositionMe = -1900 + scrollPosition ;
            parallaxAbout.style.left = newPositionMe + 'px'; 
        }

        if (parallaxSpotlight) {
            var newPositionSpotlight =  -200 + scrollPosition * .2 ;
            parallaxSpotlight.style.top = newPositionSpotlight + 'px'; 
        }

        if (parallaxGradient) {
            var newPositionGradient =  -2000 + scrollPosition * .2 ;
            parallaxGradient.style.bottom = newPositionGradient + 'px'; 
        }

        if (parallaxMain) {
            var opacityValue = -900 + scrollPosition;
            parallaxMain.style.opacity = opacityValue;
        }   

    });



   



// About slider ===========================================


let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}





// Tiliting Effect

function tiltCard(event) {
    const card = event.currentTarget.querySelector('.tilting-card-content');
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const distanceThreshold = 5; 

    const distanceX = Math.abs(event.clientX - centerX);
    const distanceY = Math.abs(event.clientY - centerY);

    if (distanceX < distanceThreshold && distanceY < distanceThreshold) {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    } else {

        let rotateX = -(event.clientY - centerY) / 2; 
        let rotateY = (event.clientX - centerX) / 2; 

        rotateX = Math.min(Math.max(rotateX, -13), 13);
        rotateY = Math.min(Math.max(rotateY, -13), 13);
        
        card.style.setProperty('--rotateX', rotateX + 'deg');
        card.style.setProperty('--rotateY', rotateY + 'deg');
    }
}

function resetTilt(event) {
    const card = event.currentTarget.querySelector('.tilting-card-content');
    card.style.removeProperty('--rotateX');
    card.style.removeProperty('--rotateY');
}


// scroll Reveal

ScrollReveal({ 
    distance: "95px",
    duration: 2000,
    delay: 200,
    reset: true ,
});

ScrollReveal().reveal('.kenn-info,.main-text,.fillter-buttons,.contact-img', { origin: "top" });

ScrollReveal().reveal('.about, .contactForm', { origin: "right" });
ScrollReveal().reveal('.contactInfo,.bg-icon,.btn-box', { origin: "left" });

ScrollReveal().reveal('.img-kenn, .portfolio', { origin: "bottom" });





document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header .navList li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth' 
                });
            }
        });
    });
});