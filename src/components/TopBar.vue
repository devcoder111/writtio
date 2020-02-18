<template>
  <el-menu
    class="el-menu-top-bar"
    mode="horizontal"
    background-color="#fff"
    active-text-color="#6b6b6b"
  >
    <el-row>
      <el-col class="options" :span="4">
        <el-menu-item index="1">
          <i class="el-icon-document-copy"></i>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document-add"></i>
        </el-menu-item>
      </el-col>
      <el-col class="logo-wrapper" :span="15">
        <img class="logo" src="@/assets/writtio.png" alt />
      </el-col>
      <el-col class="user-options" :span="5">
        <el-menu-item index="3">
          <i class="el-icon-message-solid"></i>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-question"></i>
          <span slot="title">Help</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">Settings</span>
        </el-menu-item>
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-menu-top-bar {
  height: 100%;
  border: none;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      .el-menu-item {
        height: 100%;
      }
    }
  }
  .logo-wrapper {
    .logo {
      width: 190px;
      max-width: 100%;
      height: 100%;
      margin: auto;
      display: block;
    }
  }
  .user-options {
    display: flex;
    .el-menu-item {
      font-size: 18px;
      font-family: "Poppins";
      color: rgb(107, 107, 107);
      line-height: 68px;
      &:hover {
        background-color: transparent !important;
      }
      i {
        font-size: 21px;
      }
    }
  }
  .options {
    display: flex;
    .el-menu-item {
      position: relative;
      width: 50%;
      text-align: center;
      line-height: 68px;
      &::after {
        content: "";
        width: 4px;
        background-color: darken($writtio-grey-4, 2.8);
        height: 70%;
        top: 0;
        right: 0;
        position: absolute;
        bottom: 0;
        margin: auto;
      }
      &:hover {
        background-color: transparent !important;
      }
      i {
        font-size: 36px;
      }
    }
  }
}
</style>