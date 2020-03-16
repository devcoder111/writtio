<template>
  <div>
    <div class="top-bar">
      <el-input
        placeholder="Search"
        prefix-icon="el-icon-search"
        v-model="Searchbox"
        class="demo-input-label"
      ></el-input>
      <div class="nav-btns">
        <el-button plain type="info">All</el-button>
        <el-button plain type="info">Impact Meter</el-button>
        <el-button plain type="info">Percent Density</el-button>
        <el-button plain type="info">Occurences</el-button>
        <el-button plain type="info">Key Phrase</el-button>
      </div>
    </div>
    <topic-list v-for="item in topicdata" :key="item.index" :topic="item" />
  </div>
</template>

<script>
import TopicList from "./components/TopicList";
import topics from "./data.json";
export default {
  components: {
    TopicList,
  },

  data() {
    return {
      Searchbox: "",
      topicdata: topics,
    }
  }
}
</script>

<style lang="scss">
.top-bar {
  padding-bottom: 20px;
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
  .el-button {
    border: unset;
    border-radius: 6px;
  }
}
</style>