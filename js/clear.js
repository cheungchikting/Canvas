clearButton.addEventListener('click', function () {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
})