<template>
  <div class="picker-view">
    <short-header>
      <template v-slot:leftcontent>
        <back-icon @backToPreviousAction="goBackToPreviousView()">
            <div class="header-title">
                <div class="header-title-text">Choose Strength</div>
            </div>
        </back-icon>  
      </template>  
    </short-header>
    <div class="picker-view-content">
      <div class="picker-view-wrapper">
          <radio-input :text="drugStrength.strength" :selected="drugStrength.select ? drugStrength : {}" :value="drugStrength" v-for="drugStrength in drugStrengthList" :key="drugStrength.strength" @radioInputSelected="radioInputSelectedAction($event)"></radio-input>
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
    ...mapGetters('drugs', ['getSelectedDrugStrength','getSelectedDrugStrengthList']),   
    drugStrengthList(){
        return this.getSelectedDrugStrengthList
    },
    selectedDrugStrength: {
        get(){
            return this.getSelectedDrugStrength
        },
        set(newValue){
            this.changeSelectedDrugStrength(newValue)
        }
    }
  },
  methods: {
    ...mapActions('drugs', ['changeSelectedDrugStrength']),
    radioInputSelectedAction(event){
      this.selectedDrugStrength = event;
    }
  }
}
</script>