<template>
  <section>
    <van-form autocomplete="off" @submit="onSubmit">
      <van-field
        class="m_1"
        input-align="right"
        v-model="caseInfoForm.saleMenName"
        name="业务员"
        label="业务员"
        placeholder="业务员"
        :rules="[{ required: true, message: '请填写业务员名' }]"
      />
      <van-field
      class="m_1"
        input-align="right"
        v-model="caseInfoForm.saleMenName"
        name="公司名称"
        label="公司名称"
        placeholder="公司名称"
        :rules="[{ required: true, message: '请填写公司名称' }]"
      />
      <van-field
      class="m_1"
        input-align="right"
        v-model="caseInfoForm.saleMenName"
        name="联系人"
        label="联系人"
        placeholder="联系人"
        :rules="[{ required: true, message: '请填写联系人' }]"
      />
      <van-field
      class="m_1"
        input-align="right"
        v-model="caseInfoForm.saleMenName"
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
        v-model="caseInfoForm.reason"
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
        v-model="caseInfoForm.saleMenName"
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
    onSubmit() {
      console.log("sdfsf");
      this.$router.push('userCenter')
    },
  },
};
</script>