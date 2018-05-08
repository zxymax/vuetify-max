<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card>
					<v-card-title>
            <h3 class="red--text">{{meetup.title}}</h3>
					</v-card-title>
          <v-card-media :src="meetup.imageUrl"
          height="400px">
          </v-card-media>
          <v-card-text>
            <div class="info--text">无极剑圣·易，是竞技游戏《英雄联盟》中的一位英雄。</div>
            <div>易大师是一个有超高机动性的刺客、战士型英雄，擅长利用快速的打击迅速击溃对手，易大师一般打野和走单人路，作为无极剑道的最后传人，易可以迅速砍出大量伤害，同时还能利用技能躲避猛烈的攻击，避开敌人的集火。</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="red white--text">Register</v-btn>
          </v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
  export default{
    props: ['id'],
    computed: {
      meetup(id) {

        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>
