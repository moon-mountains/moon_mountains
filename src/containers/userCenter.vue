<template>
  <section v-if="isShowAll">
    <van-nav-bar title="个人中心" />
    <van-row class="m_t_1 b_g_white">
      <van-col class="h_15" span="6">
        <div>
          <van-icon :name="wxUserInfo.headimgurl || ''" />
        </div>
      </van-col>
      <van-col class="h_15" span="18">
        <div>用户{{wxUserInfo.nickname || ''}}</div>
      </van-col>
    </van-row>
    <van-row class="m_t_1 b_g_white">
      <van-col span="6">
        <div>
          <van-icon :name="wxUserInfo.headimgurl || ''" />
        </div>
      </van-col>
      <van-col span="18">
        <van-cell-group>
          <van-cell @click="toCaseListPage" title="我的案件" value="" is-link />
        </van-cell-group>
      </van-col>
    </van-row>
  </section>
</template>

<script>
import { getUrlParams } from "../assets/js/util.js";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      isShowAll: false,
      avatarUrl: "",
      wxUserInfo: {},
    };
  },
  created() {
    this.getCode();
  },
  computed: {
    ...mapState({
      userInfo(state) {
        return state.caseInfo.userInfo || {};
      },
    }),
  },
  methods: {
    ...mapActions(["getWxUserInfo"]),
    getCode() {
      // 判断是否有授权后用户信息,有信息则不再获取
      if(this.userInfo.nickname) {
        this.wxUserInfo = this.userInfo;
        return;
      }
      // 非静默授权，第一次有弹框
      // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      const code = getUrlParams(this.$route.query) || '';
      //把code传给后台获取用户信息
      this.getOpenId(code);
    },
    getOpenId(code) {
      // 通过code调用后台获取 openId等用户信息
      console.log('code---', code);
      this.getWxUserInfo({code}).then((data = {}) => {
        if (data.code === 200) {
          console.log('getWxUserInfo---200', data)
          const res = data.data;
          if (!res.nickname) {
            this.$notify('未授权成功，请重新进入');
            return;
          }
          this.wxUserInfo = res || {};
          this.isShowAll = true
        } else {
          this.$notify('请重新进入');
        }
      });
    },
    toCaseListPage() {
      this.$router.push("caseList");
    },
  },
};
</script>