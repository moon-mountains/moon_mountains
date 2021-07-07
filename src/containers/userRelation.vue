<template>
    <section>
        <van-nav-bar title="用户绑定" left-arrow @click-left="onClickLeft"/>
        <van-grid clickable :column-num="2">
            <van-grid-item icon="add-o" text="添加绑定" to="/addUserRelation" />
            <van-grid-item icon="close" text="取消绑定" to="/deleteUserRelation" />
        </van-grid>
        <van-notice-bar  background="#ecf9ff" left-icon="info-o" wrapable="true">
            一个微信号只能绑定一个理赔账号，如需变更，先取消绑定再添加
        </van-notice-bar>
    </section>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            }
        }
    };
</script>