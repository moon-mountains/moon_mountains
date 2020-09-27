<template>
  <section>
    <van-nav-bar title="案件列表" />
    <van-row class="m_t_2 b_g_white" v-for="(item, index) in caseList" :key="index">
      <van-col>
        <div class="h_117 f_4 m_l_5">案件号:{{item.caseNo}}</div>
        <!-- <div class="h_117 f_4 m_l_5">状态:sdjils<van-icon name="arrow" /></div> -->
      </van-col>
      <van-col :span="24">
        <!-- <div class="h_117 f_4 m_l_5">案件号:{{item.caseNo}}</div> -->
        <van-cell @click="toCaseDetailPage(item)" title="状态:" :value="item.caseStatus | translateStatus" is-link/>
      </van-col>
    </van-row>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      caseList: []
    };
  },
  filters: {
    translateStatus(value) {
      // 1.案件信息补充提交后流转到下一个状态
      // 2.现场指导客户完成后跳转下一个状态
      // 3.收集资料中，用户开始上传资料等，提交收集资料后锁定信息，跳转到下一个状态
      // 4.收集资料待审核，等待管理员审核
      // 5.资料审核通过后，状态为待定损，（审核不通过状态变为收集资料中，解锁页面让用户重新填写资料），
      // 6.用户定损完成后状态为定损，
      // 7.用户填写完结案信息提交审核后，状态为结案待审核
      // 8.结案审核通过后，状态变为结案或者拒赔,销案。（结案审核不通过状态变为定损）
      // 案件状态:
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
      const dealingArr = ['01', '02', '03', '04', '05', '06', '07'];
      const dealdArr = ['08', '09', '10'];
      if(dealingArr.includes(value)) {
        return '处理中'
      }
      if(dealdArr.includes(value)) {
        return '已完成'
      }else {
        return '待处理'
      }
    }
  },
  created() {
    this.getqueryWxCaseStatusList()
  },
  methods: {
    ...mapActions(['queryWxCaseStatusList']),
    getqueryWxCaseStatusList() {
      this.queryWxCaseStatusList().then((data = {}) => {
        if(data.code === 200) {
          this.caseList = data.data || [];
        }else {
          this.$notify(data.message || '暂无数据');
        }
      })
    },
    toCaseDetailPage(item) {
      window.localStorage.setItem('caseNo', item.caseNo || '');
      this.$router.push("caseDetail");
    },
  },
};
</script>