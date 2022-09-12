<template>
  <div class="home">
    <div class="content">
      首页
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
export default {
    name: "MyHome",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { Footer }
};
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
    overflow-y: auto;
  }
}
</style>