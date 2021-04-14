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
        this.contextDraft.strokeStyle = selectedColor
        this.startX = x;
        this.startY = y;
    };

    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.strokeText(this.textarr.join(""), x, y)
    };

    onMouseUp(x, y) {
        this.upX = x;
        this.upY = y;
    }

    onKeyDown(e) {
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
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.fillText(this.textarr.join(""), this.upX, this.upY)
            this.textarr = []
        }
        this.contextDraft.strokeText(this.textarr.join(""), this.upX, this.upY)
    }

    onMouseLeave(x, y) {}

};

textButton.addEventListener('click', function () {
    currentFunction = new text(contextReal, contextDraft);

})