"use strict";

var _vue = _interopRequireDefault(require("vue"));

require("./plugins/bootstrap-vue");

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _vMask = require("v-mask");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue["default"].directive('mask', _vMask.VueMaskDirective);

_vue["default"].config.productionTip = false;
/* eslint-disable no-new */

new _vue["default"]({
  el: '#app',
  router: _router["default"],
  components: {
    App: _App["default"]
  },
  template: '<App/>'
});