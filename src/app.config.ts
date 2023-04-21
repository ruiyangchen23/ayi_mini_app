
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mycomment/index',
    'pages/aydetail/index',
    'pages/aycert/index',
    'pages/comment/index',
    // 'pages/comment1/index',
    'pages/messages/index',
    'pages/collection/index',
    'pages/my/index',
    'pages/mycert/index',
    'pages/profile/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#fff',
    navigationBarBackgroundColor: '#ea8382',
    navigationBarTitleText: '阿姨推推',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#B1B1B1',
    selectedColor: '#34C266',
    backgroundColor: '#F8F8F8',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/my/index',
        text: '我'
      }
    ]
  },
  lazyCodeLoading: 'requiredComponents',
})
