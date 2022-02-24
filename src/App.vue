<template>
  <main>
    <HeaderPage />
    <section class="wrap">
      <SearchBar :company="company" :setCompany="setCompany" />
      <PentagonChart />
      <TabSection @tabIndex="setTabIndex"/>
      <ResultWrap :setTabIndex="tabIndex" :selectUser="user" :selectCompany="score" />
    </section>
  </main>
</template>

<script>
import PentagonChart from "./components/chart/PentagonChart.vue";
import SearchBar from "./components/SearchBar.vue";
import TabSection from "./components/TabSection.vue"
import HeaderPage from "./components/HeaderPage.vue";
import ResultWrap from "./components/ResultWrap.vue";
import { user } from "./mock/index";

export default {
  name: "App",
  components: {
    PentagonChart,
    ResultWrap,
    SearchBar,
    TabSection,
    HeaderPage,
  },
  data() {
    return {
      user,
      tabIndex: 0,
      company: "",
      score: {
        aggressive: 10,
        confident: 9,
        responsible: 9,
        indivisual: 5,
        horizontal: 3,
      },
    };
  },
  methods: {
    setCompany(value) {
      this.company = value;
      console.log(value);
    },
    setTabIndex(tabIndex) {
      this.tabIndex = tabIndex; // tabIndex 0 = '모두', 1 = '본인', 2 = '회사'
      console.log(tabIndex)
    }
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
