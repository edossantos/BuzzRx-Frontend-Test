<template>
  <div class="picker-view">
    <short-header>
      <template v-slot:leftcontent>
        <back-icon @backToPreviousAction="goBackToPreviousView()">
          <div class="header-title">
            <div class="header-title-text">Choose Drug</div>
          </div>
        </back-icon>
      </template>
    </short-header>
    <div class="picker-view-content">
      <div class="picker-view-wrapper">
        <radio-input
          :text="drugName.label"
          :selected="drugName.selected ? drugName : {}"
          :value="drugName"
          v-for="drugName in drugNameList"
          :key="drugName.label"
          @radioInputSelected="radioInputSelectedAction($event)"
        ></radio-input>
      </div>
    </div>
  </div>
</template>

<script>
import DrugOptionsPickerCommon from '@/Mixins/DrugOptionsPicker.common';
import { mapActions, mapGetters } from 'vuex';
export default {
  mixins: [DrugOptionsPickerCommon],
  computed: {
    ...mapGetters('drugs', [
      'getSelectedDrugName',
      'getSelectedDrugNameOption',
      'getSelectedDrugNameList',
    ]),
    ...mapActions('drugs', ['setSelectedDrugName', 'drugOptions']),
    drugNameList() {
      return this.getSelectedDrugNameList;
    },
    selectedDrugName() {
      return this.getSelectedDrugNameOption;
    },
  },
  methods: {
    radioInputSelectedAction(event) {
      //2. This is where you capture the change of the drug type (drugName)
      console.log('THE DRUG TYPE WAS CHANGED');
      console.log(event);
      //find real drug values
      const parensIdx = event.label.indexOf('(');
      const selectedDrug = event.label.slice(0, parensIdx);
      const selectedDrugType = "'" + event.label[parensIdx + 1] + "'";

      this.$store.commit('drugs/SET_SELECTED_DRUG_NAME', {
        name: selectedDrug,
        drug_type: selectedDrugType,
      });
      console.log(this.$store.getters.getSelectedDrugNameOption);
    },
  },
};
</script>
