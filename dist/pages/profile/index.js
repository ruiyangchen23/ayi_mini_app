"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/profile/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/profile/index.vue":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/profile/index.vue ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_vue_vue_type_template_id_daa019d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=daa019d0 */ "./src/pages/profile/index.vue?vue&type=template&id=daa019d0");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/profile/index.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_daa019d0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/profile/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/profile/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/profile/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);






var defaultAvatar = "https://nanny-tt.oss-cn-beijing.aliyuncs.com/ay/images/sys/avatar.jpg";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Profile",
  components: {},
  setup: function setup() {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      avatarUrl: "",
      form: {
        avatar: "",
        nickname: ""
      },
      uploadUrl: "https://ayi.51putong.com/api/miniapp" + "/simple/file/upload"
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync("user");
      if (user) {
        state.avatarUrl = user.avatar || defaultAvatar;
        state.form.avatar = user.avatar || defaultAvatar;
        state.form.nickname = user.nickname;
      }
    });
    var onChooseAvatar = function onChooseAvatar(e) {
      console.log("e", e);
      var avatarUrl = e.mpEvent.detail.avatarUrl;
      state.avatarUrl = avatarUrl;
    };
    var submit = /*#__PURE__*/function () {
      var _ref = (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee2(e) {
        return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log("state.avatarUrl", state.avatarUrl);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showLoading({
                title: "提交中",
                mask: true
              });
              if (/^((http|https):\/\/tmp\/)|(wxfile:\/\/tmp_).+$/.test(state.avatarUrl)) {
                // 上传图片
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().uploadFile({
                  url: state.uploadUrl,
                  filePath: state.avatarUrl,
                  name: "file",
                  success: function () {
                    var _success = (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee(res) {
                      var data;
                      return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            console.log("res", res);
                            data = res.data;
                            state.form.avatar = JSON.parse(data).data;
                            save();
                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    function success(_x2) {
                      return _success.apply(this, arguments);
                    }
                    return success;
                  }()
                });
              } else {
                state.form.avatar = state.avatarUrl;
                save();
              }
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function submit(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var save = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee3() {
        var saveProfileRes1;
        return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              console.log("save", state.form);
              _context3.t0 = _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"];
              _context3.next = 4;
              return _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"].saveProfile(state.form);
            case 4:
              _context3.t1 = _context3.sent;
              saveProfileRes1 = _context3.t0.requestAfterHandle.call(_context3.t0, _context3.t1);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
              if (saveProfileRes1.msg == "ok") {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showLoading({
                  title: "加载中",
                  mask: true
                });
                _utils_api__WEBPACK_IMPORTED_MODULE_1__["default"].login(function () {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
                    title: "保存成功",
                    icon: "success",
                    mask: true,
                    duration: 2000
                  });
                  setTimeout(function () {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().switchTab({
                      url: "/pages/my/index"
                    });
                  }, 2000);
                });
              }
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function save() {
        return _ref2.apply(this, arguments);
      };
    }();
    return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state)), {}, {
      onChooseAvatar: onChooseAvatar,
      submit: submit
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/profile/index.vue?vue&type=template&id=daa019d0":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/profile/index.vue?vue&type=template&id=daa019d0 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = ["src"];
var _hoisted_2 = {
  class: "form"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "submit nut-button--primary"
}, "提交", -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-input");
  var _component_nut_cell = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-cell");
  var _component_nut_cell_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-cell-group");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "avatar-wrapper",
    "open-type": "chooseAvatar",
    onChooseavatar: _cache[0] || (_cache[0] = function () {
      return $setup.onChooseAvatar && $setup.onChooseAvatar.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("image", {
    class: "avatar",
    src: _ctx.avatarUrl
  }, null, 8 /* PROPS */, _hoisted_1)], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell_group, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
        title: "昵称"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_input, {
            type: "nickname",
            class: "weui-input",
            placeholder: "请输入昵称",
            modelValue: _ctx.form.nickname,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return _ctx.form.nickname = $event;
            })
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }),
    class: "submit"
  }, _hoisted_4)])]);
}

/***/ }),

/***/ "./src/pages/profile/index.vue":
/*!*************************************!*\
  !*** ./src/pages/profile/index.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/profile/index.vue");


var config = {"navigationBarTitleText":"个人信息"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/profile/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/profile/index.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/pages/profile/index.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/profile/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/pages/profile/index.vue?vue&type=template&id=daa019d0":
/*!*******************************************************************!*\
  !*** ./src/pages/profile/index.vue?vue&type=template&id=daa019d0 ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_daa019d0__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_daa019d0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=daa019d0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/profile/index.vue?vue&type=template&id=daa019d0");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/pages/profile/index.vue"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map