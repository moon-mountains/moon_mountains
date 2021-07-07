<template>
  <section>
    <van-nav-bar title="案件详情" left-arrow @click-left="onClickLeft"/>
    <van-steps :active="sureActiv" direction="vertical" style="font-size:.2rem">
      <van-step v-for="(item, index) in renderStepList" :key="index">{{item.text}}</van-step>
    </van-steps>
    <van-divider style="margin: .13rem 0" class="h_117 b_g_white" content-position="left">案件处理日志</van-divider>
    <van-cell-group style="margin-top:.1rem" v-for="(item, index) in caseDetailList" :key="index">
      <van-cell value-class="over_f_unset" title="案件号码:" :value="item.caseNo || '--'" />
      <van-cell value-class="over_f_unset" title="报案时间:" :value="item.reportCaseTime || '--'" />
      <!-- <van-cell value-class="over_f_unset" title="案件状态:" :value="translateStatus(item.caseStatus)" /> -->
      <van-cell value-class="over_f_unset" title="日志日期:" :value="item.caseLogDate || '--'" />
      <van-cell value-class="over_f_unset" title="日志描述:" :value="item.caseLogRemarks || '--'" />
      <van-cell value-class="over_f_unset" title="操作人员:" :value="item.operationName || '--'" />
      <!-- <van-divider /> -->
    </van-cell-group>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      caseDetailList: [],
      caseStatus: "0",
      endStepLineList: [
        [{ caseStatus: "08", lineClass: "l_dis", text: "结案" }],
        [{ caseStatus: "09", lineClass: "l_dis", text: "拒赔" }],
        [{ caseStatus: "10", lineClass: "l_dis", text: "销案" }]
      ],
      stepLineList: [
        // 1.案件信息补充提交后流转到下一个状态
        // 2.现场指导客户完成后跳转下一个状态
        // 3.收集资料中，用户开始上传资料等，提交收集资料后锁定信息，跳转到下一个状态
        // 4.收集资料待审核，等待管理员审核
        // 5.资料审核通过后，状态为待定损，（审核不通过状态变为收集资料中，解锁页面让用户重新填写资料），
        // 6.用户定损完成后状态为定损，
        // 7.用户填写完结案信息提交审核后，状态为结案待审核
        // 8.结案审核通过后，状态变为结案或者拒赔,销案。（结案审核不通过状态变为定损）
        // // 案件状态:
        // 案件信息补充-01 
        // 现在指导客户-02 
        // 收集资料中-03 
        // 收集资料待审核-04 (审核不通过变为-03) 
        // 待定损-05 
        // 定损-06 
        // 结案待审核-07
        // 结案-08（结案审核不通变为定损-06）
        // 拒赔-09 
        // 销案-10 
        { caseStatus: "0", lineClass: "l_dis", text: "案件待处理" },
        { caseStatus: "01", lineClass: "l_dis", text: "案件信息补充" },
        { caseStatus: "02", lineClass: "l_dis", text: "现场指导客户" },
        { caseStatus: "03", lineClass: "l_dis", text: "收集资料中" },
        { caseStatus: "04", lineClass: "l_dis", text: "收集资料待审核" },
        { caseStatus: "05", lineClass: "l_dis", text: "待定损" },
        { caseStatus: "06", lineClass: "l_dis", text: "定损" },
        { caseStatus: "07", lineClass: "l_dis", text: "结案待审核" }
      ],
      renderStepList: [],
      allCaseStatusList: [],
      caseNo: window.localStorage.getItem("caseNo") || "",
    };
  },
  created() {
    // this.allCaseStatusList = this.stepLineList.concat(this.endStepLineList);
    // 案件详情
    this.toqueryWxCaseLog();
    // 步骤线
    this.toqueryWxNewCaseStatus();
    this.renderline();
  },
  computed: {
    sureActiv() {
      // return this.renderStepList.length > 6 ? this.renderStepList.length : this.caseStatus
      let index = 0;
      for(let i = 0; i < this.renderStepList.length; i++) {
        if(this.renderStepList[i].caseStatus === this.caseStatus) {
          index = i;
          break;
        }
      }
      return index;
    }
  },
  methods: {
    ...mapActions(["queryWxCaseLog", "queryWxNewCaseStatus"]),
    toqueryWxCaseLog() {
      this.queryWxCaseLog({ caseNo: this.caseNo }).then((data = {}) => {
        if (data.code === 200) {
          this.caseDetailList = data.data || {};
          console.log("caseDetailList--", this.caseDetailList);
          // this.renderline();
        } else {
          this.$notify(data.message || "暂无数据");
        }
      });
    },
    toqueryWxNewCaseStatus() {
      this.queryWxNewCaseStatus({ caseNo: this.caseNo }).then((data = {}) => {
        if (data.code === 200) {
          let res = data.data;
          this.caseStatus = res.caseStatus || "";
          this.renderline();
        }
      });
    },
    renderline() {
      switch (this.caseStatus) {
        case '08':
        {
          this.stepLineList.push(this.endStepLineList[0][0])
          break;
        }
        case '09':
        {
          this.stepLineList.push(this.endStepLineList[1][0])
          break;
        }
        case '10':
        {
          this.stepLineList.push(this.endStepLineList[2][0])
          break;
        }
      }
      this.renderStepList = this.stepLineList;
    },
    translateStatus(caseStatus) {
      let text = '';
      this.renderStepList.forEach(n => {
        if(n.caseStatus === caseStatus){
          text = n.text
        }
      })
      return text
    },
    onClickLeft() {
        this.$router.go(-1);
    }
  },
};
</script>