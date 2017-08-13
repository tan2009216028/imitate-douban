<template>
    <div class="db-download-app">
        <div class="db-download-info">
            <span  class="db-down-img"></span>
            <div class="info-content">
                <strong>豆瓣</strong>
                <p>我们的精神角落</p>
            </div>
        </div>
        <a :href="downUrl">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                downUrl:'https://www.douban.com/doubanapp/card/log?category=diary&cid=631833427&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_diary%26direct_dl%3D1'

            }
        }
    }
</script>
<style lang="scss">
    .db-download-app{
        padding-bottom:2rem;
        margin: 5rem 0 3rem 0;
        text-align: center;
        font-size: 1.5rem;
        .db-download-info{
            display: inline-block;
            margin: 0 auto 1.5rem;
            font-size: 1.4rem;
            color: #111;
            text-align: left;
            overflow: hidden;
            div{
                overflow: hidden;
            }
            strong{
                line-height: 2.8rem;
                font-size: 2.4rem;
                font-weight: normal;
            }
            .db-down-img{
                float: left;
                display: inline-block;
                width: 4.8rem;
                height: 4.8rem;
                margin-right: 1.2rem;
                background: url("../assets/douban-app-img.png") no-repeat;
                background-size: 4.8rem 4.8rem;
            }
        }
        a{
            display: block;
            color: #42bd56;
        }
    }
</style>
