<template>
  <div class="radar-wrapper">
    <!-- <img src="../../assets/cat.png" alt="cat" class="thumb" /> -->
    <RadarChart
      ref="pentagonRef"
      :chartData="chartData"
      :options="options"
      :plugins="[plugin]"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { RadarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const image = new Image();
image.src = 'https://i.ibb.co/dK7Pmqk/cat.png';
image.width = '34px';
image.height = '34px';
image.style.zIndex = 10;
image.style.backgroundColor = 'white';

export default defineComponent({
  name: 'PentagonChart',
  components: { RadarChart },
  props: {
    chartValue: Object,
  },
  setup(props) {
    const pentagonRef = ref();
    const chartData = {
      labels: [
        ['적극적인', 'Aggressive', ''],
        ['  자신있는', 'Confident', ''],
        ['', '    책임있는', 'Responsible'],
        ['', '개인주의  ', 'Indivisual'],
        ['수평적인   ', 'Horizontal', ''],
      ],
      datasets: [
        {
          label: 'user',
          backgroundColor: 'rgba(110, 60, 249, 0.32)',
          borderColor: '#6E3CF9',
          borderWidth: 2,
          borderRadius: 1,
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointRadius: 0,
          pointHitRadius: 0,
          order: 1,
          data: props.chartValue ? Object.values(props.chartValue.user) : null,
        },
        {
          label: 'company',
          backgroundColor: 'rgba(255, 193, 74, 0.32)',
          borderColor: '#FFD335',
          borderWidth: 2,
          borderRadius: 1,
          pointRadius: 0,
          pointHitRadius: 0,
          order: 1,
          data: props.chartValue.company
            ? Object.values(props.chartValue.company)
            : null,
        },
        {
          label: 'common',
          backgroundColor: 'rgba(244, 244, 244, 0.32)',
          borderColor: '#B2B2B2',
          borderWidth: 1,
          pointBackgroundColor: [
            'rgba(237, 168, 154, 0.7)',
            'rgba(182, 197, 248, 0.7)',
            'rgba(164, 214, 227, 0.7)',
            'rgba(238, 184, 207, 0.7)',
            'rgba(183, 220, 171, 0.7)',
          ],
          pointBorderColor: [
            '#EDA89A',
            '#B6C5F8',
            '#A4D6E3',
            '#EEB8CF',
            '#B7DCAB',
          ],
          pointRadius: 16,
          pointHitRadius: -16,
          order: 0,
          data: [10, 10, 10, 10, 10],
        },
      ],
    };
    const options = ref({
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 20,
      },
      scale: {
        ticks: {
          max: 10,
          min: 0,
          stepSize: 2.5,
          display: false,
        },
        gridLines: {
          borderDash: [5, 5],
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    });

    const plugin = {
      id: 'custom_canvas_background_image',
      beforeDraw: (chart) => {
        if (image.complete) {
          const ctx = chart.ctx;
          const { width, height } = chart.chartArea;
          const x = width / 2 - 5 - image.width / 2;
          const y = height / 2 + 7 - image.height / 2;
          ctx.drawImage(image, x, y);
        } else {
          image.onload = () => chart.draw();
        }
      },
    };

    return { plugin, options, chartData, pentagonRef };
  },
});
</script>
