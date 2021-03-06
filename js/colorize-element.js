'use strict';

window.colorizeElement = (function () {
  return function (element, colors, fillCallback) {
    var currentColor = colors[0];

    var activityHandler = function (e) {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      fillCallback(element, newColor);
      currentColor = newColor;
    };

    element.addEventListener('click', function (e) {
      activityHandler(e);
    });

    element.addEventListener('keydown', function (e) {
      if (window.utils.isActivateEvent(e)) {
        activityHandler(e);
      }
    });
  };
})();
