<template>
  <v-footer
    tile
    flat
    height="80"
    class="font-weight-medium shadow-md"
    :color="$vuetify.theme.dark ? 'dark' : 'white'"
    :dark="$vuetify.theme.dark"
    :inset="true"
  >
    <v-col
      class="text-left"
      cols="12"
    >
      <div class="d-flex flex-row justify-space-between align-center">
        <div>
          <v-btn
            href="https://store.vuetifyjs.com/products/octavia-admin-pro"
            target="_blank"
            depressed
            color="warning"
            @click="callEvent"
          >
            <v-icon
              small
              left
            >
              mdi-phone-in-talk-outline
            </v-icon>
            1600-0174
          </v-btn>
        </div>
        <div>
          <strong class="text--disabled">
            © 유니코아
          </strong>
        </div>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    methods: {
      callEvent () {
        location.href = 'tel://1600-0174'
      },
    },
  }
</script>
