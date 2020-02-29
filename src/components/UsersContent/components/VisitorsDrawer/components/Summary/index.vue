<template>
  <div class="visitor-details">
    <p class="option-title">
      <b>Summary</b>
    </p>
    <div>
      <el-row class="visitor-detail-item">
        <el-col class="visitor-detail-name">Avarege scroll length</el-col>
        <el-col class="visitor-detail-data">{{data.scrolllength}}</el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row class="visitor-detail-item">
        <el-col class="visitor-detail-name">Read</el-col>
        <el-col class="visitor-detail-data">{{data.read}}</el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row class="visitor-detail-item">
        <el-col class="visitor-detail-name">Skimmed</el-col>
        <el-col class="visitor-detail-data">{{data.skimmed}}</el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row class="visitor-detail-item">
        <el-col class="visitor-detail-name">Clickthrough rate</el-col>
        <el-col class="visitor-detail-data">{{data.clickthroughrate}}</el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>
<style lang="scss">
.visitor-details {
  .visitor-detail-item {
    display: flex;
    padding: 15px;
    .visitor-detail-name {
      color: #666666;
      font-weight: 800;
    }
    .visitor-detail-data {
      color: #666666;
      font-weight: 400;
    }
  }
  .el-divider--horizontal {
    margin: 0px !important;
  }
}
</style>