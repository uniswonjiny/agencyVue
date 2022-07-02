import axios from 'axios'
import { baseUrl } from '@/store/CONSTANT'
import { currency } from '@/filter/filter'
export default {
  state: {
    joinSalesSum: 0, // 가맹점 매출수익
    mojibSalesSum: 0, // 모집대리점매출 수익
    sosokSalesSum: 0, // 소속대리점매출 수익
    joinSum: 0, // 가맹비수익
    recommendSum: 0, // 추천지사 수익

    joinSalesList: [], // 가맹점 매출목록
    joinSalesCount:0, // // 가맹점 매출전체수

    joinAmountList: [], // 가맹비수익
    joinAmountCount: 0, // 가맹비수익

    mojibSalesList: [], // 모집대리점매출 목록
    mojibSalesCount: 0,  // 모집대리점매출전체수

    sosokSalesList: [], // 소속대리점매출 목록
    sosokSalesCount: 0, // 소속대리점매출 전체수

    recommendList: [], // 추천지사 수익 목록
    recommendCount: 0, // 추천지사 전체수
  },
  getters: {
    getJoinSalesList: state => state.joinSalesList,
    getJoinSalesCount: state => currency(state.joinSalesCount),
    getMojibSalesList: state => state.mojibSalesList,
    getMojibSalesCount: state => currency(state.mojibSalesCount),
    getSosokSalesList: state => state.sosokSalesList,
    getSosokSalesCount: state => currency(state.sosokSalesCount),
    getRecommendList: state => state.recommendList,
    getRecommendCount: state => currency(state.recommendCount),
    getJoinAmountList: state => state.joinAmountList, // 가맹비수익
    getJoinAmountCount: state => currency(state.joinAmountCount), // 가맹비수익

    // 가맹전 매출수익
    getJoinSalesSum: state => currency(state.joinSalesSum),
    // 모집대리점매출 수익
    getMojibSalesSum: state => currency(state.mojibSalesSum),
    // 소속대리점매출 수익
    getSosokSalesSum: state => currency(state.sosokSalesSum),
    // 가맹비수익
    getJoinSum: state => currency(state.joinSum),
    // 추천지사 수익
    getRecommendSum: state => currency(state.recommendSum),
    // 합계수익
    getBenefitSum: state => currency(state.joinSalesSum + state.mojibSalesSum + state.sosokSalesSum + state.joinSum + state.recommendSum)

  },
  mutations: {
    setJoinSalesSum(state, data) {
      state.joinSalesSum = data
    },
    setMojibSalesSum(state, data) {
      state.mojibSalesSum = data
    },
    setSosokSalesSum(state, data) {
      state.sosokSalesSum = data
    },
    setJoinSum(state, data) {
      state.joinSum = data
    },
    setRecommendSum(state, data) {
      state.recommendSum = data
    },
    setJoinSalesList(state, data) {
      state.joinSalesList = data
    },
    setJoinSalesCount(state, data) {
      state.joinSalesCount = data
    },
    setMojibSalesList(state, data) {
      state.mojibSalesList = data
    },
    setMojibSalesCount(state, data) {
      state.mojibSalesCount = data
    },
    setSosokSalesList(state, data) {
      state.sosokSalesList = data
    },
    setSosokSalesCount(state, data) {
      state.sosokSalesCount = data
    },
    setRecommendList(state, data) {
      state.recommendList = data
    },
    setRecommendCount(state, data) {
      state.recommendCount = data
    },
    setJoinAmountList(state, data) {
      state.joinAmountList = data
    },
    setJoinAmountCount(state, data) {
      state.joinAmountCount = data
    },
  },
  actions: {
    // 수익 매출 전체 합 목록
    fetchMerchantIncomeSum ({ commit }, data) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/fetchIncomeInfoSum',
        data,
      }).then(res => {
        commit('setJoinSalesSum', res.data.joinSalesSum)
        commit('setMojibSalesSum', res.data.mojibSalesSum)
        commit('setSosokSalesSum', res.data.sosokSalesSum)
        commit('setJoinSum', res.data.joinSum)
        return commit('setRecommendSum', res.data.recommendSum)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },

    // 가맹점 매출목록
    fetchJoinSalesList ({ commit }, data) {
      console.log(data)
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/fetchIncomeInfoSum',
        data,
      }).then(res => {
        commit('setJoinSalesSum', res.data.joinSalesSum)
        commit('setMojibSalesSum', res.data.mojibSalesSum)
        commit('setSosokSalesSum', res.data.sosokSalesSum)
        commit('setJoinSum', res.data.joinSum)
        return commit('setRecommendSum', res.data.recommendSum)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },

    // 가맹비수익
    fetchJoinAmountList ({ commit }, data) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/fetchIncomeInfoSum',
        data,
      }).then(res => {
        commit('setJoinSalesSum', res.data.joinSalesSum)
        commit('setMojibSalesSum', res.data.mojibSalesSum)
        commit('setSosokSalesSum', res.data.sosokSalesSum)
        commit('setJoinSum', res.data.joinSum)
        return commit('setRecommendSum', res.data.recommendSum)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 모집대리점매출 목록
    fetchMojibSalesList ({ commit }, data) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/fetchIncomeInfoSum',
        data,
      }).then(res => {
        commit('setJoinSalesSum', res.data.joinSalesSum)
        commit('setMojibSalesSum', res.data.mojibSalesSum)
        commit('setSosokSalesSum', res.data.sosokSalesSum)
        commit('setJoinSum', res.data.joinSum)
        return commit('setRecommendSum', res.data.recommendSum)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 소속대리점매출 목록
    fetchSosokSalesList ({ commit }, data) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/fetchIncomeInfoSum',
        data,
      }).then(res => {
        commit('setJoinSalesSum', res.data.joinSalesSum)
        commit('setMojibSalesSum', res.data.mojibSalesSum)
        commit('setSosokSalesSum', res.data.sosokSalesSum)
        commit('setJoinSum', res.data.joinSum)
        return commit('setRecommendSum', res.data.recommendSum)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 추천지사 수익 목록
    fetchRecommendList ({ commit }, data) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/fetchIncomeInfoSum',
        data,
      }).then(res => {
        commit('setJoinSalesSum', res.data.joinSalesSum)
        commit('setMojibSalesSum', res.data.mojibSalesSum)
        commit('setSosokSalesSum', res.data.sosokSalesSum)
        commit('setJoinSum', res.data.joinSum)
        return commit('setRecommendSum', res.data.recommendSum)
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
