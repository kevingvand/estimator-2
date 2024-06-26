<script lang="ts" setup>

const estimation = ref({
    totalScore: 0,
    closestStoryPoint: 1,
    referenceCode: '',
    groups: {
        designAndConcept: 0,
        dataStorage: 0,
        backendImplementation: 0,
        frontendImplementation: 0
    }
})

const estimationDescriptionMap = [
    "Not applicable",
    "Minimal effort",
    "Low effort",
    "Moderate effort",
    "High effort",
    "Very high effort"
];

function copyEstimation() {
    const { designAndConcept, dataStorage, backendImplementation, frontendImplementation } = estimation.value.groups;

    const estimationComment = `
    h1. Estimation results
    * {{Design And Concept:      ${estimationDescriptionMap[designAndConcept]} (${designAndConcept})}}
    * {{Data Storage:            ${estimationDescriptionMap[dataStorage]} (${dataStorage})}}
    * {{Backend Implementation:  ${estimationDescriptionMap[backendImplementation]} (${backendImplementation})}}
    * {{Frontend Implementation: ${estimationDescriptionMap[frontendImplementation]} (${frontendImplementation})}}
    
    {quote}
    Total Points: ${estimation.value.totalScore}
    Closest Story Points: *${estimation.value.closestStoryPoint}*
    {quote}
    _This ticket was estimated using the DES PSV Estimator._
    {{Reference: ${estimation.value.referenceCode}}}
    `;

    navigator.clipboard.writeText(estimationComment);
}

</script>

<template>
    <div class="grid sm:grid-cols-[auto_1fr] gap-3 p-3">
        <Card>
            <EstimationPanel v-model="estimation" />
        </Card>

        <div class="grid align-start grid-rows-[auto_1fr]">
            <Card title="Estimation">
                <div class="flex flex-col items-start justify-center gap-3">
                    <span class="text-ocean-700">Story Points </span>
                    <Pill size="large">{{ estimation.closestStoryPoint }}</Pill>
                    <span class="text-ocean-700">Total Score</span>
                    <Pill>{{ estimation.totalScore }}</Pill>
                    <ActionButton text="Copy to Clipboard" @click="copyEstimation" class="w-full" />
                    <div class="flex justify-between w-full text-ocean-900 text-sm">
                        <span class="font-semibold">Design & Concept</span>
                        <div class="flex gap-2">
                            <span>{{ estimationDescriptionMap[estimation.groups.designAndConcept] }}</span>
                            <Pill>{{ estimation.groups.designAndConcept }}</Pill>
                        </div>
                    </div>
                    <div class="flex justify-between w-full text-ocean-900 text-sm">
                        <span class="font-semibold">Data Storage</span>
                        <div class="flex gap-2">
                            <span>{{ estimationDescriptionMap[estimation.groups.dataStorage] }}</span>
                            <Pill>{{ estimation.groups.dataStorage }}</Pill>
                        </div>
                    </div>
                    <div class="flex justify-between w-full text-ocean-900 text-sm">
                        <span class="font-semibold">Backend Implementation</span>
                        <div class="flex gap-2">
                            <span>{{ estimationDescriptionMap[estimation.groups.backendImplementation] }}</span>
                            <Pill>{{ estimation.groups.backendImplementation }}</Pill>
                        </div>
                    </div>
                    <div class="flex justify-between w-full text-ocean-900 text-sm">
                        <span class="font-semibold">Frontend Implementation</span>
                        <div class="flex gap-2">
                            <span>{{ estimationDescriptionMap[estimation.groups.frontendImplementation] }}</span>
                            <Pill>{{ estimation.groups.frontendImplementation }}</Pill>
                        </div>
                    </div>
                    <p class="italic self-end">Reference Code: {{ estimation.referenceCode }}</p>
                </div>
            </Card>
        </div>
    </div>
</template>