// var card = document.getElementById("cardDiv")

// function setCard() {
//     for (let i = 0; i < 8; i++) {
//         console.log('works');

//         var oneCard = `<div class="col-sm-6 col-md-4 col-lg-3 mb-5">
//     <div class="card style" style="width: 100%;">
//         <img src="assets/images/portfolio/Project 1 image.jpg" class="card-img-top" alt="My name"
//             height="235px" />
//         <div class="card-body">
//             <h5 class="card-title">Portifolio</h5>
//             <p class="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//             </p>
//             <a href="#" target="_blank" class="btn btn-danger">GitHub</a>
//             <a href="https://CGMcBride.github.io" target="_blank" class="btn btn-info">Website</a>
//         </div>
//     </div>
// </div>`
//         card.innerHTML = oneCard;
//     }
// }

// setCard()
particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px';
//document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin(); stats.end();
    //if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
    requestAnimationFrame(update);
}; requestAnimationFrame(update);;