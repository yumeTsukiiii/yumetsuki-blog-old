import Vue from 'vue'
import App from './App.vue'
import Router from './router/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import MusicPlayer from './components/MusicPlayer.vue'

Vue.use(Vuetify, {
    theme: {
        primary: "#FFD54F",
        secondary: "#03A9F4",
        accent: "#2196F3",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
    }
});
Vue.use(MusicPlayer);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router: Router,
    components: {
        MusicPlayer
    }
}).$mount('#app');
