<template>
  <div>
    <el-button @click="handleTestHello">测试Hello接口</el-button>
    <el-button @click="handleQueryAllUser">查询所有用户</el-button>
    <el-button @click="handleGetTokenInfo">/getTokenInfo</el-button>
  </div>
</template>

<script>
import testApi from '@/api/test.js'
import userApi from '@/api/user.js'
import loginApi from '@/api/login.js'

export default {
  methods: {
    handleTestHello() {
      testApi.hello().then(res => {
        console.log('hello 接口返回的结果是:', res)
      })
    },
    async handleQueryAllUser() {
      let res = await userApi.queryAllUser()
      console.log('用户列表:', res);
    },
    async handleGetTokenInfo() {
      let token = localStorage.getItem('token')
      let res = await loginApi.getTokenInfo({token})
      console.log('token验证结果', res)
    }
  }
}
</script>