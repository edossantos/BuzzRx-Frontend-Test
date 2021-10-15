<template>
  <div class="buzz-tab-wrapper">
      <div class="buzz-tab" @click="$emit('tabClicked')">
          <div class="buzz-content-center-wrapper">
              <div class="buzz-content-center-title">{{tabTitle}}</div>
              <div class="buzz-content-center-picked" :class="{'disabled-selected-value': disabledTabAction}">{{tabSelectedValue}}</div>
          </div>
          <div class="buzz-icon-right-wrapper">
              <div class="buzz-icon-right">
                  <div class="buzz-icon" :class="{rotate: isOpen}">
                    <i class="material-icons-outlined">&#xe315;</i>  
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        tabTitle: String,
        tabSelectedValue: String,
        isOpen: {
            type: Boolean,
            default: false
        },
        disabledTabAction: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/variables.style.scss"; 
    .buzz-tab-wrapper{
        .buzz-tab{
            display: flex;
            align-items: center;
            min-height: 87px;
            border-bottom: 1px solid $border-gray;
            padding-left: 15px;
            cursor: pointer;
            .buzz-content-center-wrapper{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 85%;
                .buzz-content-center-title{
                    font-size: 16px;
                    line-height: 19px;
                    color: $native-black;
                    padding: 5px 0;
                }
                .buzz-content-center-picked{
                    font-size: 20px;
                    line-height: 24px;
                    color: $secondary;
                    transition: color 0.5s ease;
                    &.disabled-selected-value{
                        color: $extralightgray;
                    }
                }
            }
            .buzz-icon-right-wrapper{
                width: 15%;
                .buzz-icon-right{
                    .buzz-icon{
                        text-align: center;
                        transform: rotate(0deg);
                        transition-duration: 0.3s;
                        .material-icons{
                            font-size: 2rem;
                        }
                        &.rotate{
                            transform: rotate(90deg);
                            transition-duration: 0.3s;
                        }
                    }
                }
            }
        }
    }
</style>