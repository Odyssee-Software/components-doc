import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./custom.css";
import ButtonDemo from "./components/ButtonDemo.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Register custom components globally
    app.component("ButtonDemo", ButtonDemo);
  },
} satisfies Theme;
