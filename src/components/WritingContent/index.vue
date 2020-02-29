<template>
  <div>
    <loading v-if="isLoading" />
    <div v-if="!isLoading">
      <div class="nav-btns">
        <el-button plain type="info">All</el-button>
        <el-button plain type="info">Engagements</el-button>
        <el-button plain type="info">Actions</el-button>
        <el-button plain type="info">Draft</el-button>
        <el-button plain type="info">Published</el-button>
      </div>

      <br />

      <detail-card boxName="Clarity" :data="clarity" />
      <detail-card boxName="Impact" :data="impact" />
      <detail-card boxName="Feel" :data="feel" />
      <detail-card boxName="Depth" :data="depth" />
      <detail-card boxName="ESL Friendliness" :data="eslfriendliness" />
    </div>
  </div>
</template>
<script>
import Loading from "./components/Loading";
import DetailCard from "./components/DetailCard";
export default {
  components: {
    Loading,
    DetailCard
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  },
  data() {
    return {
      isLoading: true,
      clarity: [
        {
          title: "Average syllabless",
          icon: "success",
          target: 100,
          integer: "00",
          status: "CRITICAL"
        },
        {
          title: "% of Dificult Words",
          icon: "warning",
          target: 100,
          integer: "00",
          status: "IMPORTANT"
        },
        {
          title: "Paragraph Length",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        },
        {
          title: "% of Long Sentences",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        },
        {
          title: "Average syllabless per Word",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        }
      ],
      impact: [
        {
          title: "% Pasive Voice",
          icon: "success",
          target: 100,
          integer: "00",
          status: "CRITICAL"
        },
        {
          title: "% of Adverbs",
          icon: "warning",
          target: 100,
          integer: "00",
          status: "IMPORTANT"
        },
        {
          title: "% of Adjectives",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        },
        {
          title: "Rythm",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        }
      ],
      feel: [
        {
          title: "Tone",
          icon: "success",
          target: 100,
          integer: "00",
          status: "CRITICAL"
        },
        {
          title: "Gender",
          icon: "warning",
          target: 100,
          integer: "00",
          status: "IMPORTANT"
        },
        {
          title: "Sentiment",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        }
      ],
      depth: [
        {
          title: "Reading Time",
          icon: "success",
          target: 100,
          integer: "00",
          status: "CRITICAL"
        },
        {
          title: "# of Words",
          icon: "warning",
          target: 100,
          integer: "00",
          status: "IMPORTANT"
        },
        {
          title: "# of Characters",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        },
        {
          title: "Total # of Internal Links",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        },
        {
          title: "Total # of External Links",
          target: 100,
          integer: "00",
          status: "CALCULATING"
        }
      ],
      eslfriendliness: [
        {
          title: "ESL Score",
          icon: "success",
          target: 100,
          integer: "00",
          status: "CRITICAL"
        },
        {
          title: "Dificult Words",
          icon: "warning",
          target: 100,
          integer: "00",
          status: "IMPORTANT"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.nav-btns {
  float: right;
  .el-button {
    border: unset;
    border-radius: 6px;
  }
}
</style>
