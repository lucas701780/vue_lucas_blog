import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/all.scss";
import VueStickyDirective from '@renatodeleao/vue-sticky-directive'

createApp(App).use(store).use(router).use(VueStickyDirective).mount("#app");
