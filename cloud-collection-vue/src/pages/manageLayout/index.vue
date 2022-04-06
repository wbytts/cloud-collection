<template>
  <div class="manage-layout-wrapper">
    <!-- 侧边栏 -->
    <SideBar class="side-bar-container"></SideBar>
    <!-- 主要页面 -->
    <div class="manage-main-container">
      <!-- 顶部 -->
      <div class="manage-main-top">
        <!-- 导航栏 -->
        <NavBar></NavBar>
        <!-- 标签栏 -->
        <TagsView></TagsView>
      </div>
      <!-- 页面主体 -->
      <ManageMain></ManageMain>
    </div>
  </div>
</template>

<script>
import { SideBar, NavBar, TagsView, ManageMain } from './components';

export default {
  components: { SideBar, NavBar, TagsView, ManageMain },
  data() {
    return {
      visible: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.manage-layout-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>


