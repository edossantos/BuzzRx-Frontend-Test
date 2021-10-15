<template>
   <button class="buzz-button" @click.prevent="$emit('buttonClick')">{{label}}</button>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        }
    }
}
</script>

<style lang="scss">
    .buzz-button{
        display: inline-block;
        width: 100%;
        border-radius: 290486px;
        background-color: #B33CC8;
        border-color: transparent;
        color: #fff;
        font-size: 1.25rem;
        height: 2.5em;
        max-width: 275px;
        cursor: pointer;
    }
</style>