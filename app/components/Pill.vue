<script lang="ts" setup>

import { cva } from 'class-variance-authority';

withDefaults(defineProps<{
    size?: 'regular' | 'large'
}>(), {
    size: 'regular'
});

const pillStyle = cva("bg-ocean-500 text-white rounded px-2 font-bold flex items-center", {
    variants: {
        size: {
            regular: "text-xs",
            large: "text-xl"
        }
    }
})

</script>

<template>
    <span :class="pillStyle({ size })">
        <slot></slot>
    </span>
</template>
