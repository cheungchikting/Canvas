class eraser extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.arr = []
    }

   
    onMouseEnter(x, y) {
        canvasReal.style.cursor = "none"
        contextDraft.strokeStyle = "black";
    }

    onMouseMove(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.strokeRect(x, y, width, width) 
    }
    
    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.strokeRect(x, y, width, width) 
        this.contextReal.clearRect(x, y, width, width);
        this.arr.push([x,y])
    }
    
    onMouseDown(x, y) {
        this.startingX = x;
        this.startingY = y;
        this.contextReal.clearRect(x, y, width, width);
    }

    onMouseUp(x, y) {
        log.push({
            type: "eraser",
            start: [this.startingX, this.startingY],
            path: this.arr,
            size: width
        })
        this.arr = []
    }

    onMouseLeave(x, y) {}

}


eraserButton.addEventListener('click', function () {
    currentFunction = new eraser (contextReal, contextDraft)

})