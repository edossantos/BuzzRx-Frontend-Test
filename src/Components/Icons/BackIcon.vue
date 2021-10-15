<template>
    <transition name="fade">
        <div class="header-icon" v-on:click="$emit('backToPreviousAction')">
            <i class="material-icons header-bar-icon">keyboard_arrow_left</i>
            <slot />
        </div>
    </transition>
</template>

<style lang="scss">
    .header-icon{
        display: flex;
        align-items: center;
    }
</style>
