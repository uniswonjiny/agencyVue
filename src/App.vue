<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    metaInfo () {
      return {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: '비즈페이',
        // all titles will be injected into this template
        titleTemplate:
          '%s | 대리점관리및 거래내역확인',
      }
    },
    created () {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', e => {
        this.$vuetify.theme.dark = e.matches
      })
      this.getRouterParams()
    },
    methods: {
      getRouterParams () {
        // console.log(this.$router.currentRoute.query);
      },
    },
  }
</script>
