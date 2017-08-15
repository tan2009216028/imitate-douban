<template>
    <div class="db-book-detail">
        <banner :title="showTitle"></banner>
        <template v-if="showType">
            <div class="db-book-content">
                <h1 class="db-book-title">{{bookData.title}}</h1>
                <div class="db-book-info">
                    <div class="db-info-left">
                        <rating :rating="bookData.rating">
                            <label slot="ratingsCount" class="db-book-count">{{bookData.ratings_count}}人评价</label>
                        </rating>
                        <template v-if="bookData.author && bookMeta">
                            <p class="db-book-meta">{{bookMeta}}</p>
                        </template>
                    </div>
                    <div class="db-info-right">
                        <img v-if="bookData.images" :src="bookData.images.large" alt="bookData.title">
                    </div>
                </div>
                <div class="db-book-buy">
                    <a>在豆瓣购买<span>{{bookData.price || 31.0}}起</span></a>
                    <a>其他电商购买<span>中国图书网 {{bookData.price || 31.0}}起</span></a>
                </div>
                <div class="db-book-idea">
                    <router-link :to="{ name: 'loginPage'}">想读</router-link>
                    <router-link :to="{ name: 'loginPage'}">在读</router-link>
                    <router-link :to="{ name: 'loginPage'}">读过</router-link>
                </div>
                <div class="db-book-introduce">
                    <h2>{{bookData.title}}的简介</h2>
                    <div>
                        <template v-if="bookSummary && bookData.summary">
                            {{isExpand ? (bookSummary + "……") : bookData.summary}}
                        </template>
                        <a v-show="isExpand" v-on:click="introduceExpand">
                            (展开)
                        </a>
                    </div>
                </div>
                <div class="db-book-kind" v-if="bookData.tags">
                    <h2>查看更多豆瓣高分好书</h2>
                    <ul>
                        <li v-for="tagItem in bookData.tags">
                            <a>{{tagItem.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <book-scroll title="推荐最后的精灵的豆列" type="sectionTags" :sectionList="bookTags"></book-scroll>
            <down-load-app></down-load-app>
        </template>
        <loading v-else></loading>
    </div>
</template>

<script type="text/javascript">
    import {mapState, mapGetters} from 'vuex'
    import banner from "@/components/banner"
    import loading from '@/components/loading'
    import rating from '@/components/rating'
    import bookScroll from "@/components/sectionScroll"
    import downLoadApp from '@/components/downLoadApp'

    export default {
        name: 'bookDetailPage',
        data() {
            return {
                showTitle: '聊聊你的阅读感受',
                showType: false,
                isExpand: true
            }
        },
        components: {
            banner, loading, rating, bookScroll, downLoadApp
        },
        computed: {
            // 获取图书数据
            ...mapState({
                bookData: state => state.bookSynopsis.bookData,
                bookTags: state => state.bookSynopsis.bookTags
            }),
            // 获取计算后的状态
            ...mapGetters({
                bookMeta: 'bookMeta',
                bookSummary: 'bookSummary'
            })
        },
        created() {
            const id = this.$route.query.file;
            this.$store.dispatch({
                type: 'getBookItem',
                id: id,
            }).then(res => {
                this.showType = true;
            })
        },
        methods: {
            introduceExpand() {
                this.isExpand = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .db-book-detail {
        .db-book-content {
            margin: 0 1.8rem;
        }
        .db-book-title {
            margin: 3rem 0 0.5rem;
            font-size: 2.4rem;
            line-height: 3.2rem;
            word-break: break-all;
            font-weight: normal;
        }
        .db-book-info {
            display: flex;
            padding-bottom: 1.5rem;
            border-bottom: 0.1rem solid #E8E8E8;
            .db-info-left {
                padding-right: 1rem;
                flex: 1;
                .db-book-count {
                    font-size: 1.3rem;
                    color: #aaa;
                    vertical-align: bottom;
                }
            }
            .db-info-right {
                width: 10rem;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .db-book-meta {
                margin-top: 1.5rem;
                padding-right: 2.4rem;
                line-height: 1.6;
                font-size: 1.4rem;
                color: #494949;
            }
            .db-open-app {
                display: block;
                margin-top: 1rem;
                font-size: 1.4rem;
                color: #42bd56;
            }
        }
        .db-book-buy{
            a{
                display: block;
                padding: 1rem 0;
                line-height: 2.4rem;
                font-size: 1.5rem;
                color: #42bd56;
                border-bottom: 0.1rem solid #E8E8E8;
                span{
                    float: right;
                    font-size: 1.4rem;
                    color: #ccc;
                }
            }
        }
        .db-book-idea {
            display: flex;
            margin: 3rem 0;
            a {
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
            a:last-child {
                margin: 0;
            }
        }
        .db-book-introduce {
            h2 {
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
                color: #aaa;
            }
            div {
                margin-bottom: 1.5rem;
                line-height: 1.4;
                font-size: 1.5rem;
                color: #494949;
                a {
                    display: inline-block;
                    color: #42bd56;
                }
            }
        }
        .db-book-kind {
            h2 {
                margin-bottom: 2rem;
                font-size: 1.5rem;
                color: #aaa;
            }
            ul{
                margin-bottom: 1.5rem;
            }
            li {
                display: inline-block;
                margin: 1rem 1rem 0 0;
                font-size: 1.5rem;
                a {
                    display: block;
                    padding: 0 1.2rem;
                    line-height: 2.8rem;
                    font-size: 1.5rem;
                    border-radius: 2.8rem;
                    text-align: center;
                    color: #494949;
                    background: #f5f5f5;
                }
            }
        }
        .db-book-classify {
            h2 {
                padding: 0 1.6rem;
                height: 2.6rem;
                line-height: 2.6rem;
                font-weight: normal;
            }
            ul {
                margin: 1.6rem 0 0 1.6rem;
            }
            li {
                float: left;
                width: 50%;
                padding-right: 1.8rem;
                height: 4.2rem;
                line-height: 4.2rem;
                font-size: 1.6rem;
                border-top: 0.1rem solid #eee;
                border-right: 0.1rem solid #eee;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                a {
                    color: #42bd56;
                }
                span {
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
            li:nth-child(2n) {
                padding-left: 1.8rem;
            }
        }
    }
</style>
