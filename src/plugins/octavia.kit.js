/*
 * ============================
 * File: Octavia.kit.js
 * Project: Octavia-Admin
 * File Created: Monday, 13th April 2020 6:18:44 pm
 * Author:UILIB
 * AuthorUrl:https://ui-lib.com/
 * -----
 * Last Modified: Monday, 13th April 2020 7:16:37 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2021 UILIB, UILIB
 * ============================
 */

import VuePerfectScrollbar from 'vue-perfect-scrollbar'

// theme Main scss
import '@/assets/scss/octavia-design-system/octavia-design-system.scss'

// plugins menu

// javascript import for when you're importing the css directly in your javascript
import 'vue-navigation-bar/dist/vue-navigation-bar.css'
// import the library
import VueNavigationBar from 'vue-navigation-bar'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// form-Wizard

// import VueFormWizard from "vue-form-wizard";
// import "vue-form-wizard/dist/vue-form-wizard.min.css";

import VueMeta from 'vue-meta'

// end plugins

export default {
  install (Vue) {
    Vue.use(VueMeta)
    Vue.use(VueAxios, axios)
    Vue.component('vue-navigation-bar', VueNavigationBar)
    Vue.component(
      'VerticalCompactSidebar',
      // The `import` function returns a Promise.

      () => import('../layouts/vertical-compact-layout/Index'),
    )

    Vue.component('VuePerfectScrollbar', VuePerfectScrollbar)
  },
}
