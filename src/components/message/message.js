/*
 * @file message.js
 * @author: Toshiba
 * @describe: 注入message插件
 * @date: 2017/8/24 23:05
 */
'use strict';
import message from './message.vue';

export default {
    install(Vue, options) {
        let myMessageConstructor = Vue.extend(message),$msgVue;

        let $message = {
            show(text) {
                if (text) {
                    $msgVue = new myMessageConstructor({
                        el: document.createElement("div"),
                        data: {
                            isShow: true,
                            showMsg: text
                        }
                    });
                    //动态挂载到body下
                    document.body.appendChild($msgVue.$el);
                }
            },
            hide() {
                $msgVue.isShow = false;
            }
        };
        if (!Vue.$message) {
            Vue.prototype.$message = $message;
        }
    }
}
