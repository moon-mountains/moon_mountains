<template>
    <section>
        <van-nav-bar title="取消绑定" left-arrow @click-left="onClickLeft"/>
        <van-form @submit="wxDeleteUserRelation">
        <van-field
        v-model="deleteRelationForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入账号密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">解除绑定</van-button>
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
                deleteRelationForm: {
                    password: ''
                },
                showUuid: false
            };
        },
        methods: {
            ...mapActions(
                [
                    'toDeleteWxUserRelation'
                ]),
            wxDeleteUserRelation() {
                this.toDeleteWxUserRelation(this.deleteRelationForm).then((data = {}) => {
                    if (data.code === 200) {
                        this.$notify({type: 'success', message: data.message})
                    } else {
                        this.$notify(data.message || '取消绑定失败');
                    }
                });
            },
            onClickLeft() {
                this.$router.go(-1);
            }
        }
    };
</script>