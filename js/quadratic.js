class quadratic extends MouseMethods {
    constructor(contextReal, contextReal2, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextReal2 = contextReal2;
        this.contextDraft = contextDraft;
    }

    onMouseEnter(x, y) {
        canvasReal.style.cursor = "default"
    }

    onMouseDown(x, y) {
        this.contextReal.strokeStyle = selectedColor;
        this.contextReal.lineWidth = width;
        this.contextReal2.strokeStyle = selectedColor;
        this.contextReal2.lineWidth = width;
        this.lineJoin = 'round';
        this.lineCap = 'round';

    }

    onMouseUp(x, y) {
        this.startX = x;
        this.startY = y;
        if (points.length < 3) {
            points.push([x, y])
            console.log(points);
            this.contextReal2.fillRect(x, y, 10, 10);
            this.contextReal.beginPath();
            this.contextReal.moveTo(points[0][0], points[0][1]);
            this.contextReal.quadraticCurveTo(points[1][0], points[1][1], points[2][0], points[2][1]);
            this.contextReal.stroke();
            for (let i = 0; i < 3; i++) {
                this.contextReal2.clearRect(points[i][0], points[i][1], 10, 10);
            }
            log.push({
                type: "curve",
                moveTo: [points[0][0], points[0][1]],
                control: [points[1][0], points[1][1]],
                end: [points[2][0], points[2][1]],
                color: selectedColor,
                curvewidth: width
            })
            points.length = 0;

        };

    }
}

let points = [];

quadButton.addEventListener('click', function () {
    currentFunction = new quadratic(contextReal, contextDraft)

})