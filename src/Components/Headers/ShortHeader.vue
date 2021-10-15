<template>
  <header
        id="short-header"
        tabindex="0"
        class="short-header brx-gradient-background"
        aria-label="BuzzRx Prescription Prices That Won't Sting"
        :class="{'centered-title': centeredTitle}"
        >
        <div class="header-content">
          <div class="header-left">
              <slot name="leftcontent"></slot>
          </div>
          <div class="header-center">
              <div class="header-center-wrapper">
                  <div class="header-center-text">
                    <slot name="centercontent"></slot>
                  </div>
              </div>
          </div>
          <div class="header-right" :class="{'header-right-text': rightContentIsText}">
              <slot name="rightcontent"></slot>
          </div>
        </div>
      </header>
</template>

<script>
export default {
    props: {
        centeredTitle: {
          default: false,
          type: Boolean
        },
        centeredTitleImage: {
          default: false,
          type: Boolean
        },
        rightContentIsText: {
          default: false,
          type: Boolean
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.style";
  .short-header {
    position: relative;
    width: 100%;
    min-height: 27px;
    z-index: 2;
    background-color: $primary;
    padding-top: 10px;
    padding-bottom: 10px;
    .header-content{
      display: flex;
      justify-content: space-evenly;
      .header-left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 85%;
        padding-left: 0.4rem;
        cursor: pointer;
        .header-icon{
          max-height: 35px;
          padding-right: 0.5rem;
          .header-bar-icon{
            font-size: 2rem;
          }
        }
      }
      .header-title{
        .header-title-text{
            font-size: 18px;
            font-weight: bold;
        }
      }
      .header-right{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        padding: {
          left: 1.45rem;
          right: 1.1rem;
        }
        cursor: pointer;
        .header-icon{
          max-height: 35px;
          .header-bar-icon{
            font-size: 1.5rem;
          }
        }
        &.header-right-text{
          padding-left: 0;
        }
      }

    }
    &.centered-title{
        .header-left{
            width: 15%;
            .header-title{
                display: none;
            }
        }
        .header-center{
          display: flex;
          justify-content: center;
          align-self: center;
            width: 70%;
            .header-center-wrapper{
              .header-center-text{
                font-size: 20px;
                font-weight: bold;
                text-align: center;
              }
              .header-center-image{
                text-align: center;
                .buzz-logo{
                  height: 35px;
                }
              }
            }
        }
        .header-right{
            width: 15%;
        }
    }
}
</style>