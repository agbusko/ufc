import './styles/app'; //  base style app.less;
import Vue from 'vue';
import App from './App';   //  base component App.vue;

//  AB: create main vue-object;
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});

