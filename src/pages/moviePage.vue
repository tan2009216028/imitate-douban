<template>
    <div class="db-movie-content">
        <movie-scroll title="影院热映" type="movie" :sectionList="hotMovies" :toMoreUrl="baseUrl + 'movie/nowintheater?loc_id=118318'"></movie-scroll>
        <movie-scroll title="免费在线观影" type="movie" :sectionList="topMovies" :toMoreUrl="baseUrl + '/movie/watchonline'"></movie-scroll>
        <movie-scroll title="新片速递" type="movie" :sectionList="newMovies" :toMoreUrl="baseUrl + '/movie/latest'"></movie-scroll>
        <movie-scroll title="发现好电影" type="sectionTags" :sectionList="movieTags"></movie-scroll>
        <div class="db-movie-classify">
            <h2>分类浏览</h2>
            <ul class="clearFix">
                <li v-for="item in classifiedViewList">
                    <a :href="baseUrl + item.href">
                        {{item.title}}<span></span>
                    </a>
                </li>
                <li></li>
            </ul>
        </div>
        <down-load-app></down-load-app>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapActions } from 'vuex'
    import movieScroll from "@/components/sectionScroll"
    import downLoadApp from '@/components/downLoadApp'
    export default {
        name:'moviePage',
        data() {
            return {
                showType:true,
                baseUrl: 'https://m.douban.com/',
                classifiedViewList : [
                    {
                        title: '经典',
                        href: 'movie/classic'
                    },
                    {
                        title: '冷门佳片',
                        href: 'movie/underrated'
                    },
                    {
                        title: '豆瓣高分',
                        href: 'movie/doubantop'
                    },
                    {
                        title: '动作',
                        href: 'movie/action'
                    },
                    {
                        title: '喜剧',
                        href: 'movie/comedy'
                    },
                    {
                        title: '爱情',
                        href: 'movie/love'
                    },
                    {
                        title: '悬疑',
                        href: 'movie/mystery'
                    },
                    {
                        title: '恐怖',
                        href: 'movie/horror'
                    },
                    {
                        title: '科幻',
                        href: 'movie/scifi'
                    },
                    {
                        title: '治愈',
                        href: 'movie/sweet'
                    },
                    {
                        title: '文艺',
                        href: 'movie/artfilm'
                    },
                    {
                        title: '成长',
                        href: 'movie/youth'
                    },
                    {
                        title: '动画',
                        href: 'movie/animation'
                    },
                    {
                        title: '华语',
                        href: 'movie/chinese'
                    },
                    {
                        title: '欧美',
                        href: 'movie/western'
                    },
                    {
                        title: '韩国',
                        href: 'movie/korean'
                    },
                    {
                        title: '日本',
                        href: 'movie/japanese'
                    }
                ]
            }
        },
        computed:{
            ...mapState({
                hotMovies: state => state.movie.hotMovies,
                topMovies: state => state.movie.topMovies,
                newMovies: state => state.movie.newMovies,
                movieTags: state => state.movie.movieTags
            })
        },
        created(){
            this.getMovieList();
        },
        components:{
            movieScroll,downLoadApp
        },
        methods:{
            // 异步action暴露辅助方法
            ...mapActions([
                'getMovieList'
            ])
        }
    }
</script>

<style lang="scss">
    .db-movie-content{
        padding-top: 1rem;
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
