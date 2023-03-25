"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_vue_vue_type_template_id_698d409a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=698d409a&ts=true */ "./src/pages/my/index.vue?vue&type=template&id=698d409a&ts=true");
/* harmony import */ var _index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts */ "./src/pages/my/index.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_698d409a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/my/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/my/index.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/my/index.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_custom_tab_bar_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/custom-tab-bar/index.vue */ "./src/components/custom-tab-bar/index.vue");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.js");








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "My",
  components: {
    "custom-tab-bar": _components_custom_tab_bar_index_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      user: null,
      getUserProfileLoading: false,
      unreadCountComment: 0,
      unreadCountMsg: 0,
      unreadCountCert: 0,
      showContactUs: false,
      defaultAvatar: "https://nanny-tt.oss-cn-beijing.aliyuncs.com/ay/images/sys/avatar.jpg"
    });
    var tabbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useDidShow)(function () {
      // 初始化获取 token
      state.user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("user");
      tabbar.value.current = 2;
      updateReadCount();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      setInterval(function () {
        updateReadCount();
      }, 10 * 1000);
    });

    /**
     * 更新未读数量
     */
    var updateReadCount = function updateReadCount() {
      var unreadCountData = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync("unreadCount");
      if (!unreadCountData) {
        unreadCountData = [];
      }
      var unreadCount = 0;
      unreadCountData.filter(function (it) {
        return it.type == 1 || it.type == 2 || it.type == 3 || it.type == 4 || it.type == 5 || it.type == 6;
      }).forEach(function (it) {
        return unreadCount = unreadCount + it.count;
      });
      if (unreadCount > 99) {
        unreadCount = 99;
      }
      try {
        tabbar.value.unreadCount = unreadCount;
      } catch (e) {
        console.log("aaaa", e);
      }
      state.unreadCountComment = 0;
      unreadCountData.filter(function (it) {
        return it.type == 4;
      }).forEach(function (it) {
        return state.unreadCountComment = state.unreadCountComment + it.count;
      });
      if (state.unreadCountComment > 99) {
        state.unreadCountComment = 99;
      }
      state.unreadCountMsg = 0;
      unreadCountData.filter(function (it) {
        return it.type == 1 || it.type == 2 || it.type == 3 || it.type == 4 || it.type == 5;
      }).forEach(function (it) {
        return state.unreadCountMsg = state.unreadCountMsg + it.count;
      });
      if (state.unreadCountMsg > 99) {
        state.unreadCountMsg = 99;
      }
      state.unreadCountCert = 0;
      unreadCountData.filter(function (it) {
        return it.type == 6;
      }).forEach(function (it) {
        return state.unreadCountCert = state.unreadCountCert + it.count;
      });
    };

    // 页面跳转相关
    var toMycert = function toMycert() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "/pages/mycert/index"
      });
    };
    var toCollection = function toCollection() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "/pages/collection/index"
      });
    };
    var toFootprint = function toFootprint() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "/pages/footprint/index"
      });
    };
    var toMycomment = function toMycomment() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "/pages/mycomment/index"
      });
    };
    var toMessages = function toMessages() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "/pages/messages/index"
      });
    };
    var toContactUs = function toContactUs() {
      state.showContactUs = true;
    };

    // 其他工具函数
    var getUserProfile = function getUserProfile() {
      var _state$user;
      if (state.getUserProfileLoading) {
        return;
      }
      if (!((_state$user = state.user) !== null && _state$user !== void 0 && _state$user.authProfile)) {
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
        Promise.all([pLogin, pUserProfile]).then( /*#__PURE__*/function () {
          var _ref = (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().mark(function _callee(values) {
            return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = _utils_api__WEBPACK_IMPORTED_MODULE_3__["default"];
                  _context.next = 3;
                  return _utils_api__WEBPACK_IMPORTED_MODULE_3__["default"].authLogin(values[0], values[1].encryptedData, values[1].iv);
                case 3:
                  _context.t1 = _context.sent;
                  _context.t2 = function (data) {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync("user", state.user);
                    state.user = data;
                  };
                  _context.t0.requestAfterHandle.call(_context.t0, _context.t1, _context.t2);
                  state.getUserProfileLoading = false;
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
                    url: "/pages/profile/index"
                  });
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        return;
      }
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "/pages/profile/index"
      });
    };
    return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state)), {}, {
      tabbar: tabbar,
      getUserProfile: getUserProfile,
      toCollection: toCollection,
      toFootprint: toFootprint,
      toMycomment: toMycomment,
      toMessages: toMessages,
      toMycert: toMycert,
      toContactUs: toContactUs,
      copy: _utils_util__WEBPACK_IMPORTED_MODULE_4__["default"].copy
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/my/index.vue?vue&type=template&id=698d409a&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/my/index.vue?vue&type=template&id=698d409a&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "background"
}, null, -1 /* HOISTED */);
var _hoisted_2 = {
  class: "all"
};
var _hoisted_3 = {
  class: "touxiang"
};
var _hoisted_4 = {
  class: "usename"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
  class: "usename"
}, "请登录", -1 /* HOISTED */);
var _hoisted_6 = {
  class: "menu"
};
var _hoisted_7 = {
  key: 0,
  class: "unread-count"
};
var _hoisted_8 = {
  key: 0,
  class: "unread-count"
};
var _hoisted_9 = {
  key: 0,
  class: "unread-count"
};
var _hoisted_10 = {
  style: {
    "height": "300rpx",
    "width": "500rpx",
    "padding": "0 30rpx",
    "box-sizing": "border-box",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "font-size": "28rpx"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$user;
  var _component_nut_avatar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-avatar");
  var _component_nut_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-icon");
  var _component_nut_cell = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-cell");
  var _component_nut_cell_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-cell-group");
  var _component_nut_popup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-popup");
  var _component_custom_tab_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("custom-tab-bar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <view class=\"topright\">\r\n      <nut-icon name=\"setting\"></nut-icon>\r\n    </view> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_3, [(_ctx$user = _ctx.user) !== null && _ctx$user !== void 0 && _ctx$user.authProfile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", {
    key: 0,
    class: "login",
    onClick: _cache[0] || (_cache[0] =
    //@ts-ignore
    function () {
      return $setup.getUserProfile && $setup.getUserProfile.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_avatar, {
    class: "avatar",
    size: "large",
    icon: _ctx.user.avatar
  }, null, 8 /* PROPS */, ["icon"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.user.nickname), 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", {
    key: 1,
    class: "nologin",
    onClick: _cache[1] || (_cache[1] =
    //@ts-ignore
    function () {
      return $setup.getUserProfile && $setup.getUserProfile.apply($setup, arguments);
    }),
    type: "getUserProfile"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <nut-avatar\r\n          class=\"avatar\"\r\n          size=\"large\"\r\n          url=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAvdJREFUWEfFV0trFEEQrurNQxAFweDzsO5O9+hBD7JBDSgJHgQP3hRBPKl4y18w/gRzC+opCD5uHgQvKgq+EjzowUz3vg4aCREhapC4u13S4w5sNjPTPUlg5zj9fVVfVVdXVyNk+IIgOJvL5c5prY8yxoaIaMjQEXFRa73IGPvQarUe+77/xNUs2oD1en3PysrKdcbYZQAo2PDt9arWenpwcHAqn89/S+OkCgiCYIIxdg0A9jo67obNa61v+74/kcRPFKCUeggA59fpuJv2iHN+Ic5WrIByuVwjovwmOQ/NIGLd87wD3TbXCJBSLiLizs10Htkiou9CiLBwo2+VACnlS0Q86eD8KRHdb7VaLww2l8uNIuJFADhj4xLRKyHEqTUC2gV3w2YAAK5yzu/G4ZRSVwDgjs2G1vpmVJhhBsxRazQas7Zq7yQmOXEMZL6/v79kjmgowIVERL+EENtt0Zl1KeVPRNyWho2CCQUopQIAEGkEIpoTQhxyFPAZEQ9asJJz7qNSahQAnjsYfsc5P+6AMwG9BYBjDtgxlFLeQsRxB/BXzvl+B5wR8AUA9tmwRDRpBLxHxGEbuL0+wjl/k4ZVSp0AgNcu9ohoBrN0PSIKhBCpeyulnENE30WA6Y6mBn4DwFYXgsEYEgBc8jxvVZTlcnkEAO5lbOHLmQW0hf4FgGkAiLbDpN1c1wOugbRxy5m2wJDM+e3r65tBxNlCobBg/lWr1V1EVGo2m8OMMZduGvoPtyBDEVa01uO2acdMTYyxSQAo2rIRFqHLMXRpwd3OlFImE4mDiMGHx9ChETk3oBgRtoY0Zm3FjLEjxWLxky2dceuVSuWw1vpjAvd/KzaLSZfRelLf7cxmO/U6RsTTnuc9W0/0EUcpZWbBB102Vl/HSVlYWloaKJVKjY0IqNVqW5rN5p9OG2sGkmixayRb4Jzv3ojzjiz8AIAd7cqPH8k6RPRuKI1EZLmgXDPkPJZ3pK13D5NIRE+fZpGInj5OY5rKpj/P/wGTlpqwyZ7bjgAAAABJRU5ErkJggg==\"\r\n        ></nut-avatar> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_avatar, {
    class: "avatar",
    size: "large",
    icon: _ctx.defaultAvatar
  }, null, 8 /* PROPS */, ["icon"]), _hoisted_5]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 菜单栏 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <view class=\"head\">\r\n        <view class=\"left\">菜单栏</view>\r\n      </view> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell_group, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
        title: "我的注册",
        "is-link": "",
        onClick: $setup.toMycert
      }, {
        link: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_ctx.unreadCountCert && _ctx.unreadCountCert > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ unreadCountCert }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("1 ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_icon, {
            name: "right"
          })];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
        title: "我的点评",
        "is-link": "",
        onClick: $setup.toMycomment
      }, {
        link: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_ctx.unreadCountComment && _ctx.unreadCountComment > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.unreadCountComment), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_icon, {
            name: "right"
          })];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
        title: "我的收藏",
        "is-link": "",
        onClick: $setup.toCollection
      }, null, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
        title: "我的消息",
        "is-link": "",
        onClick: $setup.toMessages
      }, {
        link: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_ctx.unreadCountMsg && _ctx.unreadCountMsg > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.unreadCountMsg), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_icon, {
            name: "right"
          })];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_cell, {
        title: "联系我们",
        "is-link": "",
        onClick: $setup.toContactUs
      }, null, 8 /* PROPS */, ["onClick"])];
    }),
    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_popup, {
    visible: _ctx.showContactUs,
    "onUpdate:visible": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.showContactUs = $event;
    })
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 如果您有任何疑问，欢迎邮件至 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
        style: {
          "display": "inline",
          "text-decoration": "underline",
          "color": "#ee8283"
        },
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $setup.copy('support_ayituitui@163.com');
        })
      }, " support_ayituitui@163.com ")])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" tab bar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_custom_tab_bar, {
    ref: "tabbar"
  }, null, 512 /* NEED_PATCH */)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./src/pages/my/index.vue":
/*!********************************!*\
  !*** ./src/pages/my/index.vue ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/my/index.vue");


var config = {"navigationBarTitleText":"我的"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/my/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/my/index.vue?vue&type=script&lang=ts":
/*!********************************************************!*\
  !*** ./src/pages/my/index.vue?vue&type=script&lang=ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/my/index.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/pages/my/index.vue?vue&type=template&id=698d409a&ts=true":
/*!**********************************************************************!*\
  !*** ./src/pages/my/index.vue?vue&type=template&id=698d409a&ts=true ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_698d409a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_698d409a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=698d409a&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/my/index.vue?vue&type=template&id=698d409a&ts=true");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/pages/my/index.vue"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map