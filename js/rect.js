class rectangle extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    };

    onMouseEnter(x,y){
        canvasReal.style.cursor = "default"
    }

    onMouseDown(x, y) {
        this.contextDraft.lineWidth = width;
        this.contextReal.lineWidth = width;
        this.contextDraft.strokeStyle = selectedColor;
        this.contextReal.strokeStyle = selectedColor;
        this.startX = x;
        this.startY = y;
    };

    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.strokeRect(this.startX, this.startY, x - this.startX, y - this.startY);
    };

    onMouseUp(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.strokeRect(this.startX, this.startY, x - this.startX, y - this.startY);
        log.push({
            type: "rect",
            x: this.startX,
            y: this.startY,
            xdist: x - this.startX,
            ydist: y - this.startY,
            color: selectedColor,
            linewidth: width,
        })
    };

    onMouseLeave(x, y) {}

};


rectButton.addEventListener('click', function () {
    currentFunction = new rectangle(contextReal, contextDraft);

})