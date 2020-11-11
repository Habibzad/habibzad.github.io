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


$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 500
            }
          },
          "color": {
            "value": "#00fff2"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.05,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.02,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 2,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 70,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 900,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 1,
              "opacity": 2,
              "speed": 0.01
            },
            "repulse": {
              "distance": 100
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    );

});
