<template>
  <div>
    <v-row justify="center">
    <!-- 대리점인경우 -->
      <v-col
        v-if="loggedInUser.dealer_kind && loggedInUser.dealer_kind == 34"
        cols="12"
        xl="6"
        sm="8"
        md="8"
      >
        <v-row>
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
                  가맹점리스트
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
                <v-row
                  dense
                >
                  <v-col
                    cols="12"
                  >
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
                        ID
                      </th>
                      <th class="text-center">
                        상호
                      </th>
                      <th
                        class="text-right"
                        style="max-width:20px"
                      >
                        대표자
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4">
                        <v-expansion-panels
                          flat
                          class="mx-0"
                          v-for="(item, index) in merchantManagementList"
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
                                  {{ item.usid }}
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  {{ item.companyName }}
                                </v-col>
                                <v-col
                                  cols="2"
                                  class="text-right"
                                >
                                  {{ item.mberName }}
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
                                        {{ item.creatDt }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        정산코드
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.calculateType }}
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        수수료율
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.feeRate }}
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
                                        {{ item.adres }}
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
                                       {{ item.mberMobile }}
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
                                        게좌정보
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.bankName }} {{ item.accountNo }} {{ item.depositor }}
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
                    <tr>
                      <td
                        colspan="4"
                        class="text-right"
                        v-if="merchantManagementList.length >0"
                      >
                        {{ merchantManagementCount }} 개
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
        v-if="loggedInUser.dealer_kind && loggedInUser.dealer_kind == 33"
        cols="12"
        xl="6"
        sm="8"
        md="8"
      >
        <v-row>
          <v-col cols="12">
            <div  class="d-flex">
              <v-icon
                small
                color="primary"
                class="mr-3"
                chips
              >
                mdi-circle
              </v-icon>
              <v-overflow-btn
                dense
                class="mx-auto"
                :items="dropdown_edit"
                item-value="text"
                v-model="selectedMenu"
              />
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
                <v-row
                  dense
                >
                  <v-col
                    cols="12"
                  >
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
                    <tr v-if="selectedMenu=== '가맹점리스트'">
                      <th
                        class="text-left"
                        style="max-width:20px"
                      >
                        순번
                      </th>
                      <th class="text-center">
                        아이디
                      </th>
                      <th class="text-center">
                        상호
                      </th>
                      <th
                        class="text-right"
                        style="max-width:20px"
                      >
                        대표자
                      </th>
                    </tr>
                    <tr v-if="selectedMenu=== '대리점가맹점리스트'">
                      <th
                        class="text-left"
                        style="max-width:20px"
                      >
                        순번
                      </th>
                      <th class="text-center">
                        소속<br />대리점
                      </th>
                      <th class="text-center">
                        상호
                      </th>
                      <th
                        class="text-right"
                        style="max-width:20px"
                      >
                        대표자
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4">
                        <v-expansion-panels
                          flat
                          class="mx-0"
                          v-for="(item, index) in merchantManagementList"
                          :key="index"
                        >
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              hide-actions
                              class="text-caption mx-0 "
                            >
                              <v-row
                                no-gutters
                                v-if="selectedMenu=== '가맹점리스트'"
                              >
                                <v-col cols="2">
                                  {{ item.no }}
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  {{ item.usid }}
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  {{ item.companyName }}
                                </v-col>
                                <v-col
                                  cols="2"
                                  class="text-right"
                                >
                                  {{ item.mberName }}
                                </v-col>
                              </v-row>

                              <v-row
                                no-gutters
                                v-if="selectedMenu=== '대리점가맹점리스트'"
                              >
                                <v-col cols="2">
                                  {{ item.no }}
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  {{ item.bossName }}
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  {{ item.companyName }}
                                </v-col>
                                <v-col
                                  cols="2"
                                  class="text-right"
                                >
                                  {{ item.mberName }}
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
                                        {{ item.creatDt }}
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
                                        {{ item.bossName }}
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
                                        {{ item.mberName }}
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
                                        {{ item.adres }}
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
                                        {{ item.mberMobile }}
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
                                        계좌
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        {{ item.bankName }} {{ item.accountNo }} {{ item.depositor }}
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
                    <tr>
                      <td
                        colspan="4"
                        class="text-right"
                        v-if="merchantManagementList.length >0"
                      >
                        {{ merchantManagementCount }} 개
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
            <v-pagination
              v-model="current"
              class="my-4"
              :length="pageCount"
              @next="pageHandler()"
              @previous = "pageHandler()"
              @input = "pageHandler()"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import SearchAdd from '@/components/base/SearchAdd'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import { dataType } from '@/filter/filter'
  export default {
    name: 'Franchise',
    components: {
      SearchAdd,
    },
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

    },
    data: () => ({
      selectedMenu: '가맹점리스트',
      current: 1,
      pageSize: 10,
      pageCount: 1,
      dates: [],
      menuTwo: false,
      payLoad: {
        userId: '',
        dealerId: '',
        dealerName: '',
        dealerMemberName: '',
        startDt: '',
        endDt: '',
        dealerKind: '',
        startNo: 1,
        endNo: 10,
      },
      searchList: [
        {
          text: '대리점',
          value: 'agency',
          disabled: false,
        },
        {
          text: '아이디',
          value: 'ID',
          disabled: false,
        },
        {
          text: '대표자명',
          value: 'name',
          disabled: false,
        },
      ],
      dropdown_edit: [
        { text: '가맹점리스트', type: 'A' },
        { text: '대리점가맹점리스트', type: 'B' },
      ],
    }),
    computed: {
      ...mapGetters(['loggedInUser', 'merchantManagementList', 'merchantManagementCount']),
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
    methods: {
      ...mapActions(['fetchMerchantManagementList']),
      ...mapMutations(['setMerchantManagementCount', 'setMerchantManagementList']),
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
          type: '',
        }


        // vuex 초기화
        this.setMerchantManagementList([])
        this.setMerchantManagementCount = 0
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
          if (this.selectedMenu === '가맹점리스트') this.payLoad.type = 'a'
          if (this.selectedMenu === '대리점가맹점리스트') this.payLoad.type = 'b'
        }
        this.payLoad.startDt = this.dates[0]
        this.payLoad.endDt = this.dates[1]
        this.fetchMerchantManagementList(this.payLoad).then(_ => {
          this.pageCount = Math.ceil(this.merchantManagementCount / this.pageSize)
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
