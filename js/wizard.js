'use strict';

(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var coatInput = document.getElementsByName('coat-color')[0];
  var eyesInput = document.getElementsByName('eyes-color')[0];
  var fireballInput = document.getElementsByName('fireball-color')[0];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var chooseRandom = function (array) {
    return array[Math.floor(Math.random() * array.length)];
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
    wizard.onCoatChange(currentColor);
  });

  wizardEyes.addEventListener('click', function () {
    var currentColor = chooseRandom(EYES_COLOR);
    changeFill(currentColor, wizardEyes);
    changeValue(currentColor, eyesInput);
    wizard.onEyesChange(currentColor);
  });

  fireballWrap.addEventListener('click', function () {
    var currentColor = chooseRandom(FIREBALL_COLOR);
    changeBackground(currentColor, fireballWrap);
    changeValue(currentColor, fireballInput);
  });

  return (window.wizard = wizard);

})();
