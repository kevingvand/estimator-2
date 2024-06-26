<script lang="ts" setup>

export interface Estimation {
    totalScore: number,
    closestStoryPoints: number,
    referenceCode: string,
    groups: {
        designAndConcept: number,
        dataStorage: number,
        backendImplementation: number
        frontendImplementation: number
    }
}

const estimation = defineModel({
    default: {
        totalScore: 0,
        closestStoryPoint: 0,
        referenceCode: 'AAAA',
        groups: {
            designAndConcept: 0,
            dataStorage: 0,
            backendImplementation: 0,
            frontendImplementation: 0
        }
    }
})

const estimationGroups = reactive(estimation.value.groups);

function resetEstimation() {
    estimation.value.groups.designAndConcept = 0;
    estimation.value.groups.dataStorage = 0;
    estimation.value.groups.backendImplementation = 0;
    estimation.value.groups.frontendImplementation = 0;
}

const storyPoints = [1, 2, 3, 5, 8, 13, 20, 40, 100];
const referenceCodeMap = ['A', 'B', 'C', 'D', 'E', 'F'];

watch(estimationGroups, () => {

    const { designAndConcept, dataStorage, backendImplementation, frontendImplementation} = estimation.value.groups;

    const totalScore = designAndConcept + dataStorage + backendImplementation + frontendImplementation;

    estimation.value.totalScore = totalScore;
    estimation.value.closestStoryPoint = storyPoints.reduce((result, current) =>
        Math.abs(current - totalScore) < Math.abs(result - totalScore) ? current : result
    );

    estimation.value.referenceCode = `${referenceCodeMap[designAndConcept]}${referenceCodeMap[dataStorage]}${referenceCodeMap[backendImplementation]}${referenceCodeMap[frontendImplementation]}`;
});

</script>

<template>
    <div class="grid gap-5">
        <EstimationButtonGroup title="Design & Concept" v-model="estimationGroups.designAndConcept" />
        <EstimationButtonGroup title="Data Storage" v-model="estimationGroups.dataStorage" />
        <EstimationButtonGroup title="Backend Implementation" v-model="estimationGroups.backendImplementation" />
        <EstimationButtonGroup title="Frontend implementation" v-model="estimationGroups.frontendImplementation" />
        <ActionButton @click="resetEstimation" text="Reset Estimation" class="rounded" />
    </div>
</template>