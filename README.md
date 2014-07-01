protractor-linkuisref-locator
===

Adds a locator to a protractor instance that finds `anchor` elements by their `ui-sref` attribute.

## Installation

`$ npm install protractor-linkuisref-locator`

## Usage

```javascript
onPrepare: function () {
  // Your other stuff.
  require('protractor-linkuisref-locator')(protractor);
}
```

The locator will be available in your specs as `by.linkUiSref(toState, [parentElement])`.

`toState` is a `String` that represents a [ui-router](https://github.com/angular-ui/ui-router) state.

`parentElement` represents an `HTML element`. It is optional and defaults to the `document` element.

The locator returns:
* `null` if no anchor is found.
* An `anchor` element if only one is found.
* An `Array` of anchor elements if more than one is found.

## Example Calls

```javascript
by.linkUiSref('users.show({id: 42})', element(by.css('.users')));
```

```javascript
by.linkUiSref('users.index.page({page: 2})');
```

## Tests

`$ npm run test`
