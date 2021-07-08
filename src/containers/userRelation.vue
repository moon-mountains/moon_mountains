<template>
    <section>
        <van-nav-bar title="账号关联" left-arrow @click-left="onClickLeft"/>
        <van-grid clickable :column-num="2">
            <van-grid-item icon="add-o" text="添加关联" to="/addUserRelation" />
            <van-grid-item icon="close" text="取消关联" to="/deleteUserRelation" />
        </van-grid>
        <van-notice-bar  background="#ecf9ff" left-icon="info-o" wrapable>
            一个微信号只能关联一个理赔账号，如需变更，先取消关联再添加关联
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