<template>
  <div>
      <div class="main">
          <el-row>
              <el-col :span="12">第一列</el-col>
              <el-col :span="12">第二列</el-col>
          </el-row>
          <el-row>
              <el-col :span="8">三分之一</el-col>
              <el-col :span="8">三分之一</el-col>
              <el-col :span="8">三分之一</el-col>
          </el-row>
          <el-row>
              <el-col :span="6">四分之一</el-col>
              <el-col :span="6">四分之一</el-col>
              <el-col :span="6">四分之一</el-col>
              <el-col :span="6">四分之一</el-col>
          </el-row>
          <el-row>
              <el-col :span="6">左侧</el-col>
              <el-col :span="18">右侧</el-col>
          </el-row>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main {
    width: 1000px;
    height: 600px;
    border: 1px solid red;
}

.el-col {
    border: 1px solid green;
}
</style>