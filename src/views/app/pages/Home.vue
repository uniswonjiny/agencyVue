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
                <a
                  href="#"
                  class="font-weight-medium"
                >자세히 보기</a>
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
                <a
                  href="#"
                  class="font-weight-medium"
                >자세히 보기</a>
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
                    745,000 원
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
                    1,948,100 원
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
                    91,000 원
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
                    1,124,124,000 원
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
                <a
                  href="#"
                  class="font-weight-medium"
                >자세히 보기</a>
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
                    <tr>
                      <td>대리점 공지</td>
                      <td>
                        <v-chip
                          x-small
                          class="mr-2"
                          color="red"
                          dark
                        >
                          필독
                        </v-chip>
                        가맹점 모집 유의사항
                      </td>
                    </tr>
                    <tr>
                      <td>가맹비 공지</td>
                      <td>
                        <div class="d-flex align-center">
                          <v-sheet class="warning lighten-5 px-1 mr-2 mr-2 rounded">
                            <v-icon class="warning--text text-caption">
                              mdi-call-made
                            </v-icon>
                          </v-sheet>
                          <p class="ma-0 heading-muted">
                            자가거래
                            <span class="text-warning mr-1">금지</span>
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>무이자 공지</td>
                      <td class="success--text">
                        X월 무이자안내
                      </td>
                    </tr>
                    <tr>
                      <td
                        colspan="2"
                        class="pa-0"
                      >
                        <v-expansion-panels
                          class="mt-5 mx-0 pa-0"
                          flat
                          dark
                        >
                          <v-expansion-panel>
                            <v-expansion-panel-header>
                              <div class="d-flex flex-wrap align-center">
                                <div style=" flex: 1 1 0;">
                                  <v-icon color="red">
                                    mdi-bell
                                  </v-icon>
                                  지사
                                </div>
                                <div style=" flex: 1 1 0;">
                                  <v-icon color="success">
                                    mdi-check-circle
                                  </v-icon>
                                  영업정책(2020년 04월 01일 이후)
                                </div>
                              </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              지사 대리점 가맹점 공지사항 <span class="font-weight-bold text-warning mr-1">운영수수료 변경 </span> 공지사항 확인 필요
                              <br> 정책은 계속 변경됩니다.
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
                <a
                  href="#"
                  class="font-weight-medium"
                >자세히 보기</a>
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
                <a
                  href="#"
                  class="font-weight-medium"
                >자세히 보기</a>
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
                    350,000 원
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
                    11,000,100 원
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
                    100,000 원
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
                    123,456,789,000 원
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
                    9,876,543,210 원
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
                <a
                  href="#"
                  class="font-weight-medium"
                >자세히 보기</a>
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
  import { mapActions, mapGetters } from 'vuex'
  import { dataType } from '@/filter/filter'

  export default {
    name: 'Home',
    mounted () {
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
      })
    },
    computed: {
      ...mapGetters(['agencyCountInfo', 'loggedInUser', 'noticeList']),
    },
    methods: {
      ...mapActions(['fetchAgencyCount', 'fetchNoticeList']),
    },
  }
</script>
