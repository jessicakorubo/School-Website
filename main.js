var image = document.getElementById("slide-image");
document.querySelector("img").style.cssText=
`opacity: .7;
transition:opacity 3s ease-in`;
var img_array = ["images/school_background.jpg","images/SchoolSlideshow1.jpg", "images/slideshow3.jpg", "images/slideshow4.jpg"];
var index=0;

function slide()
{

    image.src = img_array[index];
    index++;
    if(index>=img_array.length)
    {
    index=0;
    }

}
setInterval("slide()",3000);

var header = document.querySelector("#header");
document.addEventListener('scroll', ()=>{
    if (window.scrollY > 150){
        header.style.backgroundColor="#fff";
    }
    else {
        header.style.backgroundColor="transparent";
    }
})



// MAKING THE TESTIMONIALS ACTIVE
var review =document.querySelector('.reviews');
testimonial = document.querySelector('.TesT p');
anabelle = document.querySelector('.anabelle');
milton= document.querySelector('.milton');
review.addEventListener('click', ()=>{
    if (review.classList.has('anabelle')){
        testimonial.innerHtml = anabelle;
    }
    else if (review.classList.has('milton')) {
        testimonial.innerHtml = milton;
    }
})