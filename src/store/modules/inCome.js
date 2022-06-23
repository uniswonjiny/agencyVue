import axios from 'axios'
import { baseUrl } from '@/store/CONSTANT'
import { currency } from '@/filter/filter'
export default {
  state: {
    // 가맹점 매출수익 합
    merchantIncomeSum: 0,
    // 가맹점 매출수익 목록
    merchantIncomeList: [],
    // 가맹점 매출수익 전체 갯수
    merchantIncomeCount: 0,
    // 모집대리점 매출수익 합
    recruitmentAgencySalesSum: 0,
    // 모집대리점 매출수익 목록
    recruitmentAgencySalesList: [],
    // 모집대리점 매출수익 전체갯수
    recruitmentAgencySalesCount: 0,
    // 가맹비 수익 합
    agencyMemberShipFeeSum: 0,
    // 가맹비 수익 목록
    agencyMemberShipFeeList: [],
    // 가맹비 수익 전체 갯수
    agencyMemberShipFeeCount: 0,
  },
  getters: {
    // 가맹점 매출수익
    getMerchantIncomeSum: state => currency(state.merchantIncomeSum),
    getMerchantIncomeList: state => state.merchantIncomeList,
    getMerchantIncomeCount: state => currency(state.merchantIncomeCount),

    // 모집대리점 매출수익
    getRecruitmentAgencySalesSum: state => currency(state.recruitmentAgencySalesSum),
    getRecruitmentAgencySalesList: state => state.recruitmentAgencySalesList,
    getRecruitmentAgencySalesCount: state => currency(state.recruitmentAgencySalesCount),

    // 가맹비 수익
    getAgencyMemberShipFeeSum: state => currency(state.agencyMemberShipFeeSum),
    getAgencyMemberShipFeeList: state => state.agencyMemberShipFeeList,
    getAgencyMemberShipFeeCount: state => currency(state.agencyMemberShipFeeCount),

  },
  mutations: {
    // 가맹점 매출수익
    setMerchantIncomeSum (state, val) {
      state.merchantIncomeSum = val
    },
    setMerchantIncomeList (state, list) {
      state.merchantIncomeList = list
    },
    setMerchantIncomeCount (state, val) {
      state.merchantIncomeCount = val
    },
    // 모집대리점 매출수익
    setRecruitmentAgencySalesSum (state, val) {
      state.recruitmentAgencySalesSum = val
    },
    setRecruitmentAgencySalesList (state, list) {
      state.recruitmentAgencySalesList = list
    },
    setRecruitmentAgencySalesCount (state, val) {
      state.recruitmentAgencySalesCount = val
    },
    // 가맹비 수익
    getAgencyMemberShipFeeSum (state, val) {
      state.agencyMemberShipFeeSum = val
    },
    getAgencyMemberShipFeeList (state, list) {
      state.agencyMemberShipFeeList = list
    },
    getAgencyMemberShipFeeCount (state, val) {
      state.agencyMemberShipFeeCount = val
    },
  },
  actions: {
    // 가맹점 매출수익
    fetchMerchantIncomeSum (ctx, data) {
      ctx.commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/merchantManagementList',
        data,
      }).then(res => {
        ctx.commit('setMerchantManagementCount', res.data.count)
        return ctx.commit('setMerchantManagementList', res.data.data)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          ctx.commit('clearError')
          ctx.commit('setLoading', false)
        })
    },
    fetchMerchantIncomeList (ctx, data) {
      ctx.commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/merchantManagementList',
        data,
      }).then(res => {
        ctx.commit('setMerchantManagementCount', res.data.count)
        return ctx.commit('setMerchantManagementList', res.data.data)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          ctx.commit('clearError')
          ctx.commit('setLoading', false)
        })
    },
    fetchMerchantIncomeCount (ctx, data) {
      ctx.commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/merchantManagementList',
        data,
      }).then(res => {
        ctx.commit('setMerchantManagementCount', res.data.count)
        return ctx.commit('setMerchantManagementList', res.data.data)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          ctx.commit('clearError')
          ctx.commit('setLoading', false)
        })
    },


  },
}
