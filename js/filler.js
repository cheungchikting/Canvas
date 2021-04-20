class filler extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }


    onMouseEnter(x, y) {
        canvasReal.style.cursor = "default"
    }

    onMouseDown(x, y) {

        this.startX = x
        this.startY = y

        this.startR = imgDataArray.data




        this.pixelStack = [
            [x, y]
        ];
        while (this.pixelStack.length) {
            this.newPos = this.pixelStack.pop();
            this.newX = this.newPos[0]
            this.newY = this.newPos[1]
            this.pixelPos = (this.newY * canvasDraft.width + this.newX) * 4;
            while (this.newY-- >= 0 && matchStartColor(this.pixelPos, this.startR, this.startG, this.startB)) {
                this.pixelPos -= canvasDraft.width * 4
            }
            this.pixelPos += canvasDraft.width * 4
            this.newY++
            this.reachLeft = false;
            this.reachRight = false;
            while (this.newY++ < canvasDraft.height - 1 && matchStartColor(this.pixelPos, this.startR, this.startG, this.startB)) {
                colorPixel(pixelPos)
                if (this.newX > 0) {
                    if (matchStartColor(this.pixelPos - 4, this.startR, this.startG, this.startB)) {
                        if (!this.reachLeft) {
                            this.pixelStack.push([this.newX - 1, this.newY]);
                            this.reachLeft = true;
                        }
                    } else if (this.reachLeft) {
                        this.reachLeft = false;
                    }
                } else if (this.newX < canvasDraft.width - 1) {
                    if (matchStartColor(this.pixelPos + 4, this.startR, this.startG, this.startB)) {
                        if (!this.reachRight) {
                            this.pixelStack.push([this.newX + 1, this.newY]);
                            this.reachRight = true;
                        } else if (this.reachRight) {
                            this.reachRight = false;
                        }
                    }
                }
                this.pixelPos += canvasDraft.width * 4
            }
        }
    }

    onMouseDrag(x, y) {

    }

    onMouseUp(x, y) {

    }


}


function matchStartColor(pixelPos, startR, startG, startB) {
    let r = imgDataArray.data[pixelPos];
    let g = imgDataArray.data[pixelPos + 1];
    let b = imgDataArray.data[pixelPos + 2];

    return (r == startR && g == startG && b == startB);
}

function colorPixel(pixelPos) {
    imgDataArray.data[pixelPos] = 205;
    imgDataArray.data[pixelPos + 1] = 19;
    imgDataArray.data[pixelPos + 2] = 19;
    imgDataArray.data[pixelPos + 3] = 255;
}

fillerButton.addEventListener('click', function () {
    currentFunction = new filler(contextReal, contextDraft)
})