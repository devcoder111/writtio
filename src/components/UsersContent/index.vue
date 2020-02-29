<template>
  <div>
    <div class="users-header">
      <p class="userheadertitle">
        In order to calculate a more accurate engagement index, we need to
        authenticate your Facebook account.
        <a class="userheader-a"> Why we need this?</a
        ><el-button class="auth-btn">Authenticate </el-button>
      </p>
    </div>
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
        <left-col />
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="16" :xl="16">
        <right-col />
      </el-col>
    </el-row>
    <br />
    <div class="visitors-listing">
      <el-row class="list-header">
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">Visitor ID</el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">Status</el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">Location</el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
          ># of sessions (30 days)</el-col
        >
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
          >Total posts viewed</el-col
        >
      </el-row>
      <div
        v-for="(item, index) in visitordata"
        :key="index"
        @click="opendrawer(item)"
      >
        <el-row class="list-item">
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">{{
            item.visitorid
          }}</el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">{{
            item.status
          }}</el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">{{
            item.location
          }}</el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">{{
            item.noofsessions
          }}</el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">{{
            item.postviewed
          }}</el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
    </div>
    <el-drawer
      title="visitor title"
      :visible.sync="drawer"
      :with-header="false"
    >
      <visitors-drawer :data="selected" @drawerclose="drawerclose" />
    </el-drawer>
  </div>
</template>
<script>
import LeftCol from "./components/LeftColumn";
import RightCol from "./components/RightColumn";
import VisitorsDrawer from "./components/VisitorsDrawer";
export default {
  components: {
    LeftCol,
    RightCol,
    VisitorsDrawer
  },
  data() {
    return {
      drawer: false,
      selected: {},
      visitordata: [
        {
          visitorid: "Visitor 123",
          status: "Logged out",
          location: "US",
          noofsessions: "4",
          postviewed: "11",
          summary: {
            scrolllength: "56%",
            read: "40%",
            skimmed: "60%",
            clickthroughrate: "7%"
          },
          listofpostviewed: [
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Skimm",
              ctacomplate: "No"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Skimm",
              ctacomplate: "No"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "REad",
              ctacomplate: "Yes"
            }
          ]
        },
        {
          visitorid: "Visitor 123",
          status: "Logged out",
          location: "US",
          noofsessions: "4",
          postviewed: "11",
          summary: {
            scrolllength: "56%",
            read: "40%",
            skimmed: "60%",
            clickthroughrate: "7%"
          },
          listofpostviewed: [
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Skimm",
              ctacomplate: "No"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Skimm",
              ctacomplate: "No"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "REad",
              ctacomplate: "Yes"
            }
          ]
        },
        {
          visitorid: "Visitor 123",
          status: "Logged out",
          location: "US",
          noofsessions: "4",
          postviewed: "11",
          summary: {
            scrolllength: "56%",
            read: "40%",
            skimmed: "60%",
            clickthroughrate: "7%"
          },
          listofpostviewed: [
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Skimm",
              ctacomplate: "No"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Skimm",
              ctacomplate: "No"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "Read",
              ctacomplate: "Yes"
            },
            {
              posttitle: "Sample Title Here",
              dateandtime: "12 November, 2019 | 03:01:00",
              readorskimm: "REad",
              ctacomplate: "Yes"
            }
          ]
        }
      ]
    };
  },
  methods: {
    opendrawer(item) {
      this.selected = item;
      this.drawer = true;
    },
    drawerclose(val) {
      this.drawer = val;
    }
  }
};
</script>
<style lang="scss">
.auth-btn {
  margin-left: 15px;
  background: #fdd32a;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  width: 161px;
  font-size: 18px;
}
.userheader-a {
  margin-left: 7px;
  font-weight: bold;
  text-decoration: underline;
}
.users-header {
  height: 80px;
  background-color: #69c9d6;
  margin: -41px -24px 0 -20px;
}
.userheadertitle {
  font-size: 21px;
  font-family: "Poppins";
  color: #fff;

  line-height: 1.2;
  text-align: center;
  height: 80px;
  /* margin: 0; */
  align-items: center;
  justify-content: center;
  display: flex;
}
.page-title {
  text-align: center;
  color: #666666;
}
.visitors-listing {
  background-color: #f8f8f8;
  padding: 00px 40px;
  padding-bottom: 30px;
  .list-header {
    text-align: center;
    display: flex;
    padding: 20px 0px 00px 0px;
    font-size: 18px;
    color: #cfcfcf;
    font-weight: 600;
  }
  .list-item {
    text-align: center;
    padding: 30px 00px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #666666;
    font-weight: 500;
  }
  .el-divider--horizontal {
    margin: 0px !important;
  }
  .tbl-rows {
    padding-left: 60px;
  }
}
.el-drawer__body {
  overflow: auto;
}
.visitors-listing {
  margin: 0 20px;
}
</style>
