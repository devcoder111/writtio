<template>
  <el-container>
    <el-header height="70px">
      <TopBar />
    </el-header>
    <el-container class="main-container">
      <Tour class="desktop-only"/>
      <el-aside width="auto" class="desktop-only">
        <h5 class="heading-blog">
          My First Blog
        </h5>
        <SideBar />
        <div class="upgrade-button">
          <p class="free-account">FREE ACCOUNT</p>
          <el-button plain @click="$router.push('maintenance')">UPGRADE</el-button>
        </div>
      </el-aside>
      <SideBar class= "mobile-only" />
      <el-main class="desktop-only">
        <all-post-content />
      </el-main>
      <el-main class="mobile-only">
        <mobile-content />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Tour from "@/components/Tour";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import AllPostContent from "@/components/AllPostContent";
import MobileContent from "@/components/MobileContent";

export default {
  components: {
    MobileContent,
    Tour,
    SideBar,
    TopBar,
    AllPostContent
  }
};
</script>

<style lang="scss">
.el-header {
  padding: 0;
}
.el-aside {
  min-height: calc(100vh - 70px);
  background-color: rgb(245, 245, 245);
  .heading-blog {
    font-size: 19px;
    font-family: "Poppins";
    color: #fff;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    height: 80px;
    margin: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: $writtio-primary;
  }
  .upgrade-button {
    text-align: center;
    .free-account {
      font-size: 19px;
      font-family: "Poppins";
      color: rgb(102, 102, 102);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    .el-button {
      background-color: $writtio-tertiary;
      font-size: 19px;
      font-family: "Poppins";
      color: #000;
      font-weight: bold;
      width: 200px;
      margin: 10px auto 30px auto;
      border: none;
      border-radius: 5px;
    }
  }
}

.iconSvg {
  width: 31px;
  height: 31px;
  padding-right: 20px;
  align-self: center;
}
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
  .el-menu-item * {
    text-decoration: none !important;
    color: #d2d2d2;
  }
  .isactive {
    padding-left: 15px !important;
    border-left: 5px solid #7580ff;
    // [class^="el-icon-"] {
    // font-size: 30px;
    span {
      color: #6b6b6b;
      font-weight: bold;
    }

    // }
  }
}

.main-container {
  position: relative;
}
</style>