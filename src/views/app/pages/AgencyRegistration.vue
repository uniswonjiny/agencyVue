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
                        <v-expansion-panel>
                          <v-expansion-panel-header
                            hide-actions
                            class="text-caption px-auto mx-auto"
                          >
                            <v-row>
                              <v-col cols="2">
                                1
                              </v-col>
                              <v-col
                                cols="3"
                                class="text-center"
                              >
                                22/01/02 14:00:01
                              </v-col>
                              <v-col
                                cols="3"
                                class="px-auto text-center"
                              >
                                대리점
                              </v-col>
                              <v-col
                                cols="4"
                              >
                                영업유의사항 안내
                              </v-col>
                            </v-row>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <v-divider />
                            <v-card flat>
                              <v-card-title>영업유의사항 안내</v-card-title>
                              <v-card-text>
                                유사투자자문업체 가맹점 모집시 대리점 해지 가능합니다. 유의하여 주시기 바랍니다.
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

  export default {
    name: 'AgencyRegistration',
    components: {
      SearchAdd,
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },

    data: () => ({
      dates: ['2022-04-01', '2022-04-20'],
      menuTwo: false,
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

  }
</script>

<style>

</style>
