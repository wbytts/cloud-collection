<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelectMenu"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">系统管理</template>
          <el-menu-item index="/sys/role">角色管理</el-menu-item>
          <el-menu-item index="/sys/user">用户管理</el-menu-item>
          <el-menu-item index="/sys/dict">字典管理</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">二级菜单测试</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: '1',
    };
  },
  methods: {
    handleSelectMenu(index, indexPath) {
      console.log('选中了菜单', index);
      if (index == '/sys/user') {
        this.$router.push('/manage/user');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>