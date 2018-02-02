'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getArrayMaxElementIndex = function (array) {

  var max = -1
  for (var i = 0; i < array.length; i++) {
    max = Math.max(array[i], max);
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var max = getArrayMaxElementIndex(times);

  var histogramHeight = 150;
  var step = histogramHeight / max;

  var columnWidth = 40;
  var cloudHeight = 270;
  var initialY = 20;
  var initialX = 130;
  var indent = 50;

  for (var i = 0; i < names.length; i++) {

    var columnHeight = times[i] * step;

    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(initialX + (columnWidth + indent) * i, cloudHeight - columnHeight - initialY, columnWidth, columnHeight);
  }
};
