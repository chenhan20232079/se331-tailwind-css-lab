import "./assets/style.css"
import { createApp } from "vue"
import App from "./App.vue"
import { inject } from "@vercel/analytics"

// 注入Vercel Analytics
inject()

createApp(App).mount("#app")
