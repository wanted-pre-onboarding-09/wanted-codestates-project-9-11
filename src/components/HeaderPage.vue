<template>
  <div class="header">
    <div class="wrapper">
      <i class="fas fa-solid fa-arrow-left"></i>
      <div class="title">진단결과</div>
    </div>
    <div class="reset" @click="onReset">다시 진단하기</div>
  </div>
</template>

<script>
export default {
  data() {
    //개인 진단 점수가져오고 비교기업 null로 세팅
  },
  methods: {
    onReset: function () {
      //데이터를 차트로 넘기기
    }
  }
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  padding: 16px 19px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  line-height: 34px;
  white-space: nowrap;
  border-bottom: solid 1px #f8f8f8;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex: 2;
  line-height: 34px;
  color: #121212;
}

i {
  border: solid 2px #121212;
  border-radius: 50%;
  padding: 0.4em;
}

.title {
  margin-left: 12px;
  font-weight: 700;
  font-size: 24px;
  height: 34px;
}

.reset {
  font-size: 16px;
  color: #6e3cf9;
  cursor: pointer;
}
</style>
