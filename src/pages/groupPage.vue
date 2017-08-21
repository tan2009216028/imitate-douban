<template>
    <div class="db-group-content">
        <group-list v-if="showType" :dbGroupList="getGroupList"></group-list>
        <loading v-else></loading>
        <down-load-app></down-load-app>
    </div>
</template>

<script type="text/javascript">
    import groupList from "@/components/groupList"
    import loading from '@/components/loading'
    import downLoadApp from '@/components/downLoadApp'
    export default {
        name:'groupPage',
        data() {
            return {
                showType:false
            }
        },
        computed:{
            getGroupList(){
                return this.$store.state.group.groupList;
            }
        },
        created(){
            this.$store.dispatch({
                type: 'getGroupList',
            }).then(res => {
                this.showType = true;
            })
        },
        components:{
            groupList,loading,downLoadApp
        }
    }
</script>

<style lang="scss" scoped>
</style>
