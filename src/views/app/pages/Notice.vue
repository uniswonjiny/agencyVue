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
                  color="primary"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  BizPay 공지사항
                </h5>
              </div>
            </div>
          </v-col>

          <v-col cols="12">
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
              </v-card-text>
            </base-card>
          </v-col>

          <v-col
            cols="12"
          >
            <search-add
              :search-list="searchList"
              @searchFormEvent = "searchFormEvent"
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
                        width="23%"
                      >
                        등록일
                      </th>
                      <th
                        class="text-center"
                        width="20%"
                      >
                        분류
                      </th>
                      <th class="text-center">
                        제목
                      </th>
                      <!-- 내용항목 줄맡추기 위해 -->
                      <th width="5%" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="5">
                        <v-expansion-panels
                          flat
                          class="mx-0"
                        >
                          <v-expansion-panel
                            v-for="(item , index) in this.noticeList"
                            :key="index"
                          >
                            <v-expansion-panel-header
                              hide-actions
                              class="text-caption mx-0"
                            >

                              <v-row no-gutters>
                                <v-col cols="2">
                                  {{ item.no }}
                                </v-col>
                                <v-col
                                  cols="3"
                                  class="text-center"
                                >
                                  {{ item.createDate }}
                                </v-col>
                                <v-col
                                  cols="3"
                                  class="px-auto text-center"
                                >
                                  {{ item.type }}
                                </v-col>
                                <v-col
                                  cols="4"
                                >
                                  {{ item.title }}
                                </v-col>
                              </v-row>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <v-divider />
                              <v-card flat>
                                  <v-card-title>{{ item.title }}</v-card-title>
                                <v-card-text>
                                  {{ item.content }}
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
        <div class="text-center">
          <v-container>
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
          </v-container>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import SearchAdd from '@/components/base/SearchAdd'
  import { mapActions, mapGetters } from 'vuex'
  import { dataType } from '@/filter/filter'

  export default {
    name: 'Notice',
    data () {
      return {
        dates: [],
        menuTwo: false,
        searchList: [
          {
            text: '제목',
            value: 'title',
            disabled: false,
          },
          {
            text: '분류',
            value: 'type',
            disabled: false,
          },
          {
            text: '내용',
            value: 'content',
            disabled: false,
          },
        ],
        current: 1,
        pageCount: 1,
        pageSize: 5,
        searchParam: {},
      }
    },


    components: {
      SearchAdd,
    },
    computed: {
      ...mapGetters(['loggedInUser', 'noticeList', 'noticeTotalCount']),
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },

    created () {
      this.initData()
      this.searchFormEvent()
    },
    methods: {
      ...mapActions(['getNoticeList']),
      initData () {
        const today = dataType()
        let preDay = new Date()
        preDay.setMonth(preDay.getMonth() - 5)
        preDay = dataType(preDay)
        this.current = 1
        this.searchParam = {
          startDt: preDay,
          endDt: today,
          startPageNumber: 1,
          endPageNumber: this.pageSize,
          title: null,
          content: null,
          type: null,
          dealerKind: this.loggedInUser.dealer_kind,
        }
        this.dates = [preDay, today]
      },
      searchFormEvent (arrObj) {
        if (arrObj) {
          for (const obj of arrObj) {
            if (obj.key === 'title') this.searchParam.title = obj.value
            if (obj.key === 'content') this.searchParam.content = obj.value
            if (obj.key === 'type') {
              if (obj.value === '일반') this.searchParam.type = 'N'
              if (obj.value === '무이자') this.searchParam.type = 'M'
              if (obj.value === '필수') this.searchParam.type = '1'
              if (obj.value === '대리점') this.searchParam.type = '2'
              if (obj.value === '지사') this.searchParam.type = '3'
            }
          }
        }
        this.getNoticeList(this.searchParam)
          .then(_ => {
            this.pageCount = Math.ceil(this.noticeTotalCount / this.pageSize)
          })
      },
      pageHandler () {
        this.searchParam.startPageNumber = (this.current - 1) * this.pageSize + 1
        this.searchParam.endPageNumber = this.pageSize * this.current
        this.searchFormEvent()
      },
    },
  }
</script>

<style>

</style>
