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
      const dealingArr = ['01', '02', '03', '04']; // 处理中，01：案件信息不错，02:现场指导客户，03:收集资料，04:定损
      const dealdArr = ['05', '06', '07']; // 已完成，05：结案，06:拒赔，07:销案
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