<template>
  <div class="bcg">
    <div class="top">
      <div class="content">LOGO</div>
      <div class="come">欢迎来到云收藏</div>
      <div class="main">
        <div class="main1">
          <el-form :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input prefix-icon="el-icon-user-solid" v-model="form.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input prefix-icon="el-icon-lock" type="password" placeholder="请输入密码"
                        v-model="form.password"
                        show-password></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="doLogin">登陆</el-button>
          <div class="footer">
            <span><i class="el-icon-circle-check"></i>记住密码</span>
            <a @click="toRegiste()">注册</a>
            <a>忘记密码</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import loginApi from '@/api/login.js';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
      },
    };
  },
  methods: {
    async doLogin() {
      let res = await loginApi.login(this.form);
      console.log('登录结果', res)
      localStorage.setItem('token', res)
    },
    toRegister() {
      this.$router.push('/register');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';

.bcg {
  background: url(../../assets/images/manageMenuIcon/001bcg.webp) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
}

.top {
  width: 28%;
  height: 320px;
  background-color: rgba(49, 34, 116, 0.2);
  @include abs-center;
  box-shadow: 1px 1px 2px 4px #060692;
}

.content {
  font-size: 50px;
  text-align: center;
  margin-top: 5px;
  text-shadow: #ff0000 0 0 10px;
  color: white;
}

.come {
  font-size: 2px;
  text-align: center;
  text-shadow: 5px 5px 5px black, 0 0 2px black;
  color: white;
}

.main1 {
  height: 200px;
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
}

.main1 .el-input {
  margin-top: 10px;
  display: block;
}

.el-button {
  margin-top: 10px;
  width: 100%;
}

.footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  color: white;

  a {
    cursor: pointer;

    &:active {
      color: rgb(33, 25, 139);
    }
  }
}

::v-deep {
  .el-form-item {
    margin-bottom: 10px;
  }
}

</style>


