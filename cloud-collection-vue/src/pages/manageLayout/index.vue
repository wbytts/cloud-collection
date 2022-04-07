<template>
  <div class="manage-layout-wrapper">
    <!-- 侧边栏 -->
    <SideBar class="side-bar-container"></SideBar>
    <!-- 主要页面 -->
    <div class="manage-main-container">
      <!-- 顶部 -->
      <div class="manage-main-top" :class="{'fixed-header': fixedHeader}">
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
      fixedHeader: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.manage-layout-wrapper {
  position: relative;
  height: 100%;
  /* width: 100%; */
  margin-left: $side-bar-width !important;
  min-height: 100%;
  overflow: hidden;
  /* border: 1px solid red; */
  .side-bar-container {
    width: $side-bar-width !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: $menu-bg;
    overflow: hidden !important;
    z-index: 1001;

    ::v-deep {
      .scrollbar-wrapper {
        overflow-x: hidden !important;
      }
      .el-scrollbar__bar.is-vertical {
        right: 0px;
      }

      .el-scrollbar {
        height: 100%;
      }

      .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
      }

      // menu hover
      .submenu-title-noDropdown,
      .el-submenu__title {
        &:hover {
          background-color: $menu-hover-bg !important;
        }
      }

      .is-active > .el-submenu__title {
        color: $sub-menu-active-text-color !important;
      }

      & .nest-menu .el-submenu > .el-submenu__title,
      & .el-submenu .el-menu-item {
        min-width: $side-bar-width !important;
        background-color: $sub-menu-bg !important;

        &:hover {
          background-color: $sub-menu-hover-bg !important;
        }
      }
    }
  }

  .manage-main-container {
    overflow: hidden;
    background-color: #ccc;
    .manage-main-top {
      height: 50px;
      .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - #{$side-bar-width});
        transition: width 0.28s;
      }
    }
  }
}
</style>


