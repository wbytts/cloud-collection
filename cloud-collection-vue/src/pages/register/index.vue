<template>
  <div class="head">
    <div class="content">欢迎注册</div>
    <div class="main">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <div class="main-content">
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
          <el-form-item prop="age">
            <template #label>
              <div class="login-form-label">年龄</div>
            </template>
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>
        </div>
        <el-form-item class="bottom">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';

.head {
  width: 500px;
  height: 250px;
  @include abs-center;
  border-radius: 10px;
  box-shadow: 1px 2px 2px 4px #c7c3c3;
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
  text-align-last: justify;
}

.content {
  color: #272870;
  text-align: center;
  font-size: 30px;
  font-family: YouYuan;
  margin-top: 10px;
}
</style>