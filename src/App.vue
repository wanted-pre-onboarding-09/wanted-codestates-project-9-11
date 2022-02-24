<template>
  <main>
    <HeaderPage />
    <section class="wrap">
      <SearchBar :company="company" :setCompany="setCompany" />
      <ResultWrap />
    </section>
  </main>
</template>

<script>

import SearchBar from './components/SearchBar.vue';

import HeaderPage from './components/HeaderPage.vue';
import ResultWrap from './components/ResultWrap.vue';

import mock from './mock/index';

export default {
  name: 'App',
  components: {
    ResultWrap,
    SearchBar,
  },
  data() {
    return {
      mock,
      company: '',
    };
  },
  methods: {
    setCompany(value) {
      this.company = value;
      console.log(value);
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
