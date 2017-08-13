<template>
    <div class="db-movie-detail">
        <banner :title="showTitle"></banner>
        <template v-if="showType">
            <div class="db-movie-content">
                <h1 class="db-movie-title">{{movieData.title}}</h1>
                <div class="db-movie-info">
                    <div class="db-info-left">
                        <rating :rating="movieData.rating">
                            <label slot="ratingsCount" class="db-movie-count">{{movieData.ratings_count}}人评价</label>
                        </rating>
                        <template v-if="movieData.genres && movieMeta">
                            <p class="db-movie-meta">{{movieMeta}}</p>
                            <a class="db-open-app">用App查看影人资料</a>
                        </template>
                    </div>
                    <div class="db-info-right">
                        <img v-if="movieData.images" :src="movieData.images.large" alt="movieData.title">
                    </div>
                </div>
                <div class="db-movie-idea">
                    <router-link :to="{ name: 'LoginView'}">想看</router-link>
                    <router-link :to="{ name: 'LoginView'}">看过</router-link>
                </div>
                <div class="db-movie-introduce">
                    <h2>{{movieData.title}}的简介</h2>
                    <div>
                        <template v-if="movieSummary && movieData.summary">
                            {{isExpand ? (movieSummary + "……") : movieData.summary}}
                        </template>
                        <a  v-show="isExpand" v-on:click="introduceExpand">
                            (展开)
                        </a>
                    </div>
                </div>
                <div class="db-movie-person" v-if="movieData.casts">
                    <h2>{{movieData.title}}的主演</h2>
                    <div class="db-person-list">
                        <ul>
                            <li v-for="movieCast in movieData.casts">
                                <img :src="movieCast.avatars.large" alt="movieCast.name">
                                <p>{{movieCast.name}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <movie-scroll title="推荐的豆列" type="movieTags" :movieList="movieTags"></movie-scroll>
            <down-load-app></down-load-app>
        </template>
        <loading v-else></loading>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapGetters } from 'vuex'
    import banner from "@/components/banner"
    import loading from '@/components/loading'
    import rating from '@/components/rating'
    import movieScroll from "@/components/movieScroll"
    import downLoadApp from '@/components/downLoadApp'
    export default {
        name:'filmPage',
        data() {
            return {
                showTitle:'聊聊你的观影感受',
                showType:false,
                isExpand: true
            }
        },
        computed: {
            // 获取电影数据
            ...mapState({
                movieData: state => state.movieSynopsis.movieData,
                movieTags: state => state.movie.movieTags
            }),
           // 获取计算后的状态
            ...mapGetters({
                movieMeta: 'movieMeta',
                movieSummary: 'movieSummary',
//                genres: 'genres'
            })
        },
        components:{
            banner,loading,rating,movieScroll,downLoadApp
        },
        created(){
            const id = this.$route.query.film;
            this.$store.dispatch({
                type: 'getMovieItem',
                id: id,
            }).then(res => {
                this.showType = true;
            })
        },
        methods:{
            introduceExpand(){
                this.isExpand = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .db-movie-detail{
        .db-movie-content{
            margin: 0 1.8rem;
        }
        .db-movie-title{
            margin: 3rem 0 0.5rem;
            font-size: 2.4rem;
            line-height: 3.2rem;
            word-break: break-all;
            font-weight: normal;
        }
        .db-movie-info{
            display: flex;
            .db-info-left{
                padding-right: 1rem;
                flex: 1;
                .db-movie-count{
                    font-size: 1.3rem;
                    color: #aaa;
                    vertical-align: bottom;
                }
            }
            .db-info-right{
                width: 10rem;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .db-movie-meta{
                margin-top: 1.5rem;
                padding-right: 2.4rem;
                line-height: 1.6;
                font-size: 1.4rem;
                color: #494949;
            }
            .db-open-app{
                display: block;
                margin-top: 1rem;
                font-size: 1.4rem;
                color: #42bd56;
            }
        }
        .db-movie-idea{
            display: flex;
            margin: 3rem 0;
            a{
                display: block;
                flex: 1;
                height: 3rem;
                margin-right: 1rem;
                line-height: 3rem;
                font-size: 1.5rem;
                text-align: center;
                color: #ffb712;
                border: 0.1rem solid #ffb712;
                border-radius: 0.3rem;
            }
            a:last-child{
                margin: 0;
            }
        }
        .db-movie-introduce{
            h2{
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
                color: #aaa;
            }
            div{
                margin-bottom: 1.5rem;
                line-height: 1.4;
                font-size: 1.5rem;
                color: #494949;
                a{
                    display: inline-block;
                    color: #42bd56;
                }
            }
        }
        .db-movie-person{
            h2{
                margin-bottom: 2rem;
                font-size: 1.5rem;
                color: #aaa;
            }
            ul{
                overflow-x: auto;
                white-space: nowrap;
            }
            li{
                display: inline-block;
                width: 7.5rem;
                margin-right: 0.5rem;
                img{
                    display: block;
                    width: 100%;
                    height: 10.8rem;
                }
                p{
                    padding: 0.4rem 0;
                    height: 3.2rem;
                    line-height: 1.6rem;
                    font-size: 1.4rem;
                    color: #494949;
                    text-align: center;
                    overflow: hidden;
                    white-space: normal;
                }
            }
        }
        .db-movie-classify{
            h2{
                padding: 0 1.6rem;
                height: 2.6rem;
                line-height: 2.6rem;
                font-weight: normal;
            }
            ul{
                margin: 1.6rem 0 0 1.6rem;
            }
            li{
                float: left;
                width: 50%;
                padding-right: 1.8rem;
                height: 4.2rem;
                line-height: 4.2rem;
                font-size: 1.6rem;
                border-top:  0.1rem solid #eee;
                border-right: 0.1rem solid #eee;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                a{
                    color: #42bd56;
                }
                span{
                    float: right;
                    display: inline-block;
                    width: 0.8rem;
                    height: 0.8rem;
                    margin-top: 1.5rem;
                    border-right: solid 0.1rem #ccc;
                    border-bottom: solid 0.1rem #ccc;
                    font-weight: bold;
                    color: #ccc;
                    transform: rotate(-45deg);
                }
            }
            li:nth-child(2n){
                padding-left: 1.8rem;
            }
        }
    }
</style>
