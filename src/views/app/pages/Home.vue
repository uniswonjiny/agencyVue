<template>
  <div class="pt-4">

    <v-row
      v-if="loggedInUser.dealer_kind === 34 "
      justify="center"
    >
      <!-- 대리점 로그인     -->
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <v-row>
          <v-col>
            <div class="d-flex pr-1 justify-space-between">
              <div class="d-flex align-center">
                <h5 class="mb-0 mr-2 font-weight-medium">
                  영업 현황
                </h5>
              </div>
              <div>
                <router-link class="font-weight-medium" to="salesRevenue">자세히 보기</router-link>
                <v-btn icon>
                  <v-icon>mdi-arrow-right-thin</v-icon>
                </v-btn>
              </div>
            </div>
            <base-card>
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-subtitle>
                    <v-icon
                      color="red"
                      class="mx-2"
                    >
                      mdi-circle-small
                    </v-icon>
                    직접 모집 대리점
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-right">
                    {{ agencyCountInfo.directCount }}
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle>
                    <v-icon
                      color="primary"
                      class="mx-2"
                    >
                      mdi-circle-small
                    </v-icon>
                    간접 모집 대리점
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-right">
                    {{ agencyCountInfo.inDirectCount }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </base-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <v-row>
          <v-col>
            <div class="d-flex pr-1 justify-space-between">
              <div class="d-flex align-center">
                <h5 class="mb-0 mr-2 font-weight-medium">
                  수익 현황 {{ new Date().getFullYear() }}년 {{ new Date().getMonth() + 1 }}월
                </h5>
              </div>
              <div>
                <router-link class="font-weight-medium" to="salesRevenue">자세히 보기</router-link>
                <v-btn icon>
                  <v-icon>mdi-arrow-right-thin</v-icon>
                </v-btn>
              </div>
            </div>
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
                   {{getMojibSalesSum}}원
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
              <v-divider />
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
        </v-row>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <v-row>
          <v-col>
            <div class="d-flex pr-1 justify-space-between">
              <div class="d-flex align-center">
                <h5 class="mb-0 mr-2 font-weight-medium">
                  공지 사항
                </h5>
              </div>
              <div>
                <router-link class="font-weight-medium" to="notice">자세히 보기</router-link>
                <v-btn icon>
                  <v-icon>mdi-arrow-right-thin</v-icon>
                </v-btn>
              </div>
            </div>
            <base-card>
              <v-card-text>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th class="text-left ">
                        분류
                      </th>
                      <th class="text-center">
                        제목
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in noticeList">
                      <td><v-chip
                        x-small
                        class="mr-2"
                        color="red"
                        dark
                      >
                        {{item.type}}
                      </v-chip></td>
                      <td>

                        {{item.title}}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      v-if="loggedInUser.dealer_kind === 33"
      justify="center"
    >
      <!--      지사 로그인    -->
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <v-row>
          <v-col>
            <div class="d-flex pr-1 justify-space-between">
              <div class="d-flex align-center">
                <h5 class="mb-0 mr-2 font-weight-medium">
                  영업 현황
                </h5>
              </div>
              <div>
                <router-link class="font-weight-medium" to="dealer">자세히 보기</router-link>
                <v-btn icon>
                  <v-icon>mdi-arrow-right-thin</v-icon>
                </v-btn>
              </div>
            </div>
            <base-card>
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-subtitle>
                    <v-icon
                      color="red"
                      class="mx-2"
                    >
                      mdi-circle-small
                    </v-icon>
                    소속 대리점
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-right">
                    {{ agencyCountInfo.directCount }}
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle>
                    <v-icon
                      color="primary"
                      class="mx-2"
                    >
                      mdi-circle-small
                    </v-icon>
                    추천지사
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-right">
                    {{ agencyCountInfo.inDirectCount }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </base-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <v-row>
          <v-col>
            <div class="d-flex pr-1 justify-space-between">
              <div class="d-flex align-center">
                <h5 class="mb-0 mr-2 font-weight-medium">
                  수익 현황 {{ new Date().getFullYear() }}년 {{ new Date().getMonth() + 1 }}월
                </h5>
              </div>
              <div>
                <router-link class="font-weight-medium" to="salesRevenue">자세히 보기</router-link>
                <v-btn icon>
                  <v-icon>mdi-arrow-right-thin</v-icon>
                </v-btn>
              </div>
            </div>
            <base-card>
              <v-list
                dense
                class="transparent"
              >
                <v-list-item>
                  <v-list-item-subtitle>
                    <v-icon
                      color="red"
                      class="mx-1"
                    >
                      mdi-circle-small
                    </v-icon>
                    가맹점 매출 수익
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-right">
                   {{ getJoinSalesSum }} 원
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle>
                    <v-icon
                      color="primary"
                      class="mx-1"
                    >
                      mdi-circle-small
                    </v-icon>
                    소속 대리점 매출 수익
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-right">
                    {{ getSosokSalesSum }} 원
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle>
                    <v-icon
                      color="lime"
                      class="mx-1"
                    >
                      mdi-circle-small
                    </v-icon>
                    가맹비 수익
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-right">
                    {{ getJoinSum }} 원
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-subtitle>
                    <v-icon
                      color="green"
                      class="mx-1"
                    >
                      mdi-circle-small
                    </v-icon>
                    추천지사 수익
                  </v-list-item-subtitle>
                  <v-list-item-title class="text-right">
                    {{ getRecommendSum }} 원
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              <v-divider />
              <v-list
                color="pink darken-4"
                dark
              >
                <v-list-item>
                  <v-list-item-title>
                    <v-icon
                      x-large
                      color="deep-purple lighten-3"
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
        </v-row>
      </v-col>

      <v-col
        cols="12"
        xl="8"
        sm="10"
        md="10"
      >
        <v-row>
          <v-col>
            <div class="d-flex pr-1 justify-space-between">
              <div class="d-flex align-center">
                <h5 class="mb-0 mr-2 font-weight-medium">
                  공지 사항
                </h5>
              </div>
              <div>
                <router-link class="font-weight-medium" to="notice">자세히 보기</router-link>
                <v-btn icon>
                  <v-icon>mdi-arrow-right-thin</v-icon>
                </v-btn>
              </div>
            </div>
            <base-card>
              <v-card-text>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th class="text-left ">
                        분류
                      </th>
                      <th class="text-center">
                        제목
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item , index) in this.noticeList"
                      :key="index"
                    >
                      <td>{{ item.type }}</td>
                      <td>
                        {{ item.title }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
  import { dataType } from '@/filter/filter'

  export default {
    name: 'Home',
    created () {
      this.setSelectedMenu('Home')
      const today = dataType()
      let preDay = new Date()
      preDay.setMonth(preDay.getMonth() - 5)
      preDay = dataType(preDay)
      this.fetchAgencyCount()

      this.fetchNoticeList({
        startDt: preDay,
        endDt: today,
        startNo: 1,
        endNo: 5,
        title: null,
        content: null,
        type: null,
        dealerKind: this.loggedInUser.dealer_kind,
        userId: this.loggedInUser.dealer_id,
      })
      this.fetchMerchantIncomeSum({startDt: preDay,
        endDt: today,
        startNo: 1,
        endNo: 5,
        title: null,
        content: null,
        type: null,
        userId: this.loggedInUser.dealer_id,
        dealerKind: this.loggedInUser.dealer_kind,})

    },
    computed: {
      ...mapGetters(
        ['agencyCountInfo',
          'loggedInUser',
          'noticeList',
          'getJoinSalesSum',
          'getMojibSalesSum',
          'getSosokSalesSum',
          'getJoinSum',
          'getRecommendSum',
          'getBenefitSum',
        ]),
    },
    methods: {
      ...mapActions(['fetchAgencyCount', 'fetchNoticeList','fetchMerchantIncomeSum']),
      ...mapMutations(['setSelectedMenu']),
    },

  }
</script>
