<template>
  <div class="main-page-layout">
    <header class="top"></header>
    <div class="main-content">
      <side-bar class="side-bar" v-show="!$route.meta.noMenu"></side-bar>
      <div class="right-pane">
        <div class="router">
          <router-view v-if="visible && !$route.query.keepAlive" :key="$route.name + $route.fullPath" />
          <keep-alive v-else>
            <router-view v-if="visible || $route.query.keepAlive" :key="$route.name + $route.fullPath" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './side-bar.vue';

export default {
  components: { SideBar },
  data() {
    return {
      visible: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main-page-layout {
  .main-content {
    border: 1px solid #ccc;
    .side-bar {
      border: 1px solid #ccc;
    }
    .right-pane {
      border: 1px solid #ccc;
    }
  }
}
</style>


