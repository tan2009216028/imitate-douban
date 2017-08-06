<template>
    <div class="db-home-list">
        <ul id="homeList">
            <li v-for="item in list">
                <router-link :to="{name: 'detailPage', params: { id: item.id },query:{activityId:item.id}}">
                    <div class="db-feed-content">
                        <div class="db-feed-title">
                            <h3>{{item.title}}</h3>
                            <p>{{item.content | subStr}}</p>
                        </div>
                        <div class="db-feed-img"><p :style="{backgroundImage: 'url('+item.image_hlarge+')'}"></p></div>
                    </div>
                    <div class="author">by&nbsp;<span class="name">{{item.owner.name}}</span><span class="db-feed-label right">主题 {{item.category_name}}</span></div>
                </router-link>
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
        data () {
            return {
            }
        },
        filters: {
            subStr: function (value) {
                value.replace(/<.+>|\s/, '');
                return value
            }
        }
    }
</script>

<style lang="scss" scoped>
    .db-home-list{
        li{
            padding: 2.5rem 1.8rem 2.5rem 0;
            margin-left: 1.8rem;
            border-bottom: 1px solid #e3e3e3;
        }
        .db-feed-content{
            display: flex;
            word-break: break-all;
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
            background-color: transparent;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
</style>
