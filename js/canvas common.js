let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext('2d');

let drawButton = document.getElementById('drawButton');
let rectButton = document.getElementById('rectButton');
let lineButton = document.getElementById('lineButton');
let quadButton = document.getElementById('quadButton');
let circleButton = document.getElementById('circleButton');
let textButton = document.getElementById('textButton');
let clearButton = document.getElementById('clearButton');
let speechBubbleButton = document.getElementById('speechButton');
let triangleButton = document.getElementById('triangleButton');
let zoomInButton = document.getElementById('zoomIn');

//test
// let scale = 1;
// let scaleMultiplier = 0.8;
// let translatePos = {
//     x: canvas.width /2,
//     y: canvasDraft.height /2
// };

//test
let width = 1;
let font = "30px Arial";

let currentFunction;
let dragging = false;
let getXY = function (e) {
    this.x = e.offsetX;
    this.y = e.offsetY;
};

class MouseMethods {
    constructor() {};
    onMouseDown() {};
    onMouseMove() {};
    onMouseUp() {};
    onMouseLeave() {};
    onMouseEnter() {};

};

canvasReal.addEventListener('mousedown', e => {
    getXY(e);
    dragging = true;
    currentFunction.onMouseDown(x,y);
});

canvasReal.addEventListener('mousemove', e => {
    if (dragging === true) {
        getXY(e);
        currentFunction.onMouseDrag(x, y);
    }
});

canvasReal.addEventListener('mousemove', e => {
    if (dragging === false) {
        getXY(e);
        currentFunction.onMouseMove(x, y);
    }
});


canvasReal.addEventListener('mouseup', e => {
    getXY(e);
    dragging = false;
    currentFunction.onMouseUp(x, y)
});

canvasReal.addEventListener('mouseenter', e => {
    getXY(e);
    currentFunction.onMouseEnter(x, y)
});

canvasReal.addEventListener('mouseleave', e => {
    getXY(e);
    dragging = false;
    currentFunction.onMouseLeave(x, y)
});

document.addEventListener('keydown', (e) => {
    currentFunction.onKeyDown(e)
});


let selectedColor = document.getElementById("favcolor").value

document.getElementById("favcolor").addEventListener('input', (e) => {
    selectedColor = document.getElementById("favcolor").value;
})

function widthVal(widthVal){
    width = widthVal;
}













