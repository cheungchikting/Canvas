zoomInButton.addEventListener('click', function () {
    console.log("Zoom in clicked");
  
  let element = document.querySelectorAll(".canvas");
  console.log(element);
  for (each of element) {
    each.classList.toggle("magnify-on");
  }
  
    
});

