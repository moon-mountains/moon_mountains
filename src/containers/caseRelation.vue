<template>
    <section>
        <van-nav-bar title="案件绑定" left-arrow @click-left="onClickLeft"/>
        <van-form @submit="toCaseInfoRelation">
            <van-field
                    v-model="caseNo"
                    name="案件号"
                    label="案件号"
                    placeholder="案件号"
                    :rules="[{ required: true, message: '请填写案件号' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">绑定</van-button>
            </div>
        </van-form>
    </section>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        data() {
            return {
                caseNo: ''
            };
        },
        methods: {
            ...mapActions(["toCaseBaseInfoRelation"]),
            toCaseInfoRelation() {
                this.toCaseBaseInfoRelation({caseNo: this.caseNo}).then((data = {}) => {
                    if (data.code === 200) {
                        this.$notify({type: "success", message: data.message});
                    } else {
                        this.$notify(data.message || "绑定失败");
                    }
                });
            },
            onClickLeft() {
                this.$router.go(-1);
            }
        },
    };
</script>