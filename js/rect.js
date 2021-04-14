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
        this.contextDraft.fillStyle = selectedColor;
        this.contextReal.fillStyle = selectedColor;
        this.startX = x;
        this.startY = y;
    };

    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(this.startX, this.startY, x - this.startX, y - this.startY);
    };

    onMouseUp(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.fillRect(this.startX, this.startY, x - this.startX, y - this.startY);
    };

    onMouseLeave(x, y) {}

};


rectButton.addEventListener('click', function () {
    currentFunction = new rectangle(contextReal, contextDraft);

})