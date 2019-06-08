'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var INTERVAL = 50;

var times = ['2725', '4025', '1244', '1339'];
var names = ['Вы', 'Кекс', 'Катя', 'Игорь'];
var colors = ['rgba(255, 0, 0, 1)', 'rgb(0, 0, 255)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.4)'];

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


window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 115, 40);
  ctx.fillText('Список результатов:', 115, 60);

  // ctx.fillStyle = 'yellow';
  // ctx.fillText('Вы', CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * 0, 260);
  // ctx.fillText('Вы', CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * 0, 50);
  // ctx.fillRect(150, 80, BAR_WIDTH, 150);

  // ctx.fillStyle = 'red';
  // ctx.fillText('Кекс', CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * 1, 260);
  // ctx.fillText('1123', CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * 1, 50);
  // ctx.fillRect(240, 80, BAR_WIDTH, 150);

  // ctx.fillStyle = 'green';
  // ctx.fillText('Катя', CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * 2, 260);
  // ctx.fillText('13', CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * 2, 50);
  // ctx.fillRect(330, 80, BAR_WIDTH, 150);

  // ctx.fillStyle = 'blue';
  // ctx.fillText('Игорь', CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * 3, 260);
  // ctx.fillText('13ыфы', CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * 3, 50);
  // ctx.fillRect(420, 80, BAR_WIDTH, 150);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * i, 260);
    ctx.fillText(times[i], CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * i, 240 + ((-BAR_HEIGHT * times[i]) / maxTime) - GAP);
    ctx.fillStyle = colors[i];
    ctx.fillRect(CLOUD_X + INTERVAL + (INTERVAL + BAR_WIDTH) * i, 240, BAR_WIDTH, Math.ceil((-BAR_HEIGHT * times[i]) / maxTime));
  }
};
