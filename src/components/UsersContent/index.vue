<template>
  <div>
    <div class="performance-chart">
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <column-chart
            :data="colChartData1"
            :options="colChartOption1"
            :theme="chartTheme"
          />
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <column-chart :data="colChartData2" :options="colChartOption2" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <column-chart :data="colChartData3" :options="colChartOption3" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <pie-chart :data="dataPie" :options="optionsPie" />
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
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
      chartTheme: {
        series: {
          colors: ["#fff700"]
        }
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      colChartData1: {
        categories: [
          "NOV 15",
          "NOV 16",
          "NOV 17",
          "NOV 18",
          "NOV 19",
          "NOV 20"
        ],
        series: [
          {
            name: "Income",
            data: [300, 200, 300, 420, 200, 500]
          }
        ]
      },
      colChartOption1: {
        chart: {
          width: 1160,
          height: 650,
          title: "Monthly Revenue",
          format: "1,000",
          chartType: "column"
        },
        yAxis: {
          title: "Month"
        },
        xAxis: {
          title: "Amount",
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
          "NOV 20"
        ],
        series: [
          {
            name: "Income",
            data: [300, 200, 300, 420, 200, 500]
          }
        ]
      },
      colChartOption2: {
        chart: {
          width: 1160,
          height: 650,
          title: "Monthly Revenue",
          format: "1,000",
          chartType: "column"
        },
        yAxis: {
          title: "Month"
        },
        xAxis: {
          title: "Amount",
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
          "NOV 20"
        ],
        series: [
          {
            name: "Income",
            data: [300, 200, 300, 420, 200, 500]
          }
        ]
      },
      colChartOption3: {
        chart: {
          width: 1160,
          height: 650,
          title: "Monthly Revenue",
          format: "1,000",
          chartType: "column"
        },
        yAxis: {
          title: "Month"
        },
        xAxis: {
          title: "Amount",
          min: 0,
          max: 500
        },
        series: {}
      },
      dataPie: {
        categories: ["Browser"],
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
        chart: {
          width: 700,
          height: 400,
          title: "Usage share of web browsers"
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

<style lang="scss">
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
