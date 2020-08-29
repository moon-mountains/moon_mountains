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
      <!-- <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.insureHappenTime"
        name="出险时间"
        label="出险时间"
        placeholder="出险时间"
        :rules="[{ required: true, message: '请填写出险时间' }]"
      /> -->
      <van-cell
      title="出险时间"
      is-link
      :value="caseInfoForm.insureHappenTime"
      @click="showPopup" />
    <van-popup v-model="showTime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
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
      /> -->
      <van-cell
      class="m_1"
      title="事故原因"
      is-link
      :value="caseInfoForm.accidentReason"
      @click="isShowSelection = true" />
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
import { getUrlParams } from "../assets/js/util.js";
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      showTime: false,
      isShowSelection: false,
      isLoadingShow: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2050, 11, 30),
      currentDate: new Date(),
      caseInfoForm: {
        salesmanName: "",
        insurePersion: "",
        linkPerson: "",
        insureHappenTime: '',
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
      const code = getUrlParams(this.$route.query) || '';
      //把code传给后台获取用户信息
      this.getOpenId(code);
    },
    getOpenId(code) {
      // 通过code调用后台获取 openId等用户信息
      console.log(code);
      this.getWxUserInfo({ code: code }).then((data = {}) => {
        if (data.code === 200) {
          const res = data.data;
          this.wxUserInfo = res;
        } else {
          // this.$AlertTips(data.message || "获取用户信息失败");
        }
      });
    },
    showPopup () {
      this.showTime = true
      this.isLoadingShow = true
      setTimeout(() => {
        this.isLoadingShow = false
      }, 500)
    },
    // 确认选择的时间
    confirmPicker (val) {
      let year = val.getFullYear()
      let month = val.getMonth() + 1
      let day = val.getDate()
      // let hour = val.getHours()
      // let minute = val.getMinutes()
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      // if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      // if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      // this.className = 'timeClass'
      // this.timeValue = `${year}-${month}-${day} ${hour}:${minute}`
      this.caseInfoForm.insureHappenTime = `${year}-${month}-${day}`
      this.showTime = false
    },
    // 选项格式化函数
    formatter (type, value) {
      if (type === 'year') {
        return `${value}年`
      } else if (type === 'month') {
        return `${value}月`
      } else if (type === 'day') {
        return `${value}日`
      } else if (type === 'hour') {
        return `${value}时`
      } else if (type === 'minute') {
        return `${value}分`
      } else if (type === 'second') {
        return `${value}秒`
      }
      return value
    },
    selectReason(item) {
      this.caseInfoForm.accidentReason = item.name;
      this.isShowSelection = false;
    },
    onSubmit() {
      this.saveReportCaseBaseInfo(this.claimForm).then((data = {}) => {
        if (data.code === 200) {
          this.$message.success("提交报案成功");
          this.$router.push("userCenter");
        } else {
          // this.$AlertTips(data.message || "新增报案失败");
        }
      });
    },
  },
};
</script>