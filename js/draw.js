class draw extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.arr = []
    }

    onMouseEnter(x, y) {
        canvasReal.style.cursor = "default"
    }

    onMouseDown(x, y) {
        this.contextReal.strokeStyle = selectedColor;
        this.contextReal.lineWidth = width;
        this.startingX = x;
        this.startingY = y;
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.startingX, this.startingY);
    }

    onMouseDrag(x, y) {
        this.contextReal.lineTo(x, y);
        this.contextReal.stroke();
        this.arr.push([x,y])
    }

    onMouseUp(x, y) {
        log.push({
            type: "draw",
            moveTo: [this.startingX, this.startingY],
            lineTo: this.arr,
            color: selectedColor,
            drawWidth: width
        })
        this.arr = []
    }
}

drawButton.addEventListener('click', function () {
    currentFunction = new draw(contextReal, contextDraft)
})