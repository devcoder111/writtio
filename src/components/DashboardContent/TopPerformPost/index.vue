<template>
<div class="section-background" style="margin-top: 50px;">
    <el-row>
        <el-col :span="12">
             <h1 class="TopPost-title">Top Perfroming Posts</h1>
        </el-col>
        <el-col :span="12">
            <div class="viewAll">
            <img class="impactImg" width="61" height="41" :src="require('@/assets/icon/asset-suggestion-1.svg')" />
            <el-link type="primary">VIEW ALL</el-link>
            </div>
        </el-col>

    </el-row>
    <div v-for="(post,index) in posts" :key="index">
            <!-- <el-divider class="detail-row-divider" v-if="((posts.length-1) == index) == false"></el-divider> -->
    <el-row  class="list-backgroung" >
            <el-col :span="12">
                <div class="list-text" style="width: 100%;">
                <h1>{{post.Title}}</h1>
                </div>
            </el-col>
            <el-col :span="12">
                <div style="display:flex;width: 100%;justify-content: flex-end;">
                <div class="pageviews-box">
                    <p class="bar-title">Pageviews:</p>
                    <p class="bar-percentage">{{post.PagViews}}</p>
                </div>
                <div class="progressbars">
                    <div class="progressbar">
                    <p class="bar-title">Opt-in rate:</p>
                    <p class="bar-percentage">{{post.Optinrate}}%</p>
                    <el-progress :percentage="post.Optinrate" status="exception" :show-text="false"></el-progress>
                    </div>
                    <div class="progressbar">
                    <p class="bar-title">Clickthrough rate:</p>
                    <p class="bar-percentage">{{post.ClicktroughtRate}}%</p>
                    <el-progress :percentage="post.ClicktroughtRate" status="exception" :show-text="false"></el-progress>
                    </div>
                    <div class="progressbar">
                    <p class="bar-title">Read rate:</p>
                    <p class="bar-percentage">{{post.ReadRate}}%</p>
                    <el-progress :percentage="post.ReadRate" status="warning" :show-text="false"></el-progress>
                    </div>
                    <div class="progressbar">
                    <p class="bar-title">Engagements Index:</p>
                    <p class="bar-percentage">{{post.Engagement}}%</p>
                    <el-progress :percentage="post.Engagement" status="success" :show-text="false"></el-progress>
                    </div>
                </div> 
                </div>
            </el-col>
        
    </el-row>
            <el-divider class="detail-row-divider" v-if="((posts.length-1) == index) == false"></el-divider>

    </div>
</div>
</template>
<script>
export default {
  props: {
    posts:{ type: Array }
  },
  methods: {
   
  }
};
</script>
<style lang="scss">
.TopPost-title{
    font-size: 21px;
    padding: 0 25px;
    font-weight: bolder;
    margin: 0px;
}
.viewAll{
    display: flex;
    float: right;
    margin-right:50px;
}
.el-divider--horizontal{height:2px;}
.detail-row-divider {
    background-color: #F3F3F3;
    margin: 0px;
  }
.iconSvg {
  width: 28px;
  height: 28px;
  padding: 20px;
  margin: auto 0px;
}
.section-background{
      background-color: #f8f8f8;
      padding: 30px 0;
}
.list-backgroung {
//   background-color: #f8f8f8;
  margin: 10px;
}
.list-text {
    margin-left: 20px;
  h1 {
    margin-bottom: 0px;
  }
  p {
    margin-top: 0px;
    color: #cacaca;
  }
}
.el-progress-bar {
  width: 120px;
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
  margin: auto 0px;
}
.progressbar {
  padding: 0 10px;
  p {
    margin: 0px;
    text-align: center;
  }
  .bar-title {
    color: #cacaca;
  }
}
.pageviews-box {
  margin: auto 0px;
  padding-right: 20px;
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
</style>