import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><head></head><body><div id="root"></div></body></html>');
global.window = document.defaultView;
global.sessionStorage = {
	getItem: function (key) {
            return this[key];
    },
    setItem: function (key, value) {
        this[key] = value;
    }
};
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});
global.navigator = {
  userAgent: 'node.js'
};