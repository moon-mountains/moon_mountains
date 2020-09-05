<template>
  <section>
    <van-nav-bar title="案件详情" />
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
    <van-steps :active="caseStatus-1" style="font-size:.2rem">
      <van-step v-for="(item, index) in renderStepList" :key="index">{{item.text}}</van-step>
    </van-steps>
     <van-divider style="margin: .13rem 0" class="h_117 b_g_white" content-position="left">案件处理日志</van-divider>
    <van-cell-group v-for="(item, index) in caseDetailList" :key="index">
      <van-cell title="案件号码:" :value="item.caseNo || '--'" />
      <van-cell title="案件状态:" :value="item.caseStatus || '--'" />
      <van-cell title="日志日期:" :value="item.caseLogDate || '--'" />
      <van-cell title="日志描述:" :value="item.caseLogRemarks || '--'" />
      <van-cell title="操作人员:" :value="item.operationName || '--'" />
    </van-cell-group>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      caseDetailList: [],
      caseStatus: '07',
      endStepLineList: [
        {caseStatus: '05', lineClass: 'l_dis', text: '结案'},
        {caseStatus: '06', lineClass: 'l_dis', text: '拒赔'},
        {caseStatus: '07', lineClass: 'l_dis', text: '销案'},
      ],
      stepLineList: [ // 案件信息补充-01 现在指导客户-02，收集资料-03，定损-04，结案-05，拒赔-06，销案-07
        {caseStatus: '01', lineClass: 'l_dis', text: '补充信息'},
        {caseStatus: '02', lineClass: 'l_dis', text: '指导客户'},
        {caseStatus: '03', lineClass: 'l_dis', text: '收集资料'},
        {caseStatus: '04', lineClass: 'l_dis', text: '定损'},
      ],
      renderStepList: [],
      caseNo: window.localStorage.getItem("caseNo") || ""
    };
  },
  created() {
    // 案件详情
    this.toqueryWxCaseLog();
    // 步骤线
    this.queryWxNewCaseStatus();
  },
  methods: {
    ...mapActions(["queryWxCaseLog", "queryWxNewCaseStatus"]),
    toqueryWxCaseLog() {
      this.queryWxCaseLog({ caseNo: this.caseNo }).then((data = {}) => {
//         "data": [
//   {
//    "caseNo": "7518580652501893124439",
//    "caseStatus": "01",
//    "caseLogDate": "2020-09-06 01:44:47",
//    "caseLogRemarks": "yyyyyy",
//    "operationName": "admin"
//   }
//  ]
        if (data.code === 200) {
          this.caseDetailList = data.data || {};
          console.log("caseDetailList--", this.caseDetailList);
          this.renderline();
        } else {
          this.$notify(data.message || "暂无数据");
        }
      });
    },
    queryWxNewCaseStatus() {
      this.queryWxNewCaseStatus({ caseNo: this.caseNo }).then((data = {}) => {
        if(data.code === 200) {
          let res = data.data;
          this.caseStatus = res.caseStatus || '';
          this.renderline();
        }
      })
    },
    renderline() {
      let ob = this.endStepLineList.filter(item => {
        return item.caseStatus == this.caseStatus
      })
      if(ob.length === 0) {
        ob.push(this.endStepLineList[0])
      }
      this.renderStepList = this.stepLineList.concat(ob);
    },
    // toCaseDetailPage() {
    //   this.$router.push("caseDetailList");
    // },
  },
};
</script>