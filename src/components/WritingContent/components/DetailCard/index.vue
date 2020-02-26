<template>
  <el-row class="detail-cards">
    <h1 class="detail-main-title">{{boxName}}</h1>
    <div v-for="(item,index) in data" :key="index">
      <el-divider class="detail-row-divider" v-if="((data.length-1) == index) == false"></el-divider>
      <div class="detail-row">
        <el-col class="detail-row-left">
          <p class="detail-sub-title">
            {{item.title}}
            <i
              class="el-icon-warning element-item-icon success"
              v-if="item.icon=='success'"
            ></i>
            <i class="el-icon-warning element-item-icon warning" v-if="item.icon=='warning'"></i>
          </p>
        </el-col>
        <el-col class="detail-row-right">
          <div>
            <p class="light-text">TARGET</p>
            <p class="dark-text">{{item.target}}</p>
          </div>
          <div>
            <p class="light-text">INTEGER</p>
            <p class="dark-text">{{item.integer}}</p>
          </div>
          <div>
            <p class="light-text">STATUS</p>
            <p class="dark-text">{{item.status}}</p>
          </div>
        </el-col>
      </div>
      <el-divider class="detail-row-divider" v-if="((data.length-1) == index) == false"></el-divider>
    </div>
  </el-row>
</template>
<script>
export default {
  props: {
    boxName: { type: String },
    data: { type: Array }
  }
};
</script>
<style lang="scss">
.detail-cards {
  background-color: #f8f8f8;
  margin-top: 40px;
  border-radius: 5px;
  .detail-row-divider {
    background-color: #f3f3f3;
    margin: 0px;
  }
  .detail-main-title {
    font-size: 21px;
    padding: 20px 50px;
    font-weight: bolder;
    margin: 0px;
  }
  .detail-row {
    display: flex;
    .detail-sub-title {
      padding: 0px 50px;
      font-size: 20px;
      margin: 15px 0px;
      .success {
        color: #3cd458;
      }
      .warning {
        color: #fdd329;
      }
    }
    .detail-row-left {
      display: flex;
    }
    .detail-row-right {
      display: flex;
      justify-content: space-between;
      div {
        padding: 0px 30px;
        text-align: center;
        min-width: 106px;
        @media (max-width: 1023px) {
          min-width: auto;
        }
        p {
          margin: 0px;
        }
        .light-text {
          color: #bfbfbf;
        }
        .dark-text {
          color: #666666;
        }
      }
    }
  }
}
</style>