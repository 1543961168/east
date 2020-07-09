<template>
  <div class="homeswipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: "HomeSwipe",
  data() {
    return {
      images: [
        'https://idongjia.cn/images/17.png?tm=20200310',
        'https://idongjia.cn/images/18.png?tm=20200310',
        'https://idongjia.cn/images/19.png?tm=20200310',
        'https://idongjia.cn/images/20.png?tm=20200310',
      ],
    };
  },

    computed: {
    ...mapState('homeStore',{
      cates: state => state.cates
    }),
  },
  methods: {
    ...mapActions('homeStore',['getCates']),
  },
  mounted () {
    this.getCates({
      
    })
  }
};
</script>

<style scoped lang="scss">
  .homeswipe{
    width: 3.55rem;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    position: relative;
    .van-swipe{
      width: 3.55rem;
      height: 2rem;
    }
    img{
      width: 3.55rem;
      height: 2rem;
    }
  }
</style>


