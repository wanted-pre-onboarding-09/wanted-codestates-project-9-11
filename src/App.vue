<template>
  <div id="app">
    <div class="tab_wrapper">
      MY RESULT<br>
      <h2>나의 결과는 ?</h2>
    </div>
    <TabSection />
  </div>
</template>

<script>
import TabSection from "./components/TabSection.vue";

export default {
  name: 'App',
  components: {
    TabSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
