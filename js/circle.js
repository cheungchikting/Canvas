class circle extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    };

    onMouseEnter(x, y) {
        canvasReal.style.cursor = "cell"
    }

    onMouseDown(x, y) {
        this.contextDraft.lineWidth = width;
        this.contextReal.lineWidth = width;
        this.contextDraft.strokeStyle = selectedColor;
        this.contextReal.strokeStyle = selectedColor;
        this.contextReal.beginPath();
        this.startX = x;
        this.startY = y;
    };

    onMouseDrag(x, y) {
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.arc(this.startX, this.startY, Math.abs(x - this.startX), 0, 2 * Math.PI);
        this.contextDraft.stroke()
    };

    onMouseUp(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.arc(this.startX, this.startY, Math.abs(x - this.startX), 0, 2 * Math.PI);
        this.contextReal.stroke()
    
        log.push({
            type: "Circle",
            x: this.startX,
            y: this.startY,
            r: Math.abs(x - this.startX),
            sAngle: 0,
            eAngle: 2 * Math.PI,
            color: selectedColor,
            linewidth: width
        })
    };
    onMouseLeave(x, y) {}
};


circleButton.addEventListener('click', function () {
    currentFunction = new circle(contextReal, contextDraft);

})