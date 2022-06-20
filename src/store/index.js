// 템플릿이 네임스페이스를 적용 안한 것이라 네임스페이스 적용할 경우 어찌될찌 알수 없음

import Vuex from 'vuex'
import Vue from 'vue'
import largeSidebar from './modules/largeSidebar'
import compactSidebar from './modules/compactSidebar'
import themeConfig from './modules/themeConfig'
import authData from './modules/authData'
import verticalSidebar from './modules/verticalSidebar'
import basicInfo from './modules/basicInfo'

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
  },
})
