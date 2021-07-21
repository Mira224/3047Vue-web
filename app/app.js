import Vue from 'nativescript-vue';

import Qpon from './components/Qpon';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;
global.baseUrl = "https://b23b4e543ac5.ngrok.io"; 
new Vue({

    template: `
        <Frame>
            <Qpon />
        </Frame>`,

    components: {
        Qpon
    }
}).$start();