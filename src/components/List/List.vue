<template>
  <div class="text-xs-center  mb-3">
    <v-bottom-sheet v-model="sheet">
      <v-btn slot="activator" color="purple" dark>Click me</v-btn>
      <v-list>
        <v-subheader>Open in</v-subheader>
        <v-list-tile
          v-for="(giphy,i) in giphys"
          :key="i"
          @click="sheet = false"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <img :src="giphy.images.original.url">
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>我来自星星的你</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>
<script>
  export default {
    data: () => ({
      sheet: false,
      giphys: [],
      tiles: [
        { img: 'http://img4.imgtn.bdimg.com/it/u=362098232,1363014620&fm=27&gp=0.jpg', title: 'Keep' },
        { img: 'http://img0.imgtn.bdimg.com/it/u=1523676991,2274546323&fm=27&gp=0.jpg', title: 'Inbox' },
        { img: 'http://img3.imgtn.bdimg.com/it/u=586227224,578320459&fm=27&gp=0.jpg', title: 'Hangouts' },
        { img: 'http://img1.imgtn.bdimg.com/it/u=921148810,358113585&fm=27&gp=0.jpg', title: 'Messenger' },
        { img: 'http://img3.imgtn.bdimg.com/it/u=1422195685,1866986654&fm=27&gp=0.jpg', title: 'Google+' }
      ]
    }),
    methods: {
      loadImage() {
        this.$http.get('http://api.giphy.com/v1/gifs/search?q=cat&api_key=aInmiu9oVZ5mdkaZYmlrAduTj0MTS9f7').then(result=>{
          this.giphys = result.data.data
          console.log(this.giphys)
          console.log('hahahha---1111')
        })

      }
    },
    mounted() {
      this.loadImage()
    },
  }
</script>
