<template>
<div class="radio-input-wrapper">
    <div class="radio-input">
        <label class="radio">
            <input type="radio" :value="value" name="repeat" @click="$emit('radioInputSelected', value)" v-model="selectedRadio">
            {{text}}
        </label>
    </div>
</div>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        },
        value: {
            type: Object
        },
        dataValue: {
            type: Object
        },
        selected:{
            type: Object
        }
    },
    data(){
        return {
            selectedRadio: this.selected
        }
    }
}
</script>

<style lang="scss">
  @import "@/assets/scss/variables.style.scss"; 
  .radio-input-wrapper{
        .radio-input{
            display: flex;
            align-items: center;
            height: 60px;
            border-bottom: 1px solid $border-gray;
            cursor: pointer;
            label.radio{
                font-size: 20px;
                line-height: 24px;
                color: $native-black;
                width: 100%;
                display: flex;
                height: 100%;
                align-items: center;
                input{
                    -webkit-appearance: none;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    outline: none;
                    border: 2px solid $native-black;
                    margin: 0px 20px 0px 18px;
                    &:before {
                        content: '';
                        display: block;
                        width: 71%;
                        height: 71%;
                        margin: 15% auto;
                        border-radius: 50%;
                    }
                    &:checked{
                        border-color: $secondary;
                        &:before {
                            background: $secondary;
                        }
                    }
                }
            }
        }
    }
</style>