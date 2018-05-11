<template>
    <v-container fluid>
     <List />
    <v-flex  offset-sm-1>

      <video-player  class="vjs-custom-skin"
                 ref="videoPlayer"
                     preload="auto"
                 :options="playerOptions"
                     height="auto"
                >
  </video-player>


      <v-expansion-panel focusable>
        <v-expansion-panel-content v-for="(giphy,i) in giphys" :key="i">
          <div slot="header">Giphy</div>
          <v-card>
            <v-card-text class="grey lighten-3">
              <img class="giphy-image" :src="giphy.images.original.url" alt="">
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <div class="text-xs-center">
        <v-pagination :length="pages" v-model="pages"></v-pagination>
      </div>

</v-flex>
</v-container>
</template>

<script>
  import 'vue-video-player/src/custom-theme.css'

  import List from '@/components/List/List'
  export default {
    data() {
      return {
        giphys: [],
        pages: 0,
        playerOptions: {
          // videojs options
          autoplay:true,
          language: 'en',

          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://p8ekp4jnp.bkt.clouddn.com/Battle%20of%209-4RP2%20-%2023rd%20January%202018.mp4"
          }],
          poster: "/static/images/author.jpg",
        }
      }
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
      },
      loadImage() {
        this.$http.get('http://api.giphy.com/v1/gifs/search?q=cat&api_key=aInmiu9oVZ5mdkaZYmlrAduTj0MTS9f7').then(result=>{
          this.giphys = result.data.data
          this.pages = this.giphys.length
          console.log(this.giphys.length)
          console.log(this.giphys)
          console.log('hahahha---1111')
        })

      }
    },

  mounted() {
    console.log('this is current player instance object', this.player)
    this.loadImage()
  },
    components: {
      List
    }
  }
</script>
<style scoped>
.giphy-image{
  width: 20%;
  height: auto;
}
</style>
