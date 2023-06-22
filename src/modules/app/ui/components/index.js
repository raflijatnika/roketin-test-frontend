import Vue from 'vue';
import { AppLayoutsPublic } from './layouts';

import { AppBaseLabel, AppBaseCard } from './base';

Vue.component('PublicLayout', AppLayoutsPublic);

// Base Component
Vue.component('AppBaseCard', AppBaseCard);
Vue.component('AppBaseLabel', AppBaseLabel);
