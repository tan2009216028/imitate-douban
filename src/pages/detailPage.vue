<template>
    <div class="db-detail-content">
        <banner :title="showTitle"></banner>
        <activity-content></activity-content>
    </div>　
</template>

<script type="text/javascript">
    import { mapState, mapActions } from 'vuex'
    import banner from "@/components/banner"
    import activityContent from "@/components/activityContent"
    export default {
        name:'detailPage',
        data() {
            return {
                showTitle:'每天看点好内容'
            }
        },
        components:{
            banner,activityContent
        }
    }
</script>

<style lang="scss">
</style>
