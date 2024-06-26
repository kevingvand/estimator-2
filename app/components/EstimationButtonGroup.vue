<script lang="ts" setup>
import { faAngleDoubleDown, faAngleDown, faCircleDot, faAngleUp, faAngleDoubleUp, faBan } from '@fortawesome/free-solid-svg-icons';

defineProps<{
    title: string
}>();

const estimation = defineModel({ default: 0 });

function setEstimation(newEstimation: number) {
    estimation.value = newEstimation;
}

</script>

<template>
    <div class="grid gap-2">
        <div class="flex align-center justify-between gap-2">
            <h3 class="text-l font-semibold text-ocean-700">{{ title }}</h3>
            <Pill>{{ estimation }}</Pill>
        </div>
        <div class="grid grid-cols-6">
            <ActionButton @click="setEstimation(0)" intent="error" :is-outline="estimation !== 0" :icon="faBan"
                class="rounded-l border-r-0" />
            <ActionButton @click="setEstimation(1)" :is-outline="estimation !== 1" :icon="faAngleDoubleDown"
                class="border-x-0" />
            <ActionButton @click="setEstimation(2)" :is-outline="estimation !== 2" :icon="faAngleDown"
                class="border-x-0" />
            <ActionButton @click="setEstimation(3)" :is-outline="estimation !== 3" :icon="faCircleDot"
                class="border-x-0" />
            <ActionButton @click="setEstimation(4)" :is-outline="estimation !== 4" :icon="faAngleUp"
                class="border-x-0" />
            <ActionButton @click="setEstimation(5)" :is-outline="estimation !== 5" :icon="faAngleDoubleUp"
                class="rounded-r border-l-0" />
        </div>
    </div>
</template>
