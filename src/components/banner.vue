<template>
    <!--通用的banner导航-->
    <div class="db-banner">
        <div class="db-banner-content">
            <div class="db-banner-title">
                <span>{{title}}</span>
            </div>
            <div class="db-banner-button">
                <a class="download">极速下载</a>
                <a class="open">打开</a>
            </div>
        </div>
    </div>　　
</template>

<script type="text/javascript">
    export default {
        data() {
            return {}
        },
        props:{
            title:{
                type:String,
                require:true,
                default:'打开App, 浏览更多'
            }
        }
    }
</script>

<style lang="scss">
    .db-banner{
        position: relative;
        height: 7rem;
        background: url("../assets/banner-bg.jpg") no-repeat;
        background-size: cover;
        .db-banner-content{
            position: absolute;
            left: 1.8rem;
            top: 0;
            bottom: 0;
            right: 1rem;
            display: flex;
            align-items: center;
            .db-banner-title{
                flex: 1;
                line-height: 2.2rem;
                font-size: 1.4rem;
                color: #2CA532;
            }
            a{
                display: inline-block;
                width: auto;
                padding: 0 1.4rem;
                font-size: 1.3rem;
                font-weight: bold;
                line-height: 2;
                border: 0.1rem solid #42bd56;
                border-radius: 0.3rem;
            }
            .download{
                color: #fff;
                background: #42bd56;
            }
            .open{
                margin-left: 0.8rem;
                color: #42bd56;
            }
        }
    }
</style>
