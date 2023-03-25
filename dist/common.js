"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/custom-tab-bar/index.vue?vue&type=script&lang=ts":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/custom-tab-bar/index.vue?vue&type=script&lang=ts ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  setup: function setup(props) {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      color: "#B1B1B1",
      selectedColor: "#34C266",
      backgroundColor: "#F8F8F8",
      list: [{
        pagePath: "pages/index/index",
        text: "找阿姨"
        // iconPath: 'home'
      }, {
        iconPath: "plus-square",
        children: [{
          pagePath: "pages/comment/index",
          text: "雇主-点评阿姨",
          tabbarPage: false
        }, {
          pagePath: "pages/aycert/index?type=注册",
          text: "阿姨-我要注册",
          tabbarPage: false
        }],
        childrenShow: false
      }, {
        pagePath: "pages/my/index",
        text: "我",
        unreadCount: true
        // iconPath: 'my'
      }],

      unreadCount: 0
    });
    var current = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
    var unreadCount = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
    var overlayShow = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
    var overlayStyle = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      backgroundColor: "rgba(0, 0, 0, .0)"
    });
    return {
      props: props,
      state: state,
      current: current,
      unreadCount: unreadCount,
      overlayShow: overlayShow,
      overlayStyle: overlayStyle
    };
  },
  props: [],
  computed: {},
  filters: {},
  methods: {
    tabSwitch: function tabSwitch(item) {
      console.log(item);
      if (item.children && item.children.length > 0) {
        item.childrenShow = true;
        return;
      }
      if (item.tabbarPage == false) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: "/" + item.pagePath
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().switchTab({
          url: "/" + item.pagePath
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/custom-tab-bar/index.vue?vue&type=template&id=b80e755c&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/custom-tab-bar/index.vue?vue&type=template&id=b80e755c&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "tabbar"
};
var _hoisted_2 = {
  class: "h5-div nut-tabbar__placeholder"
};
var _hoisted_3 = {
  class: "nut-tabbar nut-tabbar-bottom nut-tabbar-safebottom"
};
var _hoisted_4 = ["onClick"];
var _hoisted_5 = {
  class: "nut-tabbar-item_icon-box"
};
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = {
  key: 1,
  class: "unread-count"
};
var _hoisted_8 = {
  key: 0,
  class: "overlay-parent"
};
var _hoisted_9 = {
  class: "tabbar-children"
};
var _hoisted_10 = {
  key: 0,
  class: "tabbar-blank realy"
};
var _hoisted_11 = ["onClick"];
var _hoisted_12 = {
  key: 1,
  class: "tabbar-blank"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-icon");
  var _component_nut_overlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nut-overlay");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <view class=\"tabbar\">\r\n        <nut-tabbar v-model:visible=\"current\" :bottom=\"true\" :safe-area-inset-bottom=\"true\" :placeholder=\"true\" @tab-switch=\"tabSwitch\">\r\n            <nut-tabbar-item v-for=\"(item, idx) in state.list\" :key=\"idx\"\r\n                :tab-title=\"item.text\" :icon=\"item.iconPath\" :to=\"item.pagePath\"></nut-tabbar-item>\r\n        </nut-tabbar>\r\n    </view> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.state.list, function (it, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: idx
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'h5-div nut-tabbar-item': true,
        'nut-tabbar-item__icon--unactive': $setup.current != idx
      }),
      onClick: function onClick($event) {
        return $options.tabSwitch(it);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_5, [it.iconPath ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, [$setup.current == idx ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_nut_icon, {
      key: 0,
      "font-class-name": "iconfont",
      "class-prefix": "icon",
      name: it.iconPath,
      style: {
        "font-size": "24px",
        "color": "#fa2c19"
      }
    }, null, 8 /* PROPS */, ["name"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.current != idx ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_nut_icon, {
      key: 1,
      "font-class-name": "iconfont",
      "class-prefix": "icon",
      name: it.iconPath,
      style: {
        "font-size": "24px"
      }
    }, null, 8 /* PROPS */, ["name"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'tabbar-it-unread-count': it.unreadCount && $setup.unreadCount && $setup.unreadCount > 0,
        'nut-tabbar-item_icon-box_nav-word': true,
        'nut-tabbar-item_icon-box_big-word': !!it.text
      })
    }, [!!it.text ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(it.text), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), it.unreadCount && $setup.unreadCount && $setup.unreadCount > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.unreadCount), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)])], 10 /* CLASS, PROPS */, _hoisted_4), it.children ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nut_overlay, {
      class: "overlay",
      visible: it.childrenShow,
      "onUpdate:visible": function onUpdateVisible($event) {
        return it.childrenShow = $event;
      },
      "overlay-style": $setup.overlayStyle
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("view", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.state.list, function (tmpIt, tmpIdx) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: tmpIdx
          }, [tmpIdx == idx ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(it.children, function (childIt, childIdx) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", {
              key: childIdx,
              class: "child-it nut-tabbar-item_icon-box_big-word",
              onClick: function onClick($event) {
                return $options.tabSwitch(childIt);
              }
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(childIt.text), 9 /* TEXT, PROPS */, _hoisted_11);
          }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", _hoisted_12))], 64 /* STABLE_FRAGMENT */);
        }), 128 /* KEYED_FRAGMENT */))])];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["visible", "onUpdate:visible", "overlay-style"])], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, it.childrenShow]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports authCheck, authLogin, search, ayDetail, ayCommentPage, replyCommentPage, comment, replycomment, cert, myCommentPage, myCollectPage, myAddCollect, myDelCollect, myCommentMsg, mySysMsg, myCert, countUnread, readAll, commentDetail, fileUpload, downloadImg, requestAfterHandle, login, saveProfile, requestAfterHandle2, timeTxt, timeTxt2 */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 验证登陆状态
 * @returns 
 */
function authCheck() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/auth/check',
    method: 'GET',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 登录
 * @param {string} code - wx.login 后获取到的 code 
 * @param {string} encryptedData - wx.getUserProfile 后获取到的 encryptedData
 * @param {string} iv - wx.getUserProfile 后获取到的 iv
 * @returns 
 */
function authLogin(code) {
  var encryptedData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var iv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/auth/login',
    data: {
      appid: "wxdf7b253ec398a07d",
      encryptedData: encryptedData,
      iv: iv,
      code: code
    },
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json'
    }
  });
}

/**
 * 搜索
 * @param {object} data - 请求实体 
 * @param {string} data.keyword - 关键词
 * @param {string} data.location - 服务地区
 * @param {number} data.ageStart - 年龄区间
 * @param {number} data.ageEnd - 年龄区间
 * @param {number} data.servYear - 服务年限区间
 * @param {number} data.servYear - 服务年限区间
 * @param {number} data.rateStart - 评分区间
 * @param {number} data.rateEnd - 评分区间
 * @param {string} data.sort - 排序：rateAsc、rateDesc、ageAsc、ageDesc、servYearAsc、servYearDesc
 * @param {number} data.pageNum - 当前页(从1开始)
 * @param {number} data.pageSize - 页容量
 * @returns 
 */
function search(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/search',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 阿姨信息
 * @param {string} id - 阿姨ID
 * @returns 
 */
function ayDetail(id) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/ay/detail/' + id,
    method: 'GET',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 阿姨点评列表(分页)
 * @param {object} data - 请求实体 
 * @param {string} data.ayId - 阿姨ID
 * @param {number} data.pageNum - 当前页(从1开始)
 * @param {number} data.pageSize - 页容量
 * @returns 
 */
function ayCommentPage(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/ay/commentPage',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 回复点评列表(分页)
 * @param {object} data - 请求实体 
 * @param {string} data.commentId - 点评ID
 * @param {number} data.pageNum - 当前页(从1开始)
 * @param {number} data.pageSize - 页容量
 * @returns 
 */
function replyCommentPage(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/ay/replyCommentPage',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 点评阿姨
 * @param {object} data - 请求实体 
 * @returns 
 */
function comment(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/ay/comment',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 回复评论
 * @param {object} data - 请求实体 
 * @returns 
 */
function replycomment(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/ay/replycomment',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 阿姨认证/注册
 * @param {object} data - 请求实体 
 * @returns 
 */
function cert(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/ay/cert',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 我的点评
 * @param {object} data - 请求实体 
 * @returns 
 */
function myCommentPage(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/commentPage',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 我的收藏
 * @param {object} data - 请求实体 
 * @returns 
 */
function myCollectPage(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/collectPage',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 添加我的收藏
 * @param {string} ayId - 阿姨ID
 * @returns 
 */
function myAddCollect(ayId) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/addCollect/' + ayId,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 删除我的收藏
 * @param {string} ayId - 阿姨ID
 * @returns 
 */
function myDelCollect(ayId) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/delCollect/' + ayId,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 我的评论消息
 * @param {object} data - 请求实体 
 * @param {number} data.pageNum - 当前页(从1开始)
 * @param {number} data.pageSize - 页容量
 * @returns 
 */
function myCommentMsg(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/commentMsg',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 我的系统消息
 * @param {object} data - 请求实体 
 * @param {number} data.pageNum - 当前页(从1开始)
 * @param {number} data.pageSize - 页容量
 * @returns 
 */
function mySysMsg(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/sysMsg',
    data: data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 我的认证
 * @returns 
 */
function myCert() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/cert',
    method: 'GET',
    header: {
      // 默认值
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 未读数量
 * @returns 
 */
function countUnread() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/count-unread',
    method: 'GET',
    header: {
      // 默认值
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 未读数量
 * @returns 
 */
function readAll(types) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/read-all',
    method: 'GET',
    data: {
      types: types
    },
    header: {
      // 默认值
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 评论明细
 * @returns 
 */
function commentDetail(id) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/comment-detail/' + id,
    method: 'GET',
    header: {
      // 默认值
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}
function fileUpload() {}

/**
 * 下载图片 
 */
function downloadImg(url) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().downloadFile({
    url: url,
    header: {
      // 默认值
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 异常处理
 */
function requestAfterHandle(res, succCall) {
  // 刷新 token
  if (res && res.data && res.data.newtoken) {
    var user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("user");
    user.token = res.data.newtoken;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync("user", user);
  }
  // 重新组装新的响应
  // 1. 服务器状态码错误
  if (!/^2/.test(res.statusCode)) {
    console.error('服务繁忙', res);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
      title: '服务繁忙，请稍后重试',
      icon: "error",
      duration: 2000,
      mask: true
    });
    return {
      data: null,
      msg: 'err'
    };
  }
  // 2. 未登录
  if (res.data.code == 401) {
    console.error('未登录', res);
    // Taro.showToast({
    //   title: '未登录，请登录',
    //   icon: "error",
    //   duration: 2000,
    //   mask: true,
    // });

    // 移除用户信息
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync("user");
    login();
    return {
      data: null,
      msg: 'auth'
    };
  }
  // 3. 其他错误
  if (!/^2/.test(res.data.code)) {
    console.error('请求失败', res);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
      title: res.data.message || '请求失败，请稍后重试',
      icon: "error",
      duration: 2000,
      mask: true
    });
    return {
      data: null,
      msg: 'err'
    };
  }
  // 正常
  var returnRes = {
    data: res.data.data,
    msg: 'ok'
  };
  if (succCall) {
    succCall(returnRes.data);
  }
  return returnRes;
}

/**
 * 登录
 */
function login(succCall) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login({
    success: function success(res) {
      if (res.code) {
        authLogin(res.code).then(function (authRes) {
          requestAfterHandle(authRes, function (data) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync("user", data);
            succCall && succCall();
          });
        });
      } else {
        console.log("登录失败！" + res.errMsg);
      }
    }
  });
}

/**
 * 保存用户信息
 */
function saveProfile(data) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: "https://ayi.51putong.com/api/miniapp" + '/simple/my/save-profile',
    method: 'POST',
    data: data,
    header: {
      // 默认值
      'miniapp-token': _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('user').token
    }
  });
}

/**
 * 异常处理
 */
function requestAfterHandle2(res) {
  if (!/^2/.test(res.statusCode)) {
    console.error('请求错误', res);
    return null;
  }
  return res.data;
}

/**
 * 时间格式化
 */
function timeTxt(time) {
  var now = new Date().getTime();
  var date = new Date(time);
  var createTime = date.getTime();
  var timeDiff = now - createTime;
  if (now - createTime < 1000 * 60) {
    return '刚刚';
  }
  if (now - createTime < 1000 * 60 * 60) {
    return (timeDiff / 1000 / 60 + "").split(".")[0] + "分钟前";
  }
  if (now - createTime < 1000 * 60 * 60 * 24) {
    return (timeDiff / 1000 / 60 / 60 + "").split(".")[0] + "小时前";
  }
  if (timeDiff < 1000 * 60 * 60 * 24 * 4) {
    return (timeDiff / 1000 / 60 / 60 / 24 + "").split(".")[0] + "天前";
  }
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

/**
 * 时间格式化
 */
function timeTxt2(time) {
  var now = new Date().getTime();
  var date = new Date(time);
  return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
}
/* harmony default export */ __webpack_exports__["default"] = ({
  authCheck: authCheck,
  authLogin: authLogin,
  search: search,
  ayDetail: ayDetail,
  ayCommentPage: ayCommentPage,
  replyCommentPage: replyCommentPage,
  comment: comment,
  replycomment: replycomment,
  cert: cert,
  myCommentPage: myCommentPage,
  myCollectPage: myCollectPage,
  myAddCollect: myAddCollect,
  myDelCollect: myDelCollect,
  myCommentMsg: myCommentMsg,
  mySysMsg: mySysMsg,
  requestAfterHandle: requestAfterHandle,
  timeTxt: timeTxt,
  timeTxt2: timeTxt2,
  myCert: myCert,
  requestAfterHandle2: requestAfterHandle2,
  countUnread: countUnread,
  readAll: readAll,
  commentDetail: commentDetail,
  downloadImg: downloadImg,
  login: login,
  saveProfile: saveProfile
});

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["default"] = ({
  locationList: function locationList() {
    return [{
      text: "北京",
      value: "北京"
    }, {
      text: "天津",
      value: "天津"
    }, {
      text: "河北",
      value: "河北"
    }, {
      text: "山西",
      value: "山西"
    }, {
      text: "内蒙古",
      value: "内蒙古"
    }, {
      text: "辽宁",
      value: "辽宁"
    }, {
      text: "吉林",
      value: "吉林"
    }, {
      text: "黑龙江",
      value: "黑龙江"
    }, {
      text: "上海",
      value: "上海"
    }, {
      text: "江苏",
      value: "江苏"
    }, {
      text: "浙江",
      value: "浙江"
    }, {
      text: "安徽",
      value: "安徽"
    }, {
      text: "福建",
      value: "福建"
    }, {
      text: "江西",
      value: "江西"
    }, {
      text: "山东",
      value: "山东"
    }, {
      text: "河南",
      value: "河南"
    }, {
      text: "湖北",
      value: "湖北"
    }, {
      text: "湖南",
      value: "湖南"
    }, {
      text: "广东",
      value: "广东"
    }, {
      text: "广西",
      value: "广西"
    }, {
      text: "海南",
      value: "海南"
    }, {
      text: "重庆",
      value: "重庆"
    }, {
      text: "四川",
      value: "四川"
    }, {
      text: "贵州",
      value: "贵州"
    }, {
      text: "云南",
      value: "云南"
    }, {
      text: "西藏",
      value: "西藏"
    }, {
      text: "陕西",
      value: "陕西"
    }, {
      text: "甘肃",
      value: "甘肃"
    }, {
      text: "青海",
      value: "青海"
    }, {
      text: "宁夏",
      value: "宁夏"
    }, {
      text: "新疆",
      value: "新疆"
    }, {
      text: "香港",
      value: "香港"
    }, {
      text: "澳门",
      value: "澳门"
    }, {
      text: "台湾",
      value: "台湾"
    }];
  },
  servTypeList: function servTypeList() {
    return [{
      text: '月嫂',
      value: '月嫂'
    }, {
      text: '育儿嫂',
      value: '育儿嫂'
    }];
  }
});

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * 格式化日期 
   */
  formatDate: function formatDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(day);
  },
  /**
   * 切割日期
   */
  splitDate: function splitDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return [year, month, day];
  },
  /**
   * 切割图片成 uploader 组件可识别的格式
   */
  splitImgs: function splitImgs(str) {
    if (!str) return;
    return str.split(',').filter(function (url) {
      return !!url;
    }).map(function (url) {
      var urlSplitArr = url.split("/");
      return {
        name: urlSplitArr[urlSplitArr.length - 1],
        url: url,
        status: 'success',
        message: '上传成功',
        type: 'image'
      };
    });
  },
  /**
   * 复制
   */
  copy: function copy(txt) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setClipboardData({
      data: txt,
      success: function success(res) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
          title: '已复制',
          icon: 'success',
          duration: 1500
        });
      }
    });
  }
});

/***/ }),

/***/ "./src/components/custom-tab-bar/index.vue":
/*!*************************************************!*\
  !*** ./src/components/custom-tab-bar/index.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_vue_vue_type_template_id_b80e755c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b80e755c&ts=true */ "./src/components/custom-tab-bar/index.vue?vue&type=template&id=b80e755c&ts=true");
/* harmony import */ var _index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts */ "./src/components/custom-tab-bar/index.vue?vue&type=script&lang=ts");
/* harmony import */ var C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_aligu_Downloads_miniapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_b80e755c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/custom-tab-bar/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/custom-tab-bar/index.vue?vue&type=script&lang=ts":
/*!*************************************************************************!*\
  !*** ./src/components/custom-tab-bar/index.vue?vue&type=script&lang=ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/custom-tab-bar/index.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/components/custom-tab-bar/index.vue?vue&type=template&id=b80e755c&ts=true":
/*!***************************************************************************************!*\
  !*** ./src/components/custom-tab-bar/index.vue?vue&type=template&id=b80e755c&ts=true ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_b80e755c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_26_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_b80e755c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=b80e755c&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-26.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/custom-tab-bar/index.vue?vue&type=template&id=b80e755c&ts=true");


/***/ })

}]);
//# sourceMappingURL=common.js.map