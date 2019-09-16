var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_X = 130;
var TEXT_Y = 40;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var NAME_X = 150;
var NAME_Y = 260;
var BAR_X = 150;
var BAR_Y = 240;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = "16px PT Mono";
  ctx.fillStyle = "#000000";
  ctx.fillText("Ура вы победили!", TEXT_X, TEXT_Y);
  ctx.fillText("Список результатов:", TEXT_X, TEXT_Y + 2 * GAP);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = "#000000";
    ctx.fillText(names[i], NAME_X + (BAR_WIDTH + BAR_GAP) * i, NAME_Y);
    ctx.fillStyle = "hsl(240, " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -times[i] * BAR_HEIGHT/maxTime);
    if (names[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
      ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -times[i] * BAR_HEIGHT/maxTime);
    }
  }
};
