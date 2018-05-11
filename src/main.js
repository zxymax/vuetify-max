// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './store'
import VueCodemirror from 'vue-codemirror'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/monokai.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createSimpleTransition } from 'vuetify/es5/util/helpers'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(VueMoment, {
    moment
})
import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer)

// Add the icon to the library so you can use it in your page

Vue.use(Vuetify)

const myTransition = createSimpleTransition('my-transition')
Vue.component('my-transition', myTransition)


Vue.use(VueCodemirror ,{
      options: {
        mode: 'text/javascript',
        theme: 'monokai',
        readOnly: true,
        lineNumbers: true,
        line: true

      }
})




router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
