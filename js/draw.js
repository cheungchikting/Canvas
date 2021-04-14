class draw extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseEnter(x,y){
        canvasReal.style.cursor = "default"
    }
    
    onMouseDown(x, y) {
        this.contextReal.strokeStyle = selectedColor;
        this.contextReal.lineWidth = width;
        this.contextReal.beginPath();
        this.contextReal.moveTo(x, y);
    }

    onMouseDrag(x, y) {
        this.contextReal.lineTo(x, y);
        this.contextReal.stroke();
    }

    onMouseLeave(x, y) {}
}

drawButton.addEventListener('click', function () {
    currentFunction = new draw(contextReal, contextDraft)

})