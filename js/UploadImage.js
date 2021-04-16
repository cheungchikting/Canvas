let imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e){
    let reader = new FileReader();
    reader.onload = function(event){
        let img = new Image();
        img.onload = function(){
           
            contextReal.drawImage(img,canvasReal.width / 2 - img.width / 2,
                canvasReal.height / 2 - img.height / 2);
        };
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}
