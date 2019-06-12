'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var fragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list'); // элемент, в который мы будем вставлять похожих магов.
var similarWizardTemplate = document.querySelector('#similar-wizard-template') // шаблон, который мы будем копировать
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getArrayRandomValue = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getArrayOfWizardsObjects = function (number, name, surname, coatColor, eyesColor) {
  var wizards = [];

  for (var i = 0; i < number; i++) {
    var wizard = {
      name: getArrayRandomValue(WIZARD_NAMES),
      surname: getArrayRandomValue(WIZARD_SURNAMES),
      coatColor: getArrayRandomValue(COAT_COLORS),
      eyesColor: getArrayRandomValue(EYES_COLORS),
    };
    wizards.push(wizard);
  }
  return wizards;
};

var setWizardInfo = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var wizards = getArrayOfWizardsObjects(4);
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(setWizardInfo(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
