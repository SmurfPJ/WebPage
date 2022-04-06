
showSlides();


function fbBtn(){
    window.open("https://www.facebook.com/SnowDennLodge/", "_blank");
}

function galleryBtn(style){
    let item = document.getElementById("galleryBtn");
    item.style.color= "black";
    alert("Opened Photo Gallery page");
}


function showSlides(style) {
    let slideIndex = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    console.log(slides[i]);
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}