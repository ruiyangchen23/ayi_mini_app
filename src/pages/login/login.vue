<template>
    <div>
      <h2>注册新账户</h2>
      <form @submit.prevent="registerUser">
        <label>
          用户名：
          <input type="text" v-model="username" />
        </label>
        <br /><br />
        <label>
          密码：
          <input type="password" v-model="password" />
        </label>
        <br /><br />
        <button @click="registerUser">注册</button>
      </form>
    </div>
  </template>
  
  <script>
  import API from "../../utils/api";
  import { ref } from "vue";
  
  export default {
    setup() {
      const username = ref("");
      const password = ref("");
  
      const registerUser = () => {
        // 发送请求到后端进行注册操作
        // 代码略
        console.log("username is",username);
        console.log("password is",password);
        let data = {
          "username" : username.value,
          "password" : password.value,
        }
        API.signup(data).then(
          (res) => {
            API.requestAfterHandle(res, (data) => {
              console.log(data);
            });
          }
        );
        // todo: jwt token
        console.log(`注册成功：${username.value}`);
      };
  
      return {
        username,
        password,
        registerUser,
      };
    },
  };
  </script>
  