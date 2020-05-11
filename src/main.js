// import Vue from 'Vue'
import Icon from './Icon.vue'

const request = require.context('./icons', false, /\.svg$/);

// require every module
request.keys().forEach(request);

Vue.component('icon', Icon);