class quadratic extends MouseMethods {
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
        this.lineJoin = 'round';
        this.lineCap = 'round';

    }

    onMouseUp(x, y) {
        this.startX = x;
        this.startY = y;
        if (points.length < 3){
            points.push([x, y])
            console.log(points);
            this.contextReal.fillRect(x, y, 10, 10);
            this.contextReal.beginPath();
            this.contextReal.moveTo(points[0][0], points[0][1]);
            this.contextReal.quadraticCurveTo(points[1][0], points[1][1], points[2][0], points[2][1]);
            this.contextReal.stroke();
            points.length = 0;
        };

    }
}

let points = [];

quadButton.addEventListener('click', function () {
    currentFunction = new quadratic(contextReal, contextDraft)

})