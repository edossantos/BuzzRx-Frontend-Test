<template>
  <div class="drug-options-view">
      <short-header :centered-title="true">
            <template v-slot:leftcontent>
                <back-icon @backToPreviousAction="backToHomeView()"></back-icon>  
            </template>
          <template v-slot:centercontent>
             Configure prescription
          </template>
      </short-header>
      <div class="drug-options-tabs">
          <tab
            tabTitle="Brand/Generic:"
            :tabSelectedValue="selectedDrugName ? selectedDrugName.label : ''"
            @tabClicked="openDrugTypePicker">
        </tab>
        <tab
            tabTitle="Form"
            :tabSelectedValue="selectedDrugForm ? selectedDrugForm.form : ''"
            :disabledTabAction="selectedDrugFormLength > 1 ? false : true"
            @tabClicked="openDrugFormPicker">
            
        </tab>
        <tab
            tabTitle="Strength"
            :tabSelectedValue="selectedDrugStrength ? selectedDrugStrength.strength : ''"
            :disabledTabAction="selectedDrugStrengthLength > 1 ? false : true"
            @tabClicked="openDrugStrengthPicker">
        </tab>
        <tab
            tabTitle="Quantity"
            :tabSelectedValue="selectedDrugQuantity ? selectedDrugQuantity.quantity.toString() : ''"
            :disabledTabAction="selectedDrugQuantityLength > 1 ? false : true"
            @tabClicked="openDrugQuantityPicker">
        </tab>
      </div>  
      <div class="drug-options-button">
          <primary-button @buttonClick="showSavings()" label="Show Savings" />
      </div>
  </div>
</template>

<script>
import ShortHeader from "@/Components/Headers/ShortHeader"
import BackIcon from "@/Components/Icons/BackIcon.vue"
import Tab from "@/Components/Tab"
import PrimaryButton from "@/Components/Buttons/Primary"
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        ShortHeader,
        BackIcon,
        Tab,
        PrimaryButton
    },
    activated(){
        if(this.$route.query.drugName && this.$route.query.drugType){
                this.getDrugOptions({name: this.$route.query.drugName, drug_type: this.$route.query.drugType})
        }else{
            //BONUS: SHOW ERROR MESSAGE 
        }
    },
    computed: {
        ...mapGetters('drugs', ['getSelectedDrugNameOption', 
                                'getSelectedDrugForm', 
                                'getSelectedDrugStrength', 
                                'getSelectedDrugQuantity', 
                                'getSelectedDrugFormListLength',
                                'getSelectedDrugStrengthListLength',
                                'getSelectedDrugQuantityListLength']),
        selectedDrugName(){
            return this.getSelectedDrugNameOption
        },
        selectedDrugForm(){
            return this.getSelectedDrugForm
        },
        selectedDrugStrength(){
            return this.getSelectedDrugStrength
        },
        selectedDrugQuantity(){
            return this.getSelectedDrugQuantity
        },
        selectedDrugFormLength(){
            return this.getSelectedDrugFormListLength
        },
        selectedDrugStrengthLength(){
            return this.getSelectedDrugStrengthListLength
        },
        selectedDrugQuantityLength(){
            return this.getSelectedDrugQuantityListLength
        }
    },
    methods: {
        ...mapActions('drugs', ['drugOptions', 'getDrugPrices']),
        async getDrugOptions(payload){
            await this.drugOptions(payload)
        },
        backToHomeView(){
            this.$router.push({ name: 'home' });
        },
        openDrugTypePicker(){
            this.$router.push({ name: 'drug_type_picker' });
        },
        openDrugFormPicker(){
            if(this.selectedDrugFormLength > 1){
                this.$router.push({ name: 'drug_form_picker' });
            }
        },
        openDrugStrengthPicker(){
            if(this.selectedDrugStrengthLength > 1){
                this.$router.push({ name: 'drug_strength_picker' });
            }
        },
        openDrugQuantityPicker(){
            if(this.selectedDrugQuantityLength > 1){
                this.$router.push({ name: 'drug_quantity_picker' });
            }
        },
        showSavings(){
            this.getDrugPrices().then(() => this.$router.push({ name: 'drug_prices' }))
        }
    }
}
</script>
<style lang="scss">
    .drug-options-view{
        .drug-options-button{
            padding-top: 30px;
        }
    }
</style>