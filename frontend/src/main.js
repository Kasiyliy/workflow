import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './filters/filter.js';
import './style/main.scss';
import VCalendar from 'v-calendar';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheck, faPlus, faSearch, faTable, faTasks, faTimes, faUsers} from '@fortawesome/free-solid-svg-icons';
import {faTrello} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faAlignJustify} from "@fortawesome/free-solid-svg-icons/faAlignJustify";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faUpload} from "@fortawesome/free-solid-svg-icons/faUpload";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

library.add(faTasks, faPlus, faTimes, faSearch, faUsers);
library.add(faTrello, faCheck, faAlignJustify, faHome, faUpload);
library.add(faTable, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VCalendar);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
