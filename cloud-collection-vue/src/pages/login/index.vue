 <template>
  <div class="bcg">
    <div class="top">
      <div class="content">LOGO</div>
      <div class="come">欢迎来到云收藏</div>
      <div class="main">
        <div class="main1">
          <el-input  prefix-icon="el-icon-user-solid" v-model="input" placeholder="请输入账号"></el-input>
          <el-input   prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="input" show-password></el-input>
          <div class="number">
            <el-input  v-model="input" placeholder="输入验证码"></el-input>
            <el-button type="primary">验证码</el-button>
          </div>
          <el-button type="primary">登陆</el-button>
          <div class="footr">
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
import testApi from '@/api/test.js';

export default {
  data() {
    return {
      input: ''

    }

  },
  methods: {
    async doLogin() {
      console.log('点击了登录按钮', this.form);
      console.log('测试发请求');

      let res = await testApi.hello();
      console.log('接口返回的结果', res);

      // let testPost = await testApi.testPost();
      // console.log('测试post请求', testPost);
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
  width: 30%;
  height: 350px;
  background-color: rgba(49, 34, 116, 0.2);
  @include abs-center;
  box-shadow: 1px 1px 2px 4px #c7c3c3;
}

.content {
  font-size: 50px;
  color: rgb(7, 42, 240);
  text-align: center;
  margin-top: 5px;
}

.come {
  color: white;
  font-size: 10px;
  text-align: center;
}

.main1 {
  height: 200px;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
}
.main1 .el-input {
  margin-top: 10px;
  display: block;
} 

.el-button {
  margin-top: 10px;
  width: 100%;
}

.number {
  position: relative;
}

.number .el-input {
  width: 50%;
}

.number .el-button {
  position: absolute;
  width: 35%;
  right: 0px;
  top: -10px;
}

.footr {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  color: white;
}

.footr a:active {
  color: rgb(33, 25, 139);
} 

.footr a {
  cursor: pointer;
}
</style>


