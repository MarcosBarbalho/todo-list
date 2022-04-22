require("./bootstrap");

import * as Vue from 'vue'
import App from "./vue/app";

const app = Vue.createApp({
    el: "#app",
    components: { App }
});
