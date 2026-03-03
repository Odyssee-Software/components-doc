import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import LiveCodeEditor from "./components/LiveCodeEditor.vue";
import "./custom.css";
import "@odyssee-software/components/styles";
import "./live-code-overrides.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Register custom components globally
    //app.component("ButtonDemo", ButtonDemo);
    //app.component("PulseButton", PulseButton);
    app.component("LiveCodeEditor", LiveCodeEditor);
  },
} satisfies Theme;
