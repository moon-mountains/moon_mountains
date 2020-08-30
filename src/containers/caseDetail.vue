<template>
  <section>
    <van-nav-bar title="案件详情" />
    <van-divider class="h_117 b_g_white" content-position="left">案件处理日志</van-divider>
    <!-- <div class="d_f">
      <div class="b_1">日期</div>
      <div class="b_1">案件状态</div>
      <div class="b_1">备注</div>
    </div>
    <div class="d_f">
      <div class="b_1">2012-12-25</div>
      <div class="b_1">案件进行中</div>
      <div class="b_1">玛雅日历</div>
    </div>-->
    <!-- <van-row class="t_a_c b_g_white">
      <van-col class="b_1" :span="8">日期</van-col>
      <van-col class="b_1" :span="8">案件状态</van-col>
      <van-col class="b_1" :span="8">备注</van-col>
    </van-row>
    <van-row class="t_a_c b_g_white">
      <van-col class="b_1" :span="8">2012-12-25</van-col>
      <van-col class="b_1" :span="8">案件进行中</van-col>
      <van-col class="b_1" :span="8">玛雅日历</van-col>
    </van-row>-->
    <van-cell-group>
      <van-cell title="案发日期:" :value="caseDetail.insureHappenTime || '--'" />
      <van-cell title="案件号码:" :value="caseDetail.caseNo || '--'" />
      <van-cell title="案件ID:" :value="caseDetail.caseId || '--'" />
      <van-cell title="被保人:" :value="caseDetail.insurePersion || '--'" />
      <van-cell title="案件耗时:" :value="caseDetail.reportCaseTime || '--'" />
      <van-cell title="所属部门:" :value="caseDetail.accidentReason || '--'" />
      <van-cell title="联系人:" :value="caseDetail.linkPerson || '--'" />
      <van-cell title="业务员编号:" :value="caseDetail.saleAgentNo || '--'" />
      <van-cell title="事故描述:" :value="caseDetail.accidentDes || '--'" />
    </van-cell-group>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      caseDetail: {
        // caseId: "202007221111111",
        // caseNo: "我是测试",
        // insurePersion: "被测试",
        // insureHappenTime: "20303020102",
        // reportCaseTime: 300,
        // accidentReason: "",
        // linkPerson: "联系人",
        // accidentDes: "事故描述",
        // saleAgentNo: "业务员编号",
      },
    };
  },
  created() {
    this.toqueryWxCaseLog();
  },
  methods: {
    ...mapActions(["queryWxCaseLog"]),
    toqueryWxCaseLog() {
      const caseNo = window.localStorage.getItem("caseNo") || "";
      this.queryWxCaseLog({ caseNo }).then((data = {}) => {
        if (data.code === 200) {
          this.caseDetail = data.data || {};
          console.log("caseDetail--", this.caseDetail);
        } else {
          this.$notify(data.message || "暂无数据");
        }
      });
    },
    toCaseDetailPage() {
      this.$router.push("caseDetail");
    },
  },
};
</script>