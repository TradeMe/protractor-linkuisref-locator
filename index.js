'use strict';

module.exports = function (ptor) {
  ptor.By.addLocator('linkUiSref', function (toState, opt_parentElement) {
    var using = opt_parentElement || document;
    var possibleAnchors = using.querySelectorAll('a[ui-sref="' + toState +'"]');
    var result = undefined;

    if (possibleAnchors.length === 0) {
      result = null;
    } else if (possibleAnchors.length === 1) {
      result = possibleAnchors[0];
    } else {
      result = possibleAnchors;
    }

    return result;
  });
};