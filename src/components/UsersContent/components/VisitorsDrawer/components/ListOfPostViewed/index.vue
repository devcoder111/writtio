<template>
  <div class="visitor-details">
    <p class="option-title">
      <b>List of posts viewed</b>
    </p>
    <div>
      <div v-for="item in data" :key="item.index">
        <el-row class="visitor-post-detail-item">
          <div class="visitor-post-detail-name">{{item.posttitle}}</div>
          <div class="visitor-post-detail-datantime">{{item.dateandtime}}</div>

          <div style="display:flex;">
            <el-col class="visitor-post-detail-name">
              Read or Skim:
              <p>{{item.readorskimm}}</p>
            </el-col>
            <el-col class="visitor-post-detail-data">
              CTA complate:
              <p>{{item.ctacomplate}}</p>
            </el-col>
          </div>
        </el-row>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    }
  }
};
</script>
<style lang="scss">
.visitor-details {
  .visitor-post-detail-item {
    padding: 15px;
    .visitor-post-detail-datantime {
      color: #666666;
    }
    .visitor-post-detail-name {
      color: #666666;
      font-weight: 800;
      display: flex;
      p {
        margin: 0px;
        font-weight: 100;
      }
    }
    .visitor-post-detail-data {
      color: #666666;
      font-weight: 800;
      display: flex;
      p {
        margin: 0px;
        font-weight: 100;
      }
    }
  }
  .el-divider--horizontal {
    margin: 0px !important;
  }
}
</style>