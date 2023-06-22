import Vue from 'vue';
import { AppLayoutsPublic } from './layouts';

import { AppBaseLabel, AppBaseCard, AppBaseDialog } from './base';

Vue.component('PublicLayout', AppLayoutsPublic);

// Base Component
Vue.component('AppBaseCard', AppBaseCard);
Vue.component('AppBaseLabel', AppBaseLabel);
Vue.component('AppBaseDialog', AppBaseDialog);
