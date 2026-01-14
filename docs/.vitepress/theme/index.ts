import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./custom.css";
import "@odyssee/components/styles";
import ButtonDemo from "./components/ButtonDemo.vue";
import PulseButton from "./components/PulseButton.vue";
import LiveCodeEditor from "./components/LiveCodeEditor.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Register custom components globally
    app.component("ButtonDemo", ButtonDemo);
    app.component("PulseButton", PulseButton);
    app.component("LiveCodeEditor", LiveCodeEditor);
  },
} satisfies Theme;
