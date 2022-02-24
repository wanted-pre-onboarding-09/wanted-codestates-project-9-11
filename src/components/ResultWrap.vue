<template id="ResultWrap">
  <div class="result">
    <p>MY RESULT</p>
    <p>나의 결과는?</p>
  </div>
  <ul v-for="(score, index) in userParsing" :key="index">
    <div :class="{ active: score[1] > 4 }" class="stick">
      <li>
        <span>{{ score[1] }}</span> /10
      </li>
      <li>{{ listData[index][0] }}</li>
    </div>
    <div class="chart">차트</div>
    <div :class="{ active: !(score[1] > 4) }" class="stick">
      <li>
        <span>{{ 10 - score[1] }}</span> /10
      </li>
      <li>{{ listData[index][1] }}</li>
    </div>
  </ul>
</template>

<script>
import mock from "../mock/index";

const { user } = mock;
const userParsing = Object.entries(user);

export default {
  name: "ResultWrap",
  methods: {},
  data() {
    return {
      userParsing,
      listData: [
        ["적극성", "수동성"],
        ["자신감", "신중함"],
        ["책임감", "무심함"],
        ["개인 성향", "조직 성향"],
        ["수평사고", "위계사고"],
      ],
    };
  },
};
</script>

<style scoped>
ul {
  font-size: 12px;
  width: 100%;
  display: flex;
  margin-bottom: 15px;
}
.active {
  color: #00cc66;
  font-weight: bold;
  font-size: 12px;
}
.stick {
  width: 28%;
  justify-content: space-between;
}

.chart {
  width: 44%;
  text-align: center;
}

.stick {
  display: flex;
}

p {
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
}

.result p:first-child {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 7px;
}
.result p:last-child {
  font-size: 30px;

  margin-bottom: 20px;
}
</style>
