/* ---- particles.js config ---- */

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 1,
        "density": {
          "enable": true,
          "value_area": 10
        }
      },
      "color": {
        "value": "#1825AA"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#1825AA"
        },
        "polygon": {
          "nb_sides": 1
        },
        "image": {
          "src": "img/github.svg",
          "width": 10,
          "height": 10
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.5,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.6,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 100,
        "color": "#00B4CD",
        "opacity": 1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
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
          "enable": false,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 80,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 10000,
          "size": 8,
          "duration": 2,
          "opacity": 1,
          "speed": 6
        },
        "repulse": {
          "distance": 70,
          "duration": 0.3
        },
        "push": {
          "particles_nb": 10
        },
        "remove": {
          "particles_nb": 600
        }
      }
    },
    "retina_detect": false
  });
