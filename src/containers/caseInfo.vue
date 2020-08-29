<template>
  <section>
    
    <van-form autocomplete="off" @submit="onSubmit">
      <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.salesmanName"
        name="业务员"
        label="业务员"
        placeholder="业务员"
        :rules="[{ required: true, message: '请填写业务员名' }]"
      />
      <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.insurePersion"
        name="公司名称"
        label="公司名称"
        placeholder="公司名称"
        :rules="[{ required: true, message: '请填写公司名称' }]"
      />
      <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.linkPerson"
        name="联系人"
        label="联系人"
        placeholder="联系人"
        :rules="[{ required: true, message: '请填写联系人' }]"
      />
      <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.insureHappenTime"
        name="出险时间"
        label="出险时间"
        placeholder="出险时间"
        :rules="[{ required: true, message: '请填写出险时间' }]"
      />
      <!-- <van-field
        v-model="caseInfoForm.saleMenName"
        name="事故原因"
        label="事故原因"
        placeholder="事故原因"
        :rules="[{ required: true, message: '请填写事故原因' }]"
      />-->
      <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.accidentReason"
        is-link
        @focus.prevent="isShowSelection = true"
        name="事故原因"
        label="事故原因"
        placeholder="事故原因"
        :rules="[{ required: true, message: '请填写事故原因' }]"
      />
      <van-action-sheet
        v-model="isShowSelection"
        :round="false"
        :actions="reasonList"
        @select="selectReason"
      ></van-action-sheet>
      <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.accidentDes"
        name="事故描述"
        label="事故描述"
        placeholder="事故描述"
      />
      <div class="m_16">
        <van-button block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </section>
</template>

<script>
import { cssEnumeration } from "../assets/js/enumerations.js";
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      isShowSelection: false,
      caseInfoForm: {
        salesmanName: "",
        insurePersion: "",
        linkPerson: "",
        insureHappenTime: "",
        accidentReason: "",
        accidentDes: "",
      },
      reasonList: [
        { name: "车泡水", className: cssEnumeration.className },
        { name: "车晒爆了", className: cssEnumeration.className },
      ],
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    ...mapActions(["saveReportCaseBaseInfo", "getWxUserInfo"]),
    getCode() {
      // 非静默授权，第一次有弹框
      // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      // const code =  this.$route.query.code;
      const code = this.getUrlParams("code");
      //把code传给后台获取用户信息
      this.getOpenId(code);
    },
    getOpenId(code) {
      // 通过code调用后台获取 openId等用户信息
      console.log(code);
      this.getWxUserInfo({ code: code }).then((data = {}) => {
        if (data.code === 200) {
          this.wxUserInfo = data.data;
        } else {
          // this.$AlertTips(data.message || "获取用户信息失败");
        }
      });
    },
    getUrlParams(name) {
      let url = decodeURIComponent(location.search);
      let theRequest = new Object();
      if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      let urlParams = Object.assign(theRequest, this.$route.query);
      if (urlParams) {
        return urlParams[name];
      }
      return null;
    },
    selectReason(item) {
      this.caseInfoForm.accidentReason = item.name;
      this.isShowSelection = false;
    },
    onSubmit() {
      this.saveReportCaseBaseInfo(this.claimForm).then((data = {}) => {
        if (data.code === 200) {
          this.$message.success("提交报案成功");
          // this.$router.push("userCenter");
        } else {
          // this.$AlertTips(data.message || "新增报案失败");
        }
      });
    },
  },
};
</script>