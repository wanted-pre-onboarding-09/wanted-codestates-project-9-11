<template>
  <div class="tab_group">
    <button 
      :key="idx" 
      v-for="(tab, idx) in tabs"
      v-bind:class="{active: currentTab === idx}"
      v-on:click="currentTab = idx"
    >
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABtklEQVRoge2ZzS5DQRiGH4REQpCgbdhLtFhwGSIR3IBLEfcgSFwBNtyAnx1LtbDxT2vlZyFRLYuppD5zmunpOT2T+J5kkn6Tmen7nnammbegKIqiKOFpcxyXAeaAcSAFtMemyFAGnoA8sAc8NrvgMLAJfAJfCbUSsAEMhTUxAVwnaEC2KyDXqIkMcOuBeNkegBGb4KA9sgvMi75XzPf1zuVJRMAoZl/2iv4dYNFlgSmgwu8ncYDZL60mBRwJLRVg0mXyKn8/zr5YZLrRDxSEphU5yHaMTot6C3iJWl0DPFc11DIjB9mMpEV9HpWiJsiLWmq0GukUdSkyOeH5EHWXHBD3L3TLUCO+oUZ8Q434hhrxDTXiG2rEN9SIb9iMyPuHvJ8kgbx/yPuJ1UhB1NnI5IRH5llSo9XIqaiXMQFAUgxUNdRy4jLRFgcdYqKZVpMGjnGIg4ICum1gQfS9AfvABfAeldIAuoExYBbosWhbcl0oDdyQfEQq2z0BkWk9cpjgOGnxP+2SJg6eIWAdcyQnZaAErAGD9YS6/tGTwgTK2errDsd5YSkDReAME5wXY34/RVEU5Z/zDUuOFj4+ZLNSAAAAAElFTkSuQmCC">
      <span class="tab-title">{{tab}}</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'TabSection',
    data() {
      return {
        currentTab: 0,
        tabs: [
          '모두',
          '본인',
          '회사'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.tab_group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 360px;
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
  > img {
    width: 14px;
  }
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
  text-align: center;
}
</style>