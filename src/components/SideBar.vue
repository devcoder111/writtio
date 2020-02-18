<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item :index="item.route" v-for="(item, index) in items" :key="index">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      items: [
        {
          title: "Dashboard",
          route: "/dashboard",
          icon: "el-icon-s-grid"
        },
        {
          title: "All Posts",
          route: "/all-posts",
          icon: "el-icon-collection"
        },
        {
          title: "Writing",
          route: "/writing",
          icon: "el-icon-edit"
        },
        {
          title: "Topics",
          route: "/topics",
          icon: "el-icon-tickets"
        },
        {
          title: "Performance",
          route: "/performance",
          icon: "el-icon-s-data"
        },
        {
          title: "Guidelines",
          route: "/guidelines",
          icon: "el-icon-s-grid"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  &:not(.el-menu--collapse) {
    width: 264px;
  }
  background-color: transparent;
  height: 100%;
  border: none;
  .el-menu-item {
    font-size: 21px;
    font-family: "Poppins";
    height: 80px;
    line-height: 80px;
    [class^="el-icon-"] {
      font-size: 30px;
      width: auto;
      margin-right: 15px;
    }
    &.is-active {
      span {
        color: $writtio-grey-3;
        font-weight: bold;
      }
    }
    &:hover,
    &.is-active {
      background-color: darken($writtio-grey-4, 2.8);
    }
  }
}
</style>
