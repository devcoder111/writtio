<template>
  <div>
    <div class="performance-header">
      <el-select v-model="performValue" placeholder="Select">
        <el-option
          v-for="item in performOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="performance-header-btns">
        <el-button plain type="info">Past 7 Days</el-button>
        <el-button plain type="info">Past 30 Days</el-button>
      </div>
    </div>
    <div class="performance-chart">
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <line-chart :data="lineChartData" :options="lineChartOption"/>
        </el-col>
      </el-row>
    </div>
    <div class="performance-content">
      <el-row :gutter="24">
        <el-col :span="8">
          <el-card shadow="nerver" class="card-total">
            <div class="title">
              <h2>1920</h2>
            </div>
            <p>TOTAL VISITORS</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="nerver" class="card-total">
            <div class="title"><h2>100</h2></div>
            <p>Average scroll length</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="never" class="card-total card-total-last">
            <div class="title">
              <h2>1 <span style="padding-right: 15px;">hr</span> 45 <span>mins</span></h2>
            </div>
            <p>Average time on page</p>
          </el-card>
        </el-col>
      </el-row>

      <div class="total-line">
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <h6>Total Opt-ins</h6>
              <h1>820</h1>
              <div class="line-process">
                <div class="line-item">
                  <div class="line-title">
                    <div class="text-left">People who read</div>
                    <div class="text-right">80%</div>
                  </div>
                  <el-progress
                    :show-text="false"
                    class="bg-blue1"
                    :stroke-width="10"
                    :percentage="80"
                  ></el-progress>
                </div>
                <div class="line-item">
                  <div class="line-title">
                    <div class="text-left">People who skimmed</div>
                    <div class="text-right">40%</div>
                  </div>
                  <el-progress
                    :show-text="false"
                    class="bg-blue2"
                    :percentage="40"
                    :stroke-width="10"
                  ></el-progress>
                </div>
              </div></div
          ></el-col>
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <h6>Total Clickthorughs</h6>
              <h1>820</h1>
              <div class="line-process">
                <div class="line-item">
                  <div class="line-title">
                    <div class="text-left">People who read</div>
                    <div class="text-right">80%</div>
                  </div>
                  <el-progress
                    :show-text="false"
                    class="bg-blue1"
                    :stroke-width="10"
                    :percentage="80"
                  ></el-progress>
                </div>
                <div class="line-item">
                  <div class="line-title">
                    <div class="text-left">People who skimmed</div>
                    <div class="text-right">40%</div>
                  </div>
                  <el-progress
                    :show-text="false"
                    class="bg-blue2"
                    :percentage="40"
                    :stroke-width="10"
                  ></el-progress>
                </div>
              </div></div
          ></el-col>
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <h6>Total CTA completion</h6>
              <h1>820</h1>
              <div class="line-process">
                <div class="line-item">
                  <div class="line-title">
                    <div class="text-left">People who read</div>
                    <div class="text-right">80%</div>
                  </div>
                  <el-progress
                    :show-text="false"
                    class="bg-blue1"
                    :stroke-width="10"
                    :percentage="80"
                  ></el-progress>
                </div>
                <div class="line-item">
                  <div class="line-title">
                    <div class="text-left">People who skimmed</div>
                    <div class="text-right">40%</div>
                  </div>
                  <el-progress
                    :show-text="false"
                    class="bg-blue2"
                    :percentage="40"
                    :stroke-width="10"
                  ></el-progress>
                </div>
              </div></div
          ></el-col>
        </el-row>
      </div>

      <div class="visitors">
        <h3>List of visitors</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Languages" name="1">Languages</el-tab-pane>
          <el-tab-pane label="Locations" name="2">
            <div class="tab-content">
              <div class="list-location">
                <div class="location-item">
                  <el-row :gutter="12">
                    <el-col :span="12"
                      ><div class="item-content">
                        <div class="flat">
                          <img
                            class="flat-icon"
                            :src="require('@/assets/flats/en.svg')"
                          />
                          <span>English</span>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Visitor</label>
                          <p class="info">20,000</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Engagement</label>
                          <div class="line-item">
                            <div class="line-title">
                              50
                            </div>
                            <el-progress
                              :show-text="false"
                              class="bg-yellow"
                              :percentage="50"
                              :stroke-width="7"
                            ></el-progress>
                          </div>
                        </div></div
                    ></el-col>
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Opt-ins</label>
                          <p class="info">3%</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Clickthroughs</label>
                          <p class="info">15%</p>
                        </div>
                      </div></el-col
                    >
                  </el-row>
                </div>
                <div class="location-item">
                  <el-row :gutter="12">
                    <el-col :span="12"
                      ><div class="item-content">
                        <div class="flat">
                          <img
                            class="flat-icon"
                            :src="require('@/assets/flats/sp.svg')"
                          />
                          <span>Spanish (Español)</span>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Visitor</label>
                          <p class="info">20,000</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Engagement</label>
                          <div class="line-item">
                            <div class="line-title">
                              70
                            </div>
                            <el-progress
                              :show-text="false"
                              class="bg-green"
                              :percentage="70"
                              :stroke-width="7"
                            ></el-progress>
                          </div>
                        </div></div
                    ></el-col>
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Opt-ins</label>
                          <p class="info">3%</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Clickthroughs</label>
                          <p class="info">15%</p>
                        </div>
                      </div></el-col
                    >
                  </el-row>
                </div>
                <div class="location-item">
                  <el-row :gutter="12">
                    <el-col :span="12"
                      ><div class="item-content">
                        <div class="flat">
                          <img
                            class="flat-icon"
                            :src="require('@/assets/flats/ch.svg')"
                          />
                          <span>Mandarin (普通话)</span>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Visitor</label>
                          <p class="info">20,000</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Engagement</label>
                          <div class="line-item">
                            <div class="line-title">
                              50
                            </div>
                            <el-progress
                              :show-text="false"
                              class="bg-yellow"
                              :percentage="50"
                              :stroke-width="7"
                            ></el-progress>
                          </div>
                        </div></div
                    ></el-col>
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Opt-ins</label>
                          <p class="info">3%</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Clickthroughs</label>
                          <p class="info">15%</p>
                        </div>
                      </div></el-col
                    >
                  </el-row>
                </div>
                <div class="location-item">
                  <el-row :gutter="12">
                    <el-col :span="12"
                      ><div class="item-content">
                        <div class="flat">
                          <img
                            class="flat-icon"
                            :src="require('@/assets/flats/ar.svg')"
                          />
                          <span>Arabic (عربى)</span>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Visitor</label>
                          <p class="info">20,000</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Engagement</label>
                          <div class="line-item">
                            <div class="line-title">
                              70
                            </div>
                            <el-progress
                              :show-text="false"
                              class="bg-green"
                              :percentage="70"
                              :stroke-width="7"
                            ></el-progress>
                          </div>
                        </div></div
                    ></el-col>
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Opt-ins</label>
                          <p class="info">3%</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Clickthroughs</label>
                          <p class="info">15%</p>
                        </div>
                      </div></el-col
                    >
                  </el-row>
                </div>
                <div class="location-item">
                  <el-row :gutter="12">
                    <el-col :span="12"
                      ><div class="item-content">
                        <div class="flat">
                          <img
                            class="flat-icon"
                            :src="require('@/assets/flats/fr.svg')"
                          />
                          <span>French (Français)</span>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Visitor</label>
                          <p class="info">20,000</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Engagement</label>
                          <div class="line-item">
                            <div class="line-title">
                              50
                            </div>
                            <el-progress
                              :show-text="false"
                              class="bg-yellow"
                              :percentage="50"
                              :stroke-width="7"
                            ></el-progress>
                          </div>
                        </div></div
                    ></el-col>
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Opt-ins</label>
                          <p class="info">3%</p>
                        </div>
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="item-content">
                        <div class="text">
                          <label for="">Clickthroughs</label>
                          <p class="info">15%</p>
                        </div>
                      </div></el-col
                    >
                  </el-row>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { lineChart } from "@toast-ui/vue-chart";
export default {
  components: {
    "line-chart": lineChart
  },

  data() {
    return {
      performOptions: [{
          value: 'Option1',
          label: 'Performance'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        performValue: '',
      activeName: "2",
      lineChartData: {
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
            name: "PAGEVIEWS",
            data: [1000, 3000, 6000, 3000, 6000, 4000]
          }
        ]
      },
      lineChartOption: {
        chart: {
          width: 1600,
          height: 400,
          title: "Performance"
        },
        yAxis: {
          pointOnColumn: true
        },
        series: {
          spline: true,
          showDot: false
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
.performance-header-btns{
  float:right;
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
