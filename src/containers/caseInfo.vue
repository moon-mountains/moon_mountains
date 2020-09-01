<template>
  <section v-if="isShowAll">
    <van-form autocomplete="off" @submit="onSubmit">
      <!-- <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.saleAgentName"
        name="业务员"
        label="业务员"
        placeholder="业务员"
        @click="isShowSelection = true" 
        :rules="[{ required: true, message: '请填写业务员名' }]"
      />-->
      <van-cell
        class="m_1"
        title="业务员"
        is-link
        :value="caseInfoForm.saleAgentName"
        @click="showPop(1)"
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
      <!-- <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.insureHappenTime"
        name="出险时间"
        label="出险时间"
        placeholder="出险时间"
        :rules="[{ required: true, message: '请填写出险时间' }]"
      />-->
      <van-cell title="出险时间" is-link :value="caseInfoForm.insureHappenTime" @click="showPopup" />
      <van-popup v-model="showTime" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="datetime"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          :loading="isLoadingShow"
          :formatter="formatter"
          @cancel="showTime = false"
          @confirm="confirmPicker"
        />
      </van-popup>

      <!-- <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.accidentReason"
        is-link
        @focus.prevent="isShowSelection = true"
        name="事故原因"
        label="事故原因"
        placeholder="事故原因"
        :rules="[{ required: true, message: '请填写事故原因' }]"
      />-->
      <van-cell
        class="m_1"
        title="事故原因"
        is-link
        :value="caseInfoForm.accidentReason"
        @click="showPop(2)"
      />
      <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.accidentDes"
        name="事故描述"
        label="事故描述"
        placeholder="事故描述"
      />
      <van-action-sheet
        v-model="isShowSelection"
        :round="false"
        :actions="renderPopList"
        @select="selectReason"
      ></van-action-sheet>
      <div class="m_16">
        <van-button block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </section>
</template>

<script>
import { cssEnumeration } from "../assets/js/enumerations.js";
import { getUrlParams } from "../assets/js/util.js";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      typeFlag: "",
      isShowAll: false,
      showTime: false,
      isShowSelection: false,
      isLoadingShow: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2050, 11, 30),
      currentDate: new Date(),
      caseInfoForm: {
        openid: "",
        saleAgentNo: "",
        caseInfoStatus: "0",
        saleAgentName: "",
        insurePersion: "",
        linkPerson: "",
        insureHappenTime: "",
        accidentReason: "",
        accidentDes: "",
      },
      renderPopList: [],
      reasonList: [
        { name: "车泡水", className: cssEnumeration.className },
        { name: "车晒爆了", className: cssEnumeration.className },
      ],
    };
  },
  created() {
    this.isShowAll = false;
    this.getCode();
  },
  computed: {
    ...mapState({
      // openid(state) {
      //   return state.caseInfo.userInfo.openid || "";
      // },
      userInfo(state) {
        return state.caseInfo.userInfo || {};
      },
    }),
  },
  methods: {
    ...mapActions([
      "saveReportCaseBaseInfo",
      "getWxUserInfo",
      "queryAllSalesman",
    ]),
    getqueryAllSalesman() {
      this.queryAllSalesman().then((data = {}) => {
        if (data.code === 200) {
          let res = data.data;
          this.renderPopList = res;
          this.renderPopList.forEach((item) => {
            item.name = item.nickName;
          });
          this.isShowSelection = true;
        } else {
          this.$notify(data.message || "暂无信息");
        }
      });
    },
    getCode() {
      // 判断是否有授权后用户信息,有信息则不再获取
      if(this.userInfo.nickname) {
        this.wxUserInfo = this.userInfo;
        this.isShowAll = true;
        return;
      }
      // 非静默授权，第一次有弹框
      // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      const code = getUrlParams(this.$route.query) || "";
      //把code传给后台获取用户信息
      this.getOpenId(code);
    },
    getOpenId(code) {
      // 通过code调用后台获取 openId等用户信息
      console.log("code---", code);
      this.getWxUserInfo({ code }).then((data = {}) => {
        if (data.code === 200) {
          console.log("getWxUserInfo---200", data);
          const res = data.data;
          if (!res.nickname) {
            this.$notify("未授权成功，请重新进入");
            return;
          }
          this.wxUserInfo = res;
          console.log('--token', res.token)
          window.sessionStorage.setItem('token', res.token || '');
          this.isShowAll = true;
        } else {
          this.$notify("请重新进入");
        }
      });
    },
    showPopup() {
      this.showTime = true;
      this.isLoadingShow = true;
      setTimeout(() => {
        this.isLoadingShow = false;
      }, 500);
    },
    // 确认选择的时间
    confirmPicker(val) {
      let year = val.getFullYear();
      let month = val.getMonth() + 1;
      let day = val.getDate();
      let hour = val.getHours()
      let minute = val.getMinutes()
      let second = val.getSeconds()
      if (month >= 1 && month <= 9) {
        month = `0${month}`;
      }
      if (day >= 1 && day <= 9) {
        day = `0${day}`;
      }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      if (second >= 0 && second <= 9) { second = `0${second}` }
      // this.className = 'timeClass'
      // this.timeValue = `${year}-${month}-${day} ${hour}:${minute}`
      this.caseInfoForm.insureHappenTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      this.showTime = false;
    },
    // 选项格式化函数
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      } else if (type === "hour") {
        return `${value}时`;
      } else if (type === "minute") {
        return `${value}分`;
      } else if (type === "second") {
        return `${value}秒`;
      }
      return value;
    },
    selectReason(item) {
      switch (this.typeFlag) {
        case 1: {
          this.caseInfoForm.saleAgentNo = item.userId;
          this.caseInfoForm.saleAgentName = item.name;
          break;
        }
        case 2: {
          this.caseInfoForm.accidentReason = item.name;
          break;
        }
      }
      this.isShowSelection = false;
    },
    onSubmit() {
      console.log("onSubmit-----", this.caseInfoForm);
      this.saveReportCaseBaseInfo(this.caseInfoForm).then((data = {}) => {
        console.log("saveReportCaseBaseInfo-----", data);
        if (data.code === 200) {
          this.$router.push("userCenter");
        } else {
          this.$notify(data.message || "提交失败了");
        }
        // this.$router.push("userCenter");
      });
    },
    showPop(type) {
      switch (type) {
        // 业务员
        case 1: {
          this.typeFlag = type;
          this.getqueryAllSalesman();
          break;
        }
        // 原因
        case 2: {
          this.typeFlag = type;
          this.renderPopList = this.reasonList;
          this.isShowSelection = true;
          break;
        }
      }
    },
  },
};
</script>