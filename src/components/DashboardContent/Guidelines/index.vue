<template>
<div class="dashboard-guideline" style="margin-right:20px;">
  <el-col  class="guidelines section-background" >
    <el-row>
        <el-col :span="12">
             <h1 class="section-title">Guidelines</h1>
        </el-col>
        <el-col :span="12">
            <div class="viewAll">
            <img class="impactImg" width="61" height="41" :src="require('@/assets/icon/asset-suggestion-1.svg')" />
            <el-link type="primary">VIEW ALL</el-link>
            </div>
        </el-col>

    </el-row>
    
    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">Readablility score<i class="el-icon-question element-item-icon"></i></h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="readablility" range></el-slider>
          <p>{{readablility[0] +"-"+ readablility[1]}}</p>
        </div>
      </el-col>
    </el-row>
  

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">% of dificulty words<i class="el-icon-question element-item-icon"></i></h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="dificultwords" range></el-slider>
          <p>{{dificultwords[0] +"-"+ dificultwords[1]}}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">Gender<i class="el-icon-question element-item-icon"></i></h3>
        
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider style="width:100%" show-tooltip label v-model="gender" :min="0" :max="3"></el-slider>
          <p>{{oneValue1Desc[gender]}}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">Paragraph Length<i class="el-icon-question element-item-icon"></i></h3>
        
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="paragraphlength" range :min="1" :max="10"></el-slider>
          <p>{{paragraphlength[0] +"-"+ paragraphlength[1]}}</p>
        </div>
      </el-col>
    </el-row>

   
  </el-col>
</div>
</template>

<script>
export default {
  data() {
    return {
      softorhard: false,
      readablility: [30, 70],
      dificultwords: [30, 60],
      gender: 39,
      paragraphlength: [2, 6],
      longsentences: [1, 60],
      averagesyllablesperword: [1, 60],
      adverbs: [25, 50],
      adjectives: [25, 65],
      readingtime: [8, 16],
      ofwords: [100, 45500],
      ofcharacters: [15, 55],
      totalnoofinternallinks: [5, 25],
      totalnoofextrenallinks: [15, 35],
      ofimage: [5, 25],
      rhythm: 80,
      resourcefullness: 30,
      visualortextheavy: 55,
      gender: 2, oneValue1Desc: ['Very Male', 'Male', 'Very Female', 'Female'],
      tones: [
        {
          value: "Beijing",
          label: "Beijing"
        },
        {
          value: "Shanghai",
          label: "Shanghai"
        },
        {
          value: "Nanjing",
          label: "Nanjing"
        }
      ],
      tone: "",
      sentiments: [
        {
          value: "Beijing",
          label: "Beijing"
        },
        {
          value: "Shanghai",
          label: "Shanghai"
        },
        {
          value: "Nanjing",
          label: "Nanjing"
        }
      ],
      sentiment: "",
      ESLfriendliness: [
        {
          value: "Beijing",
          label: "Beijing"
        },
        {
          value: "Shanghai",
          label: "Shanghai"
        },
        {
          value: "Nanjing",
          label: "Nanjing"
        }
      ],
      ESLfriendlines: ""
    };
  }
};
</script>

<style scoped lang="scss">
.section-background{
      background-color: #f8f8f8;
      margin-top: 50px;
      padding: 30px 30px;
}
.section-title{
    font-size: 21px;

    font-weight: bolder;
    margin: 0px;
}
.viewAll{
    display: flex;
    float: right;
    margin-right:50px;
}
.space-2 {
  margin: 10px;
}
.d-flex {
  display: flex;
}
.slider-box {
  width: 88%;
  p {
    margin: 0px;
    text-align: center;
    color: #ababab;
  }
}
.main-title {
  font-size: 24px;
  color: #666666;
}
.label {
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  color: #666666;
}
.colored-btn {
  height: 40px;
  border-radius: 5px;
  background-color: #69c9d6;
  border: none;
}
.guidelines > .el-input__inner {
  background: #eeeeee !important;
  border-color: #eeeeee !important;
}
.guidelines > .el-input__suffix {
  right: 0;
  background: #dedede;
  border-radius: 0 2px 2px 0;
}
.el-avatar--small {
  width: 20px;
  height: 20px;
  align-self: center;
  margin-left: 5px;
}
.element-item-icon {
  font-size:24px;
  margin-left: 3px;
  color: rgba(200, 200, 200, 0.4);
}
.el-icon-arrow-up:before{
  content: "\e78f";
}
.el-select {
  width:70%;
}


</style>