import { createApp } from 'vue'
import { Button, Toast, SearchBar, Icon, Grid, GridItem, Avatar, Layout, Row, Col, Tabbar, TabbarItem,
  Divider, Image, Card, Tag, Price, Category, CategoryPane, Swiper, SwiperItem, Navbar, Tabs, TabPane,
  Empty, Checkbox, CheckboxGroup, Cell, CellGroup, Sku, Popup, InputNumber, OverLay, InfiniteLoading,
  NoticeBar, Rate, Picker, TextArea, Uploader, Progress,  DatePicker, Input, Notify, Swipe, WaterMark } from '@nutui/nutui-taro';

import './app.scss'
import './custom_theme.scss'
import './assert/fonts/font.css'

import Taro from '@tarojs/taro'
import API from './utils/api'

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const App = createApp({
  onShow (options) {
    console.log('onShow', options);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})


App.use(Button)
.use(Toast)
.use(SearchBar)
.use(Icon)
.use(Grid)
.use(GridItem)
.use(Avatar)
.use(Layout)
.use(Row)
.use(Col)
.use(Tabbar)
.use(TabbarItem)
.use(Divider)
.use(Image)
.use(Card)
.use(Tag)
.use(Price)
.use(Category)
.use(CategoryPane)
.use(Swiper)
.use(SwiperItem)
.use(Navbar)
.use(Tabs)
.use(TabPane)
.use(Empty)
.use(Checkbox)
.use(CheckboxGroup)
.use(Cell)
.use(CellGroup)
.use(Sku)
.use(Popup)
.use(InputNumber)
.use(OverLay)
.use(InfiniteLoading)
.use(NoticeBar)
.use(Rate)
.use(Picker)
.use(TextArea)
.use(Uploader)
.use(Progress)
.use(DatePicker)
.use(Input)
.use(Notify)
.use(Swipe)
.use(WaterMark)
// .use(vuetify)

const login = () => {
  API.login(() => {
    syncUnreadCount();
    syncUnreadCountInterval();
  });
};

const syncUnreadCount = () => {
  API.countUnread().then(unreadRes => {
    API.requestAfterHandle(unreadRes, data => {
      Taro.setStorageSync("unreadCount", data || []);
    });
  });
};

const syncUnreadCountInterval = () => {
  setInterval(() => {
    syncUnreadCount();
  }, 3 * 60 * 1000);
};

// 登录
const user = Taro.getStorageSync("user");
if (!user || !user.token) {
  login();
} else {
  API.authCheck().then(authCheckRes => {
    API.requestAfterHandle(authCheckRes, data => {
      if (1 == data.state) {
        syncUnreadCount();
        syncUnreadCountInterval();
      } else {
        // 重新登录
        login();
      }
    });
  });
}

export default App
