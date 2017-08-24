<template>
    <div class="db-show-message">
        <transition name="slide-fade">
            <p v-show="isShow">{{showMsg}}</p>
        </transition>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                isShow: true,
                showMsg: ''
            }
        },
        methods: {
            close() {
                setTimeout(() => {
                    this.isShow = false;
                }, 2000)
                setTimeout(() => {
                    this.$destroy();
                    this.$el.parentNode.removeChild(this.$el);
                }, 2500)
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.close();
            })
        }
    }
</script>

<style lang="scss" scoped>
    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }

    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(30px);
        opacity: 0;
    }

    .db-show-message {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.2);
        z-index: 10;
        p {
            width: 50%;
            padding: 8px 16px;
            height: 18px;
            font-size: 14px;
            color: #000;
            border-radius: 4px;
            text-align: center;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
            background: #fff;
        }

    }
</style>
