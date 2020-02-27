<template>
  <div>
    <div class="performance-chart">
      <div class="performance-chart__values-wrapper">
        <div class="performance-chart__values-area">
          <el-row class="block__general values-gen">
            <p class="par__general">Unique blog visitiors</p>
            <p class="par__large">29,954</p>
            <div class="performance-chart__buttons-section">
              <el-button>Past 7 days</el-button>
              <el-button>Past 30 days</el-button>
            </div>
          </el-row>
          <el-row class="block__general block-graph">
            <el-col :xs="18" :sm="18" :md="24" :lg="24" :xl="24">
              <p class="par__general bl-gen">Visitiors who completed a CTA</p>
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
          <el-row class="block__general bl-vls">
            <p class="par__general par-ave">
              Average posts read or skimmed by visitors before completing a CTA
            </p>
            <div class="performance-chart__val-area">
              <div class="num__sect">
                <p class="par__general">Low:</p>
                <p class="per-value-b">1</p>
              </div>
              <div class="j-stripe"></div>
              <div class="num__sect">
                <p class="par__general">High:</p>
                <p class="per-value-b">19</p>
              </div>
            </div>
          </el-row>
          <el-row class="block__general bl-vls">
            <p class="par__general par-ave">
              Top posts that led to return visits
            </p>
            <div class="performance-chart__visits-wrap">
              <div class="performance-chart__visits">
                <p class="par__general">Sample Title:</p>
                <div>
                  <p class="visits-part">%95</p>
                  <p class="visits-icon">
                    <img src="../../assets/11.png" alt="" />
                  </p>
                </div>
              </div>
              <div class="performance-chart__visits">
                <p class="par__general">Sample Title:</p>
                <div>
                  <p class="visits-part">%85</p>
                  <p class="visits-icon">
                    <img src="../../assets/11.png" alt="" />
                  </p>
                </div>
              </div>
              <div class="performance-chart__visits">
                <p class="par__general">Sample Title:</p>
                <div>
                  <p class="visits-part">%80</p>
                  <p class="visits-icon">
                    <img src="../../assets/11.png" alt="" />
                  </p>
                </div>
              </div>
            </div>
          </el-row>
        </div>
        <div class="performance-chart__graphs-area">
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="graph-head__title">
                <p class="graph-head__p">Number of visitors by blog</p>
                <p class="graph-head__p"></p>
              </div>
              <column-chart
                :data="colChartData1"
                :options="colChartOption1"
                :theme="chartTheme1"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="graph-head__title">
                <p class="graph-head__p">Number of posts viewed per visitor</p>
                <p class="graph-head__p">Average: 20 per visitor</p>
              </div>
              <column-chart
                :data="colChartData2"
                :options="colChartOption2"
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
                :data="colChartData3"
                :options="colChartOption3"
                :theme="chartTheme3"
              />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%; background-color: #f8f8f8">
      <el-table-column
        prop="visitorid"
        label="Visitor ID"
        width="145"
      ></el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        width="145"
      ></el-table-column>
      <el-table-column
        prop="location"
        label="Location"
        width="145"
      ></el-table-column>
      <el-table-column
        prop="sessions"
        label="# of sessions (30 days)"
      ></el-table-column>
      <el-table-column
        prop="totalposts"
        label="Total posts viewed"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { columnChart, pieChart } from "@toast-ui/vue-chart";
export default {
  components: {
    "column-chart": columnChart,
    "pie-chart": pieChart
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
      chartPieTheme1: {
        series: {
          colors: ["#7480ff", "#69c9d6"]
        }
      },
      tableData: [
        {
          visitorid: "Visitor 123",
          status: "Logged Out",
          location: "US",
          sessions: "4",
          totalposts: "11"
        },
        {
          visitorid: "Visitor 123",
          status: "Logged Out",
          location: "US",
          sessions: "4",
          totalposts: "11"
        },
        {
          visitorid: "Visitor 123",
          status: "Logged Out",
          location: "US",
          sessions: "4",
          totalposts: "11"
        }
      ],
      colChartData1: {
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
            name: "Income",
            data: [300, 200, 300, 420, 200, 500, 200]
          }
        ]
      },
      colChartOption1: {
        legend: {
          visible: false
        },
        chartExportMenu: {
          visible: false
        },
        chart: {
          width: 780,
          height: 400,
          // title: "Number of visitors by blog",
          format: "1,000",
          chartType: "column"
        },
        yAxis: {
          // title: "Month"
          title: ""
        },
        xAxis: {
          // title: "Amount",
          title: "",
          min: 0,
          max: 500
        },
        series: {}
      },
      colChartData2: {
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
            name: "Income",
            data: [300, 200, 300, 420, 200, 500, 200]
          }
        ]
      },
      colChartOption2: {
        legend: {
          visible: false
        },
        chartExportMenu: {
          visible: false
        },
        chart: {
          width: 780,
          height: 400,
          // title: "Number of posts viewed per visitor",
          format: "1,000",
          chartType: "column"
        },
        yAxis: {
          // title: "Month"
          title: ""
        },
        xAxis: {
          title: "",
          // title: "Amount",
          min: 0,
          max: 500
        },
        series: {}
      },
      colChartData3: {
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
            name: "Income",
            data: [300, 200, 300, 420, 200, 500, 200]
          }
        ]
      },
      colChartOption3: {
        legend: {
          visible: false
        },
        chartExportMenu: {
          visible: false
        },
        chart: {
          width: 780,
          height: 400,
          // title: "Monthly Revenue",
          format: "1,000",
          chartType: "column"
        },
        yAxis: {
          // title: "Month"
        },
        xAxis: {
          // title: "Amount",
          min: 0,
          max: 500
        },
        series: {}
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
          width: 200,
          height: 150,
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
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

// ========================================================
<style lang="scss">
.el-table__body {
  margin-bottom: -1px;
}
.el-table thead {
  color: #afafaf;
  font-weight: lighter;
}
.el-table th.is-leaf {
  border-bottom: none;
}
.el-table tr,
.el-table th {
  background-color: #f8f8f8;
}
.el-table th,
.el-table td {
  padding: 16px 0;
}
.el-table {
  color: #606060;
  padding: 30px 0;
}
.cell {
  text-align: center;
  background-color: #f8f8f8;
}
.el-table::before {
  height: 0px;
}
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
.performance-chart__values-area {
  width: 33%;
  max-width: 600px;
  margin-top: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.performance-chart__values-wrapper {
  display: flex;
  padding-bottom: 30px;
  overflow: hidden;
}
.tui-chart.tui-pie-chart {
  width: auto;
  height: auto;
}
.performance-chart__graphs-area {
  margin: 0 auto;
}
.el-button.el-button--default {
  color: #797979;
  border: 1px solid #797979;
  border-radius: 3px;
  padding: 7px 10px;
  cursor: pointer;
  background: transparent;
}
.block__general {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  margin-right: 4%;
  margin-bottom: 5%;
}
.block__general.values-gen {
  height: 180px;
  justify-content: space-evenly;
  background-color: #f8f8f8;
  margin-right: 4%;
  margin-bottom: 5%;
}
.block__general.block-graph {
  padding: 20px 0;
}
.par__general,
.par__large {
  margin: 0;
}
.par__general {
  font-size: 16px;
  color: #666;
}
.par__large {
  color: #7480ff;
  font-size: 42px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 1.5px;
}
.tui-chart.tui-pie-chart svg:first-of-type rect {
  fill-opacity: 0 !important;
}
.par__general.bl-gen {
  text-align: center;
  width: 80%;
  margin: 0 auto -30px auto;
}
.block-general__cont {
  display: flex;
  align-items: center;
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
.per-value-b {
  font-size: 34px;
  color: #666;
  margin: 0 12px 0 0;
  font-weight: bold;
}
.block-general__cont.align-end {
  display: flex;
  justify-content: center;
  align-items: baseline;
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
.block-general__cont-wrap {
  margin-bottom: 21px;
}
.par__general.par-ave {
  text-align: center;
  margin: 0 10% 5% 10%;
}
.performance-chart__val-area {
  display: flex;
  justify-content: space-evenly;
  width: 50%;
}
.num__sect {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.j-stripe {
  width: 1px;
  background-color: #cbd2e4;
  margin: 4% 0;
}

.block__general.bl-vls {
  padding: 6% 0;
  .per-value-b {
    margin-right: 0;
  }
}
.el-main {
  padding: 0 30px 30px 30px;
}
.performance-chart__visits {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #cbd2e4;
  div {
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-between;
  }
}
.performance-chart__visits:last-of-type {
  border-bottom: 1px solid transparent;
}
.performance-chart__visits-wrap {
  width: 100%;
  padding: 0 7%;
  box-sizing: border-box;
}
.visits-icon {
  margin: 0;
  width: 28px;
  height: 28px;
  cursor: pointer;
  img {
    max-width: 100%;
  }
}
.visits-part {
  margin-right: 5%;
  color: #7480ff;
}
.tui-chart.tui-pie-chart {
  margin: 0 auto;
}
@media screen and (max-width: 1350px) {
  .performance-chart__buttons-section {
    display: flex;
    flex-direction: column;
    height: 72px;
    justify-content: space-between;
  }
  .el-button + .el-button {
    margin-left: 0;
  }
  .graph-head__title {
    padding-right: 0%;
    width: 90%;
  }
}

.performance-header-btns {
  float: right;
  .el-button {
    border: unset;
    border-radius: 6px;
  }
}
.performance-content {
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .card-total {
    text-align: center;
    border: none;
    border-right: 3px solid #ececec;
    .title {
      display: flex;
      width: 100%;
      align-items: center;
      text-align: center;
      h2 {
        font-size: 50px;
        letter-spacing: 1px;
        line-height: 29px;
        color: #7480ff;
        font-family: "Poppins";
        font-weight: 700;
        margin: 0;
        text-transform: uppercase;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        margin: 0 auto 15px;
        span {
          font-size: 12px;
        }
      }
    }
    p {
      font-size: 17px;
      letter-spacing: 0px;
      line-height: 29px;
      color: #838383;
      font-family: "Poppins";
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;
    }
  }
  .card-total-last {
    border: none;
  }
  .total-line {
    margin: 24px 0;
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #f8f8f8;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      padding: 24px 30px;
      text-align: center;
      h6 {
        font-size: 21px;
        letter-spacing: 0px;
        color: #666666;
        font-family: "Poppins";
        font-weight: 700;
        margin: 0;
      }
      h1 {
        font-size: 67px;
        letter-spacing: 1px;
        color: #666666;
        font-family: "Poppins";
        font-weight: 700;
        margin: 0;
        margin: 24px 0;
      }
      .line-item {
        margin-bottom: 24px;
        .line-title {
          overflow: hidden;
          margin-bottom: 5px;
          .text-left {
            width: 80%;
            float: left;
            font-size: 21px;
            letter-spacing: 0px;
            line-height: 29px;
            color: #666666;
            font-family: "Poppins";
            font-weight: 400;
            text-align: left;
          }
          .text-right {
            font-size: 21px;
            letter-spacing: 0px;
            line-height: 29px;
            color: #666666;
            font-family: "Poppins";
            font-weight: 400;
            text-align: right;
            width: 20%;
            float: right;
          }
        }
        .el-progress {
          border-radius: 0;
          .el-progress-bar {
            border-radius: 0;
            .el-progress-bar__outer {
              border-radius: 0;
            }
            .el-progress-bar__inner {
              border-radius: 0;
            }
          }
        }
        .bg-blue1 {
          .el-progress-bar__inner {
            border-radius: 0;
            background: #69c9d6;
          }
        }
        .bg-blue2 {
          .el-progress-bar__inner {
            border-radius: 0;
            background: #7480ff;
          }
        }
      }
    }
  }

  .visitors {
    margin-top: 24px;
    position: relative;
    h3 {
      font-size: 21px;
      letter-spacing: 0px;
      line-height: 29px;
      color: #666666;
      font-family: "Poppins";
      font-weight: 700;
      margin: 0;
      position: absolute;
      top: 0;
      left: 30px;
      z-index: 2;
    }
    .el-tabs {
      .el-tabs__header {
        .el-tabs__nav-wrap {
          &::after {
            border: none;
            height: 0;
          }
          .el-tabs__nav-scroll {
            .el-tabs__nav {
              width: 100%;
              right: 0;
              .el-tabs__item {
                height: auto;
                box-sizing: border-box;
                /* line-height: 40px !important; */
                display: inline-block;
                list-style: none;
                font-size: 14px !important;
                font-weight: 500 !important;
                color: #c9c8c8 !important;
                position: relative;
                float: right !important;
                padding: 7px 24px !important;
              }
              .is-active {
                border-radius: 5px;
                background-color: #f5f5f5;
              }
              .el-tabs__active-bar {
                display: none;
              }
            }
          }
        }
      }
    }
    .tab-content {
      background-color: #f8f8f8;
      padding: 24px 30px;
      .location-item {
        border-bottom: 1px solid #ccc;
        padding: 15px 0;
        &:last-child {
          border: none;
        }
        .item-content {
          padding: 9px 0;
          .flat {
            display: inline-flex;
            width: 100%;
            align-items: center;
            .flat-icon {
              width: 35px;
              height: 35px;
              margin-right: 10px;
            }
            span {
              font-size: 21px;
              letter-spacing: 0px;
              line-height: 29px;
              color: #666666;
              font-family: "Poppins";
              font-weight: 400;
            }
          }
          .text {
            text-align: center;
            label {
              font-size: 13px;
              letter-spacing: 0px;
              line-height: 29px;
              color: #bfbfbf;
              font-family: "Poppins";
              font-weight: 400;
              text-align: center;
            }
            .info {
              font-size: 21px;
              letter-spacing: 0px;
              line-height: 29px;
              color: #010101;
              font-family: "Poppins";
              font-weight: 400;
              text-align: center;
              margin: 0;
            }
            .el-progress {
              border-radius: 0;
              .el-progress-bar {
                border-radius: 0;
                .el-progress-bar__outer {
                  border-radius: 0;
                }
                .el-progress-bar__inner {
                  border-radius: 0;
                }
              }
            }
            .bg-green {
              .el-progress-bar__inner {
                background: #73ef51;
              }
            }
            .bg-yellow {
              .el-progress-bar__inner {
                background: #f6ff74;
              }
            }
          }
        }
      }
    }
  }
}
</style>
