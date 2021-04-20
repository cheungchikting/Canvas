// this.scaleX = this.startX + (x - this.startX);
// this.scaleY = this.startY + (y - this.startY);



class SpeechBubbleFunction extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseEnter(x, y) {
    canvasReal.style.cursor = "default"
  }


  onMouseDown(x, y) {

    this.startX = x;
    this.startY = y;
    this.contextReal.lineWidth = width;
    this.contextReal.strokeStyle = selectedColor;

  };

  onMouseDrag(x, y) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.startX + (x - this.startX) + 50, this.startY + (y - this.startY));
    this.contextDraft.quadraticCurveTo(this.startX + (x - this.startX), this.startY + (y - this.startY), this.startX + (x - this.startX), this.startY + (y - this.startY) + 37.5);
    this.contextDraft.quadraticCurveTo(this.startX + (x - this.startX), this.startY + (y - this.startY) + 75, this.startX + (x - this.startX) + 25, this.startY + (y - this.startY) + 75);
    this.contextDraft.quadraticCurveTo(this.startX + (x - this.startX) + 25, this.startY + (y - this.startY) + 95, this.startX + (x - this.startX) + 5, this.startY + (y - this.startY) + 100);
    this.contextDraft.quadraticCurveTo(this.startX + (x - this.startX) + 35, this.startY + (y - this.startY) + 95, this.startX + (x - this.startX) + 40, this.startY + (y - this.startY) + 75);
    this.contextDraft.quadraticCurveTo(this.startX + (x - this.startX) + 100, this.startY + (y - this.startY) + 75, this.startX + (x - this.startX) + 100, this.startY + (y - this.startY) + 37.5);
    this.contextDraft.quadraticCurveTo(this.startX + (x - this.startX) + 100, this.startY + (y - this.startY), this.startX + (x - this.startX) + 50, this.startY + (y - this.startY));
    this.contextDraft.stroke();


  }

  onMouseUp(x, y) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    this.contextReal.beginPath();

    this.contextReal.moveTo(x+ 50, y);

    this.contextReal.quadraticCurveTo(x, y, x, y + 37.5);
    this.contextReal.quadraticCurveTo(x, y + 75, x + 25, y + 75);
    this.contextReal.quadraticCurveTo(x + 25, y + 95, x + 5, y + 100);
    this.contextReal.quadraticCurveTo(x + 35, y + 95, x + 40, y + 75);
    this.contextReal.quadraticCurveTo(x + 100, y + 75, x + 100, y + 37.5);
    this.contextReal.quadraticCurveTo(x + 100, y, x + 50, y);
    this.contextReal.stroke();

    log.push({
      type: "bubble",
      xy: [x,y],
      width: width,
      color: selectedColor,
    })
  }



  onMouseLeave(x, y) {}
}

$("#speechButton").click(function () {
  currentFunction = new SpeechBubbleFunction(contextReal, contextDraft);
});