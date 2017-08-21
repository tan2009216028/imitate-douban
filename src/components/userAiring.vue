<template>
    <div class="db-status-list">
        <ul>
            <li v-for="item in airingList">
                <div class="db-status-item">
                    <div class="db-status-img">
                        <img src="../assets/douban-app-img.png" alt="">
                    </div>
                    <div class="db-status-info">
                        <p class="db-status-title"><span>豆瓣</span>{{item.status.activity}}</p>
                        <p class="db-status-create">{{item.status.create_time}}</p>
                        <div class="db-status-detail">
                            <template  v-if="item.status.card">
                                <p v-if="item.status.card.title" class="db-article-title">{{item.status.card.title}}</p>
                                <div :class="{ 'db-article-content': true,'db-img-article':item.status.card.image}">
                                    <p class="db-article-ellipsis">{{item.status.card.subtitle}}</p>
                                    <img v-if="item.status.card.image" src="../assets/userAri.jpg" >
                                </div>
                            </template>
                            <template v-else-if="item.status.text">
                                <p class="db-article-text">{{item.status.text}}</p>
                            </template>
                            <template v-else-if="item.status.reshared_status">
                                <p class="db-article-text">{{item.status.reshared_status.text}}</p>
                            </template>
                        </div>
                        <div class="db-status-thumbs">
                            <span class="btn like"><label>{{item.status.like_count}}</label></span>
                            <span class="btn comment"><label>{{item.status.comments_count}}</label></span>
                            <span class="btn retweet"><label>{{item.status.reshares_count}}</label></span>
                            <span class="btn more"></span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>　　
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
            }
        },
        props:{
            airingList: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .db-status-list{
        ul{
            padding: 0 1.8rem;
        }
        li{
            position: relative;
            margin: 2rem 0;
            .db-status-item{
                display: flex;
            }
            .db-status-img{
                margin-right: 1rem;
                width: 4rem;
                height: 4rem;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .db-status-info{
                flex: 1;
                .db-status-title{
                    margin-top: 0.5rem;
                    line-height: 1;
                    font-size: 1.7rem;
                    color: #494949;
                    span{
                        margin-right: 0.5rem;
                        font-weight: bolder;
                    }
                }
                .db-status-create{
                    margin-top: 0.4rem;
                    line-height: 1;
                    font-size: 1.4rem;
                    color: #aaa;
                }
                .db-status-detail{
                    padding: 1.5rem;
                    margin: 1rem 0 2rem;
                    border-radius: 2px;
                    background: #f9f9f9;
                    .db-article-title{
                        display: -webkit-box;
                        margin-bottom: 0.5rem;
                        font-size: 1.7rem;
                        font-weight: 500;
                        line-height: 1.4;
                        color: #494949;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .db-article-ellipsis{
                        display: -webkit-box;
                        font-size: 1.2rem;
                        line-height: 1.6rem;
                        color: #aaa;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                    .db-article-text{
                        font-size: 1.7rem;
                        line-height: 2rem;
                        color: #494949;
                    }
                    .db-img-article{
                        display: flex;
                        p{
                            flex: 1;
                        }
                        img{
                            width: 7.5rem;
                            height: 5rem;
                        }
                    }
                }
                .db-status-thumbs span{
                    float: left;
                    margin-right: 2rem;
                    font-size: 1.4rem;
                    label{
                        position: relative;
                        left: 0;
                        top: -0.2rem;
                        margin-left: 0.3rem;
                        color: #ccc;
                    }
                }
                .db-status-thumbs span:before {
                    content: '';
                    display: inline-block;
                    margin-bottom: -0.4rem;
                    width: 2rem;
                    height: 2rem;
                    background-position: center center;
                    background-repeat: no-repeat;
                }
                .db-status-thumbs{
                    .more{
                        float: right;
                        margin-right: 0;
                    }
                    .like:before {
                        background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
                    }
                    .comment:before {
                        background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
                    }

                    .retweet:before {
                        background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
                    }

                    .more:before {
                        background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
                        background-repeat: no-repeat;
                        background-position: center center;
                        margin-bottom: -0.2rem;
                    }
                }
            }

        }
    }
</style>
