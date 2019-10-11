'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarListElement.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

})();
