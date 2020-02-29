<template>
  <div class="left-card-card">
    <div class="card-title card-pb">
      <h1>Top posts that led to return visits</h1>
    </div>
    <div class="post-listing" v-for="(item,index) in toppostlist" :key="index">
      <div class="post-list">
        <h3>{{item.title}}</h3>
        <div class="right-side">
          <h3>%{{item.per}}</h3>
          <img :src="require('@/assets/icon/asset-open.svg')" class="btn-icon" />
        </div>
      </div>
      <el-divider></el-divider>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toppostlist: [
        { title: "Sample Title", per: 95 },
        { title: "Sample Title", per: 85 },
        { title: "Sample Title", per: 80 }
      ]
    };
  }
};
</script>
<style lang="scss">
.card-pb {
  padding-bottom: 10px;
}
.post-listing {
  .post-list {
    display: flex;
    justify-content: space-between;
    h3 {
      margin: 10px 0px;
      color: #666666;
      font-weight: 500;
    }
    .right-side {
      display: flex;
      h3 {
        margin: 10px 0px;
        color: #7480ff;
        font-weight: 800;
      }
      .btn-icon {
        padding-left: 20px;
        height: 2.17em;
        align-self: center;
        cursor: pointer;
      }
    }
  }
  .el-divider--horizontal {
    margin: 0px !important;
  }
}
</style>