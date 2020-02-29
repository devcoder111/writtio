<template>
  <div style="padding:0px 20px;     margin-top: 41px;">
    <unique-blog-visitor />
    <br />
    <cta-completed-visitors />
    <br />
    <skimmed-by-visitors-before-cta />
    <br />
    <top-posts />
  </div>
</template>
<script>
import UniqueBlogVisitor from "./components/UniqueBlogVisitor";
import CtaCompletedVisitors from "./components/CtaCompletedVisitors";
import SkimmedByVisitorsBeforeCta from "./components/SkimmedByVisitorsBeforeCta";
import TopPosts from "./components/TopPosts";
export default {
  components: {
    UniqueBlogVisitor,
    CtaCompletedVisitors,
    SkimmedByVisitorsBeforeCta,
    TopPosts
  }
};
</script>
<style lang="scss">
.left-card-card {
  background-color: #f8f8f8;
  text-align: center;
  padding: 30px;
  .card-title {
    color: #666666;
    h1 {
      margin: 0px;
      font-weight: 400;
    }
  }
  .no-of-visitors {
    color: #7480ff;
    h1 {
      margin: 0px;
      font-size: 50px;
    }
  }
  .card-btn-action {
    .el-button {
      border: none;
      background-color: inherit;
      color: #ababab;
    }
    .selected {
      border: 2px solid #ababab;
      border-radius: 5px;
    }
  }
  .two-col-wrapper {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    padding-bottom: 0px;
    .two-col {
      margin: auto;
      .col-title {
        font-size: 20px;
        color: #666666;
      }
      .col-number {
        font-size: 45px;
        font-weight: bolder;
        color: #666666;
      }
    }
    .two-col-divider {
      height: auto;
    }
  }
}
</style>