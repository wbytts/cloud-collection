﻿<template>
  <div class="nav-bar">顶部~~~~可以放面包屑之类的组件</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.nav-bar {
  height: $nav-bar-height;
  line-height: $nav-bar-height;
  padding-left: 20px;
  overflow: hidden;
  position: relative;
  background: $nav-bar-bg;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>