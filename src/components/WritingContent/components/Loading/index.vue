<template>
  <div class="writing-content">
    <div>
      <img :src="require('@/assets/writing-content-img.png')" />
      <h1>Calculating...</h1>
      <p>
        Hold tight, we're gathering the data we need to tell you which writing
        patterns impact your performance.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
main > :first-child {
  height: 100%;
}

.writing-content {
  align-self: center;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
  h1 {
    text-align: center;
    color: #69c9d6;
    font-size: 40px;
  }
  p {
    max-width: 65%;
    margin: auto !important;
    color: #666666;
    font-size: 20px;
    margin: 0px;
  }
}
</style>
