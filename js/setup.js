'use strict';

(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.getElementsByName('coat-color')[0];
  var eyesInput = document.getElementsByName('eyes-color')[0];
  var fireballInput = document.getElementsByName('fireball-color')[0];
  var form = userDialog.querySelector('.setup-wizard-form');

  var chooseRandom = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var renderFragment = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var getError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: white;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '40px';
    node.style.color = 'red';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var changeFill = function (currentColor, element) {
    element.style.fill = currentColor;
  };

  var changeValue = function (newValue, element) {
    element.value = newValue;
  };

  var changeBackground = function (currentColor, element) {
    element.style.backgroundColor = currentColor;
  };

  wizardCoat.addEventListener('click', function () {
    var currentColor = chooseRandom(COAT_COLOR);
    changeFill(currentColor, wizardCoat);
    changeValue(currentColor, coatInput);
  });

  wizardEyes.addEventListener('click', function () {
    var currentColor = chooseRandom(EYES_COLOR);
    changeFill(currentColor, wizardEyes);
    changeValue(currentColor, eyesInput);
  });

  fireballWrap.addEventListener('click', function () {
    var currentColor = chooseRandom(FIREBALL_COLOR);
    changeBackground(currentColor, fireballWrap);
    changeValue(currentColor, fireballInput);
  });

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

  window.backend.load(renderFragment, getError);
})();
