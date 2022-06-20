<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="300"
  >
    <base-card class="h-full">
      <v-card-text>
        <div class="d-flex align-center mb-3">
          <v-avatar
            class="mr-3"
            color="red lighten-5"
            rounded
          >
            <v-icon class="red--text text--darken-1">
              mdi-account-check-outline
            </v-icon>
          </v-avatar>
          <div>
            <p class="card-title mb-0">
              {{ title }}
            </p>
            <span class="text--disabled">
              {{
                new Date().toLocaleString('ko-KR')
              }}
            </span>
          </div>
        </div>
        <p class="text--disabled">
          {{ content }}
        </p>
        <v-divider class="py-2" />
        <div class="d-flex justify-space-between">
          <v-btn
            block
            @click="closeEvent"
            :class='["success lighten-4" ,"error--text"]'
          >
            확인
          </v-btn>
        </div>
      </v-card-text>
    </base-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'WarningOne',
    props: {
      title: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
      },
      dialog: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      closeEvent () {
        this.$emit('dialogEvent', false)
      },
    },
  }
</script>

<style scoped>

</style>
