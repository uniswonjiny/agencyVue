<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <v-card dark>
          <h5 class=" my-auto py-auto font-weight-medium">
            대리점 로그인
          </h5>
        </v-card>
      </v-col>
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
                1,124,124,000 원
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
                v-for="(contentArr , index) in  tableContentList1"
                :key="'first'+index"
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
              :length="totoalPage"
            />


          </v-card-text>
        </base-card>
      </v-col>


      <v-col cols="12">
        <v-card dark>
          <h5 class=" my-auto py-auto font-weight-medium">
            지사 로그인
          </h5>
        </v-card>
      </v-col>
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
                소속 대리점 매출 수익
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
                91,000 원
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
                1,124,124,000 원
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
              :length="totoalPage"
            />


          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'SalesRevenue',
    data: () => ({
      currentPage: 1,
      totoalPage: 10,
      dates: ['2022-04-01', '2022-04-20'],
      menuTwo: false,
      gubunTitle: '가맹점 매출 수익',

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
      agencyMenuDataList1: [
        {
          no: 1,
          agencyName: '에이비씨',
          amount: 1100000,
          benefit: 600,
        }, {
          no: 2,
          agencyName: '에이비씨1',
          amount: 1200000,
          benefit: 700,
        }, {
          no: 3,
          agencyName: '에이비씨2',
          amount: 1300000,
          benefit: 800,
        }, {
          no: 4,
          agencyName: '에이비씨3',
          amount: 1400000,
          benefit: 900,
        }, {
          no: 5,
          agencyName: '에이비씨4',
          amount: 1500000,
          benefit: 1100,
        }, {
          no: 6,
          agencyName: '에이비씨5',
          amount: 1600000,
          benefit: 1500,
        },
      ],
      agencyMenuDataList2: [
        {
          no: 1,
          agencyName: '모집대리점명1',
          amount: 1100000,
          benefit: 600,
        }, {
          no: 1,
          agencyName: '모집대리점명2',
          amount: 1200000,
          benefit: 700,
        }, {
          no: 1,
          agencyName: '모집대리점명3',
          amount: 1300000,
          benefit: 800,
        }, {
          no: 1,
          agencyName: '모집대리점명4',
          amount: 1400000,
          benefit: 900,
        }, {
          no: 1,
          agencyName: '모집대리점명5',
          amount: 1500000,
          benefit: 1100,
        }, {
          no: 1,
          agencyName: '모집대리점명6',
          amount: 1600000,
          benefit: 1500,
        },
      ],
      agencyMenuDataList3: [
        {
          no: 1,
          agencyName: '에이비씨',
          created_dt: '2020-01-01',
          benefit: 600,
        }, {
          no: 1,
          agencyName: '에이비씨1',
          created_dt: '2020-02-11',
          benefit: 700,
        }, {
          no: 1,
          agencyName: '에이비씨2',
          created_dt: '2021-03-26',
          benefit: 800,
        }, {
          no: 1,
          agencyName: '에이비씨3',
          created_dt: '2021-05-23',
          benefit: 900,
        }, {
          no: 1,
          agencyName: '에이비씨4',
          created_dt: '2021-11-01',
          benefit: 1100,
        }, {
          no: 1,
          agencyName: '에이비씨5',
          created_dt: '2022-01-01',
          benefit: 1500,
        },
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
        const tempArr = []
        let targetArr = null
        if (this.gubunTitle === '가맹점 매출 수익') {
          targetArr = this.agencyMenuDataList1
        } else if (this.gubunTitle === '모집대리점 매출 수익') {
          targetArr = this.agencyMenuDataList2
        } else if (this.gubunTitle === '가맹비 수익') {
          targetArr = this.agencyMenuDataList3
        } else {
          targetArr = this.agencyMenuDataList1
        }

        targetArr.map(item => {
          const firstArr = []
          // eslint-disable-next-line no-unused-vars
          for (const [key, value] of Object.entries(item)) {
            firstArr.push(value)
          }
          tempArr.push(firstArr)
        })

        return tempArr
      },
    },
    methods: {
      agencyChange (val) {
        this.gubunTitle = val
      },
      agencyChange2 (val) {
        this.gubunTitle2 = val
      },
    },
  }
</script>

<style>

</style>
