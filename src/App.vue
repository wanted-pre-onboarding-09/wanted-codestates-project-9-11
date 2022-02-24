<template>
  <main>
    <section class="wrap">
      <ResultWrap />
    </section>
  </main>
</template>

<script>
import ResultWrap from "./components/ResultWrap.vue";
import mock from "./mock/index";

export default {
  name: "App",
  components: {
    ResultWrap,
  },
  data() {
    return {
      mock,
    };
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
