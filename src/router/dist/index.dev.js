"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("@/components/HelloWorld"));

var _Init = _interopRequireDefault(require("@/components/Init"));

var _Register = _interopRequireDefault(require("@/components/Forms/Register"));

var _PassRecover = _interopRequireDefault(require("@/components/Forms/PassRecover"));

var _NewPass = _interopRequireDefault(require("@/components/Forms/NewPass"));

var _Game = _interopRequireDefault(require("@/components/Game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'HelloWorld',
  component: _HelloWorld["default"]
}, {
  path: '/init',
  name: 'init',
  component: _Init["default"]
}, {
  path: '/register',
  name: 'register',
  component: _Register["default"]
}, {
  path: '/passrecover',
  name: 'password-recover',
  component: _PassRecover["default"]
}, {
  path: '/newpass',
  name: 'newpass',
  component: _NewPass["default"]
}, {
  path: '/game',
  name: 'game',
  component: _Game["default"]
}];
var router = new _vueRouter["default"]({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;