<template>
  <div class="picker-view">
    <short-header>
      <template v-slot:leftcontent>
        <back-icon @backToPreviousAction="goBackToPreviousView()">
            <div class="header-title">
                <div class="header-title-text">Choose Form</div>
            </div>
        </back-icon>  
      </template>  
    </short-header>
    <div class="picker-view-content">
      <div class="picker-view-wrapper">
          <radio-input :text="drugForm.form" :selected="drugForm.select ? drugForm : {}" :value="drugForm" v-for="drugForm in drugFormList" :key="drugForm.form" @radioInputSelected="radioInputSelectedAction($event)"></radio-input>
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
    ...mapGetters('drugs', ['getSelectedDrugForm','getSelectedDrugFormList']),   
    drugFormList(){
        return this.getSelectedDrugFormList
    },
    selectedDrugForm: {
        get(){
            return this.getSelectedDrugForm
        },
        set(newValue){
            this.changeSelectedDrugForm(newValue)
        }
    }
  },
  methods: {
    ...mapActions('drugs', ['changeSelectedDrugForm']),
    radioInputSelectedAction(event){
      this.selectedDrugForm = event;
    }
  }
}
</script>