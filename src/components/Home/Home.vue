<template>
    <v-container fluid>
    <v-flex xs12 offset-sm-1>

      <video-player  class="vjs-custom-skin"
                 ref="videoPlayer"
                 :options="playerOptions"
                >
  </video-player>



</v-flex>
</v-container>
</template>

<script>
  import 'vue-video-player/src/custom-theme.css'

  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          autoplay:true,
          language: 'en',

          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://p8ekp4jnp.bkt.clouddn.com/bboyallstars"
          }],
          poster: "/static/images/author.jpg",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>
<style scoped>

  .video-player-box{
    margin-right: 1000px;
  }
</style>
