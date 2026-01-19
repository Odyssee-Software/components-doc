<template>
    <div ref="containerRef" class="pulse-button-wrapper"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

interface Props {
    variant?: "solid" | "outline" | "ghost" | "soft" | "link";
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    variant: "solid",
    color: "primary",
    size: "md",
    disabled: false,
    loading: false,
    iconPosition: "left",
    fullWidth: false,
});

const emit = defineEmits<{
    click: [event: Event];
}>();

const containerRef = ref<HTMLElement | null>(null);
let pulseButton: any = null;

const mountPulseButton = async () => {
    if (!containerRef.value) return;

    try {
        // Dynamically import to avoid SSR issues
        const { Button } = await import("@odyssee-software/components");

        // Clear previous button
        if (pulseButton && containerRef.value.firstChild) {
            containerRef.value.removeChild(containerRef.value.firstChild);
        }

        // Create Pulse button
        pulseButton = Button({
            variant: props.variant,
            color: props.color,
            size: props.size,
            disabled: props.disabled,
            loading: props.loading,
            icon: props.icon,
            iconPosition: props.iconPosition,
            fullWidth: props.fullWidth,
            onClick: (event: Event) => {
                emit("click", event);
            },
            children: containerRef.value.getAttribute("data-text") || "Button",
        });

        // Mount to DOM
        containerRef.value.appendChild(pulseButton);
    } catch (error) {
        console.error("Failed to load Pulse Button:", error);
    }
};

onMounted(() => {
    // Get text content from slot (passed as attribute)
    const slot =
        containerRef.value?.parentElement?.querySelector(".button-text");
    if (slot) {
        containerRef.value?.setAttribute("data-text", slot.textContent || "");
    }

    mountPulseButton();
});

// Watch props and remount when they change
watch(
    () => [
        props.variant,
        props.color,
        props.size,
        props.disabled,
        props.loading,
        props.icon,
    ],
    () => {
        mountPulseButton();
    },
    { deep: true },
);

onUnmounted(() => {
    // Cleanup
    if (pulseButton && containerRef.value?.firstChild) {
        containerRef.value.removeChild(containerRef.value.firstChild);
    }
});
</script>

<style scoped>
.pulse-button-wrapper {
    display: inline-block;
}
</style>
