<template id="ResultWrap">
  <div class="result">
    <p>MY RESULT</p>
    <p>나의 결과는?</p>
  </div>
  <ul v-for="(score, index) in userParsing" :key="index">
    <div :class="{ active: score > 4 }" class="stick">
      <li>
        <span>{{ score }}</span> /10
      </li>
      <li>{{ listData[index][0] }}</li>
    </div>
    <div class="chart">{{ [score, companyParsing[index]] }}</div>
    <div :class="{ active: !(score > 4) }" class="stick">
      <li>
        <span>{{ 10 - score }}</span> /10
      </li>
      <li>{{ listData[index][1] }}</li>
    </div>
  </ul>
</template>

<script>
export default {
  name: "ResultWrap",
  methods: {},
  props: {
    selectUser: Object,
    selectCompany: Object,
  },
  data() {
    const userParsing = Object.values(this.selectUser);
    const companyParsing = Object.values(this.selectCompany);
    console.log(userParsing, companyParsing);
    return {
      userParsing,
      companyParsing,
      listData: [
        ["적극성", "수동성"],
        ["자신감", "신중함"],
        ["책임감", "무심함"],
        ["개인 성향", "조직 성향"],
        ["수평사고", "위계사고"],
      ],
    };
  },
  // created: function () {
  //   console.log(this.company.samsung.score);
  // },
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
