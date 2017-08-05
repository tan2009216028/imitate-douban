<template>
    <div class="db-home-list">
        <ul id="homeList">
            <li v-for="item in list">
                <a href="">
                    <div class="db-feed-content">
                        <div class="db-feed-title">
                            <h3>{{item.title}}</h3>
                            <p>{{item.content | subStr}}</p>
                        </div>
                        <div class="db-feed-img"><p></p></div>
                    </div>
                    <div class="author">by&nbsp;<span class="name">豆瓣电影</span><span class="db-feed-label right">来自栏目 瓣嘴</span></div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'homeList',
        props: {
            mold: {
                type: String,
                default: 'basic'
            },
            list: {
                type: Array,
                required: true
            }
        },
        watch: {
            list: function (t, e) {
                debugger
            }
        },
        data () {
            return {
            }
        },
        filters: {
            subStr: function (value) {
                value.replace(/<.+>|\s/, '')
                return value.slice(0, 30)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .db-home-list{

    }
    .db-home-list{
        li{
            padding: 2.5rem 1.8rem 2.5rem 0;
            margin-left: 1.8rem;
        }
        .db-feed-content{
            display: flex;
        }
        .author{
            padding-top: 1rem;
            font-size: 1.2rem;
            color: #ccc;
            span{
                font-size: 1.2rem;
                color: #ccc;
            }
        }
        .db-feed-content .db-feed-title{
            flex: 1;
        }
        .db-feed-content h3{
            margin-bottom: 0.6rem;
            line-height: 1.41;
            text-align: justify;
            font-size: 1.7rem;
            font-weight: 500;
            color: #494949;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .db-feed-content p{
            line-height: 1.5;
            text-align: justify;
            color: #aaa;
            font-size: 1.2rem;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        .db-feed-content .db-feed-img{
            margin-left: 2.5rem;
            width: 25.6%;
        }
        .db-feed-img p{
            padding-top: 100%;
            background: transparent url("//qnmob2.doubanio.com/img/files/file-1501671545.jpg?imageView2/2/q/80/w/330/h/330/format/jpg") center center no-repeat;
            background-size: cover;
        }
    }
</style>
