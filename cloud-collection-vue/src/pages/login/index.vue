<template>
  <div class="login-page">
    <div class="login-container">
      <div class="head"></div>
      <div class="main">
        <el-form :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" class="login-input"></el-input>
            <template #label>
              <div class="login-form-label">用户名</div>
            </template>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              class="login-input"
            ></el-input>
            <template #label>
              <div class="login-form-label">密码</div>
            </template>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <el-button type="primary" @click="doLogin">登录</el-button>
        <el-button type="primary" size="mini">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import testApi from "@/api/test.js";

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
      console.log("测试发请求");

      let res = await testApi.hello();
      console.log("接口返回的结果", res);

      // let testPost = await testApi.testPost();
      // console.log('测试post请求', testPost);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  margin: 200px auto;
  position: relative;

  .head {
    display: inline-block;
    text-align: justify;
  }
  .login-container {
    width: 500px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 1px 2px 2px 4px #c7c3c3 ;
    .main {
      width: 300px;
      margin: 0 auto;
      ::v-deep .el-form-item__label {
        display: inline-block;
        text-align: justify;
      }
      .login-form-label {
        display: inline-block;
        width: 4em; // 初始给四个字的宽度
        text-align: justify;
        i {
          display: inline-block;
          width: 100%;
        }
      }
      .login-input {
        display: inline-block;
        width: 200px;
      }
    }
  }
  .footer {
    position: relative;
    button:nth-child(1) {
      position: absolute;
      top: 20px;
      left: 30px;
      width: 40%;
    }
    button:nth-child(2) {
      position: absolute;
      top: 25px;
      right: 30px;
    }
  }
}
</style>


