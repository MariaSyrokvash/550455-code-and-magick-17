'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var renderWizardsList = function () {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list'); // элемент, в который мы будем вставлять похожих магов.
  var wizards = getArrayOfWizardsObjects(4);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(setWizardInfo(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

renderWizardsList();


var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
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

var wizardCoat = document.querySelector('.wizard-coat');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getArrayRandomValue(COAT_COLORS);

});

var wizardEyes = document.querySelector('.wizard-eyes');

wizardCoat.addEventListener('click', function () {
  wizardEyes.style.fill = getArrayRandomValue(EYES_COLORS);
});

var wizardFireballColor = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardFireballColor.value = getArrayRandomValue(FIREBALL_COLORS);
  wizardFireballColor.style.background = getArrayRandomValue(FIREBALL_COLORS);
});


// var userNameInput = setup.querySelector('.setup-user-name');

// userNameInput.addEventListener('invalid', function (evt) {
//   if (userNameInput.validity.tooShort) {
//     userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else if (userNameInput.validity.tooLong) {
//     userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
//   } else if (userNameInput.validity.valueMissing) {
//     userNameInput.setCustomValidity('Обязательное поле');
//   } else {
//     userNameInput.setCustomValidity('');
//   }
// });

// userNameInput.addEventListener('input', function (evt) {
//   var target = evt.target;
//   if (target.value.length < 2) {
//     target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//   } else {
//     target.setCustomValidity('');
//   }
// });
