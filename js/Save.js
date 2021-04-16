saveButton.addEventListener('click', function () {
    console.log("saved");
    let link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvasReal.toDataURL();
    link.click();
    link.delete;

});

