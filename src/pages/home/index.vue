<template>
  <div id="home">
    <home-swipe></home-swipe>
  </div>
</template>

<script>
import HomeSwipe from "./homechildren/HomeSwipe"
export default {
  components:{
    HomeSwipe
  }
}
</script>

<style scoped lang="scss">
#home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>