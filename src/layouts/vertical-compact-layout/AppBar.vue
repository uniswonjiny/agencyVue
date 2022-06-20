<template>
  <div>
    <v-app-bar
      :color="$vuetify.theme.dark ? 'dark' : getThemeMode.appBarColor"
      :dark="getThemeMode.appBarColor != 'white' ? true : false"
      app
      class="px-sm text-left shadow-sm"
      height="75"
    >
      <v-app-bar-nav-icon
        v-ripple="{class: 'primary--text'}"
        @click="toggleCompactVerticalSidebarDrawer"
      />
      <v-progress-linear
        :active="getThemeMode.isLoading"
        :indeterminate="getThemeMode.isLoading"
        absolute
        bottom
        color="primary"
      />

      <v-toolbar-title>{{ selectedMenu }}</v-toolbar-title>

      <v-spacer />

      <v-badge
        bordered
        overlap
        content="3"
        color="red"
        offset-x="22"
        offset-y="22"
      >
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-badge>
      <v-chip
        class="transparent py-5"
      >
        {{ loggedInUser ? loggedInUser.cmpnm :  '로그인하세요'}}
      </v-chip>
      <v-avatar class="ml-1">
        <v-img src="@/assets/images/bizpay.png" />
      </v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'VerticallAppBar',

    computed: {
      ...mapGetters(['getThemeMode', 'selectedMenu', 'loggedInUser']),
    },
    data () {
      return {
        userDrawer: false,
        notificationDrawer: false,
        searchDrawer: false,
      }
    },
    methods: {
      ...mapActions(['changeCompactVerticalSidebarDrawer']),
      toggleCompactVerticalSidebarDrawer () {
        this.changeCompactVerticalSidebarDrawer()
      },
    },
  }
</script>

<style scoped></style>
