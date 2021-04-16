let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext('2d');
// Buttons
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
let undoButton = document.getElementById('undoButton');
let redoButton = document.getElementById('redoButton');
let saveButton = document.getElementById('save');

let font = "30px Arial";

//Get X and Y Coordinate
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
    currentFunction.onMouseDown(x, y);
});

canvasReal.addEventListener('mousemove', e => {
    if (dragging === true) {
        getXY(e);
        currentFunction.onMouseDrag(x, y);
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





// Color Picker Function
let selectedColor = document.getElementById("favcolor").value

document.getElementById("favcolor").addEventListener('input', (e) => {
    selectedColor = document.getElementById("favcolor").value;
})

//Width Slider Funciton
function widthVal(widthVal) {
    width = widthVal;
}


//Undo Function
let log = []
let popLog = []
undoButton.addEventListener('click', (e) => {
    if (log.length > 0) {
        popLog.push(log[log.length - 1])
        log.pop()
        console.log(log)
        console.log(popLog)
        contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        for (each of log) {
            if (each.type === "Circle") {
                contextReal.fillStyle = each.color
                contextReal.beginPath()
                contextReal.arc(each.x, each.y, each.r, each.sAngle, each.eAngle)
                contextReal.fill()
            } else if (each.type === "draw") {
                contextReal.strokeStyle = each.color;
                contextReal.lineWidth = each.drawWidth;
                contextReal.beginPath();
                contextReal.moveTo(each.moveTo[0], each.moveTo[1]);
                for (i of each.lineTo) {
                    contextReal.lineTo(i[0], i[1]);
                    contextReal.moveTo(i[0], i[1]);
                    contextReal.stroke();
                }
            } else if (each.type === "line") {
                contextReal.strokeStyle = each.color;
                contextReal.lineWidth = each.drawWidth;
                contextReal.beginPath()
                contextReal.moveTo(each.moveTo[0], each.moveTo[1]);
                contextReal.lineTo(each.lineTo[0], each.lineTo[1])
                contextReal.stroke();
            } else if (each.type === "rect") {
                contextReal.fillStyle = each.color;
                contextReal.fillRect(each.x, each.y, each.xdist, each.ydist);
            } else if (each.type === "text") {
                contextReal.font = each.font
                contextReal.fillStyle = each.color
                contextReal.fillText(each.content, each.x, each.y)
            } else if (each.type === "curve") {
                contextReal.strokeStyle = each.color;
                contextReal.lineWidth = each.width;
                contextReal.beginPath();
                contextReal.moveTo(each.moveTo[0], each.moveTo[1]);
                contextReal.quadraticCurveTo(each.control[0], each.control[1], each.end[0], each.end[1]);
                contextReal.stroke();
            }
        }
    }
})

//Redo Function
redoButton.addEventListener('click', (e) => {
    if (popLog.length > 0) {
        let lastItem = popLog[popLog.length - 1]
        log.push(lastItem)
        popLog.pop()
        if (lastItem.type === "Circle") {
            contextReal.fillStyle = lastItem.color
            contextReal.beginPath()
            contextReal.arc(lastItem.x, lastItem.y, lastItem.r, lastItem.sAngle, lastItem.eAngle)
            contextReal.fill()
        } else if (lastItem.type === "draw") {
            contextReal.strokeStyle = lastItem.color;
            contextReal.lineWidth = lastItem.drawWidth;
            contextReal.beginPath();
            contextReal.moveTo(lastItem.moveTo[0], lastItem.moveTo[1]);
            for (i of lastItem.lineTo) {
                contextReal.lineTo(i[0], i[1]);
                contextReal.moveTo(i[0], i[1]);
                contextReal.stroke();
            }
        } else if (lastItem.type === "line") {
            contextReal.strokeStyle = lastItem.color;
            contextReal.lineWidth = lastItem.drawWidth;
            contextReal.beginPath()
            contextReal.moveTo(lastItem.moveTo[0], lastItem.moveTo[1]);
            contextReal.lineTo(lastItem.lineTo[0], lastItem.lineTo[1])
            contextReal.stroke();
        } else if (lastItem.type === "rect") {
            contextReal.fillStyle = lastItem.color;
            contextReal.fillRect(lastItem.x, lastItem.y, lastItem.xdist, lastItem.ydist);
        } else if (lastItem.type === "text") {
            contextReal.font = lastItem.font
            contextReal.fillStyle = lastItem.color
            contextReal.fillText(lastItem.content, lastItem.x, lastItem.y)
        } else if (lastItem.type === "curve") {
            contextReal.strokeStyle = lastItem.color;
            contextReal.lineWidth = lastItem.width;
            contextReal.beginPath();
            contextReal.moveTo(lastItem.moveTo[0], lastItem.moveTo[1]);
            contextReal.quadraticCurveTo(lastItem.control[0], lastItem.control[1], lastItem.end[0], lastItem.end[1]);
            contextReal.stroke();
        }
    
    }
})