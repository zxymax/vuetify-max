<template>
   <v-app id="inspire">
      <v-navigation-drawer
        fixed
        v-model="sideNav"
        app
      >     
         <v-list>
           <v-list-tile v-for="item in menuItems" 
           @click="" 
           :key="item.text"
          
           >
             <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>{{item.text}}</v-list-tile-content>
           </v-list-tile>
         </v-list>
        </v-navigation-drawer>
      <v-toolbar>
        <v-toolbar-side-icon @click="sideNav=!sideNav"></v-toolbar-side-icon>
        <v-toolbar-title>Summary</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
             <v-icon>search</v-icon>
            Meeting
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <main>
        <router-view />
      </main>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      sideNav: false,
      menuItems: [
        { 
          name: 'InterviewQues',
          icon: 'dashboard',
          text: 'InterviewQues',
          link: '/AliInterviewQues'
        },
        { 
          name: 'AboutThis',
          icon: 'dashboard',
          text: 'AboutThis',
          link: '/AboutThis'
        }

        
      ]  
    }
  }
}
</script>

<style>

</style>
