import axios from 'axios'
export default {
  state: {
    loggedInUser: {
      dealer_id: 'B000376',
      dealer_kind: 34,
    }, // 숙제! 새로고침 브라우저닫았다 바로 열었을때 로그인 유지하기! 숙제!!
    loading: false,
    error: null,
    selectedMenu: '거래조회',
  },
  getters: {
    loggedInUser: state => state.loggedInUser,
    loading: state => state.loading,
    error: state => state.error,
    selectedMenu: state => state.selectedMenu,
  },
  mutations: {
    setUser (state, data) {
      state.loggedInUser = data
    },
    setLogout (state) {
      state.loggedInUser = null
      state.loading = false
      state.error = null
      // this.$router.go("/");
    },
    setLoading (state, data) {
      state.loading = data
      state.error = null
    },
    setError (state, data) {
      state.error = data
      state.loggedInUser = null
      state.loading = false
    },
    clearError (state) {
      state.error = null
    },
    setSelectedMenu (state, val) {
      state.selectedMenu = val
    },
  },
  actions: {
    dealerLogin ({ commit }, data) {
      // 로딩부분 공통 이나 중앙 인터셉터처리 할려 했으나 일단 개발 완료후 여유있으면 처리할
      // 로그인 인증 관련 미들웨어도 만드어야 하는데 ....
      commit('setLoading', true)
      return axios.post(process.env.API_URL + 'agency/login', data)
        .then(res => {
          commit('setUser', res.data)
        }).catch(error => {
          console.log(error)
          throw error.response.data.message
      })
        .finally(_ => {
        commit('clearError')
        commit('setLoading', false)
      })
    },
  },
}
