$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

function resetAndRender() {
  reset();
  render($("#display"), image);
}

function applyAndRender() {
  // Call your filters here
  applyFilter(reddify);
  applyFilter(increaseGreenByBlue);
  applyFilter(smudge);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(invert);
  
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// Core Logic: The Loop Functions
/////////////////////////////////////////////////////////

function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      let pixelArray = rgbStringToArray(image[i][j]);
      filterFunction(pixelArray, i, j);
      image[i][j] = rgbArrayToString(pixelArray);
    }
  }
}

function applyFilterNoBackground(filterFunction) {
  let backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        let pixelArray = rgbStringToArray(image[i][j]);
        filterFunction(pixelArray, i, j);
        image[i][j] = rgbArrayToString(pixelArray);
      }
    }
  }
}

/////////////////////////////////////////////////////////
// Helper and Filter Functions
/////////////////////////////////////////////////////////

function keepInBounds(num) {
  return num < 0 ? 0 : (num > 255 ? 255 : num);
}

function reddify(pixelArray, i, j) {
  pixelArray[RED] = 200;
}

function decreaseBlue(pixelArray, i, j) {
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE] - 50);
}

function increaseGreenByBlue(pixelArray, i, j) {
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN] + pixelArray[BLUE]);
}

function invert(pixelArray, i, j) {
  pixelArray[RED] = 255 - pixelArray[RED];
  pixelArray[GREEN] = 255 - pixelArray[GREEN];
  pixelArray[BLUE] = 255 - pixelArray[BLUE];
}

function smudge(pixelArray, i, j) {
  if (i + 1 < image.length) {
    let neighborArray = rgbStringToArray(image[i + 1][j]);
    pixelArray[RED] = Math.floor((pixelArray[RED] + neighborArray[RED]) / 2);
    pixelArray[GREEN] = Math.floor((pixelArray[GREEN] + neighborArray[GREEN]) / 2);
    pixelArray[BLUE] = Math.floor((pixelArray[BLUE] + neighborArray[BLUE]) / 2);
  }
}