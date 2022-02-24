<template>
  <div class="searchBar">
    <SearchModal v-if="modalOpen == true" v-on:click="modalClose" />
    <div class="topBar">
      <div class="searchResult">
        검색 결과 <i class="fas fa-solid fa-angle-right"></i>
      </div>
      <div class="resultContainer">
        <div class="searchCompany">{{ company }}</div>
        <div v-on:click="deleteBtn" class="deleteBtn"></div>
      </div>
    </div>
    <div class="inputContainer">
      <input
        class="inputBox"
        type="text"
        v-on:keyup.enter="submit"
        placeholder="기업명을 입력하세요"
      />
    </div>
  </div>
</template>

<script>
import SearchModal from './SearchBarModal.vue';
export default {
  components: {
    SearchModal,
  },
  props: {
    company: String,
    setCompany: Function,
  },
  data() {
    return {
      dummy: '그레이비랩',
      modalOpen: false,
    };
  },

  methods: {
    submit(event) {
      if (event.target.value === this.dummy) {
        this.setCompany(event.target.value);
      } else {
        this.modalOpen = true;
      }

      event.target.value = '';
    },

    deleteBtn() {
      this.setCompany('');
    },
    modalClose() {
      this.modalOpen = false;
    },
  },
};
</script>

<style>
.searchBar {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.topBar {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 0;
}
.searchResult {
  font-weight: bold;
  margin-right: 30px;
  font-size: 20px;
  color: #727272;
}
.searchCompany {
  width: 100px;
  text-align: right;
  color: #727272;
}
.resultContainer {
  display: flex;
  justify-content: flex-end;
}
.deleteBtn {
  margin: 0 15px;
}
.deleteBtn:before {
  font-family: 'FontAwesome';
  content: '\f057';
}

.inputContainer {
  text-align: center;
}

.inputBox {
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  border: 1px solid #f2f2f2;
  background-color: #f8f8f8;
  border-radius: 4px;
}
</style>
