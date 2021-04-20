class filler extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.imgDataArray = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);

    }
    onMouseEnter(x, y) {
        canvasReal.style.cursor = "default"
    }

    onMouseDown(x, y) {
        this.startX = x
        this.startY = y
        this.startR = this.imgDataArray.data[(this.startY * canvasReal.width + this.startX) * 4]
        this.startG = this.imgDataArray.data[(this.startY * canvasReal.width + this.startX) * 4 + 1]
        this.startB = this.imgDataArray.data[(this.startY * canvasReal.width + this.startX) * 4 + 2]
        this.startO = this.imgDataArray.data[(this.startY * canvasReal.width + this.startX) * 4 + 3]
        this.pixelStack = [
            [x, y]
        ];
        // if the color is the same 
        if (this.startR == rgbArray[0] && this.startG == rgbArray[1] && this.startB == rgbArray[2] && this.startO == 255) {
            alert('same color');
            return;
        } else {

            while (this.pixelStack.length) {

                this.newPos = this.pixelStack.pop();
                this.newX = this.newPos[0]
                this.newY = this.newPos[1]
                this.pixelPos = (this.newY * canvasDraft.width + this.newX) * 4;
                // takes current mouse position to top 
                while (this.newY-- >= 0 && this.matchStartColor(this.pixelPos, this.startR, this.startG, this.startB)) {
                    this.pixelPos -= canvasDraft.width * 4
                }
                // 
                this.pixelPos += canvasDraft.width * 4
                this.newY++;
                this.reachLeft = false;
                this.reachRight = false;

                while (this.newY++ < canvasDraft.height - 1 && this.matchStartColor(this.pixelPos, this.startR, this.startG, this.startB)) {
                    this.colorPixel(this.pixelPos);
                    console.log(this.newY);
                    if (this.newX > 0) {
                        if (this.matchStartColor(this.pixelPos - 4, this.startR, this.startG, this.startB)) {
                            if (!this.reachLeft) {
                                this.pixelStack.push([this.newX - 1, this.newY]);
                                this.reachLeft = true;
                            }
                        } else if (this.reachLeft) {
                            this.reachLeft = false;
                        }
                    }
                    if (this.newX < canvasDraft.width - 1) {
                        if (this.matchStartColor(this.pixelPos + 4, this.startR, this.startG, this.startB)) {
                            if (!this.reachRight) {
                                this.pixelStack.push([this.newX + 1, this.newY]);
                                this.reachRight = true;
                            }
                        } else if (this.reachRight) {
                            this.reachRight = false;
                        }

                    }
                    this.pixelPos += canvasDraft.width * 4
                }
            }
            contextReal.putImageData(this.imgDataArray, 0, 0);
            rgbArray = []


        }

    }

    onMouseDrag(x, y) {

    }

    onMouseUp(x, y) {

    }

    matchStartColor(pixelPos, startR, startG, startB) {
        let r = this.imgDataArray.data[pixelPos];
        let g = this.imgDataArray.data[pixelPos + 1];
        let b = this.imgDataArray.data[pixelPos + 2];
        if (r == startR && g == startG && b == startB) {
            return true
        };
    }

    colorPixel(pixelPos) {
        this.imgDataArray.data[pixelPos] = rgbArray[0];
        this.imgDataArray.data[pixelPos + 1] = rgbArray[1];
        this.imgDataArray.data[pixelPos + 2] = rgbArray[2];
        this.imgDataArray.data[pixelPos + 3] = 255;
    }

}



fillerButton.addEventListener('click', function () {
    currentFunction = new filler(contextReal, contextDraft)
    hexToRgbA(selectedColor)
})