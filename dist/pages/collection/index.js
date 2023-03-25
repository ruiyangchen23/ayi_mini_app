"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/collection/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collection/index.vue":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collection/index.vue ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_vue_vue_type_template_id_130d4e25_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=130d4e25&ts=true */ "./src/pages/collection/index.vue?vue&type=template&id=130d4e25&ts=true");
/* harmony import */ var _index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts */ "./src/pages/collection/index.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_130d4e25_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/collection/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/collection/index.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/collection/index.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Collection",
  components: {},
  setup: function setup() {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      myCollectPageParam: {},
      myCollectPageRes: null,
      dataList: [],
      hasMore: true,
      moreLoading: false,
      touchstart: -1
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)( /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee() {
      return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            state.myCollectPageParam.pageNum = 1;
            state.myCollectPageParam.pageSize = 20;
            state.moreLoading = true;
            _context.t0 = _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"];
            _context.next = 6;
            return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].myCollectPage(state.myCollectPageParam);
          case 6:
            _context.t1 = _context.sent;
            _context.t2 = function (data) {
              var _state$dataList;
              state.myCollectPageRes = data;
              state.dataList.splice(0, state.dataList.length);
              (_state$dataList = state.dataList).push.apply(_state$dataList, (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.myCollectPageRes.records));
              handleAfterSearch();
            };
            _context.t0.requestAfterHandle.call(_context.t0, _context.t1, _context.t2);
            state.moreLoading = false;
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    var lower = function lower() {
      var _state$dataList2;
      if (!state.hasMore || state.moreLoading) {
        return;
      }
      state.moreLoading = true;
      state.myCollectPageParam.pageNum++;
      (_state$dataList2 = state.dataList).push.apply(_state$dataList2, (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.myCollectPageRes.records));
      handleAfterSearch();
      state.moreLoading = false;
    };
    var touchstart = function touchstart(e) {
      state.touchstart = e.timeStamp;
    };
    var touchend = function touchend(e, it) {
      if (!state.touchstart || state.touchstart < 0) {
        return;
      }
      if (e.timeStamp - state.touchstart > 500) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showActionSheet({
          itemList: ["取消收藏"],
          success: function () {
            var _success = (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee2(res) {
              var i;
              return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(res.tapIndex == 0)) {
                      _context2.next = 7;
                      break;
                    }
                    _context2.t0 = _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"];
                    _context2.next = 4;
                    return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].myDelCollect(it.ayId);
                  case 4:
                    _context2.t1 = _context2.sent;
                    _context2.t0.requestAfterHandle.call(_context2.t0, _context2.t1);
                    for (i = 0; i < state.dataList.length; i++) {
                      if (state.dataList[i].id == it.id) {
                        state.dataList.splice(i, 1);
                      }
                    }
                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            function success(_x) {
              return _success.apply(this, arguments);
            }
            return success;
          }(),
          fail: function fail(res) {
            console.log(res.errMsg);
          }
        });
      }
      state.touchstart = -1;
    };
    var handleAfterSearch = function handleAfterSearch() {
      if (state.myCollectPageRes.current >= state.myCollectPageRes.pages) {
        state.hasMore = false;
      }
    };
    var toAyDetail = function toAyDetail(e) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "/pages/aydetail/index?id=" + e.ayId
      });
    };
    return (0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,C_Users_aligu_Downloads_miniapp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state)), {}, {
      lower: lower,
      touchstart: touchstart,
      touchend: touchend,
      toAyDetail: toAyDetail
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/collection/index.vue?vue&type=template&id=130d4e25&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/collection/index.vue?vue&type=template&id=130d4e25&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "collection"
};
var _hoisted_2 = ["scroll-into-view", "scroll-top"];
var _hoisted_3 = ["onTouchend", "onClick"];
var _hoisted_4 = {
  class: "left"
};
var _hoisted_5 = ["src"];
var _hoisted_6 = {
  class: "right"
};
var _hoisted_7 = {
  class: "top"
};
var _hoisted_8 = {
  class: "name"
};
var _hoisted_9 = {
  class: "info"
};
var _hoisted_10 = {
  class: "info-it"
};
var _hoisted_11 = {
  class: "info-it"
};
var _hoisted_12 = {
  class: "info-it"
};
var _hoisted_13 = {
  class: "rate"
};
var _hoisted_14 = {
  class: "bottom"
};
var _hoisted_15 = {
  class: "footer"
};
var _hoisted_16 = {
  class: "footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_divider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-divider");
  var _component_nut_rate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-rate");
  var _component_nut_tag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-tag");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("scroll-view", {
    class: "list",
    "scroll-y": true,
    onScrolltolower: _cache[1] || (_cache[1] =
    //@ts-ignore
    function () {
      return $setup.lower && $setup.lower.apply($setup, arguments);
    }),
    "scroll-into-view": _ctx.toView,
    "scroll-top": _ctx.scrollTop
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.dataList, function (it, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", {
      key: idx,
      class: "it",
      onTouchstart: _cache[0] || (_cache[0] = function ($event) {
        return $setup.touchstart($event);
      }),
      onTouchend: function onTouchend($event) {
        return $setup.touchend($event, it);
      },
      onClick: function onClick($event) {
        return $setup.toAyDetail(it);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      class: "img",
      src: it.avatar
    }, null, 8 /* PROPS */, _hoisted_5)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(it.lastname) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(it.firstname || "阿姨"), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(it.servLocation), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_divider, {
      direction: "vertical"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(it.servType), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_divider, {
      direction: "vertical"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(it.commentNum || 0) + " 条评价", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_rate, {
      "active-color": "#FFC800",
      modelValue: it.rate,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return it.rate = $event;
      },
      "icon-size": "14",
      spacing: "2",
      readonly: ""
    }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_14, [it.verifed == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_nut_tag, {
      key: 0,
      color: "rgb(236, 128, 126)",
      "text-color": "#fff",
      class: "tag"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 已认证 ")];
      }),
      _: 1 /* STABLE */
    })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <nut-tag v-else color=\"#E9E9E9\" class=\"tag\">未认证</nut-tag> ")])])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_divider, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("加载中 ...")];
    }),
    _: 1 /* STABLE */
  })], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.moreLoading]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_divider, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("到底啦")];
    }),
    _: 1 /* STABLE */
  })], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !_ctx.hasMore]])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2)]);
}

/***/ }),

/***/ "./src/pages/collection/index.vue":
/*!****************************************!*\
  !*** ./src/pages/collection/index.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collection/index.vue");


var config = {"navigationBarTitleText":"我的收藏"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/collection/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/collection/index.vue?vue&type=script&lang=ts":
/*!****************************************************************!*\
  !*** ./src/pages/collection/index.vue?vue&type=script&lang=ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/collection/index.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/pages/collection/index.vue?vue&type=template&id=130d4e25&ts=true":
/*!******************************************************************************!*\
  !*** ./src/pages/collection/index.vue?vue&type=template&id=130d4e25&ts=true ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_130d4e25_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_130d4e25_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=130d4e25&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/collection/index.vue?vue&type=template&id=130d4e25&ts=true");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/pages/collection/index.vue"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map