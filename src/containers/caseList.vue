<template>
  <section>
    <van-nav-bar title="个人中心" />
    <van-row class="m_t_2 b_g_white" v-for="(item, index) in caseList" :key="index">
      <van-col>
        <div class="h_117 f_4 m_l_5">案件号:{{item.caseNo}}</div>
        <!-- <div class="h_117 f_4 m_l_5">状态:sdjils<van-icon name="arrow" /></div> -->
      </van-col>
      <van-col :span="24">
        <!-- <div class="h_117 f_4 m_l_5">案件号:{{item.caseNo}}</div> -->
        <van-cell @click="toCaseDetailPage(item)" title="状态:" :value="item.caseStatus=== '0'?'处理中': '已结案'" is-link/>
      </van-col>
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