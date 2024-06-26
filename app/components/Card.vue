<script lang="ts" setup>

defineProps<{
    title?: string
}>();

</script>

<template>
    <div class="border border-ocean-700 p-5 rounded">
        <h2 v-if="title" class="text-xl py-2 font-bold text-ocean-700">{{ title }}</h2>
        <slot></slot>
    </div>
</template>
