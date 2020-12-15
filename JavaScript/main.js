const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", ()=>{
    if(!menuOpen){
        menuBtn.classList.add("open");
        navList.classList.add('nav-open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove("open");
        navList.classList.remove('nav-open');
        menuOpen = false;
    }
});


const navLink = document.querySelectorAll('.nav-link');
let navList = document.querySelector(".nav-list");

navLink.forEach(link=>{
    link.addEventListener("click", ()=>{
        navList.classList.remove('nav-open');
        menuBtn.classList.remove("open");
        menuOpen = false;
    })
})


// Text Animation

document.addEventListener('DOMContentLoaded',function(event){
    const dataText = [ "I like tea", "I like sunny days", "I like coding", "I like swimming"];
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("#likes").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1000);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });
