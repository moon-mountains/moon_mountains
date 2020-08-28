<template>
  <section>
    <van-nav-bar title="个人中心" />
    <van-row class="m_t_5 b_g_white">
      <van-col class="h_15" span="6"><div><van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" /></div></van-col>
      <van-col @click="toCaseDetailPage" class="h_15" span="18" is-link><div>我的案件</div></van-col>
    </van-row>
  </section>
</template>

<script>
import { cssEnumeration } from "../assets/js/enumerations.js";

export default {
  data() {
    return {
      isShowSelection: false,
      caseInfoForm: {
        saleMenName: "",
        reason: "",
      },
      reasonList: [
        { name: "车泡水", className: cssEnumeration.className },
        { name: "车晒爆了", className: cssEnumeration.className },
      ],
    };
  },
  created() {},
  methods: {
    selectReason(item) {
      this.caseInfoForm.reason = item.name;
      this.isShowSelection = false;
    },
    toCaseDetailPage() {
      console.log("sdfsf");
      this.$router.push("caseDetail");
    },
  },
};
</script>