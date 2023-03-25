"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/aycert/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/aycert/index.vue":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/aycert/index.vue ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_vue_vue_type_template_id_8a0fcb3a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8a0fcb3a&ts=true */ "./src/pages/aycert/index.vue?vue&type=template&id=8a0fcb3a&ts=true");
/* harmony import */ var _index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts */ "./src/pages/aycert/index.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_8a0fcb3a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/aycert/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/aycert/index.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/aycert/index.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Comment",
  components: {},
  setup: function setup() {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      $instance: null,
      user: null,
      servTypeColumns: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].servTypeList()),
      servTypeShow: false,
      servTypeArr: ["月嫂"],
      servLocationColumns: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["default"].locationList()),
      servLocationShow: false,
      servLocationArr: ["北京"],
      hometownShow: false,
      hometownArr: ["北京"],
      servStartTimeShow: false,
      servEndTimeShow: false,
      uploadUrl: "https://ayi.51putong.com/api/miniapp" + "/simple/file/upload",
      privateUploadUrl: "https://ayi.51putong.com/api/miniapp" + "/simple/file/private-upload",
      uploadHeaders: {
        "miniapp-token": ""
      },
      uploadMaximize: 1024 * 1024 * 5,
      wxqrcodeList: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]),
      imgsList: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]),
      idnumImgsList: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]),
      avatarList: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]),
      submitData: {
        ayId: "",
        lastname: "",
        firstname: "",
        hometown: "北京",
        age: "",
        birthDate: "",
        servLocation: "北京",
        // servYear: null,
        servStartYear: "",
        servType: "月嫂",
        mobile: "",
        wxcode: "",
        wxqrcode: "",
        info: "",
        imgs: "",
        idnum: "",
        idnumImgs: "",
        avatar: "",
        type: ""
      },
      submitDataValidator: {
        lastname: {
          pattern: /\S+/,
          msg: "请输入姓氏"
        },
        firstname: {
          pattern: /\S+/,
          msg: "请输入名字"
        },
        hometown: {
          pattern: /\S+/,
          msg: "请选择家乡"
        },
        // age: {
        //   pattern: /^[1-9]+[0-9]*$/,
        //   msg: "请填写年龄",
        // },
        birthDate: {
          pattern: /^\d{4}$/,
          msg: "请填写正确的出生年份"
        },
        // servYear: {
        //   pattern: /\S+/,
        //   msg: "请选择服务年限",
        // },
        servStartYear: {
          pattern: /^\d{4}$/,
          msg: "请选择服务起始年份"
        },
        servLocation: {
          pattern: /\S+/,
          msg: "请选择服务地区"
        },
        servType: {
          pattern: /\S+/,
          msg: "请选择服务类型"
        },
        contact: {
          pattern: /\S+/,
          msg: "请至少填写一种联系方式"
        },
        info: {
          pattern: /\S+/,
          msg: "请填写自我介绍"
        },
        idnum: {
          pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
          msg: "请填写实名认证信息"
        }
      },
      readySubmit: false,
      getUserProfileLoading: false
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      state.user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("user");
      state.uploadHeaders["miniapp-token"] = state.user.token;
      state.$instance = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance();
      state.submitData.ayId = state.$instance.router.params.id;
      state.submitData.type = state.$instance.router.params.type;
      var certId = state.$instance.router.params.certId;
      if (certId) {
        _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].myCert().then(function (myCertRes) {
          _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].requestAfterHandle(myCertRes, function (data) {
            Object.assign(state.submitData, data);
            // state.submitData.id = certId;
            state.submitData.idnumImgs = "";
            if (state.submitData.servType) {
              state.servTypeArr = [state.submitData.servType];
            }
            if (state.submitData.servLocation) {
              state.servLocationArr = [state.submitData.servLocation];
            }
            if (state.submitData.hometown) {
              state.hometownArr = [state.submitData.hometown];
            }
            if (state.submitData.wxqrcode) {
              var _state$wxqrcodeList;
              (_state$wxqrcodeList = state.wxqrcodeList).push.apply(_state$wxqrcodeList, (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"].splitImgs(state.submitData.wxqrcode)));
            }
            if (state.submitData.imgs) {
              var _state$imgsList;
              (_state$imgsList = state.imgsList).push.apply(_state$imgsList, (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"].splitImgs(state.submitData.imgs)));
            }
            if (state.submitData.avatar) {
              var _state$avatarList;
              (_state$avatarList = state.avatarList).push.apply(_state$avatarList, (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"].splitImgs(state.submitData.avatar)));
            }
          });
        });
        return;
      }
    });
    var servTypeConfirm = function servTypeConfirm(e) {
      state.submitData.servType = e.selectedValue[0];
    };
    var servLocationConfirm = function servLocationConfirm(e) {
      state.submitData.servLocation = e.selectedValue[0];
    };
    var hometownConfirm = function hometownConfirm(e) {
      state.submitData.hometown = e.selectedValue[0];
    };
    var submit = /*#__PURE__*/function () {
      var _ref = (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
        var res;
        return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (getProfile()) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", false);
            case 2:
              state.readySubmit = true;
              if (state.submitDataValidator.lastname.pattern.test(state.submitData.lastname)) {
                _context.next = 6;
                break;
              }
              submitWarning(state.submitDataValidator.lastname.msg);
              return _context.abrupt("return", false);
            case 6:
              if (state.submitDataValidator.firstname.pattern.test(state.submitData.firstname)) {
                _context.next = 9;
                break;
              }
              submitWarning(state.submitDataValidator.firstname.msg);
              return _context.abrupt("return", false);
            case 9:
              if (state.submitDataValidator.hometown.pattern.test(state.submitData.hometown)) {
                _context.next = 12;
                break;
              }
              submitWarning(state.submitDataValidator.hometown.msg);
              return _context.abrupt("return", false);
            case 12:
              if (state.submitDataValidator.birthDate.pattern.test(state.submitData.birthDate)) {
                _context.next = 15;
                break;
              }
              submitWarning(state.submitDataValidator.birthDate.msg);
              return _context.abrupt("return", false);
            case 15:
              if (state.submitDataValidator.servLocation.pattern.test(state.submitData.servLocation)) {
                _context.next = 18;
                break;
              }
              submitWarning(state.submitDataValidator.servLocation.msg);
              return _context.abrupt("return", false);
            case 18:
              if (!(!state.submitDataValidator.contact.pattern.test(state.submitData.mobile) && !state.submitDataValidator.contact.pattern.test(state.submitData.wxcode) && state.wxqrcodeList.length < 1)) {
                _context.next = 21;
                break;
              }
              submitWarning(state.submitDataValidator.contact.msg);
              return _context.abrupt("return", false);
            case 21:
              if (state.submitDataValidator.servStartYear.pattern.test(state.submitData.servStartYear)) {
                _context.next = 24;
                break;
              }
              submitWarning(state.submitDataValidator.servStartYear.msg);
              return _context.abrupt("return", false);
            case 24:
              if (state.submitDataValidator.servType.pattern.test(state.submitData.servType)) {
                _context.next = 27;
                break;
              }
              submitWarning(state.submitDataValidator.servType.msg);
              return _context.abrupt("return", false);
            case 27:
              if (state.submitDataValidator.idnum.pattern.test(state.submitData.idnum)) {
                _context.next = 29;
                break;
              }
              return _context.abrupt("return", false);
            case 29:
              if (!(state.wxqrcodeList.length > 0)) {
                _context.next = 34;
                break;
              }
              if (!(state.wxqrcodeList.filter(function (item) {
                return item.status != "success";
              }).length > 0)) {
                _context.next = 33;
                break;
              }
              submitWarning("微信二维码未上传成功，请重试");
              return _context.abrupt("return");
            case 33:
              state.submitData.wxqrcode = state.wxqrcodeList[0].url;
            case 34:
              if (!(state.imgsList.length > 0)) {
                _context.next = 39;
                break;
              }
              if (!(state.imgsList.filter(function (item) {
                return item.status != "success";
              }).length > 0)) {
                _context.next = 38;
                break;
              }
              submitWarning("图片未上传成功，请重试");
              return _context.abrupt("return");
            case 38:
              state.submitData.imgs = state.imgsList.map(function (item) {
                return item.url;
              }).join(",");
            case 39:
              if (!(state.idnumImgsList.length > 0)) {
                _context.next = 44;
                break;
              }
              if (!(state.idnumImgsList.filter(function (item) {
                return item.status != "success";
              }).length > 0)) {
                _context.next = 43;
                break;
              }
              submitWarning("身份证图片未上传成功，请重试");
              return _context.abrupt("return");
            case 43:
              state.submitData.idnumImgs = state.idnumImgsList.map(function (item) {
                return item.privateUrl;
              }).join(",");
            case 44:
              if (!(state.avatarList.length > 0)) {
                _context.next = 49;
                break;
              }
              if (!(state.avatarList.filter(function (item) {
                return item.status != "success";
              }).length > 0)) {
                _context.next = 48;
                break;
              }
              submitWarning("头像未上传成功，请重试");
              return _context.abrupt("return");
            case 48:
              state.submitData.avatar = state.avatarList.map(function (item) {
                return item.url;
              }).join(",");
            case 49:
              if (!state.submitData.mobile) {
                _context.next = 53;
                break;
              }
              if (/^\d{11}$/.test(state.submitData.mobile)) {
                _context.next = 53;
                break;
              }
              submitWarning("请输入正确的手机号码");
              return _context.abrupt("return");
            case 53:
              // 校验
              console.log("提交数据：", state.submitData);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
                title: "提交中",
                mask: true
              });
              _context.t0 = _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"];
              _context.next = 58;
              return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].cert(state.submitData);
            case 58:
              _context.t1 = _context.sent;
              res = _context.t0.requestAfterHandle.call(_context.t0, _context.t1);
              if (!(res.msg != "ok")) {
                _context.next = 64;
                break;
              }
              return _context.abrupt("return", false);
            case 64:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                title: "提交成功",
                icon: "success",
                duration: 2000,
                mask: true
              });
              setTimeout(function () {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
                  url: "/pages/index/index"
                });
              }, 2000);
            case 67:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function submit() {
        return _ref.apply(this, arguments);
      };
    }();
    var wxqrcodeSuccess = function wxqrcodeSuccess(e) {
      state.wxqrcodeList[state.wxqrcodeList.length - 1].url = JSON.parse(e.responseText.data).data;
    };
    var imgsSuccess = function imgsSuccess(e) {
      state.imgsList[state.imgsList.length - 1].url = JSON.parse(e.responseText.data).data;
    };
    var idnumImgsSuccess = function idnumImgsSuccess(e) {
      state.idnumImgsList[state.idnumImgsList.length - 1].privateUrl = JSON.parse(e.responseText.data).data;
    };
    var avatarSuccess = function avatarSuccess(e) {
      state.avatarList[state.avatarList.length - 1].url = JSON.parse(e.responseText.data).data;
    };
    var getProfile = function getProfile() {
      var _state$user;
      if ((_state$user = state.user) !== null && _state$user !== void 0 && _state$user.authProfile) {
        return true;
      }
      if (state.getUserProfileLoading) {
        return false;
      }
      state.getUserProfileLoading = true;
      var pLogin = new Promise(function (resolve, reject) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().login({
          success: function success(res) {
            resolve(res.code);
          }
        });
      });
      var pUserProfile = new Promise(function (resolve, reject) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getUserProfile({
          // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          desc: "用于完善用户资料",
          success: function success(profile) {
            resolve(profile);
          }
        });
      });
      Promise.all([pLogin, pUserProfile]).then(function (values) {
        _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].authLogin(values[0], values[1].encryptedData, values[1].iv).then(function (authLoginRes) {
          _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].requestAfterHandle(authLoginRes, function (data) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync("user", data);
            state.user = data;
          });
          state.getUserProfileLoading = false;
        });
      });
      return false;
    };
    var submitWarning = function submitWarning(txt) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: txt,
        icon: "error",
        duration: 1500
      });
    };
    return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state)), {}, {
      submit: submit,
      servTypeConfirm: servTypeConfirm,
      servLocationConfirm: servLocationConfirm,
      hometownConfirm: hometownConfirm,
      wxqrcodeSuccess: wxqrcodeSuccess,
      imgsSuccess: imgsSuccess,
      idnumImgsSuccess: idnumImgsSuccess,
      avatarSuccess: avatarSuccess
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/aycert/index.vue?vue&type=template&id=8a0fcb3a&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/aycert/index.vue?vue&type=template&id=8a0fcb3a&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "aycert"
};
var _hoisted_2 = {
  class: "row"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("1) 姓 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_4 = {
  class: "content"
};
var _hoisted_5 = {
  class: "row"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("2) 名 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_7 = {
  class: "content"
};
var _hoisted_8 = {
  class: "row"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("3) 出生年份 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_10 = {
  class: "content"
};
var _hoisted_11 = {
  class: "row"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("4) 家乡 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_13 = {
  class: "content"
};
var _hoisted_14 = {
  class: "row"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("5) 服务地区 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_16 = {
  class: "content"
};
var _hoisted_17 = {
  class: "row"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("6) 服务起始年份 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_19 = {
  class: "content"
};
var _hoisted_20 = {
  class: "row"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("7) 服务类型 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_22 = {
  class: "content"
};
var _hoisted_23 = {
  class: "row"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("8) 自我介绍 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_25 = {
  class: "content"
};
var _hoisted_26 = {
  class: "row"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, "9) 图片展示", -1 /* HOISTED */);
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "desc descc-h"
}, "如相关证书、服务日常等", -1 /* HOISTED */);
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "desc descc-h"
}, " 单张图片大小不能大于5M ", -1 /* HOISTED */);
var _hoisted_30 = {
  class: "content"
};
var _hoisted_31 = {
  class: "row"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("10) 实名认证 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_33 = {
  class: "content"
};
var _hoisted_34 = {
  class: "row"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, "11) 身份证照片", -1 /* HOISTED */);
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "desc descc-h"
}, " 单张图片大小不能大于5M ", -1 /* HOISTED */);
var _hoisted_37 = {
  class: "content"
};
var _hoisted_38 = {
  class: "row"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("12) 联系方式 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "require"
}, "*")], -1 /* HOISTED */);
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "desc descc-h"
}, "请至少填写一种", -1 /* HOISTED */);
var _hoisted_41 = {
  class: "content"
};
var _hoisted_42 = {
  class: "sub-row"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "sub-title"
}, "12.1) 手机号码", -1 /* HOISTED */);
var _hoisted_44 = {
  class: "sub-content"
};
var _hoisted_45 = {
  class: "sub-row"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "sub-title"
}, "12.2) 微信号", -1 /* HOISTED */);
var _hoisted_47 = {
  class: "sub-content"
};
var _hoisted_48 = {
  class: "sub-row"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "sub-title"
}, "12.3) 微信二维码", -1 /* HOISTED */);
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "desc descc-h"
}, " 单张图片大小不能大于5M ", -1 /* HOISTED */);
var _hoisted_51 = {
  class: "sub-content"
};
var _hoisted_52 = {
  class: "row"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "title"
}, "13) 上传头像", -1 /* HOISTED */);
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "desc descc-h"
}, " 单张图片大小不能大于5M ", -1 /* HOISTED */);
var _hoisted_55 = {
  class: "content"
};
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "submit nut-button--primary"
}, "提交", -1 /* HOISTED */);
var _hoisted_57 = [_hoisted_56];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-input");
  var _component_nut_cell = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-cell");
  var _component_nut_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-picker");
  var _component_nut_textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-textarea");
  var _component_nut_uploader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-uploader");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.lastname.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.lastname.pattern.test(_ctx.submitData.lastname)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_input, {
    modelValue: _ctx.submitData.lastname,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.submitData.lastname = $event;
    }),
    placeholder: "请输入姓氏"
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.firstname.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.firstname.pattern.test(_ctx.submitData.firstname)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_input, {
    modelValue: _ctx.submitData.firstname,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.submitData.firstname = $event;
    }),
    placeholder: "请输入名字"
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.birthDate.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.birthDate.pattern.test(_ctx.submitData.birthDate)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_input, {
    modelValue: _ctx.submitData.birthDate,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.submitData.birthDate = $event;
    }),
    placeholder: "请输入出生年份，例如1900"
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.hometown.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.hometown.pattern.test(_ctx.submitData.hometown)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
    title: _ctx.submitData.hometown || '家乡',
    onClick: _cache[3] || (_cache[3] = function () {
      _ctx.hometownShow = true;
    })
  }, null, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_picker, {
    modelValue: _ctx.hometownArr,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.hometownArr = $event;
    }),
    visible: _ctx.hometownShow,
    "onUpdate:visible": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.hometownShow = $event;
    }),
    columns: _ctx.servLocationColumns,
    title: "家乡",
    onConfirm: $setup.hometownConfirm
  }, null, 8 /* PROPS */, ["modelValue", "visible", "columns", "onConfirm"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.servLocation.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.servLocation.pattern.test(_ctx.submitData.servLocation)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
    title: _ctx.submitData.servLocation || '服务地区',
    onClick: _cache[6] || (_cache[6] = function () {
      _ctx.servLocationShow = true;
    })
  }, null, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_picker, {
    modelValue: _ctx.servLocationArr,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.servLocationArr = $event;
    }),
    visible: _ctx.servLocationShow,
    "onUpdate:visible": _cache[8] || (_cache[8] = function ($event) {
      return _ctx.servLocationShow = $event;
    }),
    columns: _ctx.servLocationColumns,
    title: "服务地区",
    onConfirm: $setup.servLocationConfirm
  }, null, 8 /* PROPS */, ["modelValue", "visible", "columns", "onConfirm"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.servStartYear.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.servStartYear.pattern.test(_ctx.submitData.servStartYear)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_input, {
    modelValue: _ctx.submitData.servStartYear,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return _ctx.submitData.servStartYear = $event;
    }),
    placeholder: "请输入服务起始年份"
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.servType.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.servType.pattern.test(_ctx.submitData.servType)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
    title: _ctx.submitData.servType || '服务类型',
    onClick: _cache[10] || (_cache[10] = function () {
      _ctx.servTypeShow = true;
    })
  }, null, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_picker, {
    modelValue: _ctx.servTypeArr,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return _ctx.servTypeArr = $event;
    }),
    visible: _ctx.servTypeShow,
    "onUpdate:visible": _cache[12] || (_cache[12] = function ($event) {
      return _ctx.servTypeShow = $event;
    }),
    columns: _ctx.servTypeColumns,
    title: "服务类型",
    onConfirm: $setup.servTypeConfirm
  }, null, 8 /* PROPS */, ["modelValue", "visible", "columns", "onConfirm"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.info.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.info.pattern.test(_ctx.submitData.info)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_textarea, {
    modelValue: _ctx.submitData.info,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return _ctx.submitData.info = $event;
    }),
    "limit-show": "",
    "max-length": "200"
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_26, [_hoisted_27, _hoisted_28, _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_uploader, {
    url: _ctx.uploadUrl,
    "file-list": _ctx.imgsList,
    "onUpdate:fileList": _cache[14] || (_cache[14] = function ($event) {
      return _ctx.imgsList = $event;
    }),
    maximum: "3",
    headers: _ctx.uploadHeaders,
    "with-credentials": true,
    maximize: _ctx.uploadMaximize,
    onSuccess: $setup.imgsSuccess
  }, null, 8 /* PROPS */, ["url", "file-list", "headers", "maximize", "onSuccess"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.idnum.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.idnum.pattern.test(_ctx.submitData.idnum)]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_input, {
    modelValue: _ctx.submitData.idnum,
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return _ctx.submitData.idnum = $event;
    }),
    placeholder: "请输入阿姨的身份证号码"
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_34, [_hoisted_35, _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <nut-uploader\r\n          :url=\"privateUploadUrl\"\r\n          v-model:file-list=\"idnumImgsList\"\r\n          maximum=\"2\"\r\n          multiple\r\n          list-type=\"list\"\r\n          :headers=\"uploadHeaders\"\r\n          :with-credentials=\"true\"\r\n          :maximize=\"uploadMaximize\"\r\n          @success=\"idnumImgsSuccess\"\r\n        >\r\n          <nut-button type=\"success\" size=\"small\">上传身份证</nut-button>\r\n        </nut-uploader> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_uploader, {
    url: _ctx.privateUploadUrl,
    "file-list": _ctx.idnumImgsList,
    "onUpdate:fileList": _cache[16] || (_cache[16] = function ($event) {
      return _ctx.idnumImgsList = $event;
    }),
    maximum: "2",
    headers: _ctx.uploadHeaders,
    "with-credentials": true,
    maximize: _ctx.uploadMaximize,
    onSuccess: $setup.idnumImgsSuccess
  }, null, 8 /* PROPS */, ["url", "file-list", "headers", "maximize", "onSuccess"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_38, [_hoisted_39, _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "err"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.submitDataValidator.contact.msg), 513 /* TEXT, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.readySubmit && !_ctx.submitDataValidator.contact.pattern.test(_ctx.submitData.mobile) && !_ctx.submitDataValidator.contact.pattern.test(_ctx.submitData.wxcode) && _ctx.wxqrcodeList.length < 1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_input, {
    modelValue: _ctx.submitData.mobile,
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return _ctx.submitData.mobile = $event;
    }),
    placeholder: "手机号码"
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_input, {
    modelValue: _ctx.submitData.wxcode,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return _ctx.submitData.wxcode = $event;
    }),
    placeholder: "微信号"
  }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_48, [_hoisted_49, _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_uploader, {
    url: _ctx.uploadUrl,
    maximum: "1",
    "file-list": _ctx.wxqrcodeList,
    "onUpdate:fileList": _cache[19] || (_cache[19] = function ($event) {
      return _ctx.wxqrcodeList = $event;
    }),
    headers: _ctx.uploadHeaders,
    "with-credentials": true,
    maximize: _ctx.uploadMaximize,
    onSuccess: $setup.wxqrcodeSuccess
  }, null, 8 /* PROPS */, ["url", "file-list", "headers", "maximize", "onSuccess"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_52, [_hoisted_53, _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_uploader, {
    url: _ctx.uploadUrl,
    "file-list": _ctx.avatarList,
    "onUpdate:fileList": _cache[20] || (_cache[20] = function ($event) {
      return _ctx.avatarList = $event;
    }),
    maximum: "1",
    headers: _ctx.uploadHeaders,
    "with-credentials": true,
    maximize: _ctx.uploadMaximize,
    onSuccess: $setup.avatarSuccess
  }, null, 8 /* PROPS */, ["url", "file-list", "headers", "maximize", "onSuccess"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    class: "row btn",
    onClick: _cache[21] || (_cache[21] =
    //@ts-ignore
    function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    })
  }, _hoisted_57)]);
}

/***/ }),

/***/ "./src/pages/aycert/index.vue":
/*!************************************!*\
  !*** ./src/pages/aycert/index.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/aycert/index.vue");


var config = {"navigationBarTitleText":"阿姨注册认证"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/aycert/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/aycert/index.vue?vue&type=script&lang=ts":
/*!************************************************************!*\
  !*** ./src/pages/aycert/index.vue?vue&type=script&lang=ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/aycert/index.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/pages/aycert/index.vue?vue&type=template&id=8a0fcb3a&ts=true":
/*!**************************************************************************!*\
  !*** ./src/pages/aycert/index.vue?vue&type=template&id=8a0fcb3a&ts=true ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_8a0fcb3a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_8a0fcb3a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=8a0fcb3a&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/aycert/index.vue?vue&type=template&id=8a0fcb3a&ts=true");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/pages/aycert/index.vue"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map