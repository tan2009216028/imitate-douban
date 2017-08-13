<template>
    <section class="db-movie-item">
        <header>
            <h2>{{title}}</h2>
            <a :href="toMoreUrl" v-if="type !== 'movieTags'">更多</a>
        </header>
        <loading v-show="!showType"></loading>
        <div class="db-movie-list" v-if="showType">
            <div v-if="movieList.length > 0">
                <ul v-if="type === 'movieTags'">
                    <li class="db-find-movie" v-for="item in movieList" :style="{borderColor: item.color}">
                        <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
                    </li>
                </ul>
                <ul v-else>
                    <li v-for="item in movieList">
                        <router-link :to="{name:'movieDescribe',query:{film:item.id}}">
                            <img v-if="item.images" :src="item.images.large" :alt="item.title">
                            <p class="db-movie-title">{{item.title}}</p>
                            <rating v-if="item.rating" :rating="item.rating"></rating>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="db-no-content" v-else>暂无内容，请稍后重试！</div>
        </div>
    </section>
</template>

<script type="text/javascript">
    import rating from '@/components/rating'
    import loading from '@/components/loading'
    export default {
        data() {
            return {
                showType:false
            }
        },
        props:{
            title:{
                type: String,
                required: true
            },
            type:{
                type: String,
                required: true
            },
            toMoreUrl:String,
            movieList: {
                type: Array,
                required: true
            }
        },
        mounted(){
            this.$nextTick(function () {
                setTimeout(() => {
                    this.showType = true;
                },2500)
            })
        },
        components:{
            rating,loading
        }
    }
</script>

<style lang="scss" scoped="">
    .db-movie-item{
        padding-top: 1rem;
        header{
            padding: 0 1.6rem;
            height: 2.4rem;
            line-height: 2.4rem;
            h2{
                display: inline-block;
                min-width: 4em;
                font-size: 1.68rem;
                font-weight: normal;
                color: #111;
            }
            a{
                float: right;
                font-size: 1.44rem;
                color: #42bd56;
            }
        }
        .db-movie-list{
            ul{
                padding: 0.8rem 0;
                overflow-x: auto;
                white-space: nowrap;
            }
            li{
                display: inline-block;
                width: 10rem;
                margin-left: 1rem;
                vertical-align: middle;
                text-align: center;
                img{
                    display: block;
                    width: 10rem;
                    height: 15rem;
                }
            }
            li:first-child{
                margin-left: 1.5rem;
            }
            li:last-child{
                margin-right: 1.5rem;
            }
            .db-movie-title{
                margin-top: 1rem;
                line-height: 1.6rem;
                font-size: 1.6rem;
                color: #111;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .db-find-movie:empty{
                display: block;
                height: 0.1rem;
                border: 0;
                margin: 0;
            }
            .db-find-movie{
                display: inline-block;
                width: auto;
                margin: 0 0 0.8rem 1.6rem;
                font-size: 1.6rem;
                border: solid 0.1rem;
                border-radius: 0.4rem;
                vertical-align: middle;
                a{
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 1.55rem;
                    letter-spacing: .1em;
                    text-align: center;
                }
            }
        }
        .db-no-content{
            line-height: 5rem;
            font-size: 1.44rem;
            color: #42bd56;
            text-align: center;
        }
    }
</style>
