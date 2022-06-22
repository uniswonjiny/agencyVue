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
                  color="success"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  정산내역서
                </h5>
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <base-card>
              <v-card-text>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="정산 년 월 선택"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    type="month"
                    scrollable
                    locale="kr"
                    :allowed-dates="this.allowedDates"
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="modal = false"
                    >
                      취소
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="searchHandler"
                    >
                      확인
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <base-card>
              <v-card-text>
                <v-simple-table>
                  <tbody>
                    <tr>
                      <td colspan="2">발생월</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.cclDt ? settlementInfo.cclDt : this.date }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">대리점명</td>
                      <td class="text-right">A대리점</td>
                    </tr>
                    <tr>
                      <td colspan="2">사업자종류</td>
                      <td class="text-right">사업자</td>
                    </tr>
                    <tr>
                      <td width="50" rowspan="3">수익내역</td>
                      <td>가맹점 매출수익</td>
                      <td class="text-right">{{ settlementInfo.mberDelngFee }}</td>
                    </tr>
                    <tr>
                      <td>모집대리점 매출수익</td>
                      <td class="text-right">{{ settlementInfo.recommandSaleTotal }}</td>
                    </tr>
                    <tr>
                      <td>가맹비 수익</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.dealerRegFee }}</td>
                    </tr>
                    <tr bgcolor="#faebd7">
                      <td colspan="2">수익합계</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.totalFee }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">부가세 공제후</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.totAmtOption01 }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">원천세 공제후</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.totAmtOption02 }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">이월금액</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.forwardAmt }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">조정금액</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.modifyAmt }}</td>
                    </tr>
                    <tr bgcolor="#5f9ea0">
                      <td colspan="2">지급금액</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.sendAmt }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">계산서발행여부</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.taxInvoiceYn }}</td>
                    </tr>
                    <tr>
                      <td colspan="2">지급여부</td>
                      <td class="text-right">{{ settlementInfo && settlementInfo.sendYn }}</td>
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

  export default {
    mounted () {
      document.title = '대리점 정산서'
      const preDate = new Date()
      this.date = preDate.getFullYear() + '-' + (preDate.getMonth() + 1 < 10 ? '0' + preDate.getMonth() : preDate.getMonth())
      this.searchHandler()
    },
    computed: {
      ...mapGetters(['settlementInfo']),
    },
    data: () => ({
      date: '',
      menu: false,
      modal: false,
    }),
    methods: {
      ...mapActions(['fetchSettlementInfo']),
      searchHandler () {
        this.$refs.dialog.save(this.date);
        this.fetchSettlementInfo(this.date.replace('-', ''))
      },
      allowedDates (val) {
        const tempDate = new Date()
        tempDate.setMonth(tempDate.getMonth() - 1)
        return val < tempDate.toISOString().substr(0, 10)
      }
    },
  }
</script>

<style>

</style>
