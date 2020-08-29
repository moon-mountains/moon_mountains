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
    </div> -->
    <van-row class="t_a_c b_g_white">
      <van-col class="b_1" :span="8">日期</van-col>
      <van-col class="b_1" :span="8">案件状态</van-col>
      <van-col class="b_1" :span="8">备注</van-col>
    </van-row>
    <van-row class="t_a_c b_g_white">
      <van-col class="b_1" :span="8">2012-12-25</van-col>
      <van-col class="b_1" :span="8">案件进行中</van-col>
      <van-col class="b_1" :span="8">玛雅日历</van-col>
    </van-row>
  </section>
</template>

<script>

export default {
  data() {
    return {
      caseList: [
        {
          caseNo: '7488370859887820804385',
          caseStatus: '0'
        },
        {
          caseNo: '7485716215847976966813',
          caseStatus: '1'
        }
      ]
    };
  },
  created() {},
  methods: {
    toCaseDetailPage() {
      this.$router.push("caseDetail");
    },
  },
};
</script>