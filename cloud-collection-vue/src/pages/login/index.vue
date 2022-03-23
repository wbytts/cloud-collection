<template>
  <div class="login-page">
    <div class="login-container">
      <div class="head"></div>
      <div class="main">
        <el-form :model="form" :rules="rules">
          <el-form-item prop="username" label="用户名" label-width="100px">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码" label-width="100px">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <el-button type="primary" @click="doLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import testApi from '@/api/test.js';

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入与用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async doLogin() {
      console.log("点击了登录按钮", this.form);
      console.log('测试发请求');

      let res = await testApi.hello();
      console.log('接口返回的结果', res);

      // let testPost = await testApi.testPost();
      // console.log('测试post请求', testPost);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  .el-input {
    width: 300px;
  }
}

.login-page {
  width: 30%;
  height: 250px;
  margin: 200px auto;
  position: relative;
  border: 1px solid red;
}

.login-container {
  position: relative;
}

.footer {
  width: 200px;
}
</style>



