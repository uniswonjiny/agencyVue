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
          <v-col>
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
                  대리점 기본 정보
                </h5>
              </div>
              <div>
                <v-btn
                  target="_blank"
                  small
                  dark
                  color="deep-orange darken-4"
                  @click="closeEvent(true)"
                >
                  비밀번호 변경
                </v-btn>
              </div>
            </div>
            <base-card>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>대리점 아이디</td>
                        <td class="text-right">
                          {{ agencyBasicInfo.dealerId }}
                        </td>
                      </tr>
                      <tr>
                        <td>구분</td>
                        <td class="text-right">
                          {{ agencyBasicInfo.dealerKind === '33' ? '지사' : '대리점' }}
                        </td>
                      </tr>
                      <tr>
                        <td>상호</td>
                        <td class="text-right">
                          {{ agencyBasicInfo.cmpnm }}
                        </td>
                      </tr>
                      <tr>
                        <td>대표자명</td>
                        <td class="text-right">
                          {{ agencyBasicInfo.bprprr }}
                        </td>
                      </tr>
                      <tr>
                        <td>주소</td>
                        <td class="text-right">
                          {{ agencyBasicInfo.bplc }}
                        </td>
                      </tr>
                      <tr>
                        <td>전화번호</td>
                        <td class="text-right">
                          {{ agencyBasicInfo.bizTelno }}
                        </td>
                      </tr>
                      <tr>
                        <td>핸드폰 번호</td>
                        <td class="text-right">
                          {{ agencyBasicInfo.mTelno }}
                        </td>
                      </tr>
                      <tr>
                        <td>E-MAIL</td>
                        <td class="text-right">
                          {{ agencyBasicInfo.email }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <v-container />
        <v-row>
          <v-col>
            <div class="d-flex pr-1 justify-space-between pb-2">
              <div class="d-flex align-center">
                <v-icon
                  small
                  color="success"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  모집정보
                </h5>
              </div>
            </div>
            <base-card>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>모집 대리점</td>
                        <td class="text-right">
                          {{ agencyRecruitInfo.bossBizName }}
                        </td>
                      </tr>
                      <tr>
                        <td>소속지사</td>
                        <td class="text-right">
                          {{ agencyRecruitInfo.targetBizName }}
                        </td>
                      </tr>
                      <tr>
                        <td>추천지사</td>
                        <td class="text-right">
                          {{ agencyRecruitInfo.recommendBizName }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <v-container />
        <v-row>
          <v-col>
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
                  계좌 정보
                </h5>
              </div>
            </div>
            <base-card>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>은행명</td>
                        <td class="text-right">
                          {{ agencyBankInfo.bankName }}
                        </td>
                      </tr>
                      <tr>
                        <td>계좌번호</td>
                        <td class="text-right">
                          {{ agencyBankInfo.bankSerial }}
                        </td>
                      </tr>
                      <tr>
                        <td>예금주</td>
                        <td class="text-right">
                          {{ agencyBankInfo.bankUser }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <pass-word-modify
      :dialog="dialog"
      @dialogEvent="closeEvent"
    />
  </div>
</template>

<script>
  import PassWordModify from '@/components/dialog/PassWordModify'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    mounted () {
      this.agencyInfo()
    },
    computed: {
      ...mapGetters(['agencyBasicInfo', 'agencyBankInfo', 'agencyRecruitInfo']),
    },
    components: {
      PassWordModify,
    },
    data: () => ({
      dialog: false,
    }),
    methods: {
      ...mapActions(['agencyInfo']),

      closeEvent (val) {
        this.dialog = val
      },
      clickHandler (val) {
        this.dialog = val;
      },
    },
  }
</script>

<style>

</style>
