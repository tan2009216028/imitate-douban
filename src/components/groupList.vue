<template>
    <div class="db-group">
        <div class="db-group-item" v-for="groupItem in dbGroupList">
            <div class="db-group-header">
                <h2>{{groupItem.groupTitle}}</h2>
            </div>
            <ul class="db-group-content">
                <li v-for="item in groupItem.groupList">
                    <div class="db-group-meta">
                        <img v-if="item.itemImg" :src="item.itemImg" :alt="item.itemTitle">
                        <div class="db-group-info">
                            <span>{{item.itemTitle}}</span>
                            <p>{{item.itemContent}}</p>
                        </div>
                        <span class="db-group-member">{{item.followNum}}人</span>
                    </div>
                </li>
            </ul>
            <a class="db-group-link">更多相关小组</a>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'group',
        props: {
            dbGroupList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .db-group {
        margin-left: 1.8rem;
        padding-top: 1.4rem;
        .db-group-header{
            h2{
                font-size: 1.68rem;
                font-weight: normal;
                color: #111;
            }
        }
        .db-group-content {
            li {
                border-bottom: 1px solid #F2F2F2;
                overflow: hidden;
            }
            .db-group-meta{
                position: relative;
                display: flex;
                padding: 1.5rem 1.8rem 1.5rem 0;
                align-items: center;
                img {
                    width: 4rem;
                }
                .db-group-info {
                    flex: 1;
                    padding: 0 1rem;
                    font-size: 1.8rem;
                    color: #111;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .db-group-member {
                    color: #ccc;
                    font-size: 1.5rem;
                }
                p{
                    margin-top: 1rem;
                    font-size: 1.5rem;
                    color: #aaa;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        .db-group-link {
            display: block;
            margin-bottom: 3rem;
            padding: 1.5rem 0;
            font-size: 1.6rem;
            line-height: 1.8rem;
            text-align: center;
            color: #42bd56;
        }
    }
</style>
