<template>
  <div>
    <v-navigation-drawer
      v-model="getThemeMode.verticalCompactSidebarDrawer"
      :color="
        $vuetify.theme.dark ? 'dark' : getThemeMode.verticalSidebarDrawerColor
      "
      :dark="getThemeMode.verticalSidebarDrawerColor != 'white' ? true : false"
      width="230px"
      app
      mobile-breakpoint="1120"
      class="shadow-sm rounded-r-md"
      floating
      height="100vh"
      :right="$vuetify.rtl"
    >
      <v-row
        class="fill-height flex-row flex ma-0"
        no-gutters
      >
        <vue-perfect-scrollbar
          :settings="{ suppressScrollX: true, wheelPropagation: false }"
          class="h-100 rtl-ps-none ps scroll grow"
          style="height: 100%"
        >
          <v-list
            dense
            nav
            class="grow pa-0 pt-2"
            max-width="230"
          >
            <div
              class="d-flex justify-center flex-column"
              height="100"
            >
              <v-list-item-content class="text-center">
                <v-list-item-title class="my-2 pb-3 font-weight-regular">
                  대리점1
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-btn
                    block
                    @click="selectedMenuHandler('내정보보기', 'agency')"
                  >
                    내정보보기
                  </v-btn>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-btn
                    block
                  >
                    로그아웃
                  </v-btn>
                </v-list-item-subtitle>
              </v-list-item-content>
            </div>
          </v-list>
          <v-list
            class="grow"
            max-width="230"
          >
            <template v-for="(item, i) in computedItems">
              <base-item-group
                v-if="item.children"
                :key="`group-${i}`"
                :item="item"
              />

              <base-item
                v-else
                :key="`item-${i}`"
                :item="item"
              />
            </template>
          </v-list>
        </vue-perfect-scrollbar>
      </v-row>
    </v-navigation-drawer>
    <!-- end of sidebar drawer -->

    <!-- userDrawer -->
    <v-navigation-drawer
      v-model="userDrawer"
      fixed
      left
      height="100%"
      temporary
      floating
      width="350"
    >
      <user-drawer>
        <template v-slot:userDrawerCloseButton>
          <v-btn
            icon
            color=""
            @click.stop="userDrawer = !userDrawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </user-drawer>

      <template v-slot:append>
        <div class="my-4 mx-4">
          <base-hover-button
            text="Logout"
            block
            bg-color="primary lighten-5 primary--text"
            icon-name="mdi-logout"
          />
        </div>
      </template>
    </v-navigation-drawer>

    <!-- notificationDrawer  -->
    <v-navigation-drawer
      v-model="notificationDrawer"
      fixed
      left
      height="100%"
      temporary
      floating
      width="350"
    >
      <notification-drawer>
        <template v-slot:notificationDrawerCloseButton>
          <v-btn
            icon
            color
            @click.stop="notificationDrawer = !notificationDrawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </notification-drawer>

      <template v-slot:append>
        <div class="my-4 mx-4">
          <base-hover-button
            text="View All Notifications"
            block
            bg-color="primary lighten-5 primary--text"
          />
        </div>
      </template>
    </v-navigation-drawer>
    <!-- searchDrawer -->
    <v-navigation-drawer
      v-model="searchDrawer"
      fixed
      left
      height="100%"
      temporary
      floating
      width="380"
    >
      <search-drawer>
        <template v-slot:searchDrawerCloseButton>
          <v-btn
            icon
            color
            @click.stop="searchDrawer = !searchDrawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </search-drawer>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { items } from '../../data/navigation'
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    components: {
      UserDrawer: () => import('../common-drawer/UserDrawer.vue'),
      NotificationDrawer: () => import('../common-drawer/NotificationDrawer.vue'),
      SearchDrawer: () => import('../common-drawer/SearchDrawer.vue'),
    },
    data () {
      return {
        drawer: true,
        items: items,
        userDrawer: false,
        notificationDrawer: false,
        searchDrawer: false,
        items2: ['mdi-home', 'mdi-play'],
        imtemsAside: ['mdi-play'],
      }
    },
    computed: {
      ...mapGetters(['getThemeMode']),
      computedItems () {
        return this.items.map(this.mapItem)
      },
    },
    methods: {
      ...mapActions(['changeCompactVerticalSidebarDrawer']),
      ...mapMutations(['setSelectedMenu']),
      toggleSidebar () {
        this.changeCompactVerticalSidebarDrawer()
      },
      selectedMenuHandler (title, url) {
        this.setSelectedMenu(title)
        this.$router.push(url)
      },
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: item.title,
        }
      },
    },
  }
</script>
