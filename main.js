const body = document.querySelector('body');
var reviews = document.querySelectorAll('.reviews');

var testimonialSlide = document.querySelector('.quotes');

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

// var header = document.querySelector("#header");





// const scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;
// console.log(scrollbarWidth);
 
// For the testimonial slide 
var  left = document.querySelector('.left')
var  right = document.querySelector('.right')


reviews.forEach((rev) => {
    console.log(rev, 'the review');
    reviewWidth = rev.clientWidth;
})

 let x = 0;
   let widths = reviewWidth* 3;
   var slider = -(widths+(40*3));
console.log(slider, 'widths 40');
right.onclick = function() {
    console.log('You only clicked', x);
    console.log(slider, 'slider right now');
 
  
    if (x <= (widths)) {
        left.classList.remove('inactive');
        console.log('right is working');
        x = x - reviewWidth-40;
        testimonialSlide.style.left = x + "px";
        console.log(x, "and the x is");
        if (x == slider){
        right.classList.add('inactive');
        }
        else {
            right.classList.remove('inactive');
        }
    }
    if  (x == 0 ){
    left.classList.remove("inactive");
    }
   
}
 console.log(widths, "wdithje");
 if(x==0) {
    left.classList.add('inactive');
}
left.onclick = function() {
    console.log('You only clicked', x)
    if (x <= reviewWidth){
        left.classList.remove('inactive');
        console.log('left is working')
        x = x + reviewWidth+40;
        console.log(x, 'after clicking on left button');
        testimonialSlide.style.left = x + "px";
        if (x>slider) {
            right.classList.remove('inactive');
        }
    }
    else {
        right.classList.remove('inactive');
    }
    if(x==0) {
    left.classList.add('inactive');
}
}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-hamburger');

hamburger.onclick = function() {
    menu.classList.toggle('active');   
}