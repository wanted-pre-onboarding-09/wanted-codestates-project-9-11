<template id="ResultWrap">
  <div class="result">
    <p>MY RESULT</p>
    <p>나의 결과는?</p>
  </div>

  <section>
    <template v-for="i in list" :key="i">
      <template v-if="i === 1">
        <ul>
          <template v-for="(score, index) in userParsing" :key="index">
            <li :class="{ active: score > 4 }" class="stick">
              <span class="tall">{{ score }}</span> /10
              <span>{{ listData[index][0] }}</span>
            </li>
          </template>
        </ul>
      </template>
      <template v-else-if="i === 2">
        <ul class="chart">
          <HorizontalBar :users="userParsing" :companies="[8, 10, 6, 4, 7]" />
        </ul>
      </template>

      <template v-else>
        <ul>
          <template v-for="(score, index) in userParsing" :key="index">
            <li :class="{ active: !(score > 4) }" class="stick">
              <span class="tall">{{ 10 - score }}</span> /10
              <span>{{ listData[index][1] }}</span>
            </li>
          </template>
        </ul>
      </template>
    </template>
  </section>
</template>

<script>
import HorizontalBar from "./HorizontalBar.vue";

export default {
  name: "ResultWrap",
  methods: {},
  components: {
    HorizontalBar,
  },
  props: {
    selectUser: Object,
    selectCompany: Object,
    selectTabIndex: Number,
  },

  data() {
    console.log("hi");

    const userParsing = Object.values(this.selectUser);
    const companyParsing = this.selectCompany.score
      ? Object.values(this.selectCompany.score)
      : [];

    const tabIndex = this.selectTabIndex;
    return {
      userParsing,
      companyParsing,
      tabIndex,
      listData: [
        ["적극성", "수동성"],
        ["자신감", "신중함"],
        ["책임감", "무심함"],
        ["개인 성향", "조직 성향"],
        ["수평사고", "위계사고"],
      ],
      list: [1, 2, 3],
    };
  },
  watch: {
    selectCompany() {
      this.companyParsing = this.selectCompany.score
        ? Object.values(this.selectCompany.score)
        : [];
    },
    selectTabIndex() {
      this.tabIndex = this.selectTabIndex;
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
}
ul {
  width: 28%;
  font-size: 12px;
  margin-bottom: 15px;
}
li {
  margin-bottom: 15px;
}
.tall {
  font-size: 14px;
}
/* ul {
  font-size: 12px;
  width: 100%;
  display: flex;
  margin-bottom: 15px;
} */
.active {
  color: #00cc66;
  font-weight: bold;
  font-size: 12px;
}

.chart {
  width: 44%;
  text-align: center;
}

/* 
.stick {
  display: flex;
} */

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
