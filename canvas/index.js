// let myCanvas = document.querySelector('#myCanvas');
// let mycontext = myCanvas.getContext('2d');
// let img = document.querySelector('#my-img');
// img.style.display = 'none';


// let h = myCanvas.height
// let w = myCanvas.width
// mycontext.fillStyle = '#eee'
// mycontext.fillRect(0, 0, w, h)
/*
function colDraw(colNum) {
    for(let i = 0; i < colNum; i++){
        let randHeight = Math.round(Math.random() * 150 + 20)
        mycontext.fillStyle = '#00F'
        mycontext.fillRect(50 * (i + 1) + (80 * i), randHeight, 70, h - randHeight)
        mycontext.font = '48px KulminoituvaRegular'
        mycontext.fillStyle = '#FFF'
        mycontext.fillText(`${i + 1}`, 50 * (i + 1) + (80 * i) + 25, h - 30)
    }
}
colDraw(10)

mycontext.lineWidth = 5
mycontext.beginPath()
mycontext.moveTo(50, 50)
myCanvas.addEventListener('click', function(e) {
    mycontext.lineWidth = Number(document.querySelector('#int-2').value)
    mycontext.strokeStyle = document.querySelector('#int').value
    mycontext.lineTo(e.clientX, e.clientY)
    mycontext.stroke()
})

let fullCircle = 2 * Math.PI
mycontext.lineWidth = 5
mycontext.strokeStyle = 'red'
mycontext.shadowColor = 'red'
mycontext.shadowOffsetX = '20'
mycontext.arc(w / 2, h / 2, (h / 2) - 50, 0, fullCircle, false)
mycontext.stroke()

mycontext.lineWidth = 5
mycontext.strokeStyle = 'red'
mycontext.shadowColor = 'red'
mycontext.shadowOffsetX = '-20'
mycontext.arc(w / 2, h / 2, (h / 2) - 50, 0, fullCircle, false)
mycontext.stroke()

*/

function hash(str) {
    let strascies = str.split('').map(letter => letter.charCodeAt(0))
    return String(strascies.reduce((acc, cur) => acc * cur)).split('').map((num, i, array) => String.fromCharCode(Number(`${num + array[i]}`))).join()
}

console.log(hash('ahmed'))