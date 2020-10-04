import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VuePackeryPlugin from 'vue-packery-plugin'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueDraggabillyPlugin from 'vue-packery-draggabilly-plugin'
Vue.config.productionTip = false

export const eventBus=new Vue();
Vue.use(VuePackeryPlugin);
Vue.use(VueDraggabillyPlugin);
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
