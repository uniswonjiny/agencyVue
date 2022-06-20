<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="300"
  >
    <base-card class="h-full">
      <v-card-text class="mb-5">
        <div class="d-flex align-center mb-3">
          <v-avatar
            class="mr-3"
            color="red lighten-5"
            rounded
          >
            <v-icon class="red--text text--darken-1">
              mdi-form-textbox-password
            </v-icon>
          </v-avatar>
          <div>
            <p class="card-title mb-0">
              비밀번호변경
            </p>
          </div>
        </div>
        <small style="color: red">비밀번호 생성규칙</small>
        <div
          style="color: red"
          class="text-caption"
        >
          - 소문자 숫자 특수문자 포함 8자리이상
        </div>

          <v-text-field
            ref="name"
            v-model="password"
            :rules="[() => !!password || '기존 사용하시는 비밀번호를 입력해주세요']"
            :error-messages="errorMessages"
            label="기존비밀번호"
            required
          />
          <v-text-field
            ref="name"
            v-model="newPassWord"
            :rules="[() => !!newPassWord || '새로운 비밀번호를 입력해주세요',
              () => password !== newPassWord || '기존비밀번호와 다른 비빌번호를 입력하세요'
            ]"
            :error-messages="errorMessages"
            label="신규비밀번호"
            required
          />
          <v-text-field
            ref="name"
            v-model="reNewPassWord"
            :rules="[() => !!reNewPassWord || '새로운 비밀번호를 다시 입력해주세요' ,
              () => newPassWord === reNewPassWord || '새로운비밀 번호와 일치하지 않습니다.'
            ]"
            :error-messages="errorMessages"
            label="신규비밀번호확인"
            required
          />

        <v-card-actions>
          <v-btn
            outlined
            class="font-weight-bold"
            @click="closeEvent"
            color="primary"
            min-width="110"
          >
            확인
          </v-btn>
          <v-spacer />
          <v-btn
            min-width="110"
            outlined
            @click="closeEvent"
            class="font-weight-bold"
            color="warning"
          >
            취소
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </base-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'PassWordModify',
    props: {
      content: {
        type: String,
        default: '',
      },
      dialog: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      password: '',
      newPassWord: '',
      reNewPassWord: '',
      errorMessages: '',
    }),
    methods: {
      closeEvent () {
        this.$emit('dialogEvent', false)
      },
    },
  }
</script>

<style scoped>

</style>
