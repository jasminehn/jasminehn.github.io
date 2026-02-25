//-------------------- NAVBAR ANIMATIONS --------------------
$(document).ready(function(){
    $(window).scroll(function(){
        // parallax();

        if(this.scrollY > 30){
            $('.navbar').addClass("appear");
        }else{
            $('.navbar').removeClass("appear");
        }
    });

    const menuButton = document.querySelector('.menu-btn');
    const navLinks = document.querySelectorAll('.navbar ul li');

    //toggle navbar
    $('.menu-btn').click(function(){
        $('.menu-btn').toggleClass("active");
        $('.navbar ul').toggleClass("active");
        $('.nav-overlay').toggleClass("active");
        // document.body.style.overflow="hidden"; 
        document.body.classList.toggle('lock-scroll'); //stops user from scrolling while menu is open 
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.8s ease forwards ${index / 8 }s`;
            }
            
        });
    });

    $('.nav-overlay').click(function(){
        $('.menu-btn').toggleClass("active");
        $('.navbar ul').toggleClass("active");
        $('.nav-overlay').toggleClass("active");
        document.body.classList.toggle('lock-scroll'); //stops user from scrolling while menu is open

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.8s ease forwards ${index / 8 }s`;
            }
            
        });
    });
});


//-------------------- SMOOTH SCROLLING --------------------
const scroll = new SmoothScroll('a[href*="#"]');


//-------------------- PARALLAX EFFECT --------------------
$(window).scroll(function(){
    parallax();
    parallax2();
    parallax3();
});
function parallax() {
    var wScroll = $(window).scrollTop();
    $('.parallax-effect').css('background-position', 'center '+(wScroll*0.25)+'px')
}
function parallax2() {
    var wScroll = $(window).scrollTop() - $('.exp').offset().top;

    //console.log("wScroll2 = "+wScroll);
    $('.parallax-effect2').css('background-position', 'center ' +(wScroll*0.1)+'px')
}
function parallax3() {
    var wScroll = $(window).scrollTop() - $('.contact').offset().top;
    $('.parallax-effect3').css('background-position', 'center ' +(wScroll*0.2)+'px')
}


//-------------------- MOVE BETWEEN SECTIONS --------------------
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id"); 
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) { //the id of the sections and the class of the nav links MUST BE THE SAME for this to work
            a.classList.add("active");
        }
    });
});


//-------------------- FLIP EXP CARDS --------------------
const expCards = document.querySelectorAll('.card');

expCards.forEach((card) => {
    card.addEventListener('click', () => {
        console.log("yippee: ");
        card.classList.toggle('flipped');
    });
});



//-------------------- TYPING TEXT THING --------------------
var typed = new Typed(".typing-text", {
    strings: ["Software Engineer", "Full-Stack Developer", "UI/UX Designer", "Freelancer"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
});


//-------------------- CONTACT FORM --------------------
const form = document.getElementById('contact-form')

form.addEventListener("submit", function(event) {
    // get the email address from the form input
    const email = form.elements._replyto.value;

    // store the email in sessionStorage
    sessionStorage.setItem('email', email);

    // hide the form and show the thank you message
    document.querySelector('.c-container').style.display = 'none';
    document.querySelector('.thankyou-container').style.display = 'block';
    document.querySelector('.thankyou-container span').textContent = `${email}`;
});


//-------------------- EMAIL CONTACT FORM --------------------
// function sendEnquiryform(){
//     var name=$('#name').val();
//     var email=$('#email').val();
//     var message=$('#message').val();
//     $.post("contactform.php",'name='+name+'&email='+email+'&message='+message,function(result,status,xhr) {
//             if( status.toLowerCase()=="error".toLowerCase() )
//             { alert("An Error Occurred.."); }
//             else { 
//                 //alert(result);
//                 $('#sucessMessage').html(result);
//             }
//         })
//         .fail(function(){ alert("something went wrong. Please try again") });
// }


// const $parallaxB1 = $('.home');
// // const $parallaxB2 = $('.exp');
// jQuery(window).scroll(function(){
//     if($parallaxB1.visible(true)) {
//         let parallaxMovement = -200 + (jQuery(document).scrollTop() - $parallaxB1.offset().top) / 2;
//         parallaxMovement += "px";
//         $parallaxB1.css({'background-position': 'center ' + parallaxMovement});
//         console.log(parallaxMovement);
//     }
// });


// const parallax = document.querySelector('.parallax-effect');
// window.addEventListener("scroll", function ()
// {
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.7 + "px";
//     // parallax.style.transform = 'translateY(' + offset * .5 + 'px)';
// });



// const navSlide = () => {
//     const menuButton = document.querySelector('.menu-btn');
//     const navLinks = document.querySelectorAll('.navbar ul li');
    
//     menuButton.addEventListener('click', () => {
//         //animate links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `navLinkFade 0.8s ease forwards ${index / 8 }s`;
//             }
            
//         });

        
//     });
// }

// navSlide();