<template>
  <BarChart ref="barRef" :chartData="testData" :options="options" />
</template>

<script>
import { defineComponent, ref } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  props: {
    users: Object,
    companies: Object,
  },
  name: "HorizontalBar",
  components: { BarChart },
  data() {
    const barRef = ref();
    const options = ref({
      responsive: true,
      maintainerAspectRatio: false,
      indexAxis: "y",
      scales: {
        y: {
          ticks: {
            display: false,
          },
          grid: {
            borderColor: "white",
            display: false,
          },
        },
        x: {
          min: -10,
          max: 10,
          ticks: {
            display: false,
          },
          grid: {
            borderColor: "white",
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    });

    const getUser = (users) => {
      let usersData = Object.values(users);
      usersData = usersData.map((user) => {
        if (user > 5) {
          return user * -1;
        } else {
          return user;
        }
      });
      return usersData;
    };

    const getCompany = (users, companies) => {
      let companiesData = [0, 0, 0, 0, 0];
      let usersData = Object.values(users);
      for (let i = 0; i < 5; i++) {
        if (usersData[i] > 5) {
          companiesData[i] = companies[i] * -1;
        } else {
          companiesData[i] = companies[i];
        }
      }
      return companiesData;
    };

    const testData = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "one",
          data: getUser(this.users),
          barThickness: 6,
          backgroundColor: "#6E3CF9",
        },
        {
          label: "two",
          data: getCompany(this.users, this.companies),
          barThickness: 6,
          backgroundColor: "#FFC24A",
        },
      ],
    };
    return { testData, options, barRef };
  },
  watch: {
    companies() {
      this.barRef = ref();
      this.options = ref({
        responsive: true,
        maintainerAspectRatio: false,
        indexAxis: "y",
        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              borderColor: "white",
              display: false,
            },
          },
          x: {
            min: -10,
            max: 10,
            ticks: {
              display: false,
            },
            grid: {
              borderColor: "white",
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      });

      const getUser = (users) => {
        let usersData = Object.values(users);
        usersData = usersData.map((user) => {
          if (user > 5) {
            return user * -1;
          } else {
            return user;
          }
        });
        return usersData;
      };

      const getCompany = (users, companies) => {
        let companiesData = [0, 0, 0, 0, 0];
        let usersData = Object.values(users);
        for (let i = 0; i < 5; i++) {
          if (usersData[i] > 5) {
            companiesData[i] = companies[i] * -1;
          } else {
            companiesData[i] = companies[i];
          }
        }
        return companiesData;
      };

      const testData = {
        labels: ["", "", "", "", ""],
        datasets: [
          {
            label: "one",
            data: getUser(this.users),
            barThickness: 6,
            backgroundColor: "#6E3CF9",
          },
          {
            label: "two",
            data: getCompany(this.users, this.companies),
            barThickness: 6,
            backgroundColor: "#FFC24A",
          },
        ],
      };
      this.testData = testData;
    },
  },
});
</script>
