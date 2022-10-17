"use strict";

var _vueGlobal = _interopRequireDefault(require("https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = {
  // 在同一個資料夾要用./ 不能直接複製路徑
  src: './sql-server.png',
  title: 'text content'
}; // 如何使用cdnjs plugin
// open find cmd+shift+p
// enter cdnjs
// search library
// enter jquery
// chsoose jquery 
// 改變html content
// jquery method
// two way: text(better) and html

$('.title_name').text(data.title); // change attribute

$('.logo').attr('src', data.src); // vue
// mvvm
// model view vue
// vue 串接model and view
// import Vue from 'vue'

var vm = new _vueGlobal["default"]({
  // element tag
  el: '#app',
  data: data
});