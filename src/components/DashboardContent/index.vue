<template>
  <div>
    <div class="users-header">
      <p class="userheadertitle">In order to calculate a more accurate engagement index, we need to authenticate your Facebook account. <a class="userheader-a"> Why we need this?</a><el-button class="auth-btn">Authenticate
      </el-button></p>
    </div>
    <div class="top-bar">
      <el-row>
          <el-col :span="12">
              <h2 class="performance-title">Performance</h2>
          </el-col>
          <el-col :span="12">
            <div class="nav-btns">
                <el-button plain type="info">Past 7 Days</el-button>
                <el-button plain type="info">30 Days</el-button>
                <el-button plain type="info">Today</el-button>
                <div><img class="impactImg" width="61" height="41" :src="require('@/assets/icon/asset-suggestion-1.svg')" /></div>
                <el-link type="primary">View All</el-link>
            </div>

          </el-col>
      </el-row>
    </div>
    <!-- <el-row>
      <el-col :span="8" class="performance">
        <div class="perform_detail">
          <h3>Engagements</h3>
          <div class="perform_percent">
            <img  width="40" height="51" :src="require('@/assets/icon/asset-arrow up.svg')" />
            <span class="percentage">50%</span>
          </div>
          <el-divider></el-divider>
          <p>Today's index:</p>
          <div>

          </div>
          
        </div>
      </el-col>
      <el-col :span="8" class="performance">
        <div class="perform_detail">
          <h3>Opt Ins</h3>
        </div>
      </el-col>
      <el-col :span="8" class="performance">
        <div class="perform_detail">
          <h3>Clickthrough Rate</h3>
        </div>
      </el-col>
    </el-row> -->
    <div class="performance-section">
    <el-col :span="8"><div class="grid-content">
      <div class="grid-upper">
      <h4>
          Engagements
      </h4>
      <strong><el-image  :src="srcnew" class="iconSvg"></el-image><span>50%</span></strong></div>
       <div class="grid-bottom">
           <h6>Today’s index:</h6>
           <strong><el-image :src="src" class="iconSvg1 image"></el-image><span>75%</span></strong>
       </div>
      </div>
      </el-col>
   <el-col :span="8"><div class="grid-content dark-blue">
      <div class="grid-upper">
      <h4>
          Opt ins
      </h4>
      <strong><el-image :src="srcnew1" class="iconSvg"></el-image><span>4%</span></strong></div>
       <div class="grid-bottom">
           <h6>Total opt ins:</h6>
           <strong><el-image :src="srcnew2" class="iconSvg1"></el-image><span>18</span></strong>
       </div>
      </div>
      </el-col>
   <el-col :span="8"><div class="grid-content light-blue">
      <div class="grid-upper">
      <h4>
          Clickthrough Rate
      </h4>
      <strong><el-image :src="srcnew3" class="iconSvg"></el-image><span>8%</span></strong></div>
       <div class="grid-bottom">
           <h6>Total clickthrough rate</h6>
           <strong><el-image :src="srcnew4" class="iconSvg1"></el-image><span>40%</span></strong>
       </div>
      </div>
      </el-col>
      </div>
    <TopPerformPost :posts="topPostData"/>

    <el-row>
      <el-col :span="12">
        <Guidelines />
      </el-col>
      <el-col :span="12">
        <Topics />
      </el-col>
    </el-row>

    <Suggestions />

  </div>
</template>
<script>
import TopPerformPost from "./TopPerformPost/";
import Guidelines from "./Guidelines/";
import Suggestions from "./Suggestions/";
import Topics from "./Topics/";
import topPosts from "./data.json";
export default {
  components: {
    TopPerformPost,
    Guidelines,
    Suggestions,
    Topics
  },
  data() {
    return {
        src: require("../../assets/img/circle.png"),
        srcnew: require("../../assets/icon/asset-arrow up.svg"),
        srcnew1: require("../../assets/icon/asset-arrow down.svg"),
        srcnew2: require("../../assets/img/refer.png"),
        srcnew3: require("../../assets/icon/asset-arrow down.svg"),
        srcnew4: require("../../assets/img/gps.png"),
        topPostData: topPosts,
     
        
    };
  },
  methods: {
  
  }
};
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
.performance-title{
  margin: 0;
}
.iconSvg {
  padding-right: 20px;
  width:41px;
  height:50px;
}
.iconSvg1{
  padding-right: 20px;
  vertical-align: middle;
}
.performance-section {
	clear: both;
	background: #f8f8f8;
	padding: 50px;
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;
	text-align: center;
    h4 {
	margin-top: 0;
	font-size: 20px;
	color: #666666;
	font-weight: bold;
}
}
.el-image.iconSvg {
	display: inline-block;
	vertical-align: middle;
  padding-right: 5px;
}
.grid-upper span, .grid-bottom span {
	font-size: 42px;
	color: #666666;
	font-weight: bold;
    display: inline-block;
	vertical-align: middle;
}
h2 {
	font-size: 24px;
	font-weight: 700;
}
h6 {
	font-size: 16px;
	color: #666666;
    font-weight: normal;
    margin-bottom: 20px;
}
.image img.el-image__inner {
	width: 20px !important;
	height: 20px !important;
}
.grid-bottom strong {
	display: inline-block;
    vertical-align: middle;
	padding: 12px 24px;
	border: 2px solid #3bd357;
	border-radius: 3px;
    min-width: 120px;
}
.grid-bottom .el-image.iconSvg.image {
	margin-top: 10px;
}
.grid-upper {
	max-width: 250px;
	margin: 0 auto;
	border-bottom: 4px solid #f3f3f3;
    padding-bottom: 30px;
}
.dark-blue strong{
    border-color:#7480ff;
}
.dark-blue .grid-bottom span{
    color:#7480ff;
}
.light-blue strong{
    border-color:#69c9d6;
}
.light-blue .grid-bottom span{
    color:#69c9d6;
}
.grid-content {
	position: relative;
}
.grid-content:after {
	position: absolute;
    border-right: 4px solid #f3f3f3;
    content:"";
    right:0;
    width:4px;
    height:96%;
    top:0;
    bottom:0;
    margin: auto;
}
.performance-section > div:last-child .grid-content:after{
    display: none;
}

.performance{
  display: flex;
  justify-content: center;
  .perform_percent{
    display: flex;
  }
  .perform_detail{
    margin: auto;
    h3{
      margin:0;
    }
  }
  .percentage{
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 29px;
    margin: auto;
    font-family: "Poppins";
    font-weight: 700;
    margin-left: 0;
  }
}


.auth-btn{
  margin-left: 15px;
    background: #FDD32A;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    width: 161px;
    font-size: 18px;
}
.userheader-a{
  margin-left:7px;
  font-weight: bold;
  text-decoration: underline;
}
.users-header{
  height: 80px;
    background-color: #69C9D6;
    margin: -41px -24px 0 -20px;
}
.userheadertitle{

    font-size: 21px;
    font-family: "Poppins";
    color: #fff;
    
    line-height: 1.2;
    text-align: center;
    height: 80px;
    /* margin: 0; */
    align-items: center;
    justify-content: center;
    display: flex;
}
.top-bar {
  padding-bottom: 20px;
  margin-top:20px;
}

.demo-input-label {
  display: inline-block;
  width: 350px;
  .el-input__inner {
    background: transparent !important;
    border-color: transparent !important;
    border-bottom: 2px solid #eeeeee !important;
  }
}
.nav-btns {
  float: right;
  display: flex;
  padding-right: 74px;
  .el-button {
    border: unset;
    border-radius: 6px;
  }
}
.el-drawer__body {
  overflow: auto;
}
.el-col-5 {
  width: fit-content;
}

</style>