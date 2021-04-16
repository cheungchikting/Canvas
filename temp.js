contextReal.beginPath();
for (let i = 0; i <= sides; i++) {
    let curStep = i * step + shift;
    console.log(curStep);
    contextReal.lineTo(lastItem.xy[0] + (lastItem.xy[0] - lastItem.start[0]) * Math.cos(curStep), lastItem.xy[1] + (lastItem.xy[1] - lastItem.start[1]) * Math.sin(curStep));
    console.log.apply(contextReal.lineTo);
}