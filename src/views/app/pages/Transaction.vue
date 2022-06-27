<template>
  <div>
    <v-row justify="center">
      <v-col
        cols="12"
        xl="6"
        sm="8"
        md="8"
      >
        <v-row
          dense
        >
          <v-col
            cols="12"
          >
            <base-card>
              <v-card-text>
                <v-row dense>
                  <v-col>
                    <v-menu
                      ref="menuTwo"
                      v-model="menuTwo"
                      class="text-caption text-lg-subtitle-1"
                      max-width="290"
                      :return-value.sync="dates"
                      transition="scale-transition"
                      offset-y
                      :close-on-content-click="false"
                    >
                      <template v-slot:activator="{on, attrs}">
                        <v-combobox
                          v-model="dateRangeText"
                          prepend-icon="mdi-calendar"
                          readonly
                          dense
                          v-bind="attrs"
                          class="text-caption text-lg-subtitle-1"
                          hide-details
                          hide-no-data
                          outlined
                          v-on="on"
                        />
                      </template>
                      <v-date-picker
                        v-model="dates"
                        range
                        no-title
                        scrollable
                        locale="kr"
                      >
                        <v-spacer />
                        <v-btn
                          text
                          color="primary"
                          @click="menuTwo = false"
                        >
                          취소
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menuTwo.save(dates)"
                        >
                          확인
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-card-text>
            </base-card>
          </v-col>
          <v-col
            cols="12"
          >
            <search-add
              :search-list="searchList"
              @searchFormEvent="searchFormEvent"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
          >
            <base-card>
              <v-card-text>
                <v-simple-table fixed-header>
                  <thead>
                    <tr>
                      <th
                        class="text-left"
                        style="max-width:20px"
                      >
                        순번
                      </th>
                      <th class="text-center">
                        일시
                      </th>
                      <th class="text-center">
                        판매자
                      </th>
                      <th class="text-center">
                        금액
                      </th>
                      <th
                        class="text-left"
                        style="max-width:20px"
                      />
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="px-0 mx-0"
                    >
                      <td
                        colspan="5"
                        class="px-0 mx-0"
                      >
                        <div v-if="transactionList.length == 0" class="text-center">
                          조회된 거래내역이 없습니다.
                        </div>

                        <v-expansion-panels
                          flat
                          class="mx-0 px-0"
                        >
                          <v-expansion-panel
                            v-for="(item , index) in this.transactionList"
                            :key="index"
                          >
                            <v-expansion-panel-header
                              hide-actions
                              class="text-caption mx-0"
                            >
                              <v-row no-gutters>
                                <v-col cols="2">
                                  {{ item.no}}
                                </v-col>
                                <v-col cols="4">
                                  {{ item.confmDt }} <br/> {{ item.confmTime }}
                                </v-col>
                                <v-col cols="3">
                                  {{ item.companyName }} <br/>
                                  ({{ item.mberName }})
                                </v-col>
                                <v-col cols="3">
                                  {{ item.amount }} 원
                                </v-col>
                              </v-row>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <base-card class="mb-3">
                                <v-card-text>
                                  <div class="mt-3">
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                      >
                                        대리점
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.cmpnm }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                      >
                                        정산코드
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.payType }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                      >
                                        결제구분
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.delngSeCode }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                      >
                                        승인번호
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.confmNo }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                      >
                                        할부
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        {{ item.instlmtMonth }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                      >
                                        발급사명
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        {{ item.issueCmpnyNm }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                      >
                                        카드번호
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.cardNo }}
                                      </p>
                                    </div>
                                  </div>
                                </v-card-text>
                              </base-card>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
                <div
                  class="text-right"
                  v-if="transactionList.length >0"
                >
                {{ transactionCount }} 건 / {{ transactionAmount }} 원
                </div>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <div class="text-center">
                <v-container class="max-width">
                  <v-pagination
                    v-model="current"
                    class="my-4"
                    :length="pageCount"
                    @next="pageHandler()"
                    @previous = "pageHandler()"
                    @input = "pageHandler()"
                  />
                </v-container>
        </div>
        <warning-one
          :dialog="warningDialog"
          :title="warningTitle"
          :content="warningContent"
          @dialogEvent="dialogEvent"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import WarningOne from '@/components/dialog/WarningOne'
  import SearchAdd from '@/components/base/SearchAdd'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import { dataType } from '@/filter/filter'

  export default {
    components: {
      WarningOne,
      SearchAdd,
    },
    computed: {
      ...mapGetters(['transactionList', 'loggedInUser', 'transactionCount', 'transactionAmount']),
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },

    mounted () {
      this.setSelectedMenu('거래내역')
      this.initData()
    },

    data: () => ({
      searchList: [
        {
          text: '가맹점명',
          value: 'companyName',
          disabled: false,
        },
        {
          text: '대표자명',
          value: 'bprprr',
          disabled: false,
        },
        {
          text: '판매자성명',
          value: 'mberName',
          disabled: false,
        },
        {
          text: '승인번호',
          value: 'confmNo',
          disabled: false,
        },
        {
          text: '카드사',
          value: 'issueCmpnyNm',
          disabled: false,
        },
        {
          text: '금액',
          value: 'amount',
          disabled: false,
        },
      ],
      warningDialog: false,
      warningTitle: '매출조회',
      warningContent: '조회에 실패 하였습니다. 잠시후 시도해주세요 ',
      dates: [],
      menuTwo: false,
      dropdown_font: ['판매자성명', '판매자아이디'],
      overflow_select: '판매자성명',
      drawer: null,
      // 검색조건
      current: 1,
      pageCount: 1,
      pageSize: 5,
      // search
      loading: false,
      searchParam: {},
    }),

    methods: {
      ...mapActions(['fetchTransactionList']),
      ...mapMutations(['setTransactionList', 'setTransactionCount']),
      ...mapMutations(['setSelectedMenu']),
      // 데이터 초기화
      initData () {
        if (this.dates.length === 0) {
          const today = dataType()
          // let preDay = new Date()
          // preDay.setDate(1)
          // //preDay.setMonth(preDay.getMonth() - 1)
          // preDay = dataType(preDay)
          this.dates = [today, today]
        }
        this.current = 1
        this.searchParam = {
          startConfmDt: this.dates[0], // 거래날짜 시작일
          endConfmDt: this.dates[1], // 거래날자 종료일
          startNo: 1, // 시작 페이지
          endNo: this.pageSize, // 종료 페이지 번호
          companyName: null, // 가맹점명
          bprprr: null, // 대표자명
          mberName: null, // 판매자성명
          confmNo: null, // 승인번호
          issueCmpnyNm: null, // 카드사
          amount: 0, // 금액
          dealerKind: this.loggedInUser.dealer_kind,
          userId: this.loggedInUser.dealer_id,
        }
        // vuex 초기화
        this.setTransactionList([])
        this.setTransactionCount = 0
      },
      dialogEvent (val) {
        this.warningDialog = val
      },
      pageHandler () {
        this.searchParam.startNo = (this.current - 1) * this.pageSize + 1
        this.searchParam.endNo = this.pageSize * this.current
        this.searchFormEvent()
      },
      searchFormEvent (arrObj) {
        if (!!arrObj && arrObj.length > 0) {
          this.initData()
          for (const obj of arrObj) {
            if (obj.key === 'companyName') this.searchParam.companyName = obj.value
            if (obj.key === 'bprprr') this.searchParam.bprprr = obj.value
            if (obj.key === 'mberName') this.searchParam.mberName = obj.value
            if (obj.key === 'confmNo') this.searchParam.confmNo = obj.value
            if (obj.key === 'issueCmpnyNm') this.searchParam.issueCmpnyNm = obj.value
            if (obj.key === 'amount') this.searchParam.amount = obj.value
          }
        }
        this.searchParam.startConfmDt = this.dates[0]
        this.searchParam.endConfmDt = this.dates[1]
        this.fetchTransactionList(this.searchParam)
          .then(_ => {
            this.pageCount = Math.ceil(this.transactionCount / this.pageSize)
          })
      },
    },
  }
</script>
