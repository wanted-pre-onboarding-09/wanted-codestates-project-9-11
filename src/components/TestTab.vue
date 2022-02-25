<template>
  <div id="test">
    {{tabIdx}}
  </div>
</template>

<script>
  export default {
    props: {
      tabIndex: {
        type: Number
      }
    },
    data() {
      return {
        tabIdx: 0
      }
    }
  }
</script>

<style>

</style>