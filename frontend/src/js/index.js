import '../styles/app'; //  base style .less;
import Vue from 'vue';
import App from '../App';   //  base component .vue;

//  AB: create main vue-object;
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});