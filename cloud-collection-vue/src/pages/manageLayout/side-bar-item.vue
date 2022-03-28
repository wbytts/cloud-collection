<template>
  <div class="side-bar">
    <template v-if="!item.children">
      <el-menu-item :index="item.menuId">
        <img :src="imageUrl(item)" v-if="hasImage(item)" />
        <i :class="item.icon" v-else></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
    activeId: String,
  },
  data() {
    return {};
  },
  methods: {
    hasImage(item) {
      let isImage = false;
      if (item.icon) {
        isImage = true;
      }
      return isImage;
    },
    imageUrl(item) {
      return require('@/assets/images/manageMenuIcon/' + item.icon + '.png');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>