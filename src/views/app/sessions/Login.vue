<template>
  <div class="page-wrap">
    <div class="session-form-hold">
      <base-card>
        <v-card-text class="text-center">
          <img
            src="@/assets/images/login_title.png"
            alt="비즈페이로고"
          >
          <v-text-field
            v-model="userId"
            label="대리점 ID"
          />

          <v-text-field
            v-model="loginPassWord"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            name="input-10-2"
            label="비밀번호"
            @click:append="show = !show"
          />
          <v-btn
            class="mb-4"
            block
            color="success"
            dark
            @click="login"
          >
            로그인
          </v-btn>
          <div class="d-flex justify-around flex-wrap">
            <v-btn
              text
              large
              color="warning"
              href="tel://1600-0174"
            >
              <v-icon
                color="red"
                class="mx-auto"
              >
                mdi-phone
              </v-icon>
              고객센터 : 1600 - 0174
            </v-btn>
          </div>
        </v-card-text>
      </base-card>
    </div>
    <warning-one
      :dialog="warningDialog"
      :title="warningTitle"
      :content="warningContent"
      @dialogEvent="dialogEvent"
    />
  </div>
</template>
<script>
  import WarningOne from '@/components/dialog/WarningOne'
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: '로그인',
    },
    components: {
      WarningOne,
    },
    data () {
      return {
        show: false,
        password: 'Password',
        warningDialog: false,
        warningTitle: '',
        warningContent: '',
        userId: '',
        loginPassWord: '',
      }
    },
    methods: {
      ...mapActions(['dealerLogin']),
      dialogEvent (val) {
        this.warningDialog = val
      },
      login () {
        this.dealerLogin({
          userId: this.userId,
          passWord: this.loginPassWord,
        }).catch(error => {
          this.warningDialog = true
          this.warningTitle = '로그인에 실패했습니다.'
          this.warningContent = error
        })
      },
    },
  }
</script>
<style lang="scss" scoped>
.page-wrap {
  background-color: #242939 !important;
  display: flex;
  align-items: center;
  padding: 40px 1rem;
  height: 100%;
  min-height: 100vh;
}

.session-form-hold {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>
