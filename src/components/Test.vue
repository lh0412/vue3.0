<template>
    <div>
      <div>helloword</div>
      <div></div>
      <button @click="this.$router.push({path:'home'})">click me</button>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        isShow:true
      }
    }
  }
</script>
