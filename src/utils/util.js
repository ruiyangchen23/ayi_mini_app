import Taro from '@tarojs/taro';

export default {
  /**
   * 格式化日期 
   */
  formatDate: (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  /**
   * 切割日期
   */
  splitDate: (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return [year, month, day];
  },
  /**
   * 切割图片成 uploader 组件可识别的格式
   */
  splitImgs: (str) => {
    if (!str) return;
    return str.split(',').filter(url => !!url).map(url => {
      const urlSplitArr = url.split("/");
      return {
        name: urlSplitArr[urlSplitArr.length - 1],
        url,
        status: 'success',
        message: '上传成功',
        type: 'image'
      }
    });
  },
  /**
   * 复制
   */
  copy: (txt) => {
    Taro.setClipboardData({
      data: txt,
      success: function (res) {
        Taro.showToast({
          title: '已复制',
          icon: 'success',
          duration: 1500
        })
      }
    })
  }
}
