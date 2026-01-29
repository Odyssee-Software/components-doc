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
      { text: "GitHub", link: "https://github.com/odyssee-software" },
    ],

    // Sidebar navigation
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Installation", link: "/guide/installation" },
          ],
        },
        {
          text: "Pulse Framework",
          collapsed: false,
          items: [
            { text: "Overview", link: "/guide/pulse-framework/" },
            { text: "Reactivity", link: "/guide/pulse-framework/reactivity" },
            { text: "Components", link: "/guide/pulse-framework/components" },
            {
              text: "Advanced Patterns",
              link: "/guide/pulse-framework/advanced",
            },
            {
              text: "Pulse vs React",
              link: "/guide/pulse-framework/comparison",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "Layouts",
          items: [
            { text: "Container", link: "/components/layouts/container" },
            { text: "Columns", link: "/components/layouts/columns" },
            {
              text: "Grids",
              link: "/components/layouts/grid",
            },
            {
              text: "CustomScrollbar",
              link: "/components/layouts/custom-scrollbar",
            },
            {
              text: "Images",
              link: "/components/layouts/image",
            },
            {
              text: "Layout Splitter",
              link: "/components/layouts/layout-splitter",
            },
            {
              text: "Typography",
              link: "/components/layouts/typography",
            },
          ],
        },
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
            { text: "ChatBubble", link: "/components/chat-bubble" },
            { text: "Collapse", link: "/components/collapse" },
            { text: "Progress", link: "/components/progress" },
            { text: "Datepicker", link: "/components/datepicker" },
            { text: "Device", link: "/components/device" },
            { text: "Divider", link: "/components/divider" },
            {
              text: "File Upload Progress",
              link: "/components/file-upload-progress",
            },
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
            { text: "ColorPicker", link: "/components/color-picker" },
            { text: "FileInput", link: "/components/file-input" },
            { text: "FormGroup", link: "/components/form-group" },
            { text: "RangeSlider", link: "/components/range-slider" },
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
      noExternal: [
        "@odyssee-software/components",
        "@odyssee-software/pulse-framework",
      ],
    },
    optimizeDeps: {
      include: ["@odyssee-software/pulse-framework"],
      force: true,
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
    // Force CSS injection order: load Odyssee components CSS after VitePress
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            "pulse-framework": ["@odyssee-software/pulse-framework"],
          },
        },
      },
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
