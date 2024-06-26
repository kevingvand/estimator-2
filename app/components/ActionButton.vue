<script lang="ts" setup>

import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { cva } from 'class-variance-authority'

withDefaults(defineProps<{
    intent?: 'primary' | 'error'
    text?: string,
    icon?: IconDefinition,
    isOutline?: boolean
}>(), {
    intent: "primary",
    isOutline: false
});

const buttonStyle = cva("flex gap-3 items-center justify-center text-base px-3 py-2", {
    variants: {
        isOutline: {
            "true": "border border-solid",
            "false": ""
        },
        intent: {
            "primary": "",
            "error": ""
        }
    },
    compoundVariants: [
        { isOutline: false, intent: "primary", class: "text-white bg-ocean-500 hover:bg-ocean-600 active:bg-ocean-700" },
        { isOutline: true, intent: "primary", class: "border-ocean-700 text-ocean-700 hover:bg-ocean-400" },
        { isOutline: false, intent: "error", class: "text-white bg-error-500 hover:bg-error-600 active:bg-error-700" },
        { isOutline: true, intent: "error", class: "border-error-700 text-error-700 hover:bg-error-400" },
    ]
})


</script>

<template>
    <button :class="buttonStyle({ isOutline, intent })">
        <font-awesome-icon v-if="icon" :icon="icon" fixed-width />
        <span v-if="text">{{ text }}</span>
    </button>
</template>
