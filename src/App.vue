<template>
  <v-app id="inspire">
    <v-navigation-drawer
      dark
      fixed
      clipped
      v-model="sideNav"
      app
    >

      <v-list dense>
        <v-layout row>
    <v-flex >
      <v-card>
        <v-list>
          <v-list-group
            v-model="item.active"
            v-for="item in menuItems"
            :key="item.title"
            v-if="item.items"
            :prepend-icon="item.action"
            no-action

          >
          <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click=""

              router
              :to="subItem.link">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
        </v-list-group>
        <v-list-tile v-else @click="" :key="item.title"
               router
              :to="item.link">
              <v-list-tile-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
       </v-list>

      </v-card>
    </v-flex>
  </v-layout>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar color="red"
      dense
      clipped-left
      dark fixed app>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>知识点总结</v-toolbar-title>
      <v-btn flat  disabled>

           {{count}} -
         </v-btn>
         <v-btn large  @click="changeCount(119)">
           <span>{{time}}</span>
         </v-btn>
      <v-avatar @click="playMp3" class="rotate" style="cursor: pointer;" size="40"  color="indigo">
        <v-icon  dark>music_note</v-icon>
      </v-avatar>
      <embed width="0"  height="0" src="http://p8k7ohp55.bkt.clouddn.com/Activ%20-%20Doar%20Cu%20Tine%20%28Win%20RMX%29.mp3"></embed>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">


        <v-btn flat @click="locationVuetify">
       Go Vuetify QaQ
        </v-btn>
         <v-btn flat @click="">
           <v-icon left dark>lock_open</v-icon>
           SIGN UP
         </v-btn>
         <v-btn flat @click="">
           <v-icon left dark>contacts</v-icon>
           SIGN IN
         </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>

        <v-layout transition="fade-transition">



        <transition :name="transitionName" name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>

        </v-layout>

    </v-content>

  </v-app>
</template>

<script>
  import menuItems from './router/router-config'
  import {mapGetters,mapActions} from 'vuex'
  export default {

     computed: {
      ...mapGetters(['count'])
    },

    data: () => ({
      transitionName: 'slide-left',
      sideNav: true,
     time: new Date().toLocaleTimeString(),
      menuItems: [
          {
            action: 'home',
            title: 'Home',
            link: '/home'
          },
          {
            action: 'insert_drive_file',
            title: '面试题',
            items: [

              { title: '阿里前端面试题', link: '/aliInterviewQues' }
            ]
          },

          {
            action: 'theaters',
            title: 'Javascript',
            items: [

              { title: 'AboutThis', link: '/aboutThis' },
              { title: 'Vuex', link: '/vuex' }
            ]
          },

          {
            action: 'move_to_inbox',
            title: 'Youtube',
            items: [

              { title: 'MaxVuetifyjs', link: '/MaxVuetifyjs' }
            ]
          }


        ]
    }),
     mounted() {
      setInterval(()=>{

        this.time = new Date().toLocaleTimeString()
      },1000)

    },
    methods: {
       locationVuetify() {
         location.href=" https://discordapp.com/"
       },

      ...mapActions(['changeCount']),
      playMp3() {

      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

@import './assets/stylus/base.styl'
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .2s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}


.toolbar--clipped
   z-index 100
.video-js .vjs-tech
  z-index 1

.rotate{
  animation:change 2s linear infinite;
}

@-webkit-keyframes change{
  0%{-webkit-transform:rotate(0deg);}

　　50%{-webkit-transform:rotate(180deg);}

　　100%{-webkit-transform:rotate(360deg);}
}


　


</style>
