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
              <el-input
                prefix-icon="el-icon-lock"
                type="password"
                placeholder="请输入密码"
                v-model="form.password"
                show-password
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="doLogin">登陆</el-button>
          <div class="footer">
            <span><input type="checkbox" id="remember" v-model="isRemeber" /><label for="remember">记住我</label></span>
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
      isRemeber: false,
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在6到12位', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在6到10位', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    async doLogin() {
      let res = await loginApi.login(this.form);
      console.log('登录结果', res);
      if (res.result) {
        localStorage.setItem('token', res.data.token);
        this.$message.success(res.msg);
        // 登陆成功之后，跳转管理页面首页
        this.$router.push({name: 'manageHome'})
      } else {
        this.$message.error(res.msg);
      }
    },
    toRegister() {
      this.$router.push('/register');
    },
  },
  mounted() {
    this.isRemeber = localStorage.getItem('remeber') || false
    this.form = JSON.parse(localStorage.getItem('loginForm')) || {username: '', password: ''}

    this.$watch(
      'isRemeber',
      (newVal, oldVal) => {
        localStorage.setItem('remeber', newVal);
        localStorage.setItem('loginForm', JSON.stringify(this.form));
      },
      // { immediate: true},
    );
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';

.bcg {
  background: url(@/assets/images/manageMenuIcon/003bcg.webp) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
}

.top {
  width: 28%;
  height: 350px;
  // background-color: #fff;
  @include abs-center;
  box-shadow: 1px 1px 2px 4px #dedee7;
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
  color: rgb(12, 12, 12);

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


