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
                  color="purple darken-1"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  대리점등록요청
                </h5>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
            <base-card>
              <v-card-text>
                <v-row>
                  <v-col
                    cols="4"
                    sm="6"
                    md="4"
                    lg="2"
                  >
                    소속대리점
                  </v-col>
                  <v-col
                    cols="8"
                    sm="6"
                    md="8"
                    lg="10"
                    class="text-right"
                  >
                    <v-text-field
                      disabled
                      outlined
                      dense
                      :value="loggedInUser.dealer_name"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="4"
                    sm="6"
                    md="4"
                    lg="2"
                  >
                    신규대리점명
                  </v-col>
                  <v-col
                    cols="8"
                    sm="6"
                    md="8"
                    lg="10"
                    class="text-right"
                  >
                    <v-text-field
                      outlined
                      dense
                      v-model="companyName"
                      :rules="[rules.required]"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="4"
                    sm="6"
                    md="4"
                    lg="2"
                  >
                    대표자명
                  </v-col>
                  <v-col
                    cols="8"
                    sm="6"
                    md="8"
                    lg="10"
                    class="text-right"
                  >
                    <v-text-field
                      outlined
                      dense
                      v-model="memberName"
                      :rules="[rules.required]"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="4"
                    sm="6"
                    md="4"
                    lg="2"
                  >
                    핸드폰번호
                  </v-col>
                  <v-col
                    cols="8"
                    sm="6"
                    md="8"
                    lg="10"
                    class="text-right"
                  >
                    <v-text-field
                      outlined
                      dense
                      v-model="mobileNumber"
                      hint="-를 포함해서 입력하세요"
                      :rules="[rules.mobilePhone]"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="4"
                    sm="6"
                    md="4"
                    lg="2"
                  >
                    이메일번호
                  </v-col>
                  <v-col
                    cols="8"
                    sm="6"
                    md="8"
                    lg="10"
                    class="text-right"
                  >
                    <v-text-field
                      outlined
                      dense
                      v-model="email"
                      :rules="[rules.email]"
                    />
                  </v-col>
                </v-row>

              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="text-center">
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      :disabled="disabled"
                      @click="submitEvent"
                      block>입력</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      to="/app/pages/agencyRegistration">취소</v-btn>
                  </v-col>


                </v-row>
              </v-card-actions>
            </base-card>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'ContractNew',
    created () {
      this.setSelectedMenu('대리점등록')
    },
    computed: {
      ...mapGetters(['loggedInUser']),
      disabled () {
        return !this.valid
      },
    },
    data: () => ({
      companyName: '',
      memberName: '',
      mobileNumber: '',
      email: '',
      valid: true,
      rules: {
        required: value => !!value || '입력해주세요',
        mobilePhone: value => {
          const pattern = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
          return pattern.test(value) || '핸드폰번호가 아닙니다.'
        },
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '이메일형식이 아닙니다.'
        },
      },
    }),
    methods: {
      ...mapActions(['regAgency']),
      ...mapMutations(['setSelectedMenu']),
      submitEvent () {
        const payload = {
          bossBizCode: this.loggedInUser.dealer_biz_code,
          companyName: this.companyName,
          memberName: this.memberName,
          mobileNumber: this.mobileNumber,
          email: this.email,
        }
        this.regAgency(payload)
      },
    },
  }
</script>

<style scoped>

</style>
