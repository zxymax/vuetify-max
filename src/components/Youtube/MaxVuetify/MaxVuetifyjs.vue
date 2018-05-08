<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 class="text-xs-center">
				<v-btn large dark class="pink" :to="{name: 'MaxVuetifyHome'}">Home</v-btn>
				<v-btn large dark class="pink" :to="{name: 'Meetups'}">VIEW MEETUPS</v-btn>
				<v-btn large dark class="pink" :to="{name: 'CreateMeetup'}">ORGANIZE MEETUPS</v-btn>
				<v-btn large dark class="pink" :to="{name: 'Profile'}">PROFILE</v-btn>
				
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12>

				<router-view/>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	
</script>