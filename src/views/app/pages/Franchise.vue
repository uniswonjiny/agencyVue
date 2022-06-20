<template>
  <div>
    <v-row justify="center">
      <v-col
        cols="12"
      >
        <v-card dark>
          <h5 class=" my-auto py-auto font-weight-medium">
            대리점 로그인
          </h5>
        </v-card>
      </v-col>
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
                  color="primary"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  가맹점리스트
                </h5>
              </div>
            </div>
          </v-col>
          <v-col>
            <base-card>
              <v-card-text>
                <v-row dense>
                  <v-col>
                    <v-menu
                      ref="menuTwo"
                      v-model="menuTwo"
                      class="text-overline text-lg-subtitle-1"

                      :return-value.sync="dates"
                      transition="scale-transition"

                      :close-on-content-click="false"
                    >
                      <template v-slot:activator="{on, attrs}">
                        <v-combobox
                          v-model="dateRangeText"
                          prepend-icon="mdi-calendar"
                          readonly
                          dense
                          v-bind="attrs"
                          class="text-overline text-lg-subtitle-1 pa-0"
                          outlined
                          v-on="on"
                        />
                      </template>

                      <v-container class="text-center">
                        <v-card>
                          <v-card-text class="align-center">
                            <v-date-picker
                              v-model="dates"
                              range
                              no-title
                              scrollable
                              locale="kr"
                            >
                              <v-spacer />
                              <v-btn
                                text
                                color="primary"
                                @click="menuTwo = false"
                              >
                                취소
                              </v-btn>
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menuTwo.save(dates)"
                              >
                                확인
                              </v-btn>
                            </v-date-picker>
                          </v-card-text>
                        </v-card>
                      </v-container>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row
                  dense
                >
                  <v-col
                    cols="12"
                  >
                    <search-add
                      :search-list="searchList"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <base-card>
              <v-card-text>
                <v-simple-table fixed-header>
                  <thead>
                    <tr>
                      <th
                        class="text-left"
                        style="max-width:20px"
                      >
                        순번
                      </th>
                      <th class="text-center">
                        ID
                      </th>
                      <th class="text-center">
                        상호
                      </th>
                      <th
                        class="text-right"
                        style="max-width:20px"
                      >
                        대표자
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4">
                        <v-expansion-panels
                          flat
                          class="mx-0"
                        >
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              hide-actions
                              class="text-caption mx-0 "
                            >
                              <v-row no-gutters>
                                <v-col cols="2">
                                  1
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  ididididi
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  아이디
                                </v-col>
                                <v-col
                                  cols="2"
                                  class="text-right"
                                >
                                  대표명
                                </v-col>
                              </v-row>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <base-card class="mb-3">
                                <v-card-text>
                                  <div class="mt-3">
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        등록일
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        2022/01/02 14:00:01
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        모집대리점
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        오메가대리점2
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        대표자명
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        AVB
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        주소
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 text-sm-caption"
                                      >
                                        서울시 중구 디지털로222 벽산아이티센터5차1200호
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        연락처
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        02-xxxx-xxxxx
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        이메일
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        aaaa@egmail.com
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        게좌
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        111111-025-5547897
                                      </p>
                                    </div>
                                  </div>
                                </v-card-text>
                              </base-card>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </td>
                    </tr>
                    <tr>
                      <td
                        colspan="4"
                        class="text-right"
                      >
                        10 개
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            lg="6"
            xl="4"
          >
            <v-container class="max-width">
              <v-pagination
                v-model="current"
                class="my-4"
                :length="paginate_total"
              />
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
      >
        <v-card dark>
          <h5 class="pa-2 font-weight-medium">
            지사 로그인
          </h5>
        </v-card>
      </v-col>
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
                  color="primary"
                  class="mr-3"
                >
                  mdi-circle
                </v-icon>
                <h5 class="mb-0 mr-2 font-weight-bold">
                  {{selectedMenu}}
                </h5>
                <v-overflow-btn
                  dense
                  class="mx-auto"
                  :items="dropdown_edit"
                  item-value="text"
                  v-model="selectedMenu"
                />
              </div>
            </div>
          </v-col>
          <v-col>
            <base-card>
              <v-card-text>
                <v-row dense>
                  <v-col>
                    <v-menu
                      ref="menuTwo"
                      v-model="menuTwo"
                      class="text-overline text-lg-subtitle-1"

                      :return-value.sync="dates"
                      transition="scale-transition"

                      :close-on-content-click="false"
                    >
                      <template v-slot:activator="{on, attrs}">
                        <v-combobox
                          v-model="dateRangeText"
                          prepend-icon="mdi-calendar"
                          readonly
                          dense
                          v-bind="attrs"
                          class="text-overline text-lg-subtitle-1 pa-0"
                          outlined
                          v-on="on"
                        />
                      </template>

                      <v-container class="text-center">
                        <v-card>
                          <v-card-text class="align-center">
                            <v-date-picker
                              v-model="dates"
                              range
                              no-title
                              scrollable
                              locale="kr"
                            >
                              <v-spacer />
                              <v-btn
                                text
                                color="primary"
                                @click="menuTwo = false"
                              >
                                취소
                              </v-btn>
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menuTwo.save(dates)"
                              >
                                확인
                              </v-btn>
                            </v-date-picker>
                          </v-card-text>
                        </v-card>
                      </v-container>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row
                  dense
                >
                  <v-col
                    cols="12"
                  >
                    <search-add
                      :search-list="searchList"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <base-card>
              <v-card-text>
                <v-simple-table fixed-header>
                  <thead>
                    <tr>
                      <th
                        class="text-left"
                        style="max-width:20px"
                      >
                        순번
                      </th>
                      <th class="text-center">
                        소속<br/>대리점
                      </th>
                      <th class="text-center">
                        상호
                      </th>
                      <th
                        class="text-right"
                        style="max-width:20px"
                      >
                        대표자
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4">
                        <v-expansion-panels
                          flat
                          class="mx-0"
                        >
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              hide-actions
                              class="text-caption mx-0 "
                            >
                              <v-row no-gutters>
                                <v-col cols="2">
                                  1
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  알파플러스대리점
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  시그마대리점1
                                </v-col>
                                <v-col
                                  cols="2"
                                  class="text-right"
                                >
                                  5
                                </v-col>
                              </v-row>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <base-card class="mb-3">
                                <v-card-text>
                                  <div class="mt-3">
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        등록일
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        2022/01/02 14:00:01
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        모집대리점
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        오메가대리점2
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        대표자명
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        AVB
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        주소
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 text-sm-caption"
                                      >
                                        서울시 중구 디지털로222 벽산아이티센터5차1200호
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        연락처
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        02-xxxx-xxxxx
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        이메일
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        aaaa@egmail.com
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        게좌
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        111111-025-5547897
                                      </p>
                                    </div>
                                  </div>
                                </v-card-text>
                              </base-card>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-expansion-panel>
                            <v-expansion-panel-header
                              hide-actions
                              class="text-caption mx-0 "
                            >
                              <v-row no-gutters>
                                <v-col cols="2">
                                  2
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  알파플러스대리점
                                </v-col>
                                <v-col
                                  cols="4"
                                  class="text-center"
                                >
                                  시그마대리점1
                                </v-col>
                                <v-col
                                  cols="2"
                                  class="text-right"
                                >
                                  5
                                </v-col>
                              </v-row>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <base-card class="mb-3">
                                <v-card-text>
                                  <div class="mt-3">
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        등록일
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        2022/01/02 14:00:01
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        모집대리점
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        오메가대리점2
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        대표자명
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        AVB
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        주소
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 text-sm-caption"
                                      >
                                        서울시 중구 디지털로222 벽산아이티센터5차1200호
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        연락처
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        02-xxxx-xxxxx
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        이메일
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15 "
                                      >
                                        aaaa@egmail.com
                                      </p>
                                    </div>
                                    <div
                                      class="d-flex justify-space-between"
                                    >
                                      <p
                                        class="text--disabled mb-1 text-15 mr-2"
                                        style="min-width: 100px"
                                      >
                                        게좌
                                      </p>
                                      <p
                                        class="text-success mb-1 text-15"
                                      >
                                        111111-025-5547897
                                      </p>
                                    </div>
                                  </div>
                                </v-card-text>
                              </base-card>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </td>
                    </tr>
                    <tr>
                      <td
                        colspan="4"
                        class="text-right"
                      >
                        10 개
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </base-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            lg="6"
            xl="4"
          >
            <v-container class="max-width">
              <v-pagination
                v-model="current"
                class="my-4"
                :length="paginate_total"
              />
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import SearchAdd from '@/components/base/SearchAdd'
  export default {
    name: 'Franchise',
    components: {
      SearchAdd,
    },
    data: () => ({
      selectedMenu: '지사가맹점리스트',
      current: 1,
      paginate: 5,
      paginate_total: 10,
      dates: ['2022-04-01', '2022-04-20'],
      menuTwo: false,
      searchList: [
        {
          text: '대리점',
          value: 'agency',
          disabled: false,
        },
        {
          text: '아이디',
          value: 'ID',
          disabled: false,
        },
        {
          text: '대표자명',
          value: 'name',
          disabled: false,
        },
      ],
      dropdown_edit: [
        { text: '가맹점리스트' },
        { text: '대리점가맹점리스트' },
      ],
    }),
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
    methods: {},
  }
</script>

<style scoped>

</style>
