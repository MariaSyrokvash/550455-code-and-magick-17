'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var inputUserName = setup.querySelector('.setup-user-name');

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
var inputWizardCoat = document.querySelector('input[name="coat-color"]');
var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
var inputWizardFireballColor = document.querySelector('input[name="fireball-color"]');

var getArrayRandomValue = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getArrayOfWizardsObjects = function (number) {
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
  var similarWizardTemplate = document.querySelector('#similar-wizard-template') // шаблон, который мы будем копировать
    .content
    .querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizardsList = function (wizards) {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list'); // элемент, в который мы будем вставлять похожих магов.
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(setWizardInfo(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizardsList(getArrayOfWizardsObjects(4));

setup.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  inputUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  wizardFireballColor.addEventListener('click', onWizardFireballColorClick);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  wizardCoat.removeEventListener('click', onWizardCoatClick);
  wizardEyes.removeEventListener('click', onWizardEyesClick);
  wizardFireballColor.removeEventListener('click', onWizardFireballColorClick);
};


setupOpen.addEventListener('click', openPopup);


setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});


inputUserName.addEventListener('focus', function (evt) {
  if (evt.target.tagName === 'INPUT') {
    document.addEventListener('keydown', onPopupEscPress);
  }
});


setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


var onWizardCoatClick = function () {
  var color = getArrayRandomValue(COAT_COLORS);
  wizardCoat.style.fill = color;
  inputWizardCoat.value = color;
};


var onWizardEyesClick = function () {
  var color = getArrayRandomValue(EYES_COLORS);
  wizardEyes.style.fill = color;
  inputWizardEyes.value = color;
};


var onWizardFireballColorClick = function () {
  var color = getArrayRandomValue(FIREBALL_COLORS);
  wizardFireballColor.style.background = color;
  inputWizardFireballColor.value = color;
};
