'use strict';

var PARAM_WIZARD = {

  firstName: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],

  lastName: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],

  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],

  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']

};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

/**
 * Возвращает случайный элемент массива
 * @param {Array} array - массив.
 * @return {string} - случайный элемент массива.
 */
var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * (array.length))];
};

/**
 * Возвращает объект со случайными характеристиками мага
 * @param {Object} paramsWizard - объект с параметрами мага.
 * @return {{name: string, coatColor: string, eyesColor: string}} {Object}
 */
var getGenerateRandomWizard = function (paramsWizard) {
  var wizardSetup = {
    name: getRandomElement(paramsWizard.firstName) + ' ' + getRandomElement(paramsWizard.lastName),
    coatColor: getRandomElement(paramsWizard.coatColor),
    eyesColor: getRandomElement(paramsWizard.eyesColor)
  };
  return wizardSetup;
};

/**
 * Генерирует массив объектов случайных магов
 * @param {number} quantityWizards - количество магов в массиве
 * @return {Array} ArrayWizards - массив с магами
 */
var generateArrayRandomWizards = function (quantityWizards) {
  var arrayWizards = [];

  for (var i = 0; i < quantityWizards; i++) {
    arrayWizards.push(getGenerateRandomWizard(PARAM_WIZARD));
  }
  return arrayWizards;
};

var wizards = generateArrayRandomWizards(4);

/**
 * Создает копию узла с шаблоном параметров мага
 * @param {Object} wizard Объект с паваметрами мага
 * @return {Object} Объект мага с заполненными данными
 */
var createTemlateWizard = function (wizard) {
  var wizardTemplate = similarWizardTemplate.cloneNode(true);
  wizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardTemplate;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(createTemlateWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

