<template>
    <div class="db-sub-nav">
        <div class="db-no-login">
            <ul class="ul-li-float clearFix">
                <li>
                    <router-link :to="{path:'movie'}">
                        影院热映
                    </router-link>
                </li>
                <li><a href="">欧美新碟榜</a></li>
                <li>
                    <router-link :to="{path:'register'}">
                        注册帐号
                    </router-link>
                </li>
                <li>
                    <router-link :to="{path:'login'}">
                        登录豆瓣
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                a:'aa'
            }
        }
    }
</script>

<style lang="scss" scoped="">
    .db-sub-nav {
        margin: 1rem 1.8rem 0;
        padding-top: 0.6rem;
    }

    .db-sub-nav {
        li {
            padding: 0.3rem;
            width: 50%;
            font-size: 1.5rem;
            text-align: center;
            box-sizing: border-box;
        }
        li a {
            display: block;
            padding: 1.2rem 0;
            line-height: 2rem;
            background-color: #f6f6f6;
            color: #494949;
            border-radius: 0.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
        }
    }
</style>
