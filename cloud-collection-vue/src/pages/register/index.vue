<template>
  <div class="bcg">
    <div class="head">
      <div class="content">欢迎注册</div>
      <div class="main">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <div class="main-content">
            <el-form-item prop="phone">
              <template #label>
                <div class="login-form-label">手机号</div>
              </template>
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <template #label>
                <div class="login-form-label">密码</div>
              </template>
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <template #label>
                <div class="login-form-label">确定密码</div>
              </template>
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
          </div>
          <el-form-item class="bottom">
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>

            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        phone: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        checkPass: [{ required: true, message: '请输入密码，再次确定密码', trigger: 'blur' }],
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';

.bcg {
  background: url(../../assets/images/manageMenuIcon/002bcg.webp) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
}

.head {
  width: 600px;
  height: 250px;
  @include abs-center;
  border-radius: 10px;
  box-shadow: 1px 2px 2px 4px #4e5997;
  width: 30%;
  height: 400px;
}

.main {
  //   width: 200px;
  @include abs-center;
}

.main-content .el-input {
  width: 200px;
}

.login-form-label {
  width: 57px;
  display: inline-block;
  text-align: justify;
  color: #050505;
}

.content {
  font-size: 40px;
  text-align: center;
  margin-top: 5px;
  text-shadow: #ff0000 0 0 10px;
  color: white;
}
</style>