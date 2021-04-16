class line extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    };

    onMouseEnter(x, y) {
        canvasReal.style.cursor = "cell"
    }

    onMouseDown(x, y) {
        this.contextDraft.strokeStyle = selectedColor;
        this.contextReal.strokeStyle = selectedColor;
        this.contextDraft.lineWidth = width;
        this.contextReal.lineWidth = width;
        this.startingX = x;
        this.startingY = y;
    };

    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.startingX, this.startingY);
        this.contextDraft.lineTo(x, y);
        this.contextDraft.stroke();

    };

    onMouseUp(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath()
        this.contextReal.moveTo(this.startingX, this.startingY);
        this.contextReal.lineTo(x, y)
        this.contextReal.stroke();
        log.push({
            type: "line",
            moveTo: [this.startingX, this.startingY],
            lineTo: [x, y],
            color: selectedColor,
            lineWidth: width
        })
    };
    onMouseLeave(x, y) {}

};

lineButton.addEventListener('click', function () {
    currentFunction = new line(contextReal, contextDraft);

})