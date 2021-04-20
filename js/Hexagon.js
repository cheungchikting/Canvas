let hexSides = 6;
let hexStep = 2 * Math.PI / hexSides;
let hexShift = (Math.PI / 180.0) * -0.1;


class hexagonFunction extends MouseMethods {
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
        for (let i = 0; i <= hexSides; i++) {
            let curStep = i * hexStep + hexShift;
            console.log(curStep);
            this.contextDraft.lineTo (x + (x - this.startingX) * Math.cos(curStep), y + (y - this.startingY) * Math.sin(curStep));
            console.log.apply(this.contextDraft.lineTo);
        }
        this.contextDraft.closePath();
        this.contextDraft.stroke();
        
  
       
   
    };

    onMouseUp(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.beginPath();
        for (let i = 0; i <= hexSides; i++) {
            let curStep = i * hexStep + hexShift;
            console.log(curStep);
            this.contextReal.lineTo (x + (x - this.startingX) * Math.cos(curStep), y + (y - this.startingY) * Math.sin(curStep));
            console.log.apply(this.contextReal.lineTo);
        }
        this.contextReal.closePath();
        this.contextReal.stroke();

        log.push({
            type: "hexagon",
            start: [this.startingX, this.startingY ],
            xy: [x,y],
            color: selectedColor,
            width: width
        })
    };

    onMouseLeave(x, y) {}

}

$("#hexagonButton").click(function () {
    console.log("hexagon Button clicked");
    currentFunction = new hexagonFunction(contextReal, contextDraft);
  });
