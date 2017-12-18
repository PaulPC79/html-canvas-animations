import getRandomColor from './RandomColor.js';
import Circle from './Circle.js';

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
let c = canvas.getContext('2d'),
    circleArray = [],
    mouse = {};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    init();
});

function init() {
    circleArray = [];
    for(let i =0; i < 2000; i += 1 ) {
        let radius = Math.random() * 3 + 1,
            maxRadius = 40,
            minRadius = radius,
            x = Math.random() * (window.innerWidth - radius * 2) + radius,
            y = Math.random() * (window.innerHeight - radius * 2) + radius,
            dx = Math.random() - 0.5,
            dy = Math.random() - 0.5,
            randomColor = getRandomColor();    
        circleArray.push(new Circle(x,y,dx,dy,radius,maxRadius,minRadius,c, randomColor,mouse));
    }
}

export default function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, window.innerWidth, window.innerHeight);    
    circleArray.map( c => c.update() );
}

init();