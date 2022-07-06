<template>
  <div>
    <v-row justify="center" v-if=" loggedInUser.dealer_kind && loggedInUser.dealer_kind == 34">
      <<!-- 대리점 로그인 -->
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <base-card>
          <v-card-text>
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
                      <v-spacer/>
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
          </v-card-text>
        </base-card>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <base-card>
          <v-list
            dense
            class="transparent"
          >
            <v-list-item>
              <v-list-item-subtitle>
                <v-icon
                  x-small
                  color="red"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                가맹점 매출 수익
              </v-list-item-subtitle>
              <v-list-item-title class="text-right">
                {{getJoinSalesSum}} 원
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>
                <v-icon
                  x-small
                  color="primary"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                모집대리점 매출 수익
              </v-list-item-subtitle>
              <v-list-item-title class="text-right">
                 {{getMojibSalesSum}} 원
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>
                <v-icon
                  x-small
                  color="warning"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                가맹비 수익
              </v-list-item-subtitle>
              <v-list-item-title class="text-right">
                {{getJoinSum}} 원
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider/>
          <v-list
            color="indigo accent-4"
            dark
          >
            <v-list-item>
              <v-list-item-title>
                <v-icon
                  x-large
                  color="red"
                  class="mx-2"
                >
                  mdi-circle-small
                </v-icon>
                합계 수익
              </v-list-item-title>
              <v-list-item-title class="text-right">
                {{getBenefitSum}} 원
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </base-card>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <base-card>
          <div
            color=""
            class="shadow-none"
          >
            <div
              class="d-flex justify-space-between flex-wrap align-center"
            >
              <v-card-title>
                <v-icon
                  x-small
                  color="primary"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                {{ gubunTitle }}
              </v-card-title>
              <div class="pa-2">
                <v-menu offset-y>
                  <template v-slot:activator="{on, attrs}">
                    <v-btn
                      color=""
                      v-bind="attrs"
                      class="shadow-none"
                      v-on="on"
                    >
                      {{ gubunTitle }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in menuList"
                      :key="index"
                      @click="agencyChange(item)"
                    >
                      <v-list-item-title>
                        {{
                          item
                        }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <base-card>
          <v-card-text>
            <v-simple-table fixed-header>
              <thead>
              <tr>
                <th
                  v-for="(header , index) in tableHeaderList1"
                  :key="index"
                  class="text-center"
                >
                  {{ header }}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="(contentArr , index) in tableContentList1"
                :key="'first'+index"
                class="text-center"
              >
                <td v-for="(content , index) in contentArr" :key="index">
                  {{ content }}
                </td>

              </tr>
              </tbody>
            </v-simple-table>

            <v-pagination
              v-model="currentPage"
              class="my-4"
              :length="pageCount"
            />


          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
<!-- 지사인경우 -->
    <v-row justify="center" v-if=" loggedInUser.dealer_kind && loggedInUser.dealer_kind == 33">
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <base-card>
          <v-card-text>
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
                      <v-spacer/>
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
          </v-card-text>
        </base-card>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <base-card>
          <v-list
            dense
            class="transparent"
          >
            <v-list-item>
              <v-list-item-subtitle>
                <v-icon
                  x-small
                  color="red"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                가맹점 매출 수익
              </v-list-item-subtitle>
              <v-list-item-title class="text-right">
                {{getJoinSalesSum}} 원
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>
                <v-icon
                  x-small
                  color="primary"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                소속 대리점 매출 수익
              </v-list-item-subtitle>
              <v-list-item-title class="text-right">
                {{getSosokSalesSum}} 원
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>
                <v-icon
                  x-small
                  color="warning"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                가맹비 수익
              </v-list-item-subtitle>
              <v-list-item-title class="text-right">
                {{getJoinSum}} 원
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>
                <v-icon
                  x-small
                  color="indigo"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                추천지사 수익
              </v-list-item-subtitle>
              <v-list-item-title class="text-right">
                {{getRecommendSum}} 원
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider />
          <v-list
            color="green accent-5"
            dark
          >
            <v-list-item>
              <v-list-item-title>
                <v-icon
                  x-large
                  color="yellow"
                  class="mx-2"
                >
                  mdi-circle-small
                </v-icon>
                합계 수익
              </v-list-item-title>
              <v-list-item-title class="text-right">
                {{getBenefitSum}} 원
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </base-card>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <base-card>
          <div
            color=""
            class="shadow-none"
          >
            <div
              class="d-flex justify-space-between flex-wrap align-center"
            >
              <v-card-title>
                <v-icon
                  x-small
                  color="primary"
                  class="mx-1"
                >
                  mdi-circle
                </v-icon>
                {{ gubunTitle2 }}
              </v-card-title>
              <div class="pa-2">
                <v-menu offset-y>
                  <template v-slot:activator="{on, attrs}">
                    <v-btn
                      color=""
                      v-bind="attrs"
                      class="shadow-none"
                      v-on="on"
                    >
                      {{ gubunTitle2 }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in menuList2"
                      :key="index"
                      @click="agencyChange2(item)"
                    >
                      <v-list-item-title>
                        {{
                          item
                        }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>
        </base-card>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <base-card>
          <v-card-text>
            <v-simple-table fixed-header>
              <thead>
              <tr>
                <th
                  v-for="(header , index) in tableHeaderList2"
                  :key="index"
                  class="text-center"
                >
                  {{ header }}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="(contentArr , index) in  tableContentList1"
                :key="'two_'+index"
                class="text-center"
              >
                <td v-for="content in  contentArr">
                  {{ content }}
                </td>

              </tr>
              </tbody>
            </v-simple-table>

            <v-pagination
              v-model="currentPage"
              class="my-4"
              :length="pageCount"
            />


          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import {dataType} from "@/filter/filter";

  export default {
    name: 'SalesRevenue',
    created () {
      const today = dataType()
      let preDay = new Date()
      preDay.setMonth(preDay.getMonth() - 1)
      preDay = dataType(preDay)
      this.dates = [preDay, today]
      this.setSelectedMenu('수익현황')
      this.gubunTitle = '가맹점 매출 수익'
      this.gubunTitle2 = '소속대리점 매출 수익'

       this.agencyChange('가맹점 매출 수익')
      // this.agencyChange2('소속대리점 매출 수익')
    },
    data: () => ({
      currentPage: 1,
      pageCount: 10,
      dates: ['2022-04-01', '2022-04-20'],
      menuTwo: false,
      gubunTitle: '가맹점 매출 수익',
      payLoad: {
        startDt: this.dates[0],
        endDt: this.dates[1],
        startNo: 1,
        endNo: 5,
        title: null,
        content: null,
        type: null,
        dealerKind: this.loggedInUser.dealer_kind,
        userId: this.loggedInUser.dealer_id,
      },
      menuList: [
        '가맹점 매출 수익',
        '모집대리점 매출 수익',
        '가맹비 수익',
      ],
      agencyMenuHeader1: [
        '순번', '가맹점', '결제금액', '수수료수익',
      ],
      agencyMenuHeader2: [
        '순번', '대리점', '매출금액', '수수료수익',
      ],
      agencyMenuHeader3: [
        '순번', '대리점', '등록일', '수수료수익',
      ],
      gubunTitle2: '소속대리점 매출 수익',
      menuList2: [
        '소속대리점 매출 수익',
        '가맹비 수익',
        '추천 지사 수익',
      ],
      agency2MenuHeader1: [
        '순번', '대리점', '매출금액', '수수료수익',
      ],
      agency2MenuHeader2: [
        '순번', '대리점', '등록일', '가맹비수익',
      ],
      agency2MenuHeader3: [
        '순번', '지사', '등록건수', '수익',
      ],
    }),
    computed: {
      ...mapGetters(
        [
          'getJoinSalesSum',
          'getMojibSalesSum',
          'getSosokSalesSum',
          'getJoinSum',
          'getRecommendSum',
          'getBenefitSum',
          'getJoinSalesList',
          'getJoinSalesCount',
          'getMojibSalesList',
          'getMojibSalesCount',
          'getSosokSalesList',
          'getSosokSalesCount',
          'getRecommendList',
          'getRecommendCount',
          'getJoinAmountList',
          'getJoinAmountCount',
          'loggedInUser',
        ]
      ),

      dateRangeText () {
        return this.dates.join(' ~ ')
      },
      // 대리점인경우 메뉴선택에 따른 헤더값 변경
      tableHeaderList1 () {
        if (this.gubunTitle === '가맹점 매출 수익') return this.agencyMenuHeader1
        if (this.gubunTitle === '모집대리점 매출 수익') return this.agencyMenuHeader2
        if (this.gubunTitle === '가맹비 수익') return this.agencyMenuHeader3
        return this.agencyMenuHeader1
      },
      tableHeaderList2 () {
        if (this.gubunTitle2 === '소속대리점 매출 수익') return this.agency2MenuHeader1
        if (this.gubunTitle2 === '가맹비 수익') return this.agency2MenuHeader2
        if (this.gubunTitle2 === '추천 지사 수익') return this.agency2MenuHeader3
        return this.agency2MenuHeader1
      },
      // 대리점인 경유 메뉴선택에 따른 내용선택
      tableContentList1 () {
        let targetArr = []
        let tempArr = []
        if (targetArr.gubunTitle === '가맹점 매출 수익') {
          tempArr= this.getJoinSalesList
          this.pageCount = Math.ceil(this.getJoinSalesCount / this.pageSize)
        } else if (this.gubunTitle === '모집대리점 매출 수익') {
          targetArr= this.getMojibSalesList
          this.pageCount = Math.ceil(this.getMojibSalesCount / this.pageSize)
        } else if (this.gubunTitle === '가맹비 수익') {
          targetArr= this.getJoinAmountList;
          this.pageCount = Math.ceil(this.getJoinAmountCount / this.pageSize)
        } else {
          targetArr= []
          this.pageCount = 1;
        }
        targetArr.map(item => {
          const firstArr = []
          // eslint-disable-next-line no-unused-vars
          for (const [key, value] of Object.entries(item)) {
            firstArr.push(value)
          }
          tempArr.push(firstArr)
        })
        return tempArr;
      },
    },
    methods: {
      ...mapActions([
        'fetchMerchantIncomeSum',
        'fetchJoinSalesList',
        'fetchJoinAmountList',
        'fetchMojibSalesList',
        'fetchSosokSalesList',
        'fetchRecommendList',
      ]),
      ...mapMutations([
        'setJoinSalesList',
        'setJoinSalesCount',
        'setMojibSalesList',
        'setMojibSalesCount',
        'setSosokSalesList',
        'setSosokSalesCount',
        'setRecommendList',
        'setRecommendCount',
        'setJoinAmountList',
        'setJoinAmountCount',
        'setSelectedMenu'
      ]),
      // 목록 데이터 모두 초기화 제거 -- 잔류 데이터로 혼란있었음
      initListData(){
        this.currentPage= 1
        this.pageCount= 10
        this.setJoinSalesList([])
        this.setJoinSalesCount(0)
        this.setMojibSalesList([])
        this.setMojibSalesCount(0)
        this.setSosokSalesList([])
        this.setSosokSalesCount(0)
        this.setRecommendList([])
        this.setRecommendCount(0)
        this.setJoinAmountList([])
        this.setJoinAmountCount(0)
        this.payLoad= {
          startDt: this.dates[0],
            endDt: this.dates[1],
            startNo: 1,
            endNo: 5,
            title: null,
            content: null,
            type: null,
            dealerKind: this.loggedInUser.dealer_kind,
            userId: this.loggedInUser.dealer_id,
        }
      },
      // 대리점
      agencyChange (val) {
        this.gubunTitle = val
        this.initListData()
        if(val === '가맹점 매출 수익') this.fetchJoinSalesList(this.payLoad)
        else if(val === '모집대리점 매출 수익') this.fetchMojibSalesList(this.payLoad)
        else if(val === '가맹비 수익') this.fetchJoinAmountList(this.payLoad)

      },

      // 지사
      agencyChange2 (val) {
        this.gubunTitle2 = val
        this.initListData()
        if(val === '소속대리점 매출 수익') this.fetchSosokSalesList(this.payLoad)
        else if(val === '가맹비 수익') this.fetchJoinAmountList(this.payLoad)
        else if(val === '추천 지사 수익') this.fetchRecommendList(this.payLoad)
      },
    },
  }
</script>

<style>

</style>
