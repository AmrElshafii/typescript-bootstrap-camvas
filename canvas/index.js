let myCanvas = document.querySelector('#myCanvas');
let mycontext = myCanvas.getContext('2d');
let img = document.querySelector('#my-img');
img.style.display = 'none';


let mygrad = mycontext.createLinearGradient(0, 0, myCanvas.width, 0);
mygrad.addColorStop(0, 'red');
mygrad.addColorStop(.33, 'blue');
mygrad.addColorStop(.66, 'red');
mygrad.addColorStop(1, 'blue');



mycontext.font = '32px system-ui'
mycontext.strokeStyle = mygrad
mycontext.strokeText('hello', 10, 32)

mycontext.font = '32px system-ui'
mycontext.fillStyle = '#black'
mycontext.fillText('hello', 10, 32)
