<tempalte>
  <div>
    <el-button @click="handleTestHello">测试Hello接口</el-button>
  </div>
</tempalte>

<script>
import testApi from '@/api/test.js'

export default {
  methods: {
    handleTestHello() {
      testApi.hello().then(res => {
        console.log('hello 接口返回的结果是:', res)
      })
    }
  }
}
</script>