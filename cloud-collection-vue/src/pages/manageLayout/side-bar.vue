<template>
  <div>
    <el-menu mode="vertical" :unique-opened="true" :default-active="activeMenuId">
      <template v-for="item in menuList">
        <side-bar-item :activeId="activeMenuId" :item="item" :key="item.menuId"></side-bar-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import SideBarItem from './side-bar-item.vue';

export default {
  components: { SideBarItem },
  data() {
    return {
      activeMenuId: '',
      isCollapse: false, // 是否缩起来
      menuList: [
        {
          menuId: '1',
          name: '第一个菜单',
        },
        {
          menuId: '2',
          name: '第二个菜单',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>