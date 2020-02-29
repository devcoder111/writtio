<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="graph-head__title">
          <p class="graph-head__p">Number of visitors by blog</p>
          <p class="graph-head__p"></p>
        </div>
        <column-chart
          :data="columnChartData1"
          :options="options1"
          :theme="chartTheme1"
        />
      </el-col>
    </el-row>
    <el-row>
      <div class="graph-head__title">
        <p class="graph-head__p">Number of posts viewed per visitor</p>
        <p class="graph-head__p">Average: 20 per visitor</p>
      </div>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <column-chart
          :data="columnChartData2"
          :options="options2"
          :theme="chartTheme2"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="graph-head__title">
          <p class="graph-head__p">Number of posts viewed per session</p>
          <p class="graph-head__p">Average: 20 per visitor</p>
        </div>
        <column-chart
          :data="columnChartData3"
          :options="options3"
          :theme="chartTheme3"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script src="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.js"></script>
<script>
import ".././../../../../node_modules/tui-chart/dist/tui-chart.css";
import { columnChart } from "@toast-ui/vue-chart";
export default {
  components: {
    columnChart
  },
  data() {
    return {
      chartTheme1: {
        series: {
          colors: ["#fdd32a"]
        }
      },
      chartTheme2: {
        series: {
          colors: ["#7480ff"]
        }
      },
      chartTheme3: {
        series: {
          colors: ["#69c9d6"]
        }
      },
      columnChartData1: {
        categories: [
          "NOV 15",
          "NOV 16",
          "NOV 17",
          "NOV 18",
          "NOV 19",
          "NOV 20",
          "NOV 21"
        ],
        series: [
          {
            name: "Number of visitors",
            data: [300, 200, 420, 300, 200, 420, 510]
          }
        ]
      },
      columnChartData2: {
        categories: [
          "NOV 15",
          "NOV 16",
          "NOV 17",
          "NOV 18",
          "NOV 19",
          "NOV 20",
          "NOV 21"
        ],
        series: [
          {
            name: "Number of posts",
            data: [15, 22, 18, 25, 19, 7, 11]
          },
          {
            name: "Number of posts",
            data: [23, 25, 16, 8, 22, 18, 20]
          },
          {
            name: "Number of posts",
            data: [20, 18, 25, 18, 9, 24, 17]
          }
        ]
      },
      columnChartData3: {
        categories: [
          "NOV 15",
          "NOV 16",
          "NOV 17",
          "NOV 18",
          "NOV 19",
          "NOV 20",
          "NOV 21"
        ],
        series: [
          {
            name: "Number of posts",
            data: [15, 22, 18, 25, 19, 7, 11]
          },
          {
            name: "Number of posts",
            data: [23, 25, 16, 8, 22, 18, 20]
          },
          {
            name: "Number of posts",
            data: [20, 18, 25, 18, 9, 24, 17]
          }
        ]
      },

      options1: {
        chart: {
          width: 1090,
          height: 350,
          // title: "Number of visitors By blog",
          format: "1,000"
        },
        legend: {
          visible: false
        },
        chartExportMenu: {
          visible: false
        },
        xAxis: {
          // title: "Amount",
          title: "",
          min: 0,
          max: 500
        }
      },
      options2: {
        chart: {
          width: 1090,
          height: 350,
          // title: "Number of Posts viewed per visitor",
          format: "1,000"
        },
        legend: {
          visible: false
        },
        chartExportMenu: {
          visible: false
        },
        xAxis: {
          // title: "Amount",
          title: "",
          min: 0,
          max: 30
        }
      },
      options3: {
        chart: {
          width: 1090,
          height: 350,
          // title: "Number of Posts viewed per session",
          format: "1,000"
        },
        legend: {
          visible: false
        },
        chartExportMenu: {
          visible: false
        },
        xAxis: {
          // title: "Amount",
          title: "",
          min: 0,
          max: 30
        }
      }
    };
  }
};
</script>
<style lang="scss">
.graph-head__title {
  display: flex;
  justify-content: space-between;
  padding-right: 5%;
}
.graph-head__p {
  color: #666;
  margin-top: 5%;
  margin-bottom: 0;
}
</style>
