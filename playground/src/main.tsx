/**
 * Button Component Playground
 * Interactive demos using the real @odyssee/components library
 */
import Pulse from "pulse-framework";
import "./style.css";
import "../../../odyssee-components/src/styles.css";
import { Button } from "@odyssee/components";

// Main app container
const app = document.getElementById("app")!;

// Header
const header = (
  <div class="max-w-6xl mx-auto mb-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-2">Button Component</h1>
    <p class="text-lg text-gray-600">
      Interactive examples using Odyssee Components with Pulse Framework
    </p>
  </div>
) as Pulse.JSX.Element;

app.appendChild(header);

// Container for all demos
const container = (<div class="max-w-6xl mx-auto"></div>) as Pulse.JSX.Element;

app.appendChild(container);

// ===== DEMO 1: Variants =====
const variantsSection = (
  <div class="demo-section">
    <h2>Variants</h2>
    <p>Five different button styles to choose from</p>
    <div class="button-grid"></div>
  </div>
) as Pulse.JSX.Element;

const variantsGrid = variantsSection.querySelector(".button-grid")!;

const solidBtn = Button({
  variant: "solid",
  children: "Solid",
});
const outlineBtn = Button({
  variant: "outline",
  children: "Outline",
});
const ghostBtn = Button({
  variant: "ghost",
  children: "Ghost",
});
const softBtn = Button({
  variant: "soft",
  children: "Soft",
});
const linkBtn = Button({
  variant: "link",
  children: "Link",
});

variantsGrid.appendChild(solidBtn as Pulse.JSX.Element);
variantsGrid.appendChild(outlineBtn as Pulse.JSX.Element);
variantsGrid.appendChild(ghostBtn as Pulse.JSX.Element);
variantsGrid.appendChild(softBtn as Pulse.JSX.Element);
variantsGrid.appendChild(linkBtn as Pulse.JSX.Element);

container.appendChild(variantsSection);

// ===== DEMO 2: Colors =====
const colorsSection = (
  <div class="demo-section">
    <h2>Colors</h2>
    <p>Eight color options for different contexts</p>
    <div class="button-grid"></div>
  </div>
) as Pulse.JSX.Element;

const colorsGrid = colorsSection.querySelector(".button-grid")!;

const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
colors.forEach((color) => {
  const btn = Button({
    color: color as any,
    children: color.charAt(0).toUpperCase() + color.slice(1),
  });
  colorsGrid.appendChild(btn as Pulse.JSX.Element);
});

container.appendChild(colorsSection);

// ===== DEMO 3: Sizes =====
const sizesSection = (
  <div class="demo-section">
    <h2>Sizes</h2>
    <p>Five size options from extra small to extra large</p>
    <div class="button-grid"></div>
  </div>
) as Pulse.JSX.Element;

const sizesGrid = sizesSection.querySelector(".button-grid")!;

const sizes = ["xs", "sm", "md", "lg", "xl"];
sizes.forEach((size) => {
  const btn = Button({
    size: size as any,
    children: size.toUpperCase(),
  });
  sizesGrid.appendChild(btn as Pulse.JSX.Element);
});

container.appendChild(sizesSection);

// ===== DEMO 4: Loading State =====
const loadingSection = (
  <div class="demo-section">
    <h2>Loading State</h2>
    <p>Show loading spinner during async operations</p>
    <div class="demo-controls"></div>
    <div class="demo-output">
      Click "Start Loading" to simulate an async operation
    </div>
  </div>
) as Pulse.JSX.Element;

const loadingControls = loadingSection.querySelector(".demo-controls")!;
const loadingOutput = loadingSection.querySelector(".demo-output")!;

const isLoading = Pulse.signal(false);

const startLoadingBtn = Button({
  loading: isLoading,
  color: "primary",
  onClick: async () => {
    isLoading(true);
    loadingOutput.textContent = "⏳ Loading... Please wait.";

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    isLoading(false);
    loadingOutput.textContent = "✅ Done! Click again to restart.";
  },
  children: "Start Loading",
});

const staticLoadingBtn = Button({
  loading: true,
  variant: "outline",
  children: "Static Loading",
});

loadingControls.appendChild(startLoadingBtn as Pulse.JSX.Element);
loadingControls.appendChild(staticLoadingBtn as Pulse.JSX.Element);

container.appendChild(loadingSection);

// ===== DEMO 5: With Icons =====
const iconsSection = (
  <div class="demo-section">
    <h2>With Icons</h2>
    <p>Add icons to buttons with customizable positioning</p>
    <div class="button-grid"></div>
  </div>
) as Pulse.JSX.Element;

const iconsGrid = iconsSection.querySelector(".button-grid")!;

const iconLeftBtn = Button({
  icon: "🚀",
  iconPosition: "left",
  children: "Launch",
  color: "primary",
});

const iconRightBtn = Button({
  icon: "→",
  iconPosition: "right",
  children: "Next",
  variant: "outline",
  color: "primary",
});

const iconOnlyBtn = Button({
  icon: "❤️",
  color: "danger",
  variant: "soft",
});

const downloadBtn = Button({
  icon: "⬇️",
  iconPosition: "left",
  children: "Download",
  color: "success",
  variant: "outline",
});

iconsGrid.appendChild(iconLeftBtn as Pulse.JSX.Element);
iconsGrid.appendChild(iconRightBtn as Pulse.JSX.Element);
iconsGrid.appendChild(iconOnlyBtn as Pulse.JSX.Element);
iconsGrid.appendChild(downloadBtn as Pulse.JSX.Element);

container.appendChild(iconsSection);

// ===== DEMO 6: Disabled State =====
const disabledSection = (
  <div class="demo-section">
    <h2>Disabled State</h2>
    <p>Prevent interaction and show visual feedback</p>
    <div class="button-grid"></div>
  </div>
) as Pulse.JSX.Element;

const disabledGrid = disabledSection.querySelector(".button-grid")!;

const disabledBtn1 = Button({
  disabled: true,
  children: "Disabled Solid",
});

const disabledBtn2 = Button({
  disabled: true,
  variant: "outline",
  children: "Disabled Outline",
});

const disabledBtn3 = Button({
  disabled: true,
  variant: "soft",
  color: "success",
  children: "Disabled Soft",
});

disabledGrid.appendChild(disabledBtn1 as Pulse.JSX.Element);
disabledGrid.appendChild(disabledBtn2 as Pulse.JSX.Element);
disabledGrid.appendChild(disabledBtn3 as Pulse.JSX.Element);

container.appendChild(disabledSection);

// ===== DEMO 7: Interactive Counter =====
const counterSection = (
  <div class="demo-section">
    <h2>Interactive Counter</h2>
    <p>Reactive buttons with Pulse signals</p>
    <div class="demo-controls"></div>
    <div class="demo-output">Count: 0</div>
  </div>
) as Pulse.JSX.Element;

const counterControls = counterSection.querySelector(".demo-controls")!;
const counterOutput = counterSection.querySelector(".demo-output")!;

const count = Pulse.signal(0);

const incrementBtn = Button({
  color: "success",
  icon: "➕",
  onClick: () => {
    count(count() + 1);
    counterOutput.textContent = `Count: ${count()}`;
  },
  children: "Increment",
});

const decrementBtn = Button({
  color: "danger",
  variant: "outline",
  icon: "➖",
  onClick: () => {
    count(count() - 1);
    counterOutput.textContent = `Count: ${count()}`;
  },
  children: "Decrement",
});

const resetBtn = Button({
  variant: "ghost",
  onClick: () => {
    count(0);
    counterOutput.textContent = `Count: ${count()}`;
  },
  children: "Reset",
});

counterControls.appendChild(incrementBtn as Pulse.JSX.Element);
counterControls.appendChild(decrementBtn as Pulse.JSX.Element);
counterControls.appendChild(resetBtn as Pulse.JSX.Element);

container.appendChild(counterSection);

// ===== DEMO 8: Reactive Disabled =====
const reactiveDisabledSection = (
  <div class="demo-section">
    <h2>Reactive Disabled State</h2>
    <p>Button disabled state controlled by form validation</p>
    <div class="mb-4">
      <input
        type="email"
        placeholder="Enter your email"
        class="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    <div class="demo-output">Enter a valid email to enable the button</div>
  </div>
) as Pulse.JSX.Element;

const emailInput = reactiveDisabledSection.querySelector(
  "input",
)! as HTMLInputElement;
const reactiveOutput = reactiveDisabledSection.querySelector(".demo-output")!;

const email = Pulse.signal("");
const isValidEmail = Pulse.computed(() => {
  const emailValue = email();
  return emailValue.includes("@") && emailValue.includes(".");
});

emailInput.addEventListener("input", (e) => {
  email((e.target as HTMLInputElement).value);
  if (isValidEmail()) {
    reactiveOutput.textContent = "✅ Valid email! Button is now enabled.";
  } else {
    reactiveOutput.textContent = "❌ Enter a valid email to enable the button";
  }
});

const submitEmailBtn = Button({
  disabled: Pulse.computed(() => !isValidEmail()),
  color: "primary",
  icon: "📧",
  onClick: () => {
    alert(`Submitted: ${email()}`);
  },
  children: "Submit Email",
});

reactiveDisabledSection.insertBefore(
  submitEmailBtn as Pulse.JSX.Element,
  reactiveOutput,
);

container.appendChild(reactiveDisabledSection);

// ===== DEMO 9: Full Width =====
const fullWidthSection = (
  <div class="demo-section">
    <h2>Full Width</h2>
    <p>Buttons that span the full width of their container</p>
    <div class="space-y-3"></div>
  </div>
) as Pulse.JSX.Element;

const fullWidthContainer = fullWidthSection.querySelector(".space-y-3")!;

const fullWidthBtn1 = Button({
  fullWidth: true,
  size: "lg",
  color: "primary",
  children: "Full Width Primary",
});

const fullWidthBtn2 = Button({
  fullWidth: true,
  variant: "outline",
  color: "secondary",
  children: "Full Width Outline",
});

const fullWidthBtn3 = Button({
  fullWidth: true,
  variant: "soft",
  color: "success",
  icon: "✓",
  children: "Full Width with Icon",
});

fullWidthContainer.appendChild(fullWidthBtn1 as Pulse.JSX.Element);
fullWidthContainer.appendChild(fullWidthBtn2 as Pulse.JSX.Element);
fullWidthContainer.appendChild(fullWidthBtn3 as Pulse.JSX.Element);

container.appendChild(fullWidthSection);

// ===== DEMO 10: Combined Variants =====
const combinedSection = (
  <div class="demo-section">
    <h2>Combined Examples</h2>
    <p>Mixing variants, colors, and sizes</p>
    <div class="button-grid"></div>
  </div>
) as Pulse.JSX.Element;

const combinedGrid = combinedSection.querySelector(".button-grid")!;

const combinations = [
  {
    variant: "solid" as const,
    color: "primary" as const,
    size: "lg" as const,
    children: "Large Primary",
  },
  {
    variant: "outline" as const,
    color: "success" as const,
    size: "sm" as const,
    children: "Small Success",
  },
  {
    variant: "soft" as const,
    color: "warning" as const,
    size: "md" as const,
    children: "Medium Warning",
  },
  {
    variant: "ghost" as const,
    color: "danger" as const,
    size: "xs" as const,
    children: "Tiny Danger",
  },
  {
    variant: "link" as const,
    color: "info" as const,
    size: "xl" as const,
    children: "XL Link",
  },
];

combinations.forEach((props) => {
  const btn = Button(props);
  combinedGrid.appendChild(btn as Pulse.JSX.Element);
});

container.appendChild(combinedSection);

console.log("✅ Button playground loaded successfully!");
