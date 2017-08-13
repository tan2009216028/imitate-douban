<template>
    <div class="db-activity-layout">
        <div class="db-activity-city"><a :href="cityWide">豆瓣同城</a><span>{{activityDetail.loc_name}}</span></div>
        <template v-if="showType">
            <div class="db-activity-content">
                <h1 class="db-activity-title">{{activityDetail.title}}</h1>
                <div class="db-activity-img">
                    <img :src="activityDetail.image_hlarge"/>
                </div>
                <div class="flexible-box db-activity-detail">
                    <span class="db-detail-title">时间:&nbsp;&nbsp;</span>
                    <div class="adaptive-box-flex db-detail-adaptive">
                        {{activityDetail.begin_time}}<br>{{activityDetail.end_time}}
                    </div>
                </div>
                <div class="flexible-box db-activity-detail">
                    <span class="db-detail-title">地点:&nbsp;&nbsp;</span>
                    <div class="adaptive-box-flex db-detail-adaptive">
                        {{activityDetail.address}}
                    </div>
                </div>
                <div class="flexible-box db-activity-detail">
                    <span class="db-detail-title">费用:&nbsp;&nbsp;</span>
                    <div class="adaptive-box-flex db-detail-adaptive">
                        {{activityDetail.fee_str}}
                    </div>
                </div>
                <div class="flexible-box db-activity-detail">
                    <span class="db-detail-title">类型:&nbsp;&nbsp;</span>
                    <div class="adaptive-box-flex db-detail-adaptive">
                        {{activityDetail.category_name}}
                    </div>
                </div>
                <div class="flexible-box db-activity-detail" v-if="activityDetail.owner">
                    <span class="db-detail-title">主办方:&nbsp;&nbsp;</span>
                    <div class="adaptive-box-flex db-detail-adaptive">
                        {{activityDetail.owner.name}}
                    </div>
                </div>
                <div class="flexible-box db-activity-detail">
                    <span class="db-detail-title">起始时间:&nbsp;&nbsp;</span>
                    <div class="adaptive-box-flex db-detail-adaptive">
                        {{activityDetail.time_str}}
                    </div>
                </div>
                <div class="db-activity-detail db-activity-interest">
                    <span class="num">{{activityDetail.wisher_count}}</span>人感兴趣 &nbsp;
                    <span class="num">{{activityDetail.participant_count}}</span>人要参加 &nbsp;
                </div>
                <div class="db-activity-stage">
                    <h3>活动须知</h3>
                    <div class="db-stage-content">报名后请一定与主办方联系，以免遗漏。</div>
                </div>
                <div class="db-activity-stage">
                    <h3>活动详情</h3>
                    <div class="db-stage-content J_test" v-html="activityThisContent"></div>
                </div>
            </div>
            <down-load-app></down-load-app>
        </template>
        <loading v-show="!showType"></loading>
    </div>　　
</template>

<script type="text/javascript">
    import loading from '@/components/loading'
    import downLoadApp from '@/components/downLoadApp'
    export default {
        name:'activityContent',
        data() {
            return {
                cityWide:'https://www.douban.com/location/chengdu/',
                showType:false
            }
        },
        created () {
            //获取通过路由获取活动id
            const activityId = this.$route.query.activityId;
            //vuex通过dispatch分发触发getActivityDetail，同时携带参数详情id,异步返回结果后showType变更
            this.$store.dispatch({
                type: 'getActivityDetail',
                activityId: activityId
            }).then(res => {
                this.showType = true;
                console.log(res)
            })
        },
        directives:{
            imgsrc:{
                inserted:function (el, binding,vnode,oldVnode) {
                    debugger

                }
            }
        },
        computed:{
            activityDetail(){
                return this.$store.state.activity.detailItem
            },
            activityThisContent: function () {
                return this.$store.state.activity.detailItem.content;
            }
        },
        components:{
            loading,downLoadApp
        }
    }
</script>

<style lang="scss" scoped="">
    .db-activity-city{
        display: flex;
        padding: 1rem;
        height: 5rem;
        overflow: hidden;
        background: #f6f5f2;
        align-items: center;
        a{
            font-family: "Microsoft YaHei UI";
            font-weight: bolder;
            font-size: 2.4rem;
            color: #E85206;
        }
        span{
            display: inline-block;
            margin-left: 1rem;
            margin-top: 0.2rem;
            padding: 0.5rem 0.6rem;
            font-size: 1.4rem;
            color: #333;
            border-radius: 4px;
            background-color: #dedede;
        }
    }
    .db-activity-content{
        padding: 1rem;
        margin-top: 1rem;
        .db-activity-title{
            margin: 1rem 0 2rem;
            color: #494949;
            text-align: center;
            text-align-last: left;
        }
        .db-activity-img{
            margin-bottom: 2rem;
            text-align: center;
            img{
                width: 100%;
                max-width: 22rem;
                height: auto;
            }
        }
        .db-activity-detail{
            margin-bottom: 0.5rem;
            .db-detail-title{
                line-height: 1.5;
                font-size: 1.2rem;
                color: #666666;
            }
            .db-detail-adaptive{
                padding-left: 0.2rem;
                line-height: 1.5;
                font-size: 1.2rem;
                color: #111;
            }
        }
        .db-activity-interest{
            padding: 0.5rem 0;
            font-size: 1.2rem;
            color: #666666;
            span{
                font-size: 1.2rem;
                font-weight: bolder;
            }
        }
        .db-activity-stage{
            margin: 1rem 0 2rem;
            h3{
                margin-bottom: 0.8rem;
                font-size: 1.2rem;
                font-weight: normal;
                color: #072;
            }
            .db-stage-content{
                width: 100%;
                line-height: 1.5;
                word-wrap: break-word;
                overflow: hidden;
                font-size: 1.2rem;
                color: #111;
            }
        }
    }
</style>
