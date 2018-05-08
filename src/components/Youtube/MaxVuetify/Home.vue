<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12  class="text-xs-center">
				<v-btn large class="info" @click="onLoadMeetup">
					Explore Meetups
				</v-btn>
				<v-btn large class="info">
					Organize Meetup
				</v-btn>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item v-for="(item,i) in items"
                           :src="item.imageUrl"
                           :key="i"
                           @click.native="onLoadMeetup(item.id)"
                           ></v-carousel-item>
        </v-carousel>
				<!--<v-carousel style="cursor:pointer;">-->
					<!--<v-carousel-item-->
					<!--v-for="(item, i) in items"-->
					<!--:src="item.imageUrl"-->
					<!--:key="item.id"-->
          <!--@click="onLoadMeetup(item.id)">-->
					<!--</v-carousel-item>-->
				<!--</v-carousel>-->
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default{
	  computed: {
	    meetups() {
	      return this.$store.getters.featureMeetups
      }
    },
		data: ()=>({
			items: [
				{
					imageUrl: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=e3b76ad36081800a71e58f0e813433d6/d50735fae6cd7b89acbea9df032442a7d8330e9f.jpg',
					id: 'adfdjflfsse1',
					title: '我是来自星星的你'
				},
				{
					imageUrl: 'http://c.hiphotos.baidu.com/image/h%3D300/sign=9f9323341c38534393cf8121a312b01f/e1fe9925bc315c609e11bbb781b1cb13485477e6.jpg',
					id: 'dbaj3q2112313',
					title: '我喜欢的事情我也不知道'
				}
			]
		}),
    methods: {
      onLoadMeetup(id){

		    this.$router.push('/meetups/'+id)
      }
    }
	}
</script>
