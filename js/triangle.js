class triFunction extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseEnter(x, y) {
        canvasReal.style.cursor = "default"
    }

    onMouseDown(x, y) {
        this.contextDraft.strokeStyle = selectedColor;
        this.contextReal.strokeStyle = selectedColor;
        this.contextDraft.fillStyle = selectedColor;
        this.contextReal.fillStyle = selectedColor;
        this.contextDraft.lineWidth = width;
        this.contextReal.lineWidth = width;
        this.startingX = x;
        this.startingY = y;
    };

    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(x, y);
        this.contextDraft.lineTo(this.startingX, this.startingY);
        this.contextDraft.lineTo(x + (x - this.startingX), this.startingY);
        this.contextDraft.closePath();
        this.contextDraft.stroke();

    };

    onMouseUp(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath()
        this.contextReal.moveTo(x, y);
        this.contextReal.lineTo(this.startingX, this.startingY);
        this.contextReal.lineTo(x + (x - this.startingX), this.startingY);
        this.contextReal.closePath();
        this.contextReal.stroke();
        log.push({
            type: "triangle",
            start: [this.startingX, this.startingY],
            xy: [x,y],
            linewidth: width,
            color: selectedColor
        })
    };

    onMouseLeave(x, y) {}

}

$("#triangleButton").click(function () {
    currentFunction = new triFunction(contextReal, contextDraft);
});