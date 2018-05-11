<template>
	<v-app id="inspire">
    <v-card>
      <v-btn color="primary" @click="dialog = true">Open Dialog</v-btn>
      <v-dialog v-model="dialog" :fullscreen="fullScreen" transition="dialog-bottom-transition" :overlay=false
                scrollable>
        <v-card>
          <v-toolbar style="flex: 0 0 auto;" dark class="primary">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Data</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-card-title>
              Meetups
              <v-spacer></v-spacer>
            </v-card-title>
            <div
             :items="meetups"

                :pagination.sync="pagination">
              <v-data-table
                :items="meetups"
                :pagination.sync="pagination"
                hide-actions
                class="elevation-1"
              >

                <template slot="items" slot-scope="props">
                  <td>
                  		<v-card class="info mb-2">
                  	<v-container fluid>
					<v-layout row>
                  		<v-flex xs5 sm4 md3>
										<v-card-media
                      :src="props.item.imageUrl"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
										<v-flex xs7 sm8 md9>
										<v-card-title primary-title>
											<div>
												<h5 class="white--text mb-0">
													{{props.item.title}}
												</h5>
			                  <div>
			                    {{props.item.date}}
			                  </div>
											</div>
										</v-card-title>

										 <v-card-actions>
                <v-btn color="primary" flat
                :to="{path:'/meetups/'+props.item.id}">
                  <v-icon left light>arrow_forward</v-icon>
                  View Meetup</v-btn>
              </v-card-actions>
	                  </v-flex>
	                </v-layout>
	              </v-container>
	            </v-card>
                	</td>

                </template>
              </v-data-table>




              <div class="text-xs-center pt-2">
                <v-pagination v-model="pagination.page" :length="pages"></v-pagination>

              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
  </v-app>
</template>
<script>

	export default{
		data(){
			return {


			  	dialog: false,
          fullScreen: true,
          search: '',
          pagination: {rowsPerPage:3},
          selected: [],
         }
       },
		computed: {
        pages () {
          return this.pagination.rowsPerPage ? Math.ceil(this.meetups.length / this.pagination.rowsPerPage) : 0
        },
         meetups(){
	        console.log(this.$store.getters.loadedMeetups)
	        return this.$store.getters.loadedMeetups
	      }
      },
	}
</script>
