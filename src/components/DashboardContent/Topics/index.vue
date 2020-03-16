<template>
<div class="dashboard-guideline" style="margin-left:20px;">
  <el-col  class="guidelines section-background" >
    <el-row>
        <el-col :span="12">
             <h1 class="section-title">Topics</h1>
        </el-col>
        <el-col :span="12">
            <div class="viewAll">
            <img class="impactImg" width="61" height="41" :src="require('@/assets/icon/asset-suggestion-1.svg')" />
            <el-link type="primary">VIEW ALL</el-link>
            </div>
        </el-col>

    </el-row>

    <el-row :gutter="10"  style="    height: 268px;">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="grid-topic">
        <h3 class="label">By Page views:</h3>
        <img :src="srcview" class="image" />
      </el-col>
      <!-- <el-divider direction="vertical" class="topic-divider"></el-divider> -->
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <h3 class="label">By Engagements:</h3>
        <img :src="srcview" class="image" />
      </el-col>
    </el-row>
  

    
  </el-col>
</div>
</template>

<script>
export default {
  data() {
    return {
      srcnew3 : require('@/assets/icon/asset-suggestion-1.svg'),
      srcview : require('@/assets/img/view-image.png')
    }
  }
};
</script>

<style scoped lang="scss">
.grid-topic{
border-right: 4px solid #f3f3f3;
}
.label{
     display: flex;
    justify-content: center;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    color: #666666;
    padding: 20px 0;
}

.image{
      max-width:220px;
      display: flex;
      margin:0 auto;
  }
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
.d-flex{
  display: flex;
  justify-content: center;
}


</style>