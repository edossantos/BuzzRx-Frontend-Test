<template>
    <transition name="fade">
        <div @click.prevent="$emit('dismissView')" class="header-icon">
            <i class="material-icons is-small close-icon">close</i>
        </div>
    </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .header-icon{
        display: flex;
        align-items: center;
        .close-icon{
            font-size: 26px;
        }
    }
</style>