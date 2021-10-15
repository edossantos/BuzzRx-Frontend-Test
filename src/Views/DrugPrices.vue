<template>
  <div class="price-view">
    <short-header :centered-title="true">
         <template v-slot:leftcontent>
            <back-icon @backToPreviousAction="goBackToPreviousView()"></back-icon>  
        </template>  
          <template v-slot:centercontent>
              {{drugName ? drugName : ''}}
          </template>
          <template v-slot:rightcontent>
            <close-icon @dismissView="backToHomeView()"></close-icon>
          </template> 
      </short-header>
      <div class="drug-price-header" v-if="drugFormName && drugStrengthName && drugQtySelected && drugType">
        <small aria-hidden="true">
            <span class="drug-form-name">
                {{drugFormName.form}}
            </span>
            <span role="presentation" aria-hidden="true"> | </span>
            {{drugStrengthName.strength}}
            <span role="presentation" aria-hidden="true"> | </span>
            <span>
            {{drugQtySelected.quantity}} QTY
            <span role="presentation" aria-hidden="true"> | </span>
            </span>
            <span class="is-uppercase" v-if="drugType.drug_type === 'G'" tabindex="-1">Generic</span>
            <span class="is-uppercase" v-if="drugType.drug_type === 'B'" tabindex="-1">Brand</span>
        </small>
      </div>
      <div class="drug-price-list-wrapper">
          <div class="drug-price-list">
              <div class="drug-item" v-for="drug in drugPrices" :key="drug.NPI">
                  <div class="drug-item-pharmacy-name">
                      {{drug.PharmacyName}}
                  </div>
                  <div class="drug-item-price">
                      <primary-button @buttonClick="alertBestPrice()" :label="formatDrugPrice(drug.network_price_formatted)" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ShortHeader from "@/Components/Headers/ShortHeader"
import BackIcon from '@/Components/Icons/BackIcon.vue'
import CloseIcon from "@/Components/Icons/CloseIcon.vue"
import PrimaryButton from "@/Components/Buttons/Primary"
import { mapGetters } from 'vuex'
export default {
    components: {
      ShortHeader,
      BackIcon,
      CloseIcon,
      PrimaryButton
    },
    data() {
      return {
          previousRoute: '',
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.previousRoute = from;
        });
    },
    computed: {
        ...mapGetters('drugs', ['getSelectedDrugName', 'getSelectedDrugPrices', 'getSelectedDrugForm', 'getSelectedDrugStrength', 'getSelectedDrugQuantity', 'getSelectedDrugNameOption']),
        drugName(){
            return this.getSelectedDrugName
        },
        drugPrices(){
            return this.getSelectedDrugPrices
        },
        drugFormName(){
            return this.getSelectedDrugForm
        },
        drugStrengthName(){
            return this.getSelectedDrugStrength
        },
        drugQtySelected(){
            return this.getSelectedDrugQuantity
        },
        drugType(){
            return this.getSelectedDrugNameOption
        }
    },
    methods: {
        goBackToPreviousView(){
            this.$router.push({ path: this.previousRoute.path, query: {...this.previousRoute.query, ...{skipDataUpdate: true}} })
        },
        backToHomeView(){
            this.$router.push({ name: 'home' });
        },
        alertBestPrice(){
            alert("BEST PRICE IN TOWN")
        },
        formatDrugPrice(price){
            return `$${price}`
        }
    }

}
</script>
<style lang="scss">
@import "@/assets/scss/variables.style.scss"; 
    .price-view{
        .drug-price-header{
            padding-top: 20px;
            small{
                font-weight: bold;
                span{
                    &.drug-form-name{
                        text-transform: capitalize;
                    }
                }
            }
        }
        .drug-price-list-wrapper{
            padding-top: 20px;
           .drug-price-list{
               .drug-item{
                   padding: 10px;
                   border-bottom: 1px solid $border-gray;
                   .drug-item-pharmacy-name{
                       padding: 10px 0;
                       font-weight: bold;
                   }
                   .drug-item-price{
                       .buzz-button{
                           max-width: 150px;
                           font-weight: bold;
                       }
                   }
               }
           } 
        }
    }
</style>