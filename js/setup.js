'use strict';

// Открытие окна настройки персонажа.
var setupOpenBtn = document.querySelector('.setup-open');
var setupWindow = document.querySelector('.overlay');

setupOpenBtn.addEventListener('click', function (e) {
  setupWindow.classList.toggle('invisible');
});

// Закрытие окна настройки персонажа.
var closeBtn = document.querySelector('.setup-close');

closeBtn.addEventListener('click', function (e) {
  setupWindow.classList.add('invisible');
});

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27 && !setupWindow.classList.contains('invisible')) {
    setupWindow.classList.add('invisible');
  }
});

// Валидация ввода имени персонажа.
var setupUser = document.querySelector('.setup-user');
var wizardNameInput = setupUser.querySelector('.setup-user-name');
var saveBtn = document.querySelector('.setup-submit');
wizardNameInput.addEventListener('click', function (e) {
  wizardNameInput.value = '';
  wizardNameInput.placeholder = 'Введите имя мага';
});
saveBtn.addEventListener('click', function (e) {
  wizardNameInput.required = true;
  if (wizardNameInput.value.length > 50) {
    e.preventDefault();
    wizardNameInput.value = '';
    wizardNameInput.placeholder = 'Max 50 символов!';
  }
});

// Изменение цвета мантии персонажа по нажатию.
var wizardAppearance = document.querySelector('.setup-wizard-appearance');
var wizardCoatColor = wizardAppearance.querySelector('#wizard-coat');
var wizardCoatColorSamples = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

wizardCoatColor.addEventListener('click', function (e) {
  reColor(wizardCoatColorSamples, wizardCoatColor);
});

// Изменение цвета глаз персонажа по нажатию.
var wizardEyesColorSamples = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardEyesColor = wizardAppearance.querySelector('#wizard-eyes');

wizardEyesColor.addEventListener('click', function (e) {
  reColor(wizardEyesColorSamples, wizardEyesColor);
});

// Изменение цвета фаерболов по нажатию.
var fireballColor = document.querySelector('.setup-fireball-wrap');
var fireballColorSample = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
fireballColor.style.backgroundColor = fireballColorSample[0];
var count = 1;

fireballColor.addEventListener('click', function (e) {
  count < fireballColorSample.length ? fireballColor.style.backgroundColor = fireballColorSample[count++] : count = 0;
  return this;
});

function reColor(arr, obj) {
  var flag = true;
  while (flag) {
    var randColor = arr[Math.floor(Math.random() * arr.length)];
    if (obj.style.fill !== randColor) {
      obj.style.fill = randColor;
      flag = false;
    }
  }
}

function reColorFireball(count) {

}