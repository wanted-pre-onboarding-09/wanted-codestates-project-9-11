<template>
  <div class="tab_group">
    <button 
      :key="idx" 
      v-for="(tab, idx) in tabs"
      v-bind:class="{active: currentTab === idx}"
      v-on:click="changeIndex(idx)"
    >
      <img :src="tab.img">
      <span class="tab-title">{{tab.text}}</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'TabSection',
    methods: {
      changeIndex(id) {
        this.currentTab = id;
        this.$emit("tabIndex", this.currentTab)
      }
    },
    data() {
      return {
        currentTab: 0,
        tabs: [
          {
            text: '모두',
            img: require("../assets/all.png")
          },
          {
            text: '본인',
            img: require("../assets/me.png")
          },
          {
            text: '회사',
            img: require("../assets/corp.png")
          }
        ]
      }
    }
  }
</script>

<style>
.tab_group {
  margin: 10px 0 40px 0px;
  display: flex;
  flex-direction: row;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  background: #f2f2f2;
}
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  border: 0;
  background: #f2f2f2;
  flex-grow: 1;
}

img {
  width: 14px;
}

button.active {
  background-color: white;
  color: black;
  
}
.tab-title {
  height: 14px;
  margin-left: 6px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #121212;
}
</style>