<template>
  <div class="picker-view">
    <short-header>
      <template v-slot:leftcontent>
        <back-icon @backToPreviousAction="goBackToPreviousView()">
            <div class="header-title">
                <div class="header-title-text">Choose Quantity</div>
            </div>
        </back-icon>  
      </template>  
    </short-header>
    <div class="picker-view-content">
      <div class="picker-view-wrapper">
          <radio-input :text="drugQuantity.quantity.toString()" :selected="drugQuantity.select ? drugQuantity : {}" :value="drugQuantity" v-for="drugQuantity in drugQuantityList" :key="drugQuantity.quantity" @radioInputSelected="radioInputSelectedAction($event)"></radio-input>
      </div>
    </div>
  </div>
</template>

<script>

import DrugOptionsPickerCommon from '@/Mixins/DrugOptionsPicker.common'
import { mapActions, mapGetters } from 'vuex'
export default {
  mixins: [DrugOptionsPickerCommon],
  computed: {
    ...mapGetters('drugs', ['getSelectedDrugQuantity','getSelectedDrugQuantityList']),   
    drugQuantityList(){
        return this.getSelectedDrugQuantityList
    },
    selectedDrugQuantity: {
        get(){
            return this.getSelectedDrugQuantity
        },
        set(newValue){
            this.changeSelectedDrugQuantity(newValue)
        }
    }
  },
  methods: {
    ...mapActions('drugs', ['changeSelectedDrugQuantity']),
    radioInputSelectedAction(event){
      this.selectedDrugQuantity = event;
    }
  }
}
</script>