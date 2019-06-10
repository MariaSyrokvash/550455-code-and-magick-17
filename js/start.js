'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var HISTOGRAM_HEIGHT = 150;
var BAR_INTERVAL = 50;
var TEXT_COLOR = '#000';
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, color, font, baseline, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillText(text, x, y);
};

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};


var getBlueShade = function () {
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};

var renderBar = function (ctx, color, name, time, index, barHeight, x) {
  var getX = x + BAR_INTERVAL + (BAR_WIDTH + BAR_INTERVAL) * index;
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(name, getX, CLOUD_HEIGHT - barHeight - BAR_WIDTH);
  ctx.fillText(time, getX, CLOUD_HEIGHT - GAP);
  ctx.fillStyle = color;
  ctx.fillRect(getX, CLOUD_HEIGHT - barHeight - GAP * 2, BAR_WIDTH, barHeight);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  renderText(ctx, TEXT_COLOR, '16px PT Mono', 'top', 'Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  renderText(ctx, TEXT_COLOR, '16px PT Mono', 'top', 'Список результатов', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getBlueShade();
    var barHeight = HISTOGRAM_HEIGHT * times[i] / maxTime;

    renderBar(ctx, barColor, names[i], Math.floor(times[i]), i, barHeight, CLOUD_X, CLOUD_Y);
  }
};
