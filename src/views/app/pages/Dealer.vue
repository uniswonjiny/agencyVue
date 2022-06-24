<template>
  <div>
    <v-row justify="center">
      <!--  대리점 로그인    -->
      <v-col
        cols="12"
        xl="6"
        sm="8"
        md="8"
      >
        <v-row>
          <!--  대리점일때        -->

          <v-col cols="12">
            <div class="d-flex pr-1 justify-space-between pb-2">
              <div class="d-flex align-center">
                <v-icon
                  small
                  color="primary"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  영업현황
                </h5>
              </div>
            </div>
          </v-col>
          <v-row v-if=" loggedInUser.dealer_kind && loggedInUser.dealer_kind == 34">
            <v-col
              cols="12"
              xl="6"
              md="6"
              sm="6"
            >
              <analytic-one-card
                main-icon-name="mdi-hand-pointing-up"
                main-icon-background-color-class="info lighten-5"
                main-icon-text-color="info--text"
                sub-heading-text=""
                :heading-text="directCount"
                bottom-button-text="직접모집대리점"
                bottom-button-icon="mdi-arrow-down-drop-circle-outline"
                bottom-button-hover-class="hover:bg-info"
              />
            </v-col>
            <v-col
              cols="12"
              xl="6"
              md="6"
              sm="6"
            >
              <analytic-two-card
                main-icon-name="mdi-account-multiple"
                main-icon-background-color-class="primary lighten-5"
                main-icon-text-color="primary--text"
                sub-heading-text=""
                :heading-text="inDirectCount"
                bottom-button-text="간접모집대리점"
                bottom-button-icon="mdi-arrow-down-drop-circle-outline"
                bottom-button-hover-class="hover:bg-primary"
              />
            </v-col>
          </v-row>
          <v-row v-if=" loggedInUser.dealer_kind && loggedInUser.dealer_kind == 33">
            <v-col
              cols="6"
            >
              <crypto-currency-card
                bg-card-color="primary"
                heading="소속대리점"
                :sub-heading="directCount"
                main-icon-text-color="primary--text text--lighten-4"
                main-icon-name="mdi-lighthouse-on"
                class="ml-5"
              />
            </v-col>
            <v-col
              cols="6"
            >
              <crypto-currency-card
                bg-card-color="red"
                heading="추천지사"
                :sub-heading="inDirectCount"
                main-icon-text-color="warning--text text--lighten-4"
                main-icon-name="mdi-handshake-outline"
                class="mr-5"
              />
            </v-col>
          </v-row>
          <!-- 대리점인경우 -->
          <v-col
            cols="12"
            v-if="loggedInUser.dealer_kind == 34"
          >
            <div class="d-flex pr-1 justify-space-between pb-2">
              <div class="d-flex align-center">
                <v-icon
                  small
                  color="primary"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  {{ loggedInUser.dealer_kind && loggedInUser.dealer_kind == 33 ? '지사리스트' : '대리점리스트' }}
                </h5>
              </div>
            </div>
          </v-col>
          <!-- 지사인경우 -->
          <v-col
            cols="12"
            v-if="loggedInUser.dealer_kind == 33"
          >
            <div class="d-flex align-center">
              <v-icon
                small
                color="primary"
                class="mr-3"
              >
                mdi-circle
              </v-icon>
              <v-overflow-btn
                v-if="loggedInUser.dealer_kind == 33"
                dense
                class="mx-auto"
                :items="dropdownMenu"
                item-value="text"
                v-model="selectedMenu"
              /></div>
          </v-col>

          <v-col>
            <base-card>
              <v-card-text>
                <v-row dense>
                  <v-col>
                    <v-menu
                      ref="menuTwo"
                      v-model="menuTwo"
                      class="text-overline text-lg-subtitle-1"
                      :return-value.sync="dates"
                      transition="scale-transition"
                      :close-on-content-click="false"
                    >
                      <template v-slot:activator="{on, attrs}">
                        <v-combobox
                          v-model="dateRangeText"
                          prepend-icon="mdi-calendar"
                          readonly
                          dense
                          v-bind="attrs"
                          class="text-overline text-lg-subtitle-1 pa-0"
                          outlined
                          v-on="on"
                        />
                      </template>

                      <v-container class="text-center">
                        <v-card>
                          <v-card-text class="align-center">
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
                          </v-card-text>
                        </v-card>
                      </v-container>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col cols="12">
                    <search-add
                      :search-list="searchList"
                      @searchFormEvent="this.searchFormEvent"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
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
                        구분
                      </th>
                      <th class="text-center">
                        대리점명
                      </th>
                      <th
                        class="text-center text-caption"
                        style="max-width:50px"
                      >
                        {{ loggedInUser.dealer_kind && loggedInUser.dealer_kind == 33 ? '소속' : '대리점' }}
                        <br>
                        {{ loggedInUser.dealer_kind && loggedInUser.dealer_kind == 33 ? '대리점수' : '모집수' }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4">
                        <v-expansion-panels
                          flat
                          class="mx-0"
                          v-for="(item, index) in agencyList"
                          :key="index"
                        >
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              hide-actions
                              class="text-caption mx-0 "
                            >
                              <v-row no-gutters>
                                <v-col cols="2">
                                  {{ item.no }}
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  {{ item.dealerKind == 33 ? '지사' : '대리점' }}
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  {{ item.cmpnm }}
                                </v-col>
                                <v-col
                                  cols="2"
                                  class="text-center"
                                >
                                  {{ item.count }}
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
                                        style="min-width: 100px"
                                      >
                                        등록일
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.createDt }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        모집대리점
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
                                        style="min-width: 100px"
                                      >
                                        대표자명
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.bprprr }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        주소
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 text-sm-caption"
                                      >
                                        {{ item.bplc }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        연락처
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        {{ item.mtelno }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        이메일
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        {{ item.email }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        게좌
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.bankName }} - {{ item.bankSerial }} - {{ item.bankUser }}
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
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            lg="6"
            xl="4"
          >
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
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        xl="6"
        sm="8"
        md="8"
      />
    </v-row>
  </div>
</template>

<script>
  import analyticOneCard from '@/components/card/AnalyticCardVersionOne'
  import analyticTwoCard from '@/components/card/AnalyticCardVersionTwo'
  import CryptoCurrencyCard from '@/components/card/CryptoCurrencyCard'
  import SearchAdd from '@/components/base/SearchAdd'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import { dataType } from '@/filter/filter'

  export default {
    name: 'Dealer',
    created () {
      const todayDate = new Date()
      const todayYear = todayDate.getUTCFullYear()
      const todayMonth = Number(todayDate.getUTCMonth()) + 1 < 10 ? '0' + (Number(todayDate.getUTCMonth()) + 1) : Number(todayDate.getUTCMonth()) + 1
      const todayDay = Number(todayDate.getUTCDate()) < 10 ? '0' + todayDate.getUTCDate() : todayDate.getUTCDate()
      const today = todayYear + '-' + todayMonth + '-' + todayDay
      this.dates = ['2010-01-01', today]
      this.initData()
    },
    mounted () {
      this.payLoad.startNo = 0
      this.payLoad.endNo = 10
      this.payLoad.startDt = this.dates[0]
      this.payLoad.endDt = this.dates[1]
      this.payLoad.userId = this.loggedInUser.dealer_id
      this.payLoad.dealerKind = this.loggedInUser.dealer_kind
      this.getAgencyCount()
    },
    components: {
      'analytic-one-card': analyticOneCard,
      'analytic-two-card': analyticTwoCard,
      CryptoCurrencyCard,
      SearchAdd,
    },
    data: () => ({
      selectedMenu: '지사 리스트',
      dropdownMenu: [
        { text: '지사 리스트', type: 'A' },
        { text: '대리점 리스트', type: 'B' },
      ],
      current: 1,
      pageSize: 10,
      pageCount: 1,
      dates: ['2022-04-01', '2022-04-20'],
      payLoad: {
        userId: '',
        dealerId: '',
        dealerName: '',
        dealerMemberName: '',
        startDt: '',
        endDt: '',
        dealerKind: '',
        startNo: 0, // 시작 페이지
        endNo: 10, // 종료 페이지 번호
        // type: 'a', // 지사인 경우 사용 소속지사 추천 지사 구분용 a 지사 c 추천지사
      },
      menuTwo: false,
      searchList: [
        {
          text: '대리점명',
          value: 'agency',
        },
        {
          text: '아이디',
          value: 'userId',
        },
        {
          text: '대표자명',
          value: 'name',
        },
      ],
      searchList2: [
        {
          text: '대리점/지사명',
          value: 'agency',
        },
        {
          text: '아이디',
          value: 'userId',
        },
        {
          text: '대표자명',
          value: 'name',
        },
      ],
    }),

    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
      ...mapGetters(['loggedInUser', 'agencyCountInfo', 'agencyBasicInfo', 'agencyList', 'agencyCount']),
      directCount () {
        return this.agencyCountInfo.directCount + '개'
      },
      inDirectCount () {
        return this.agencyCountInfo.inDirectCount + '개'
      },
    },
    methods: {
      ...mapActions(['fetchAgencyCount', 'fetchAgencyList']),
      ...mapMutations(['setAgencyList', 'setAgencyCount', 'toggleThemeLoadingState']),
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
        this.payLoad = {
          dealerKind: this.loggedInUser.dealer_kind,
          userId: this.loggedInUser.dealer_id,
          dealerId: '',
          dealerName: '',
          dealerMemberName: '',
          startDt: this.dates[0],
          endDt: this.dates[1],
          startNo: 1, // 시작 페이지
          endNo: this.pageSize, // 종료 페이지 번호
        }
        // vuex 초기화
        this.setAgencyList([])
        this.setAgencyCount = 0
      },

      searchFormEvent (arrObj) {

        if (!!arrObj && arrObj.length > 0) {
          for (const el of arrObj) {
            if (el.key === 'agency') this.payLoad.cmpnm = el.value
            if (el.key === 'userId') this.payLoad.dealerId = el.value
            if (el.key === 'name') this.payLoad.bprprr = el.value
          }
        }

        if (this.loggedInUser.dealer_kind === 33) {
          if (this.selectedMenu === '지사 리스트') this.payLoad.type = 'a'
          if (this.selectedMenu === '대리점 리스트') this.payLoad.type = 'b'
        }

        this.payLoad.startDt = this.dates[0]
        this.payLoad.endDt = this.dates[1]
        this.fetchAgencyList(this.payLoad).then(_ => {
          this.pageCount = Math.ceil(this.agencyCount / this.pageSize)
        })
      },
      pageHandler () {
        this.payLoad.startNo = (this.current - 1) * this.pageSize + 1
        this.payLoad.endNo = this.pageSize * this.current
        this.searchFormEvent()
      },
    },
  }
</script>

<style scoped>

</style>
