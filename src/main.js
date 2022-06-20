import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "photo-sphere-viewer/dist/plugins/markers.css";
import "./assets/scss/global.scss";
import mitt from "mitt";
const eventBus = mitt();

loadFonts();

const app = createApp(App);

app.config.globalProperties.eventBus = eventBus;

app.use(vuetify).mount("#app");
