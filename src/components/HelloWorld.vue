<template>
  <div class="hello">
    {{ msg }}
    <div class="test">
      test
      <van-button type="primary">主要按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  font-size: 20px;
  .test{
    color: red;
  }
}
</style>
