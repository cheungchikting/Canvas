class text extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.textarr = []
    };

    onMouseEnter(x, y) {
        canvasReal.style.cursor = "text"
    }

    onMouseDown(x, y) {
        this.contextReal.font = font
        this.contextDraft.font = font
        this.contextReal.fillStyle = selectedColor
        this.contextDraft.fillStyle = selectedColor
        this.startX = x;
        this.startY = y;
    };

    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillText(this.textarr.join(""), x, y)
    };

    onMouseUp(x, y) {
        this.upX = x;
        this.upY = y;
    }

    onKeyDown(e) {
        canvasReal.style.cursor = "move"
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        
        if (e.key === "Backspace") {
            this.textarr.pop()
        } else if (e.key !== "Enter" &&
            e.key !== "Shift" &&
            e.key !== "Control" &&
            e.key !== "Meta" &&
            e.key !== "Alt" &&
            e.key !== "ArrowUp" &&
            e.key !== "ArrowDown" &&
            e.key !== "ArrowLeft" &&
            e.key !== "ArrowRight" &&
            e.key !== "CapsLock" &&
            e.key !== "Escape") {
            this.textarr.push(e.key)
        } else if (e.key === "Enter") {
            canvasReal.style.cursor = "text"
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.fillText(this.textarr.join(""), this.upX, this.upY)
            log.push({
                type: "text",
                content: this.textarr.join(""),
                x: this.upX,
                y: this.upY,
                font: font,
                color: selectedColor
            }) 
            console.log(log)
            this.textarr = []
        }
        this.contextDraft.fillText(this.textarr.join(""), this.upX, this.upY)
    }

    onMouseLeave(x, y) {}

};

textButton.addEventListener('click', function () {
    currentFunction = new text(contextReal, contextDraft);

})