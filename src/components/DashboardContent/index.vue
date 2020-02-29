<template>
  <div>
    <el-button type="primary" class="button-writing space-2 colored-btn"
      >Writing Patterns</el-button
    >
    <el-button class="b-less">Toxonomies</el-button>
    <el-switch
      v-model="softorhard"
      active-text="Hard"
      inactive-text="Soft"
      class="switch-postion"
    ></el-switch>
    <el-row style="display: flex;">
      <left-box />
      <el-divider direction="vertical"></el-divider>
      <right-box />
    </el-row>
  </div>
</template>

<script>
import RightBox from "./components/RightBox";
import LeftBox from "./components/LeftBox";

export default {
  components: {
    RightBox,
    LeftBox
  },
  data() {
    return {
      softorhard: false
    };
  }
};
</script>

<style>
.el-divider--vertical {
  height: unset;
  margin: 0px;
}
.b-less {
  border: none;
}
.switch-postion {
  padding-left: 168px;
}
.button-writing {
  background-color: #69c9d6;
  border-color: #69c9d6;
  border-radius: 3px;
}
</style>
