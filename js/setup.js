'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var fragment = document.createDocumentFragment();

document.querySelector('.setup-similar').classList.remove('hidden'); // Покажем блок с похожими персонажами

var similarListElement = document.querySelector('.setup-similar-list'); // элемент, в который мы будем вставлять похожих магов.
var similarWizardTemplate = document.querySelector('#similar-wizard-template') // шаблон, который мы будем копировать
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


var renderWizard = function () {
  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[randomNumber(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[randomNumber(0, WIZARD_SURNAMES.length)];
    wizardElement.querySelector('.wizard-coat').style.fill = COAT_COLORS[getRandomNumber(0, COAT_COLORS.length)];
    wizardElement.querySelector('.wizard-eyes').style.fill = EYES_COLORS[getRandomNumber(0, EYES_COLORS.length)];

  return wizardElement;
};

// renderWizard();

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
