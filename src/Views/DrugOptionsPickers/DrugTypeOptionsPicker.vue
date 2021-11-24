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
  data() {
    return {
      realDrugType: '',
    };
  },

  mixins: [DrugOptionsPickerCommon],
  computed: {
    ...mapGetters('drugs', [
      'getSelectedDrugName',
      'getSelectedDrugNameOption',
      'getSelectedDrugNameList',
    ]),
    ...mapActions('drugs', [
      'setSelectedDrugName',
      'setSelectedDrugType',
      'drugOptions',
      'setSelectedRealDrugData',
    ]),
    drugNameList() {
      return this.getSelectedDrugNameList;
    },
    selectedDrugName() {
      return this.getSelectedDrugNameOption;
    },
  },
  methods: {
    pullDrugAndTypeFromLabel(label) {
      const sliceIdx = label.indexOf('(');
      const realDrugSelected = label.slice(0, sliceIdx);
      const realType = label[sliceIdx + 1];
      const realDrug = {
        ...this.$store.state.drugs.selectedDrug,
        name: realDrugSelected,
        type: realType,
      };
      return realDrug;
    },
    radioInputSelectedAction(event) {
      //2. This is where you capture the change of the drug type (drugName)
      console.log('THE DRUG TYPE WAS CHANGED');
      console.log('after radio button:', event);

      // grab the relevant data needed in the event and store in an object. then commit the details to the store. then call the drug options action in right lifecycle .

      const realDrug = this.pullDrugAndTypeFromLabel(event.label);
      //dispatch once you have the real name and real type
      // ***
      this.$store.dispatch('drugs/setSelectedDrugName', realDrug.name);


      // now, the updated state has the correct selected drug - pass to the store
      this.$store.dispatch('setSelectedRealDrugData', realDrug);
      console.log(this.$store.state)

      // the below will be called upon the proper lifecycle method in the proper page
      // this.$store.dispatch('drugs/drugOptions', realDrug);
    },
  },
};
</script>
