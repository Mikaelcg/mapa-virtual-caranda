import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "photo-sphere-viewer/dist/plugins/markers.css";
import "./assets/scss/global.scss";

const app = createApp(App);

app.use(PrimeVue);
app.mount("#app");
