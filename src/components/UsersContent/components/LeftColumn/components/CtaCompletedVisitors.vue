<template>
  <div class="left-card-card">
    <el-row class="block__general block-graph">
      <el-col :xs="18" :sm="18" :md="24" :lg="24" :xl="24" class="usersPie">
        <div class="card-title">
          <h1>Visitiors who completed a CTA</h1>
        </div>
        <pie-chart
          :data="dataPie"
          :options="optionsPie"
          :theme="chartPieTheme1"
        />
      </el-col>
      <div class="block-general__cont-wrap">
        <div class="block-general__cont">
          <p class="p-col col-1"></p>
          <p class="par__general">Returning Visitors</p>
        </div>
        <div class="block-general__cont align-end">
          <p class="per-value-b">36%</p>
          <p class="p-value value-s">680</p>
        </div>
      </div>
      <div class="block-general__cont-wrap">
        <div class="block-general__cont">
          <p class="p-col col-2"></p>
          <p class="par__general">Returning Visitors</p>
        </div>
        <div class="block-general__cont align-end">
          <p class="per-value-b">64%</p>
          <p class="p-value value-b">1240</p>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
import { columnChart, pieChart } from "@toast-ui/vue-chart";
export default {
  components: {
    "pie-chart": pieChart
  },
  data() {
    return {
      chartPieTheme1: {
        series: {
          colors: ["#7480ff", "#69c9d6"]
        }
      },
      dataPie: {
        categories: [""],
        series: [
          {
            name: "Chrome",
            data: 46.02
          },
          {
            name: "IE",
            data: 20.47
          }
        ]
      },
      optionsPie: {
        chartExportMenu: {
          visible: false
        },
        legend: {
          visible: false
        },
        chart: {
          width: 250,
          height: 200,
          // title: "Usage share of web browsers"
          title: ""
        },
        series: {
          startAngle: -90,
          endAngle: 90,
          radiusRange: ["60%", "100%"]
        }
      }
    };
  }
};
</script>
<style lang="scss">
.block-general__cont-wrap {
  margin-bottom: 21px;
}
.block-general__cont {
  display: flex;
  align-items: center;
}
.block-general__cont.align-end {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.per-value-b {
  font-size: 34px;
  color: #666;
  margin: 0 12px 0 0;
  font-weight: bold;
}
.p-col {
  width: 18px;
  height: 18px;
  margin: 0 15px 0 0;
}
.col-1 {
  background-color: #7480ff;
}
.col-2 {
  background-color: #69c9d6;
}
.p-value {
  font-weight: bolder;
  font-size: 22px;
  margin: 0;
}
.value-b {
  color: #69c9d6;
}
.value-s {
  color: #7480ff;
}
.par__general,
.par__large {
  margin: 0;
}
.par__general {
  font-size: 16px;
  color: #666;
}
.placeholder-image {
  max-width: -webkit-fill-available;
}
.block__general {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
}

.usersPie .tui-chart.tui-pie-chart svg:first-of-type rect {
  fill-opacity: 0 !important;
}
.usersPie .tui-chart.tui-pie-chart {
  margin: 0 auto;
}
</style>
