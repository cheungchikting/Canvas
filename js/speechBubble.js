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
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.startX + 50, this.startY);
    this.contextReal.quadraticCurveTo(this.startX, this.startY, this.startX, this.startY + 37.5);
    this.contextReal.quadraticCurveTo(this.startX, this.startY + 75, this.startX + 25, this.startY + 75);
    this.contextReal.quadraticCurveTo(this.startX + 25, this.startY + 95, this.startX + 5, this.startY + 100);
    this.contextReal.quadraticCurveTo(this.startX + 35, this.startY + 95, this.startX + 40, this.startY + 75);
    this.contextReal.quadraticCurveTo(this.startX + 100, this.startY + 75, this.startX + 100, this.startY + 37.5);
    this.contextReal.quadraticCurveTo(this.startX + 100, this.startY, this.startX + 50, this.startY);
    this.contextReal.stroke();
  }

  onMouseUp(x, y) {
    log.push({
      type: "bubble",
      start: [this.startX, this.startY],
      width: width,
      color: selectedColor,
    })
  }



  onMouseLeave(x, y) {}
}

$("#speechButton").click(function () {
  console.log("speechBubble Button clicked");
  currentFunction = new SpeechBubbleFunction(contextReal, contextDraft);
});