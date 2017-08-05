<template>
    <div class="db-home-page">
        <sub-nav></sub-nav>　　
        <home-list :list="getListArr"></home-list>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
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
        name: 'homeView',
        data() {
            return {}
        },
        components:{
            subNav,homeList,InfiniteLoading,loading
        },
        computed:{
            ...mapState({
                getListArr:state => state.activity.list
            })
        },
        methods:{
            onInfinite(){
                setTimeout(() => {
                    this.getMoreData();
                    //$InfiniteLoading:loaded事件,它将告诉InfiniteLoading组件，数据已经下载成功。
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
                }, 10000)
            },
            // 异步action暴露辅助方法
            ...mapActions([
                'getMoreData'
            ])
        }
    }
</script>

<style>
</style>
