<template>
  <div class="searchBar">
    <SearchModal v-if="modalOpen == true" v-on:click="modalClose" />
    <div class="topBar">
      <div class="searchResult">
        검색 결과
        <i class="fas fa-solid fa-angle-right"></i>
      </div>
      <div class="resultContainer">
        <div class="searchCompany">{{ inputVal.name }}</div>

        <span
          v-on:click="deleteBtn"
          v-if="deletBtnOpen == true"
          class="deleteBtn"
        ></span>
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
    inputVal: Object,
    setInputVal: Function,
    companies: Object,
  },
  data() {
    return {
      modalOpen: false,
      deletBtnOpen: false,
    };
  },

  methods: {
    submit(event) {
      if (
        this.companies.filter((item) => item.name === event.target.value)
          .length === 0
      ) {
        this.modalOpen = true;
      } else {
        this.setInputVal(event.target.value);
        this.deletBtnOpen = true;
      }

      event.target.value = '';
    },

    deleteBtn() {
      this.setInputVal('');
      this.deletBtnOpen = false;
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
  margin: 20px 16px;
  line-height: 22px;
}
.searchResult {
  font-weight: bold;
  margin-right: 30px;
  font-size: 16px;
  color: #727272;
}
.searchResult i {
  border: none;
}

.searchCompany {
  text-align: right;
  color: #727272;
  font-size: 14px;
  display: flex;
  flex-direction: row;
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
  width: 328px;
  height: 48px;
  padding: 14px 16px;
  margin-bottom: 20px;
  border: 1px solid #f2f2f2;
  background-color: #f8f8f8;
  border-radius: 4px;
}
</style>
