<template>
  <div class="cart">
    <div class="content">
      购物车
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
export default {
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
.cart{
  height: 100%;
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
    overflow-y: auto;
  }
}
</style>