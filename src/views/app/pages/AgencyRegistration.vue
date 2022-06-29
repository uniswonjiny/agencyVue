<template>
  <div>
    <v-row justify="center">
      <v-col
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
                  color="warning"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  요청리스트
                </h5>
              </div>

              <div class="d-flex align-right">
                <v-btn
                  outlined
                  color="green"
                  to="/app/pages/ContractNew"
                >
                  신규대리점 등록
                  <v-icon
                    color="primary"
                    right
                  >
                    mdi-plus-circle-outline
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col
            cols="12"
            class="my-0 py-0"
          >
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

              <v-container class="pa-0 text-center">
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
          </v-col>
          <v-col
            cols="12"
          >
            <search-add
              :search-list="searchList"
            />
          </v-col>
          <v-col
            cols="12"
          >
            <base-card>
              <v-card-text>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th
                        class="text-left"
                        width="20%"
                      >
                        순번
                      </th>
                      <th
                        class="text-center"
                        width="25%"
                      >
                        등록일
                      </th>
                      <th
                        class="text-center"
                        width="30%"
                      >
                        대리점명
                      </th>
                      <th class="text-center">
                        상태
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td
                      colspan="5"
                      class="px-0"
                    >
                      <v-expansion-panels
                        flat
                      >
                        <v-expansion-panel
                          v-for="(item , index) in this.getReqAgencyList"
                        >
                          <v-expansion-panel-header
                            hide-actions
                            class="text-caption px-auto mx-auto"
                          >
                            <v-row>
                              <v-col cols="2">
                                {{ item.no }}
                              </v-col>
                              <v-col
                                cols="3"
                                class="text-center"
                              >
                                {{ item.createdAt }}
                              </v-col>
                              <v-col
                                cols="3"
                                class="px-auto text-center"
                              >
                                {{ item.companyName }}
                              </v-col>
                              <v-col
                                cols="4"
                                class="px-auto text-right"
                              >
                                {{ item.status}}
                              </v-col>
                            </v-row>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-divider />
                            <v-card flat>
                              <v-card-text>
                                <div class="mt-3">
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
                                      {{ item.bossBizName }}
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
                                      {{ item.memberName }}
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
                                      class="text-success mb-1 text-15"
                                    >
                                      {{ item.mobileNumber }}
                                    </p>
                                  </div>

                                  <div
                                    class="d-flex justify-space-between"
                                  >
                                    <p
                                      class="text--disabled mb-1 text-15 mr-2"
                                      style="min-width: 100px"
                                    >
                                      이메일 주소
                                    </p>
                                    <p
                                      class="text-success mb-1 text-15"
                                    >
                                      {{ item.email }}
                                    </p>
                                  </div>
                                </div>

                                <div
                                  class="d-flex justify-space-between"
                                  v-if="item.history.length > 0"
                                >
                                  <p
                                    class="text--disabled mb-1 text-15 mr-2"
                                    style="min-width: 100px"
                                  >
                                    진행내역
                                  </p>
                                  <p
                                    class="text-success mb-1 text-15 text-right"
                                  >
                                    <span v-for="(itema , index) in item.history">
                                        {{ itema.createdAt }}  /  {{ itema.status }}
                                    <br />
                                    </span>
                                  </p>
                                </div>

                              </v-card-text>
                            </v-card>
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
  </div>
</template>

<script>
  import SearchAdd from '@/components/base/SearchAdd'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import { dataType } from '@/filter/filter'

  export default {
    name: 'AgencyRegistration',
    components: {
      SearchAdd,
    },

    created () {
      this.setSelectedMenu('대리점등록목록')
      this.initData()

    },
    computed: {
      ...mapGetters(['loggedInUser', 'getReqAgencyList']),
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },

    data: () => ({
      dates: ['2022-04-01', '2022-04-20'],
      menuTwo: false,
      pageSize: 10,
      searchList: [
        {
          text: '대리점명',
          value: 'a',
          disabled: false,
        },
        {
          text: '상태',
          value: 'b',
          disabled: false,
        },
      ],
    }),

    methods: {
      ...mapActions(['fetchRegAgencyList']),
      ...mapMutations(['setSelectedMenu']),
      initData () {
        const today = dataType()
        let preDay = new Date()
        preDay.setMonth(preDay.getMonth() - 5)
        preDay = dataType(preDay)
        this.current = 1
        this.searchParam = {
          startDt: preDay,
          endDt: today,
          startNo: 1,
          endNo: this.pageSize,
          type: null,
          dealerKind: this.loggedInUser.dealer_kind,
          bossBizCode: this.loggedInUser.dealer_biz_code,
          companyName: null,
          memberName: null,
          mobileNumber: null,
          email: null,
          status: null,
        }
        this.dates = [preDay, today]
        this.fetchRegAgencyList( this.searchParam)
      },

    },

  }
</script>

<style>

</style>
