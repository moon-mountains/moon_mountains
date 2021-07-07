<template>
    <section>
        <van-nav-bar title="添加绑定" left-arrow @click-left="onClickLeft"/>
        <van-form @submit="wxUserRelation">
        <van-field
        v-model="relationForm.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
        v-model="relationForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
        v-model="relationForm.code"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
        >
        <div slot="button">
        <img :src="verifyCode" @click="getVerifyCode"/>
        </div>
        </van-field>
        <van-field
        v-model="relationForm.uuid"
        v-show="showUuid"
        />
        <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">绑定</van-button>
        </div>
        </van-form>
    </section>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                verifyCode: '',
                relationForm: {
                    username: '',
                    password: '',
                    code: '',
                    uuid: ''
                },
                showUuid: false
            };
        },
        created() {
            this.getVerifyCode()
        },
        methods: {
            ...mapActions(
                [
                    'toGetVerifyCode',
                    'toWxUserRelation'
                ]),
            getVerifyCode() {
                this.toGetVerifyCode().then((data = {}) => {
                    if (data.code === 200) {
                        let res = data.data
                        this.verifyCode = res.img
                        this.relationForm.uuid = res.uuid
                    }
                });
            },
            wxUserRelation() {
                this.toWxUserRelation(this.relationForm).then((data = {}) => {
                    if (data.code === 200) {
                        this.$notify({type: 'success', message: data.message})
                    } else {
                        this.$notify(data.message || '绑定失败');
                    }
                });
            },
            onClickLeft() {
                this.$router.go(-1);
            }
        }
    };
</script>