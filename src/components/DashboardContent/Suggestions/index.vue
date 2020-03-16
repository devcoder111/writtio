<template>
<div class="section-background" style="margin-top: 50px;">
    <el-row>
        <el-col :span="12">
             <h1 class="section-title">Suggestions</h1>
        </el-col>
        <el-col :span="12">
            <div class="viewAll">
            <img class="impactImg" width="61" height="41" :src="require('@/assets/icon/asset-suggestion-1.svg')" />
            <el-link type="primary">VIEW ALL</el-link>
            </div>
        </el-col>

    </el-row>
    <el-row>
        
      <div class="notification-section">
        <el-col v-for="notification in notificationData" :key="notification.index" class="notification-itembox" >
          <div class="notification-box">
            <el-col :span="20">
            <p class="notification-title">
              <img :src="notification.thumbnail.src" :alt="notification.thumbnail.alt" class="img-fluid">
              <strong>{{notification.subtitle}}</strong> {{notification.title}}</p>
            <!-- <p class="notification-hours">{{item.hours}}</p> -->
            </el-col>
            <el-col :span="4" class="text-right">
              <el-button type="success"  class="close">x</el-button>
            </el-col>
          </div>
        </el-col>
      </div>
      
  </el-row>
</div>
</template>

<script>
  export default {
    data() {
      return {
        srcnew3 : require('@/assets/icon/asset-suggestion-1.svg'),
        notificationData: [
          {
          title: 'Lorem ipsum dolor sit arnet consectetur adipiscing elit',
          subtitle: 'Danger',
           thumbnail: 
          {
            alt: 'notification 1',
            src: require('@/assets/icon/red-mark.svg')
          },
         },
       {
          title: 'Lorem ipsum dolor sit arnet consectetur adipiscing elit',
          subtitle: 'Warning',
           thumbnail: 
          {
            alt: 'notification 2',
            src: require('@/assets/icon/green-tick.svg')
          },
         }, 
        {
          title: 'Lorem ipsum dolor sit arnet consectetur adipiscing elit',
          subtitle: 'Warning',
           thumbnail: 
          {
            alt: 'notification 3',
            src: require('@/assets/icon/orange-mark.svg')
          },
         },
        {
          title: 'Lorem ipsum dolor sit arnet consectetur adipiscing elit',
          subtitle: 'Warning',
           thumbnail: 
          {
            alt: 'notification 4',
            src: require('@/assets/icon/green-tick.svg')
          },
         }]
      };
    }
  };
</script>

<style lang="scss" scoped>
$text-color:#666666;
.text-right{
  text-align: right;
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
.performance-top .days a:last-child{
  margin-left: 25px;
  padding: 5px 0;
  transition:all ease-in-out .5s;
            -webkit-transition:all ease-in-out .5s;
            -ms-transition:all ease-in-out .5s;
            -o-transition:all ease-in-out .5s;
            &:hover{
                color:#000;
            }
}
.notification-itembox{
  // padding: 0 40px;
  border-bottom:4px solid #f3f3f3;
  .notification-box{
    overflow: hidden;
    padding: 20px 0;
    p{
      color:$text-color;
      font-size: 20px;
      margin: 0;
      strong{
        font-weight:600;
        color:#000;
      }
    }
    .el-button.close{
      background: transparent;
      border: 1px solid #bfbfbf;
      color: #bfbfbf;
      font-size: 20px;
      border-radius: 50%;
      padding: 0;
      width: 30px;
      height: 30px;
      line-height: 28px;
    }
    .notification-title {
          img {
            margin-right: 10px;
            display: inline-block;
            vertical-align: middle;
         }
    }
  }
  &:last-child{
    border:0;
  }
}

</style>