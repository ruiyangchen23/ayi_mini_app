
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
    'pages/new_index/new_index',
  ],
  window: {
    backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#fff',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '阿姨推推',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#B1B1B1',
    selectedColor: '#34C266',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/my/index',
        text: '我'
      },
      {
        pagePath: 'pages/new_index/new_index',
        text: '新我'
      }

    ]
  },
  lazyCodeLoading: 'requiredComponents',
})
