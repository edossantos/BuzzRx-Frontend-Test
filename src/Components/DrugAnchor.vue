<template>
    <a :title="drugName" @click.prevent="$emit('actionDrugAnchor', {drugName, drugType})">{{ drugName }}</a>
</template>

<script>
export default {
    name: "DrugAnchor",
    props: {
        drugName: {
            required: true,
            type: String
        },
        drugType: {
            default: "G",
            type: String
        }
    }
}
</script>