import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "photo-sphere-viewer/dist/plugins/markers.css";
import "./assets/scss/global.scss";

loadFonts();

createApp(App).use(vuetify).mount("#app");
