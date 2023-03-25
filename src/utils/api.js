import Taro from '@tarojs/taro'

/**
 * 验证登陆状态
 * @returns 
 */
export function authCheck() {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/auth/check',
    method: 'GET',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
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
export function authLogin(code, encryptedData = null, iv = null) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/auth/login',
    data: {
      appid: process.env.APP_ID,
      encryptedData,
      iv,
      code,
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
export function search(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/search',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 阿姨信息
 * @param {string} id - 阿姨ID
 * @returns 
 */
export function ayDetail(id) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/ay/detail/' + id,
    method: 'GET',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
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
export function ayCommentPage(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/ay/commentPage',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
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
export function replyCommentPage(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/ay/replyCommentPage',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 点评阿姨
 * @param {object} data - 请求实体 
 * @returns 
 */
export function comment(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/ay/comment',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 回复评论
 * @param {object} data - 请求实体 
 * @returns 
 */
export function replycomment(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/ay/replycomment',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 阿姨认证/注册
 * @param {object} data - 请求实体 
 * @returns 
 */
export function cert(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/ay/cert',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 我的点评
 * @param {object} data - 请求实体 
 * @returns 
 */
export function myCommentPage(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/commentPage',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 我的收藏
 * @param {object} data - 请求实体 
 * @returns 
 */
export function myCollectPage(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/collectPage',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 添加我的收藏
 * @param {string} ayId - 阿姨ID
 * @returns 
 */
export function myAddCollect(ayId) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/addCollect/' + ayId,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 删除我的收藏
 * @param {string} ayId - 阿姨ID
 * @returns 
 */
export function myDelCollect(ayId) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/delCollect/' + ayId,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
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
export function myCommentMsg(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/commentMsg',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
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
export function mySysMsg(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/sysMsg',
    data,
    method: 'POST',
    header: {
      // 默认值
      'content-type': 'application/json',
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 我的认证
 * @returns 
 */
export function myCert() {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/cert',
    method: 'GET',
    header: {
      // 默认值
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 未读数量
 * @returns 
 */
export function countUnread() {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/count-unread',
    method: 'GET',
    header: {
      // 默认值
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 未读数量
 * @returns 
 */
export function readAll(types) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/read-all',
    method: 'GET',
    data: {
      types
    },
    header: {
      // 默认值
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 评论明细
 * @returns 
 */
export function commentDetail(id) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/comment-detail/' + id,
    method: 'GET',
    header: {
      // 默认值
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

export function fileUpload() {

}

/**
 * 下载图片 
 */
export function downloadImg(url) {
  return Taro.downloadFile({
    url: url,
    header: {
      // 默认值
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 异常处理
 */
export function requestAfterHandle(res, succCall) {
  // 刷新 token
  if (res && res.data && res.data.newtoken) {
    const user = Taro.getStorageSync("user");
    user.token = res.data.newtoken;
    Taro.setStorageSync("user", user);
  }
  // 重新组装新的响应
  // 1. 服务器状态码错误
  if (!/^2/.test(res.statusCode)) {
    console.error('服务繁忙', res);
    Taro.showToast({
      title: '服务繁忙，请稍后重试',
      icon: "error",
      duration: 2000,
      mask: true,
    });
    return { data: null, msg: 'err' };
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
    Taro.removeStorageSync("user");
    login();
    return { data: null, msg: 'auth' };
  }
  // 3. 其他错误
  if (!/^2/.test(res.data.code)) {
    console.error('请求失败', res);
    Taro.hideLoading();
    Taro.showToast({
      title: res.data.message || '请求失败，请稍后重试',
      icon: "error",
      duration: 2000,
      mask: true,
    });
    return { data: null, msg: 'err' };
  }
  // 正常
  const returnRes = { data: res.data.data, msg: 'ok' };
  if (succCall) {
    succCall(returnRes.data);
  }
  return returnRes;
}

/**
 * 登录
 */
export function login(succCall) {
  Taro.login({
    success: function (res) {
      if (res.code) {
        authLogin(res.code).then(authRes => {
          requestAfterHandle(authRes, data => {
            Taro.setStorageSync("user", data);
            succCall && succCall();
          });
        });
      } else {
        console.log("登录失败！" + res.errMsg);
      }
    },
  });
}

/**
 * 保存用户信息
 */
export function saveProfile(data) {
  return Taro.request({
    url: process.env.REQ_BASE_URL + '/simple/my/save-profile',
    method: 'POST',
    data,
    header: {
      // 默认值
      'miniapp-token': Taro.getStorageSync('user').token
    }
  });
}

/**
 * 异常处理
 */
export function requestAfterHandle2(res) {
  if (!/^2/.test(res.statusCode)) {
    console.error('请求错误', res);
    return null;
  }
  return res.data;
}

/**
 * 时间格式化
 */
export function timeTxt(time) {
  const now = new Date().getTime();
  const date = new Date(time);
  const createTime = date.getTime();
  const timeDiff = now - createTime;
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
export function timeTxt2(time) {
  const now = new Date().getTime();
  const date = new Date(time);
  return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
}

export default {
  authCheck,
  authLogin,
  search,
  ayDetail,
  ayCommentPage,
  replyCommentPage,
  comment,
  replycomment,
  cert,
  myCommentPage,
  myCollectPage,
  myAddCollect,
  myDelCollect,
  myCommentMsg,
  mySysMsg,
  requestAfterHandle,
  timeTxt,
  timeTxt2,
  myCert,
  requestAfterHandle2,
  countUnread,
  readAll,
  commentDetail,
  downloadImg,
  login,
  saveProfile,
}
