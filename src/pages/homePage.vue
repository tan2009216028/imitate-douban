<template>
    <div class="db-home-page">
        <sub-nav></sub-nav>　　
        <home-list :list="getListArr"></home-list>
        <infinite-loading @infinite="infiniteLoading" :distance="distance" ref="infiniteLoading">
            <loading slot="spinner"></loading>
        </infinite-loading>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapActions } from 'vuex'
    import InfiniteLoading from 'vue-infinite-loading'
    import subNav from "@/components/subNav"
    import loading from '@/components/loading'
    import homeList from '@/components/homeList'
    export default {
        name: 'homePage',
        data() {
            return {
                distance:30
            }
        },
        components:{
            subNav,homeList,InfiniteLoading,loading
        },
        computed:{
            ...mapState({
                getListArr:state => state.activity.list
            })
        },
        mounted (){
            this.$nextTick(function () {
                if(this.$userInfo.userAccount){
                    this.$message.show("欢迎"+this.$userInfo.userAccount+'回来');
                }
            })
        },
        methods:{
            //父级节点必须要有高度
            infiniteLoading($state) {
                setTimeout(() => {
                    this.$store.dispatch({
                        type: 'getActivityList'
                    }).then(res => {
                        console.log(res);
                        $state.loaded();
                    });
                },1000)
            },
            // 异步action暴露辅助方法
            ...mapActions([
                'getActivityList'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    .db-home-page{
        position: relative;
        height: calc(100vh - 4.7rem)
    }
</style>
