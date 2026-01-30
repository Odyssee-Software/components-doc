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
          collapsed: false,
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
          collapsed: false,
          items: [
            { text: "Alert", link: "/components/base/alert" },
            { text: "Avatar", link: "/components/base/avatar" },
            { text: "AvatarGroup", link: "/components/base/avatar-group" },
            { text: "Badge", link: "/components/base/badge" },
            { text: "Blockquote", link: "/components/base/blockquote" },
            { text: "Button", link: "/components/base/button" },
            { text: "ButtonGroup", link: "/components//basebutton-group" },
            { text: "Card", link: "/components/base/card" },
            { text: "Carousel", link: "/components/base/carousel" },
            { text: "ChatBubble", link: "/components/base/chat-bubble" },
            { text: "Collapse", link: "/components/base/collapse" },
            { text: "Progress", link: "/components/base/progress" },
            { text: "Datepicker", link: "/components/base/datepicker" },
            { text: "Device", link: "/components/base/device" },
            { text: "Divider", link: "/components/base/divider" },
            {
              text: "File Upload Progress",
              link: "/components/base/file-upload-progress",
            },
            {
              text: "Icon",
              link: "/components/base/icon",
            },
            {
              text: "Kbd",
              link: "/components/base/kbd",
            },
            {
              text: "LegendIndicator",
              link: "/components/base/legend-indicator",
            },
            {
              text: "List",
              link: "/components/base/list",
            },
            {
              text: "ListGroup",
              link: "/components/base/list-group",
            },
            {
              text: "Rating",
              link: "/components/base/rating",
            },
            {
              text: "Skeleton",
              link: "/components/base/skeleton",
            },
            {
              text: "Spinner",
              link: "/components/base/spinner",
            },
            {
              text: "Timeline",
              link: "/components/base/timeline",
            },
            {
              text: "Toast",
              link: "/components/base/toast",
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
            { text: "ComboBox", link: "/components/combobox" },
            { text: "CopyMarkup", link: "/components/copy-markup" },
            { text: "InputGroup", link: "/components/input-group" },
            { text: "InputNumber", link: "/components/input-number" },
            { text: "PinInput", link: "/components/pin-input" },
            { text: "SearchBox", link: "/components/search-box" },
            { text: "StrongPassword", link: "/components/strong-password" },
          ],
        },
        {
          text: "Navigation Components",
          collapsed: false,
          items: [
            { text: "Accordion", link: "/components/navigation/accordion" },
          ],
        },
        {
          text: "Overlay Components",
          collapsed: false,
          items: [
            { text: "Modal", link: "/components/overlay/modal" },
            { text: "Tooltip", link: "/components/overlay/tooltip" },
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
