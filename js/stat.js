'use strict';

var CLOUD_WIDTH_START = 110;
var CLOUD_HEIGHT_START = 20;
var CLOUD_WIDTH_END = 420;
var CLOUD_HEIGHT_END = 270;
var INDENT_SHADOW = 10;
var INDENT_TIME = 5;
var HISTOGRAMHEIGHT = 150;
var TEXT_START_X = 130;
var TEXT_START_Y = 40;
var HEIGHT_STROKE = 20;

/**
 * Рендерит облако с тенью
 * @constructor
 * @param ctx
 * @param {number} startX - начало облака по x.
 * @param {number} startY - начало облака по Y.
 * @param {number} endX - конец облака по x.
 * @param {number} endY - конец облака по Y.
 * @param {number} color - цвет.
 */

var renderCloud = function (ctx, startX, startY, endX, endY, color) {
  ctx.fillStyle = color;
  ctx.fillRect(startX, startY, endX, endY);
};

/**
 * Поиск максимального значения массива
 * @constructor
 * @param {number} array - массив.
 * @return {number} max - возврвщает максимальный элемент массива.
 */

var getMaxElementArray = function (array) {
  var max = -1;
  for (var i = 0; i < array.length; i++) {
    max = Math.max(array[i], max);
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_WIDTH_START, CLOUD_HEIGHT_START, CLOUD_WIDTH_END, CLOUD_HEIGHT_END, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_WIDTH_START - INDENT_SHADOW, CLOUD_HEIGHT_START - INDENT_SHADOW, CLOUD_WIDTH_END, CLOUD_HEIGHT_END, '#fff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', TEXT_START_X, TEXT_START_Y);
  ctx.fillText('Список результатов:', TEXT_START_X, TEXT_START_Y + HEIGHT_STROKE);

  var max = getMaxElementArray(times);

  var step = HISTOGRAMHEIGHT / max;

  var columnWidth = 40;
  var cloudHeight = 270;
  var initialX = 130;
  var initialY = 20;
  var indent = 50;

  for (var i = 0; i < names.length; i++) {

    var columnHeight = times[i] * step;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }

    ctx.fillRect(initialX + (columnWidth + indent) * i, cloudHeight - columnHeight - initialY, columnWidth, columnHeight);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(times[i].toFixed(), initialX + (columnWidth + indent) * i, cloudHeight - columnHeight - initialY - INDENT_TIME);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], initialX + (columnWidth + indent) * i, cloudHeight);
  }
};
