<template>
  <div class="manage-main">页面主体</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.manage-main {
  min-height: calc(100vh - 100px);
  /* width: 100%; */
  position: relative;
  overflow: hidden;
}

.fixed-header + .manage-main {
  padding-top: 50px;
}

</style>




