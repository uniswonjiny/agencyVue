import axios from 'axios'
import { baseUrl } from '@/store/CONSTANT'
import { currency, dataType, dateTime } from '@/filter/filter'

export default {
  state: {
    agencyBasicInfo: {}, // 기본정보
    agencyBankInfo: {}, // 계좌정보
    agencyRecruitInfo: {}, // 모집정보
    transactionList: [], // 거래내역
    transactionCount: 0, // 거래내역 총갯수
    transactionAmount: 0, // 거래내역 총금액
    agencyCountInfo: {}, // 대리점 지사 소속 정보
    agencyList: [], // 대리점관리 목록
    agencyCount: 0, // 대리점관리 전체숫자
    settlementInfo: null, // 대리점 정산서
    noticeList: [], // 공지사항 목록
    noticeTotalCount: 0, // 공지사항 전체목록,
    merchantManagementList: [], // 가맹점 목록
    merchantManagementCount: 0, // 가맹점 전체 숫자
    reqAgencyList: [] , // 등록요청대리점 목록
    reqAgencycount: 0 , // 등록요청대리점 목록 개수

  },
  getters: {
    agencyBasicInfo: state => state.agencyBasicInfo,
    agencyBankInfo: state => state.agencyBankInfo,
    agencyRecruitInfo: state => state.agencyRecruitInfo,
    agencyCountInfo: state => state.agencyCountInfo,
    transactionCount: state => state.transactionCount,
    transactionAmount: state => {
      return currency(state.transactionAmount)
    },
    transactionList: state => {
      // 시간 변경하려고함
      for (const el of state.transactionList) {
        el.confmDt = dataType(el.confmDt)
        el.confmTime = dateTime(el.confmTime)
        el.amount = currency(el.splpc + el.vat)
      }
      return state.transactionList
    },
    agencyList: state => state.agencyList,
    agencyCount: state => state.agencyCount,
    noticeTotalCount: state => state.noticeTotalCount,
    noticeList: state => {
      for (const el of state.noticeList) {
        if (el.type === 'N') el.type = '일반'
        if (el.type === 'M') el.type = '무이자'
        if (el.type === '1') el.type = '필수'
        if (el.type === '2') el.type = '대리점'
        if (el.type === '3') el.type = '지사'
      }
      return state.noticeList
    },
    settlementInfo: state => {
      if (state.settlementInfo) {
        if (state.settlementInfo.bizType === 'Y') {
          state.settlementInfo.bizType = '사업자'
        } else if (state.settlementInfo.bizType === 'N') {
          state.settlementInfo.bizType = '개인'
        } else {
          state.settlementInfo.bizType = '간이'
        }
        state.settlementInfo.mberDelngFee === 0 ? state.settlementInfo.mberDelngFee = '해당없음' : state.settlementInfo.mberDelngFee = currency(state.settlementInfo.mberDelngFee)
        state.settlementInfo.recommandSaleTotal === 0 ? state.settlementInfo.recommandSaleTotal = '해당없음' : state.settlementInfo.recommandSaleTotal = currency(state.settlementInfo.recommandSaleTotal)
        state.settlementInfo.dealerRegFee === 0 ? state.settlementInfo.dealerRegFee = '해당없음' : state.settlementInfo.dealerRegFee = currency(state.settlementInfo.dealerRegFee)
        state.settlementInfo.totalFee === 0 ? state.settlementInfo.totalFee = '해당없음' : state.settlementInfo.totalFee = currency(state.settlementInfo.totalFee)
        state.settlementInfo.totAmtOption01 === 0 ? state.settlementInfo.totAmtOption01 = '해당없음' : state.settlementInfo.totAmtOption01 = currency(state.settlementInfo.totAmtOption01)
        state.settlementInfo.totAmtOption02 === 0 ? state.settlementInfo.totAmtOption02 = '해당없음' : state.settlementInfo.totAmtOption02 = currency(state.settlementInfo.totAmtOption02)
        state.settlementInfo.forwardAmt === 0 ? state.settlementInfo.forwardAmt = '해당없음' : state.settlementInfo.forwardAmt = currency(state.settlementInfo.forwardAmt)
        state.settlementInfo.modifyAmt === 0 ? state.settlementInfo.modifyAmt = '해당없음' : state.settlementInfo.modifyAmt = currency(state.settlementInfo.modifyAmt)
        state.settlementInfo.sendAmt === 0 ? state.settlementInfo.sendAmt = '해당없음' : state.settlementInfo.sendAmt = currency(state.settlementInfo.sendAmt)
        state.settlementInfo.taxInvoiceYn === 'Y' ? state.settlementInfo.taxInvoiceYn = '발행확인' : state.settlementInfo.taxInvoiceYn = '발행전'

        if (state.settlementInfo.sendYn === 'Y') {
          state.settlementInfo.sendYn = '당월지급'
        } else if (state.settlementInfo.sendYn === 'X') {
          state.settlementInfo.sendYn = '지급보류(이월)'
        } else {
          state.settlementInfo.sendYn = '대기'
        }
      } else {
        return {
          cclDt: null,
          cmpnm: '대리점',
          bizType: '사업자',
          mberDelngFee: '해당없음',
          recommandSaleTotal: '해당없음',
          dealerRegFee: '해당없음',
          totalFee: '해당없음',
          totAmtOption01: '해당없음',
          totAmtOption02: '해당없음',
          forwardAmt: '해당없음',
          modifyAmt: '해당없음',
          sendAmt: '해당없음',
          taxInvoiceYn: '발행전',
          sendYn: '대기',
          dealerId: '없음',
        }
      }
    },
    merchantManagementList: state => state.merchantManagementList,
    merchantManagementCount: state => state.merchantManagementCount,
  },
  mutations: {
    setBasicInfo (state, info) {
      state.agencyBasicInfo = info
    },
    setAgencyBankInfo (state, info) {
      state.agencyBankInfo = info
    },
    setAgencyRecruitInfo (state, info) {
      state.agencyRecruitInfo = info
    },
    setAgencyCountInfo (state, info) {
      state.agencyCountInfo = info
    },
    setTransactionList (state, list) {
      state.transactionList = list
    },
    setTransactionCount (state, val) {
      state.transactionCount = val
    },
    setTransactionAmount (state, val) {
      state.transactionAmount = val
    },
    setAgencyList (state, list) {
      state.agencyList = list
    },
    setAgencyCount (state, val) {
      state.agencyCount = val
    },
    setSettlementInfo (state, info) {
      state.settlementInfo = info
    },
    setNoticeList (state, list) {
      state.noticeList = list
    },
    setNoticeCount (state, val) {
      state.noticeTotalCount = val
    },
    setMerchantManagementList (state, list) {
      state.merchantManagementList = list
    },
    setMerchantManagementCount (state, val) {
      state.merchantManagementCount = val
    },
    setReqAgencyList (state, list) {
      state.reqAgencyList = list
    },
    setReqAgencyCount (state, val) {
      state.reqAgencycount = val
    },
  },
  actions: {
    // 기본정보 , 계좌정보 , 모집정보 가져오기
    agencyInfo ({
                  commit,
                  getters,
                }) {
      commit('setLoading', true)
      return axios({
        method: 'get',
        url: baseUrl + `/agency/basicInfo/${getters.loggedInUser.dealer_id}`,
      }).then(res => {
        const {
          agencyBasicInfo,
          agencyBankInfo,
          agencyRecruitInfo,
        } = res.data
        commit('setBasicInfo', agencyBasicInfo)
        commit('setAgencyBankInfo', agencyBankInfo)
        commit('setAgencyRecruitInfo', agencyRecruitInfo)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // setAgencyBelongInfo 속정보 가져오기
    fetchAgencyCount ({ commit, getters }) {
      commit('setLoading', true)
      return axios({
        method: 'get',
        url: baseUrl + `/agency/agencyCount/${getters.loggedInUser.dealer_id}/${getters.loggedInUser.dealer_kind}`,
      }).then(res => {
        commit('setAgencyCountInfo', res.data)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 매출조회
    fetchTransactionList ({ commit }, payLoad) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/transactionList',
        data: payLoad,
      }).then(res => {
        commit('setTransactionList', res.data.data)
        commit('setTransactionAmount', res.data.amount)
        return commit('setTransactionCount', res.data.count)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 대리점 지사 정보 조회
    fetchAgencyList ({ commit }, payload) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/agencyList',
        data: payload,
      }).then(res => {
        commit('setAgencyList', res.data.list)
        return commit('setAgencyCount', res.data.count)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 대리점 정산서
    fetchSettlementInfo ({ commit, getters }, val) {
      commit('setLoading', true)
      return axios({
        method: 'get',
        url: baseUrl + `/agency/settlementInfo/${getters.loggedInUser.dealer_id}/${val}`,
      }).then(res => {
        commit('setSettlementInfo', res.data)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 공지사항
    fetchNoticeList ({ commit, getters }, payload) {
      commit('setLoading', true)
      console.log(payload)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/noticeList',
        data: payload,
      }).then(res => {
        commit('setNoticeCount', res.data.count)
        return commit('setNoticeList', res.data.data)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 가맹점
    fetchMerchantManagementList ({ commit, getters }, payload) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/merchantManagementList',
        data: payload,
      }).then(res => {
        commit('setMerchantManagementCount', res.data.count)
        return commit('setMerchantManagementList', res.data.data)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },
    // 대리점 등록 하기
    regAgency( { dispatch, commit }, payload) {
      commit('setLoading', true)
      return axios({
        method: 'post',
        url: baseUrl + '/agency/insertRegAgency',
        data: payload,
      }).then(res => {
        return dispatch('fetchRegAgencyList', payload)
      }).catch(error => {
        console.log(error)
        throw error.response.data.message
      })
        .finally(_ => {
          commit('clearError')
          commit('setLoading', false)
        })
    },

    // 대리점 등록 요청 목록
  fetchRegAgencyList({ commit } , payload) {
    commit('setLoading', true)
    return axios({
      method: 'post',
      url: baseUrl + '/agency/selectRegAgencyList',
      data: payload,
    }).then(res => {
      commit('setReqAgencyCount', res.data.count)
      return commit('setReqAgencyList', res.data.list)
    }).catch(error => {
      console.log(error)
      throw error.response.data.message
    })
      .finally(_ => {
        commit('clearError')
        commit('setLoading', false)
      })
  }

  },
}
