<template>
  <main>
    <HeaderPage />
    <section class="wrap">
      <SearchBar
        :inputVal="inputVal"
        :setInputVal="setInputVal"
        :companies="companies"
      />
      <PentagonChart :chartValue="chartData" />
      <TabSection @tabIndex="setTabIndex" />
      <ResultWrap
        :selectTabIndex="tabIndex"
        :selectUser="user"
        :selectCompany="inputVal"
      />
      <!-- <PentagonChart />
      <TabSection />
      <ResultWrap :selectUser="user" :selectCompany="inputVal" /> -->
      <!-- <div>{{ this.inputVal }}</div> -->
    </section>
  </main>
</template>

<script>
import PentagonChart from "./components/chart/PentagonChart.vue";
import SearchBar from "./components/SearchBar.vue";
import TabSection from "./components/TabSection.vue";
import HeaderPage from "./components/HeaderPage.vue";
import ResultWrap from "./components/ResultWrap.vue";
import { user, company } from "./mock/index";

// import PentagonChart from "./components/chart/PentagonChart.vue";
// import SearchBar from "./components/SearchBar.vue";
// import TabSection from "./components/TabSection.vue";
// import HeaderPage from "./components/HeaderPage.vue";
// import ResultWrap from "./components/ResultWrap.vue";
// import { user } from "./mock/index";
// import { company } from "./mock/index.js";
// import { ref } from "vue";

export default {
  name: "App",
  components: {
    PentagonChart,
    ResultWrap,
    SearchBar,
    TabSection,
    HeaderPage,
  },

  // setup() {
  //   const inputVal = ref({});
  //   console.log(inputVal, "");
  //   return inputVal;
  // },

  data() {
    console.log();
    return {
      user,
      company: "",
      tabIndex: 0,
      score: {
        aggressive: 10,
        confident: 9,
        responsible: 9,
        indivisual: 5,
        horizontal: 3,
      },
      chartData: {
        user,
        company: null,
      },
      inputVal: {},
      companies: company,
    };
  },
  methods: {
    setInputVal(value) {
      if (value === "") {
        this.inputVal = {};
      } else {
        let filtering = this.companies.filter((item) => item.name === value);
        this.inputVal = { ...this.inputVal, ...filtering[0] };
      }
    },
    setTabIndex(tabIndex) {
      this.tabIndex = tabIndex; // tabIndex 0 = '모두', 1 = '본인', 2 = '회사'
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.wrap {
  width: 360px;
  height: 100vh;
  padding: 15px;
  background-color: #fff;
}
</style>
