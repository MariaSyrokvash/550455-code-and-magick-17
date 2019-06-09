'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var INTERVAL = 50;
var COORDINATE_X = 260;
var COORDINATE_Y = 240;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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


var getBarColor = function (ctx, names) {
  var blueRandom = 'rgba(0, 0, 255, ' + Math.random() + ')';

  if (names === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = blueRandom;
  }
  return blueRandom;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 115, 40);
  ctx.fillText('Список результатов:', 115, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillText(names[i], CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * i, COORDINATE_X);
    ctx.fillText(Math.round(times[i]), CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * i, COORDINATE_Y + ((-BAR_HEIGHT * times[i]) / maxTime) - GAP);
    ctx.fillStyle = getBarColor(ctx, names[i]);
    ctx.fillRect(CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * i, COORDINATE_Y, BAR_WIDTH, Math.round((-BAR_HEIGHT * times[i]) / maxTime));
  }
};
