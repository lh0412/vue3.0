<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Menu from "./components/MenuList.vue";
</script>
<template>
  <div class="main">
    <nav class="menu-wrap">
      <Menu/>
    </nav>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: calc(100vh - 0px);
  /* margin-top: 60px; */
}
.main{
  display: flex;
  flex: 1;
  height: 100%;
}
.menu-wrap{
  width:10%;
  background: #eee;
}
.content{
  flex: 1;
  background:yellow;
}
</style>
