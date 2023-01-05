import "../node_modules/@mdi/font/css/materialdesignicons.css";

import "../node_modules/bootstrap/dist/css";
// import "../node_modules/@vueuse/motion"

import { createApp } from "/vue";
// @ts-ignore
import App from "./App.vue";
import { registerGlobalComponents } from "./registerGlobalComponents";
import { router } from "./router";
import { MotionPlugin } from "../node_modules/@vueuse/motion";
// Vuetify


import Particles from '../node_modules/vue3-particles/dist/index.js'
const root = createApp(App);
registerGlobalComponents(root);

root.use(router).use(MotionPlugin).use(Particles).mount("#app");
