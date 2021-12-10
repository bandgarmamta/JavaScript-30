function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const images = document.querySelectorAll(".slide-in");
  

  function slideImage(){
      
      images.forEach(i=>{
        const imageHalf = (window.scrollY + window.innerHeight) - i.height/2;  //half height till the image section
        const imageBottom = i.offsetTop + i.height; //bottom of the image
        const isHalf = imageHalf > i.offsetTop; // to check if scroll reaches half way to image (true or false)
        const isNotScrollPast = window.scrollY < imageBottom ;  // to check if image has scroll passed or not (true or false)
// 
        if(isHalf && isNotScrollPast){
            i.classList.add("active") // if we are half way to image then add class and show image(slide in image)
        }else{
            i.classList.remove("active") // else if we are not halfway to image or have passed image on the scroll then remove class and hide image
        }
      })
  }

  window.addEventListener("scroll",debounce(slideImage))