// 주의 ) !! 네임 스페이스 적용안함

import Vuex from 'vuex'
import Vue from 'vue'
import largeSidebar from './modules/largeSidebar'
import compactSidebar from './modules/compactSidebar'
import themeConfig from './modules/themeConfig'
import authData from './modules/authData'
import verticalSidebar from './modules/verticalSidebar'
import basicInfo from './modules/basicInfo'
import InCome from './modules/inCome'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    largeSidebar,
    compactSidebar,
    themeConfig,
    authData,
    verticalSidebar,
    basicInfo,
    InCome,
  },
})
