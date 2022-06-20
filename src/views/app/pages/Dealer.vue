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
              />
            </v-col>
          </v-row>
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
                  {{ loggedInUser.dealer_kind && loggedInUser.dealer_kind == 33 ? '지사리스트' : '대리점리스트' }}
                </h5>
              </div>
            </div>
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
                                  {{ item.dealerKind }}
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
                                  {{ item.agencyCount }}
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
                                        {{ item.mTelno }}
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
                                        {{ item.email }}
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
                :length="paginate_total"
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
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Dealer',
    components: {
      'analytic-one-card': analyticOneCard,
      'analytic-two-card': analyticTwoCard,
      CryptoCurrencyCard,
      SearchAdd,
    },
    data: () => ({
      current: 1,
      paginate: 5,
      paginate_total: 10,
      dates: ['2022-04-01', '2022-04-20'],
      value1: '',
      value2: '',
      value3: '',

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
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: './',
        brandImageAltText: 'brand-image',
        collapseButtonOpenColor: '#661c23',
        collapseButtonCloseColor: '#661c23',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Dashboard',
            iconLeft: '<i class="mdi mdi-view-dashboard"></i>',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Learning Management',
                path: { name: 'learning-management' },
                iconLeft: '<i class="mdi mdi-circle-medium"></i>',
              }],

          },
        ],
      },
    }),
    mounted () {
      const todayDate = new Date()
      const todayYear = todayDate.getUTCFullYear()
      const todayMonth = Number(todayDate.getUTCMonth()) + 1 < 10 ? '0' + (Number(todayDate.getUTCMonth()) + 1) : Number(todayDate.getUTCMonth()) + 1
      const todayDay = Number(todayDate.getUTCDate()) < 10 ? '0' + todayDate.getUTCDate() : todayDate.getUTCDate()
      const today = todayYear + '-' + todayMonth + '-' + todayDay
      // 처음 오늘날짜만 조회 하도록
      this.dates = [today, today]
      this.agencyCount()
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
      ...mapGetters(['loggedInUser', 'agencyCountInfo', 'agencyBasicInfo', 'agencyList']),
      directCount () {
        return this.agencyCountInfo.directCount + '개'
      },
      inDirectCount () {
        return this.agencyCountInfo.inDirectCount + '개'
      },
    },
    methods: {
      ...mapActions(['agencyCount', 'agencyList']),
      searchFormEvent (arr) {
        const payLoad = {
          userId: this.loggedInUser.dealer_id,
          dealerId: '', // 산하 아이디
          dealerName: '', // 산하 대리점 이름
          dealerMemberName: '', // 산하 대리점 대표자이름
          startDt: this.dates[0],
          endDt: this.dates[1],
          dealerKind: this.agencyBasicInfo.dealerKind,
          startPageNumber: 0, // 시작 페이지
          endPageNumber: 10, // 종료 페이지 번호
          type: 'a', // 지사인 경우 사용 소속지사 추천 지사 구분용 a 지사 c 추천지사
        }

        for (const el of arr) {
          if (el.key === 'agency') payLoad.dealerName = el.value
          if (el.key === 'userId') payLoad.dealerId = el.value
          if (el.key === 'name') payLoad.dealerMemberName = el.value
        }

        this.agencyList(payLoad)
      },

    },
  }
</script>

<style scoped>

</style>
