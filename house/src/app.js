require('./bootstrap');

window.Vue = require('vue');
import Buefy from 'buefy'

Vue.use(Buefy);

Vue.component('slugWidget', require('./components/Slug.vue'))