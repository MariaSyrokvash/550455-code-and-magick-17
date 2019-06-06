'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
// var BAR_WIDTH = 40;
// var BAR_HEIGHT = 150;
// var INTERVAL = 50;

var times = ['2725', '4025', '1244', '1339'];
var names = ['Мария', 'Кекс', 'Катя', 'Игорь'];
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


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 115, 40);
  ctx.fillText('Список результатов:', 115, 60);
};
