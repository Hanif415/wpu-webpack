"use strict";
(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([["hello"],{

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const mahasiswa = [{
  nama: 'Hanif',
  email: 'hanif@gmail.com',
  jurusan: 'Teknik Informatika'
}, {
  nama: 'Hanif2',
  email: 'hanif2@gmail.com',
  jurusan: 'Teknik Informatika'
}, {
  nama: 'Hanif3',
  email: 'hanif3@gmail.com',
  jurusan: 'Teknik Informatika'
}];
const mhs = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(mahasiswa, {
  nama: 'Hanif2'
});
console.log(mhs);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/hello.js"));
/******/ }
]);