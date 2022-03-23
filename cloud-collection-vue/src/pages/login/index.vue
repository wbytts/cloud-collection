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
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '请输入与用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    doLogin() {
      console.log('点击了登录按钮', this.form);
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

.footer {
}
</style>



