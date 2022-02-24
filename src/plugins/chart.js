import { Chart, Legend, Title, Tooltip } from "chart.js";

Chart.register(Legend, Title, Tooltip);

Chart.defaults.plugins.title.display = false;

Chart.defaults.borderColor = "white";

Chart.defaults.border = null;
