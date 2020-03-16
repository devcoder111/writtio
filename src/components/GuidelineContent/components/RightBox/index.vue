<template>
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
    <div class="box-space">
      <h1>Readability Score</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </el-col>
</template>
<style scoped lang="scss">
.box-space {
  padding: 0 68px;
  /* width: 100%; */
  max-width: 662px;
  @include medium-down {
    padding: 0 20px;
  }
}

.box-space h1 {
  font-size: 40px;
  font-weight: bold;
}
.box-space p {
  line-height: 28px;
  color: #666666;
  font-size: 21px;
}
</style>