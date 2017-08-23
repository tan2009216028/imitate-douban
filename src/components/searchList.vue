<template>
    <div class="db-search-list">
        <div class="db-item-header">
            <h2>{{title}}</h2>
        </div>
        <ul class="db-item-content">
            <li v-for="item in items.data">
                <router-link
                    :to="{name:items.pageType,query:{file:item.id}}">
                    <div class="db-item-meta">
                        <img v-if="item.images" :src="item.images.small" :alt="item.title">
                        <div class="db-item-info">
                            <span>{{item.title}}</span>
                            <rating v-if="item.rating" :rating="item.rating"></rating>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <slot name="more"></slot>
    </div>
</template>
<script>
    import rating from '@/components/rating'
    export default {
        name: 'searchList',
        components: {
            rating
        },
        props: {
            title: {
                type: String,
                required: true
            },
            items: {
                type: Object,
                required: true
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .db-search-list {
        padding-top: 1.4rem;
        margin-left: 1.8rem;
        .db-item-content {
            position: relative;
            li {
                border-bottom: 1px solid #F2F2F2;
                overflow: hidden;
            }
            a {
                display: block;
                padding: 1.5rem 1.8rem 1.5rem 0;
            }
            .db-item-meta {
                display: flex;
                align-items: center;
                img {
                    width: 4rem;
                }
            }
            .db-item-info {
                flex: 1;
                padding: 0 1rem;
                font-size: 1.8rem;
                color: #111;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>
