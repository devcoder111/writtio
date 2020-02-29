<template>
  <div class="visitor-drawer">
    <div class="visitor-drawer-head">
      <p>
        Over the last 30 days {{data.visitorid}}
        <br />viewed 6 post and complated 1 CTA
      </p>
      <el-button icon="el-icon-close" class="close-btn" @click="drawerclose"></el-button>
    </div>
    <Summary :data="data.summary" />
    <list-of-post-viewed :data="data.listofpostviewed" />
  </div>
</template>
<script>
import Summary from "./components/Summary";
import ListOfPostViewed from "./components/ListOfPostViewed";
export default {
  components: {
    Summary,
    ListOfPostViewed
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    drawerclose() {
      this.$emit("drawerclose", false);
    }
  }
};
</script>
<style lang="scss">
.visitor-drawer {
  .visitor-drawer-head {
    display: flex;
    padding: 25px;
    padding-bottom: 0px;
    justify-content: space-between;
    .close-btn {
      border: none;
      align-self: center;
      height: 50%;
      color: #666666;
      border-radius: 5px;

      background-color: #ffffff;
    }
    .el-button:hover {
      background-color: #f1f2ff;
    }
  }
  .visitor-details {
    .option-title {
      background-color: #eeeeee;
      padding: 12px;
      color: #656565;
      font-weight: bolder;
      margin-bottom: 0px;
    }
    .detail-divider {
      margin: 0px;
    }
    .detail-item {
      .detail-item-title {
        padding-left: 20px;
        color: #868686;
        font-size: 14px;
      }
      .detail-item-data {
        padding-left: 20px;
        color: #868686;
        font-size: 14px;
      }
    }
  }
}
</style>