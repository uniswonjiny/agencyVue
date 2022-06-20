<template>
  <div>
    <base-card>
      <v-card-text>
        <v-row
          v-for="index in searchCount"
          :key="index"
          dense
        >
          <v-col
            cols="6"
            sm="6"
            md="4"
            lg="2"
          >
            <v-select
              v-model="searchKeyArr[index-1]"
              :items="searchList"
              dense
              outlined
              class="text-overline text-lg-subtitle-1"
              :label="'검색조건[' + index + ']'"
              @change="selectChangeHandler"
            />
          </v-col>
          <v-col
            cols="6"
            sm="6"
            md="8"
            lg="10"
            class="text-right"
          >
            <v-text-field
              v-model="searchValArr[index-1]"
              outlined
              dense
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="mt-n10">
        <v-spacer />
        <v-btn
          color="warning"
          class="rounded-pill mr-5"
          depressed
          @click="searchEmitHandler"
        >
          조회
        </v-btn>
        <v-btn
          color="primary"
          class="rounded-pill px-5 mr-5"
          depressed
          @click="searchAddHandler"
        >
          조건더하기
        </v-btn>
      </v-card-actions>
    </base-card>
  </div>
</template>

<script>
  export default {
    name: 'SearchAdd',
    props: {
      searchList: {
        type: Array,
      },
    },
    data: () => ({
      searchCount: 1,
      searchKeyArr: [],
      searchValArr: [],
    }),
    methods: {
      searchAddHandler () {
        if (this.searchList.length > this.searchCount) this.searchCount++
      },
      selectChangeHandler () {
        this.searchList = this.searchList.map(item => {
          item.disabled = !!this.searchKeyArr.find((val) => val === item.value)
          return item
        })
      },
      searchEmitHandler () {
        console.log(1)
        const retArr = []
        for (let i = 0; i < this.searchKeyArr.length; i++) {
          const obj = { key: null, value: '' }
          obj.key = this.searchKeyArr[i]
          obj.value = this.searchValArr[i]
          retArr.push(obj)
        }
        console.log(2)
        this.$emit('searchFormEvent', retArr)
      },
    },
  }
</script>

<style scoped>

</style>
