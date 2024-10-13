

// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

initializeSlider();

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){  
    slideIndex++;
    showSlide(slideIndex);
}

const form= document.querySelector('form');

function sendEmail(  ) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rieyvixil@gmail.com",
        Password : "E99DD08BEA976DD706D7C54E037568A140AB",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    ); 
}



