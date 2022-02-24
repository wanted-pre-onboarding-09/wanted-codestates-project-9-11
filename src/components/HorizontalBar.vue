<template>
  <BarChart ref="barRef" :chartData="testData" :options="options" />
</template>

<script>
import { defineComponent } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref } from "vue";

Chart.register(...registerables);

export default defineComponent({
  name: "HorizontalBar",
  components: { BarChart },
  setup() {
    const barRef = ref();
    const options = ref({
      responsive: true,
      maintainerAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: {
          display: false,
        },
      },
    });
    const testData = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "one",
          data: [-2, -4, -6, 4, -5],

          barThickness: 6,
          backgroundColor: "#6E3CF9",
        },
        {
          label: "two",
          data: [-8, -6, -4, 6, -5],
          barThickness: 6,
          backgroundColor: "#FFC24A",
        },
      ],
    };

    return { testData, options, barRef };
  },
});
</script>
