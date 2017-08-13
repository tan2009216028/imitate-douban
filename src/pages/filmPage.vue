<template>
    <div class="db-movie-detail">
        <banner :title="showTitle"></banner>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapGetters } from 'vuex'
    import banner from "@/components/banner"
    export default {
        name:'filmPage',
        data() {
            return {
                showTitle:'聊聊你的观影感受'
            }
        },
        components:{
            banner
        }
    }
</script>

<style lang="scss" scoped>
</style>
