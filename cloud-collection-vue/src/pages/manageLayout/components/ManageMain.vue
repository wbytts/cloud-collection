<template>
  <div class="manage-main">
    <!-- view内容区域 -->
    <div class="manage-main-view">
      <!-- manage二级路由视图 -->
      <router-view></router-view>
    </div>
  </div>
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
  /* background-color: #fff; */
  /* border: 1px solid red; */
  .manage-main-view {
    background-color: #fff;
    width: 100%;
    height: calc(100vh - $nav-bar-height - $tags-view-height);
    margin: 0 auto;
  }
}

.fixed-header + .manage-main {
  padding-top: $tags-view-height;
}

</style>




