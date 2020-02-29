<template>
  <div class="left-card-card">
    <div class="card-title">
      <h1>Unique blog visitors</h1>
    </div>
    <div class="no-of-visitors">
      <h1>29,954</h1>
    </div>
    <div class="card-btn-action">
      <el-button
        plain
        v-bind:class="{ 'selected': selected=='7days' }"
        @click="selected='7days'"
      >Past 7 Days</el-button>
      <el-button
        plain
        v-bind:class="{ 'selected': selected=='30days' }"
        @click="selected='30days'"
      >Past 30 Days</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "7days"
    };
  }
};
</script>