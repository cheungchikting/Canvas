//side of shape
let sides = 5;
//uses a circle to calculate
let step = 2 * Math.PI / sides;
//rotation of the shape
let shift = (Math.PI / 180.0) * -18;

class pentagonFunction extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        console.log(shift);
        console.log(step);
    }

    onMouseEnter(x,y){
        canvasReal.style.cursor = "default"
    }
  
    onMouseDown(x, y) {
        this.contextDraft.strokeStyle = selectedColor;
        this.contextReal.strokeStyle = selectedColor;
        this.contextDraft.fillStyle = selectedColor;
        this.contextReal.fillStyle = selectedColor;
        this.contextDraft.lineWidth = width;
        this.contextReal.lineWidth = width;
        this.startingX = x; 
        this.startingY = y; 
    };


    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        for (let i = 0; i <= sides; i++) {
            // calculates the angle of the shape;
            let curStep = i * step + shift;
            console.log(curStep);
            //scaling control
            this.contextDraft.lineTo (x + ( x - this.startingX) * Math.cos(curStep), y + ( y - this.startingY) * Math.sin(curStep));
            console.log.apply(this.contextDraft.lineTo);
        }
        this.contextDraft.fill();
        this.contextDraft.stroke();
  
       
   
    };

    onMouseUp(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        for (let i = 0; i <= sides; i++) {
            let curStep = i * step + shift;
            console.log(curStep);
            this.contextReal.lineTo (x + (x - this.startingX) * Math.cos(curStep), y + (y - this.startingY) * Math.sin(curStep));
            console.log.apply(this.contextReal.lineTo);
        }
        this.contextReal.fill();
        this.contextReal.stroke();
    };

    onMouseLeave(x, y) {}

}

$("#pentagonButton").click(function () {
    console.log("pentagon Button clicked");
    currentFunction = new pentagonFunction(contextReal, contextDraft);
  });

  console.log("wtf");