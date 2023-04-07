<template>
    <div class="login">
  <div class="login_container">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div></div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.login
    // background-color green
    width 100vw
    height 100vh
    display flex
    justify-content center
    align-items center
    .login_container
        // background-color red
        // border 1px solid #
        box-shadow 0 0 10px #000


</style>
