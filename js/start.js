'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_X = 130;
var TEXT_Y = 40;
var TEXT_FONT = '16px PT Mono';
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var NAME_X = 150;
var NAME_Y = 260;
var BAR_X = 150;
var BAR_Y = 240;
var BLACK = '#000000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMax = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getText = function (ctx, font, color, x, y, text) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var getRandomPercents = function () {
  return Math.floor(Math.random() * 101);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  getText(ctx, TEXT_FONT, BLACK, TEXT_X, TEXT_Y, 'Ура вы победили!');
  getText(ctx, TEXT_FONT, BLACK, TEXT_X, TEXT_Y + 2 * GAP, 'Список результатов:');
  var maxTime = getMax(times);
  for (var i = 0; i < names.length; i++) {
    getText(ctx, TEXT_FONT, BLACK, NAME_X + (BAR_WIDTH + BAR_GAP) * i, NAME_Y, names[i]);
    ctx.fillStyle = 'hsl(240, ' + getRandomPercents() + '%, ' + getRandomPercents() + '%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -times[i] * BAR_HEIGHT / maxTime);
  }
};
