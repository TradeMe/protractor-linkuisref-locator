'use strict';

module.exports = function (ptor) {
  ptor.By.addLocator('linkUiSref', function (toState, opt_parentElement) {
    var using = opt_parentElement || document;
	var uiSrefNodes = using.querySelectorAll('a[ui-sref="' + toState +'"]');
	var dataUiSrefNodes = using.querySelectorAll('a[data-ui-sref="' + toState +'"]');
    var possibleAnchors = Array.prototype.slice.call(uiSrefNodes)
							.concat(Array.prototype.slice.call(dataUiSrefNodes));

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