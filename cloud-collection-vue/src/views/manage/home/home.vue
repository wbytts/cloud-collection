<template>
  <div>
    <el-button @click="handleLogout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      localStorage.removeItem('token'); // BOM
      this.$router.push({ name: 'loginPage' });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>