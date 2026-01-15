import { defineConfig } from "vitepress";
import path from "path";

export default defineConfig({
  title: "Odyssee Components",
  description:
    "A comprehensive UI component library built with Pulse Framework",

  // Base URL for deployment (GitHub Pages: https://odyssee-software.github.io/components-doc/)
  base: "/components-doc/",

  // Ignore dead links during build (pages not yet created)
  ignoreDeadLinks: true,

  // Theme configuration
  themeConfig: {
    // Logo in navbar
    logo: "/logo.svg",

    // Navigation menu
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Components", link: "/components/button" },
      { text: "GitHub", link: "https://github.com/odyssee" },
    ],

    // Sidebar navigation
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Pulse Framework", link: "/guide/pulse-framework" },
          ],
        },
      ],
      "/components/": [
        {
          text: "Base Components",
          items: [
            { text: "Alert", link: "/components/alert" },
            { text: "Avatar", link: "/components/avatar" },
            { text: "AvatarGroup", link: "/components/avatar-group" },
            { text: "Badge", link: "/components/badge" },
            { text: "Blockquote", link: "/components/blockquote" },
            { text: "Button", link: "/components/button" },
            { text: "ButtonGroup", link: "/components/button-group" },
            { text: "Card", link: "/components/card" },
            { text: "Carousel", link: "/components/carousel" },
            { text: "Collapse", link: "/components/collapse" },
            { text: "Progress", link: "/components/progress" },
          ],
        },
        {
          text: "Form Components",
          collapsed: false,
          items: [
            { text: "Overview", link: "/components/forms-overview" },
            { text: "Checkbox", link: "/components/checkbox" },
            { text: "Input", link: "/components/input" },
            { text: "Radio", link: "/components/radio" },
            { text: "RadioGroup", link: "/components/radio-group" },
            { text: "Select", link: "/components/select" },
            { text: "Textarea", link: "/components/textarea" },
            { text: "Toggle", link: "/components/toggle" },
            { text: "FileInput", link: "/components/file-input" },
            { text: "RangeSlider", link: "/components/range-slider" },
            { text: "ColorPicker", link: "/components/color-picker" },
            { text: "FormGroup", link: "/components/form-group" },
          ],
        },
        {
          text: "Navigation Components",
          items: [{ text: "Accordion", link: "/components/accordion" }],
        },
        {
          text: "Overlay Components",
          items: [
            { text: "Modal", link: "/components/modal" },
            { text: "Tooltip", link: "/components/tooltip" },
          ],
        },
      ],
    },

    // Social links
    socialLinks: [{ icon: "github", link: "https://github.com/odyssee" }],

    // Footer
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 Odyssee",
    },

    // Search
    search: {
      provider: "local",
    },
  },

  // Vite configuration for Pulse Framework
  vite: {
    ssr: {
      noExternal: ["@odyssee/components"],
    },
  },

  // Markdown configuration
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    lineNumbers: true,
  },
});
