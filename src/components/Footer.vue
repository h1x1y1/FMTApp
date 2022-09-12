<template>
  <div class="footer">
    <div class="item">
      <router-link to="/home" class="nav_item" active-class="nav_color">
        <van-icon name="wap-home-o" :size="30" />
        首页
      </router-link>
    </div>
    <div class="item">
      <router-link to="/cart" class="nav_item" active-class="nav_color">
        <van-icon name="cart-o" :size="30" />
        购物车
      </router-link>
    </div>
    <div class="item">
      <router-link to="/order" class="nav_item" active-class="nav_color">
        <van-icon name="notes-o" :size="30" />
        订单
      </router-link>
    </div>
    <div class="item">
      <router-link to="/me" class="nav_item" active-class="nav_color">
        <van-icon name="user-circle-o" :size="30" />
        我的
      </router-link>
    </div>
  </div>
</template>

<script>
export default { };
</script>

<style lang="less" scoped>
.footer{
  font-size: 12px;
  background-color: #FFFFFF;
  display: flex;
  border-top: 0.5px solid rgb(126, 124, 124);
  padding-top: 5px;
  padding-bottom: 5px;
  .item{
    flex: 1;
    .nav_color{
      color: orange;
    }
    .nav_item{
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }
}
</style>