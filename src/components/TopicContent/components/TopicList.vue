<template>
  <el-row class="list-backgroung" style="margin-top: 10px; display:flex;">

    <img :src="require('@/assets/img/minus.png')" class="iconSvg" />
    
    <div class="list-text" style="width: 100%;">
      <h1>{{topic.Title}}</h1>
    </div>
    <div style="display:flex;width: 100%;justify-content: flex-end;">
      <div class="pageviews-box">
        <p class="bar-title">NO. OF OCCURENCES</p>
        <p class="bar-percentage">{{topic.NumOccurences}}</p>
      </div>
      <div class="progressbars">
        <div class="progressbar">
          <p class="bar-title">PERCENT DENSITY</p>
          <p class="bar-percentage">{{topic.Density}}%</p>
          <el-progress :percentage="topic.Density"  :status="topic.Density<=50?'exception' : topic.Density<=80 && topic.Density>50? 'warning':'success'" :show-text="false"></el-progress>
        </div>
        
      </div>
      <div class="pageviews-box">
          <p class="bar-title">IMPACT METER</p>
          <img class="impactImg" width="61" height="41" :src="require('@/assets/img/meter-illustration.svg')" />
        </div>
     
    </div>
  </el-row>
</template>
<script>
export default {
  props: {
    topic: {
      type: Object
    }
  },
 
};
</script>
<style lang="scss">
.iconSvg {
  width: 28px;
  height: 28px;
  padding: 20px;
  margin: auto 0px;
}
.list-backgroung {
  background-color: #f8f8f8;
  margin-top: 10px;
}
.list-text {
  h1 {
    margin-bottom: 0px;
  }
  p {
    margin-top: 0px;
    color: #cacaca;
  }
}
.el-progress-bar {
  width: 200px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0px !important;
  .el-progress-bar__outer {
    border-radius: 0px !important;
    .el-progress-bar__inner {
      border-radius: 0px !important;
    }
  }
}
.progressbars {
  display: flex;
  margin: auto 40px;
  padding-right: 40px;
}
.progressbar {
  padding-left: 20px;
  p {
    margin: 0px;
    text-align: center;
  }
  
}
.bar-title {
    color: #cacaca;
  }
.pageviews-box {
  margin: auto 0px;
  padding-right: 40px;
  p {
    margin: 0px;
    text-align: center;
  }
}
.btn-icon {
  width: 31px;
  height: 31px;
  padding: 20px;
  margin: auto 0px;
  padding-left: 40px;
  cursor: pointer;
}
.impactImg{
  margin: auto;
    display: flex;
}
</style>