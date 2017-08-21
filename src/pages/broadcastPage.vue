<template>
    <div class="db-airing-content">
        <banner :title="showTitle"></banner>
        <div class="db-airing-user">
            <div class="db-airing-head">
                <img src="../assets/user.jpg" alt="">
                <span>登录发广播</span>
            </div>
            <div class="db-airing-publish">
                <span class="db-airing-talk" ></span>
                <span class="db-airing-camera"></span>
            </div>
        </div>
        <user-airing v-if="showType" :airingList="getAirList"></user-airing>
        <loading v-else></loading>
        <down-load-app></down-load-app>
    </div>　　
</template>

<script type="text/javascript">
    import banner from "@/components/banner"
    import loading from '@/components/loading'
    import downLoadApp from '@/components/downLoadApp'
    import userAiring from '@/components/userAiring'
    export default {
        name:"broadcastPage",
        data() {
            return {
                showTitle:'打开App，回复广播',
                showType:false
            }
        },
        components: {
            banner,loading,downLoadApp,userAiring
        },
        computed:{
            getAirList(){
                return this.$store.state.broadcast.status;
            }
        },
        created(){
            this.$store.dispatch({
                type: 'getBroadcastList',
            }).then(res => {
                this.showType = true;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .db-airing-content{
        .db-airing-user{
            position: relative;
            display: flex;
            padding: 1rem 1.8rem  0.9rem;
            height: 4rem;
            overflow: hidden;
            border-bottom: 0.1rem solid #E8E8E8;
            .db-airing-head{
                flex: 1;
                img{
                    display: inline-block;
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                span{
                    display: inline-block;
                    padding-left: 1rem;
                    line-height: 4rem;
                    font-size: 1.5rem;
                    color: #aaa;
                    vertical-align: middle;
                }
            }
            .db-airing-publish{
                span{
                    display: inline-block;
                    margin-left: 0.8rem;
                    width: 4rem;
                    height: 4rem;
                }
                .db-airing-talk{
                    background: url("../assets/pen.svg") center center no-repeat;
                    background-size: 2.4rem 2.4rem;
                }
                .db-airing-camera{
                    background: url("../assets/camera.svg") center center no-repeat;
                    background-size: 2.4rem 2.4rem;
                }
            }
        }
    }
</style>
