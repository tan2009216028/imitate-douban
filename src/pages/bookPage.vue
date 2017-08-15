<template>
    <div class="db-book-content">
        <book-scroll title="最受关注图书｜虚构类" type="book"  :sectionList="novel" ></book-scroll>
        <book-scroll title="最受关注图书｜非虚构类" type="book" :sectionList="reality"></book-scroll>
        <book-scroll title="豆瓣书店" type="book" :sectionList="travel">
            <div slot="filePromItem" class="db-book-sell">
                <img class="corver" src="../assets/book-default.jpg" :alt="bookName">
                <div class="db-book-info">
                    <div class="db-book-title">
                        <span class="db-book-price">¥ {{bookPrice}}</span>
                        <p class="db-book-name">{{bookName}}</p>
                    </div>
                    <p class="db-book-describe">{{bookDes}}</p>
                </div>
            </div>
        </book-scroll>
        <book-scroll title="发现好书" type="sectionTags" :sectionList="bookTags"></book-scroll>
        <div class="db-book-classify">
            <h2>分类浏览</h2>
            <ul class="clearFix">
                <li v-for="item in classifiedViewList">
                    <a :href="baseUrl + item.href">
                        {{item.title}}<span></span>
                    </a>
                </li>
            </ul>
        </div>
        <down-load-app></down-load-app>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapActions } from 'vuex'
    import bookScroll from "@/components/sectionScroll"
    import downLoadApp from '@/components/downLoadApp'
    export default {
        data() {
            return {
                bookName:'未知大学',
                bookPrice:'168',
                bookDes:'“最终诗人像孩子和诗人的孩子”，波拉尼奥一生的文学病例',
                baseUrl: 'https://m.douban.com/',
                classifiedViewList : [
                    {
                        title: '小说',
                        href: 'book/novel'
                    },
                    {
                        title: '爱情',
                        href: 'book/love'
                    },
                    {
                        title: '历史',
                        href: 'book/history'
                    },
                    {
                        title: '外国文学',
                        href: 'book/foreign'
                    },
                    {
                        title: '青春',
                        href: 'book/youth'
                    },
                    {
                        title: '励志',
                        href: 'book/motivation'
                    },
                    {
                        title: '随笔',
                        href: 'book/essay'
                    },
                    {
                        title: '传记',
                        href: 'book/bio'
                    },
                    {
                        title: '推理',
                        href: 'book/detective'
                    },
                    {
                        title: '旅行',
                        href: 'book/travel'
                    },
                    {
                        title: '奇幻',
                        href: 'book/fantasy'
                    },
                    {
                        title: '经管',
                        href: 'book/business'
                    }
                ]
            }
        },
        computed:{
            ...mapState({
                novel: state => state.book.novel,
                reality: state => state.book.reality,
                travel: state => state.book.travel,
                bookTags: state => state.book.bookTags
            })
        },
        components:{
            bookScroll,downLoadApp
        },
        methods:{
            // 异步action暴露辅助方法
            ...mapActions([
                'getBookList'
            ])
        },
        created(){
            this.getBookList();
        }
    }
</script>

<style lang="scss" scoped>
    .db-book-content{
        .db-book-sell{
            display: flex;
            margin: 1.5rem 1.8rem 0.8rem 1.6rem;
            img{
                margin-right: 1.5rem;
                width: 10rem;
                height: 13.2rem;
            }
            .db-book-info{
                flex: 1;
                .db-book-title{
                    margin: 1rem 0;
                }
                .db-book-name{
                    margin-right: 4rem;
                    max-width: 100%;
                    line-height: 2.2rem;
                    font-size: 2rem;
                    color: #494949;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                }
                .db-book-price{
                    float: right;
                    line-height: 22px;
                    color: #E76648;
                    font-size: 1.6rem;
                }
                .db-book-describe{
                    display: -webkit-box;
                    line-height: 1.5;
                    font-size: 1.3rem;
                    font-weight: 300;
                    color: #9B9B9B;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }
            }
        }
        .db-book-classify{
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
            li:last-child,li:nth-last-child(2) {
                border-bottom: 0.1rem solid  #eee;
            }
        }
    }

</style>
