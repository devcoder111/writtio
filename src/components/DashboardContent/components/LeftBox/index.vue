<template>
  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="guidelines">
    <h1 class="main-title">Raw Scores</h1>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Readablility score<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="readablility" range></el-slider>
          <p>{{ readablility[0] + "-" + readablility[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          % of dificulty words<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="dificultwords" range></el-slider>
          <p>{{ dificultwords[0] + "-" + dificultwords[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Tone<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <el-select v-model="tone" placeholder="Select">
          <el-option
            v-for="item in tones"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{
              item.value
            }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Gender<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider
            style="width:100%"
            show-tooltip
            label
            v-model="gender"
            :min="0"
            :max="3"
          ></el-slider>
          <p>{{ oneValue1Desc[gender] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Sentiments<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <el-select
          class="element-div element-div-flex"
          v-model="sentiment"
          placeholder="Select"
        >
          <el-option
            v-for="item in sentiments"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{
              item.value
            }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Paragraph Length<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider
            v-model="paragraphlength"
            range
            :min="1"
            :max="10"
          ></el-slider>
          <p>{{ paragraphlength[0] + "-" + paragraphlength[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          % Long sentences<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="longsentences" range></el-slider>
          <p>{{ longsentences[0] + "-" + longsentences[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Average syllables per word<i
            class="el-icon-question element-item-icon"
          ></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="averagesyllablesperword" range></el-slider>
          <p>
            {{ averagesyllablesperword[0] + "-" + averagesyllablesperword[1] }}
          </p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          ESL Friendliness<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <el-select v-model="ESLfriendlines" placeholder="Select">
          <el-option
            v-for="item in ESLfriendliness"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{
              item.value
            }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          % of adverbs<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="adverbs" range></el-slider>
          <p>{{ adverbs[0] + "-" + adverbs[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          % of adjectives<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="adjectives" range></el-slider>
          <p>{{ adjectives[0] + "-" + adjectives[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Reading time<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="readingtime" range :min="1" :max="30"></el-slider>
          <p>{{ readingtime[0] + "min-" + readingtime[1] + "min" }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          # of words<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="ofwords" range :min="1" :max="50000"></el-slider>
          <p>{{ ofwords[0] + "-" + ofwords[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          # of characters<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="ofcharacters" range></el-slider>
          <p>{{ ofcharacters[0] + "-" + ofcharacters[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Total # of internal links<i
            class="el-icon-question element-item-icon"
          ></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider
            v-model="totalnoofinternallinks"
            range
            :min="1"
            :max="50"
          ></el-slider>
          <p>
            {{ totalnoofinternallinks[0] + "-" + totalnoofinternallinks[1] }}
          </p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Total # of external links<i
            class="el-icon-question element-item-icon"
          ></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider
            v-model="totalnoofextrenallinks"
            range
            :min="1"
            :max="50"
          ></el-slider>
          <p>
            {{ totalnoofextrenallinks[0] + "-" + totalnoofextrenallinks[1] }}
          </p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          # of images<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="ofimage" range :min="1" :max="50"></el-slider>
          <p>{{ ofimage[0] + "-" + ofimage[1] }}</p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Rhythm<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="rhythm"></el-slider>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Resourcefulness<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="resourcefullness"></el-slider>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="d-flex">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="d-flex">
        <h3 class="label">
          Visual or Text Heavy<i class="el-icon-question element-item-icon"></i>
        </h3>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="block">
        <div class="slider-box">
          <el-slider v-model="visualortextheavy"></el-slider>
        </div>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      softorhard: false,
      readablility: [30, 70],
      dificultwords: [30, 60],
      gender: 39,
      paragraphlength: [2, 6],
      longsentences: [1, 60],
      averagesyllablesperword: [1, 60],
      adverbs: [25, 50],
      adjectives: [25, 65],
      readingtime: [8, 16],
      ofwords: [100, 45500],
      ofcharacters: [15, 55],
      totalnoofinternallinks: [5, 25],
      totalnoofextrenallinks: [15, 35],
      ofimage: [5, 25],
      rhythm: 80,
      resourcefullness: 30,
      visualortextheavy: 55,
      oneValue1Desc: ["Very Male", "Male", "Very Female", "Female"],
      tones: [
        {
          value: "Beijing",
          label: "Beijing"
        },
        {
          value: "Shanghai",
          label: "Shanghai"
        },
        {
          value: "Nanjing",
          label: "Nanjing"
        }
      ],
      tone: "",
      sentiments: [
        {
          value: "Beijing",
          label: "Beijing"
        },
        {
          value: "Shanghai",
          label: "Shanghai"
        },
        {
          value: "Nanjing",
          label: "Nanjing"
        }
      ],
      sentiment: "",
      ESLfriendliness: [
        {
          value: "Beijing",
          label: "Beijing"
        },
        {
          value: "Shanghai",
          label: "Shanghai"
        },
        {
          value: "Nanjing",
          label: "Nanjing"
        }
      ],
      ESLfriendlines: ""
    };
  }
};
</script>

<style scoped lang="scss">
.space-2 {
  margin: 10px;
}
.d-flex {
  display: flex;
}
.slider-box {
  width: 70%;
  p {
    margin: 0px;
    text-align: center;
    color: #ababab;
  }
}
.main-title {
  font-size: 24px;
  color: #666666;
}
.label {
  font-size: 19px;
  font-style: normal;
  font-weight: 200;
}
.colored-btn {
  height: 40px;
  border-radius: 5px;
  background-color: #69c9d6;
  border: none;
}
.guidelines > .el-input__inner {
  background: #eeeeee !important;
  border-color: #eeeeee !important;
}
.guidelines > .el-input__suffix {
  right: 0;
  background: #dedede;
  border-radius: 0 2px 2px 0;
}
.el-avatar--small {
  width: 20px;
  height: 20px;
  align-self: center;
  margin-left: 5px;
}
.element-item-icon {
  font-size: 24px;
  margin-left: 3px;
  color: rgba(200, 200, 200, 0.4);
}
.el-icon-arrow-up:before {
  content: "\e78f";
}
.el-select {
  width: 70%;
}
</style>
