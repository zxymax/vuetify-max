<template>
	<v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn class="red--text">Create a new Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="title"
              label="Title"
              id="title"
              v-model="title"
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required>
              </v-text-field>
            </v-flex>
          </v-layout><
          <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              name="imageUrl"
              label="imageUrl"
              id="imageUrl"
              v-model="imageUrl"
              required>
            </v-text-field>
          </v-flex>
        </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="300" alt="">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex row xs12 sm offset-sm3>
              <h4>Choose Date & Time</h4>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{date}}</p>
            </v-flex>
          </v-layout> <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-time-picker v-model="time"></v-time-picker>
            <p>{{time}}</p>
          </v-flex>
        </v-layout>

          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="red white--text"
              :disabled="!formIsValid"
              type="submit">create meetup</v-btn>
            </v-flex>
          </v-layout>

        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default{
    data (){
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: '',
        time: new Date()
      }

    },
    computed: {
      formIsValid() {
        return this.title !== '' &&
              this.Location !== '' &&
              this.imageUrl !== '' &&
              this.description !== ''


      }
    },
    methods: {
      onCreateMeetup() {
        if(!this.formIsValid){
          return ;
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }
        console.log(meetupData)
        this.$store.dispatch('CREATE_MEETUP', meetupData)
        this.$router.push('/maxVuetifyjs/meetups')
      }
    }
  }
</script>
