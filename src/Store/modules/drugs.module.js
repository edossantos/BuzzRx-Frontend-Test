export const namespaced = true;
import axios from 'axios';
import TOP_DRUGS from '@/assets/data/topdrugs.data';
import { DRUG_SERVICE_URL, DRUG_SERVICE_KEY } from '@/Common/api.config';
const state = {
  topDrugsList: TOP_DRUGS,
  selectedDrug: {
    name: '',
    type: 'G',
    drug_names: [],
    drug_form: [],
    drug_strength: [],
    drug_quantity: [],
    drug_prices: [],
    realDrugData: null,
  },
};

const getters = {
  getTopDrugsList: (state) => state.topDrugsList,
  getSelectedDrugName: (state) => state.selectedDrug.name,
  getSelectedDrugNameOption: (state) =>
    state.selectedDrug.drug_names.filter(
      (drugName) => drugName.drug_type == state.selectedDrug.type
    )[0],
  getSelectedDrugNameList: (state) => state.selectedDrug.drug_names,
  getSelectedDrugNameListLength: (state) =>
    state.selectedDrug.drug_names.length,
  getSelectedDrugForm: (state) =>
    state.selectedDrug.drug_form.find((drugForm) => drugForm.select == true),
  getSelectedDrugFormList: (state) => state.selectedDrug.drug_form,
  getSelectedDrugFormListLength: (state) => state.selectedDrug.drug_form.length,
  getSelectedDrugStrength: (state) =>
    state.selectedDrug.drug_strength.find(
      (drugStrength) => drugStrength.select == true
    ),
  getSelectedDrugStrengthList: (state) => state.selectedDrug.drug_strength,
  getSelectedDrugStrengthListLength: (state) =>
    state.selectedDrug.drug_strength.length,
  getSelectedDrugQuantity: (state) =>
    state.selectedDrug.drug_quantity.find(
      (drugQuantity) => drugQuantity.select == true
    ),
  getSelectedDrugQuantityList: (state) => state.selectedDrug.drug_quantity,
  getSelectedDrugQuantityListLength: (state) =>
    state.selectedDrug.drug_quantity.length,
  getSelectedDrugPrices: (state) => state.selectedDrug.drug_prices,
  getSelectedRealDrugData: (state) => state.selectedDrug.realDrugData,
};

const actions = {
  setSelectedDrugName({ commit }, payload) {
    commit('SET_SELECTED_DRUG_NAME', payload);
  },
  setSelectedReadlDrugData({ commit }, payload) {
    console.log(payload);
    commit('SET_SELECTED_REAL_DRUG_DATA', payload);
  },

  async drugOptions({ commit }, payload) {
    console.log('SUCCESS', payload);

    await axios
      .get(`${DRUG_SERVICE_URL}options`, {
        params: { ...payload, key: DRUG_SERVICE_KEY },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        commit('SET_SELECTED_DRUG_TYPE', payload.drug_type);
        // console.log(payload.drug_type);
        commit('SET_SELECTED_DRUG_NAMES', {
          drug_names: data.drug_names,
          ...payload,
        });
        // console.log(data.drug_names);
        commit('SET_SELECTED_DRUG_FORMS', Object.values(data.data.forms));
        commit(
          'SET_SELECTED_DRUG_STRENGTH',
          Object.values(data.data.strengths)
        );
        commit(
          'SET_SELECTED_DRUG_QUANTITY',
          Object.values(data.data.quantities)
        );
      });
  },
  changeSelectedDrugForm({ commit }, payload) {
    commit('CHANGED_SELECTED_DRUG_FORM', payload);
  },
  changeSelectedDrugStrength({ commit }, payload) {
    commit('CHANGED_SELECTED_DRUG_STRENGTH', payload);
  },
  changeSelectedDrugQuantity({ commit }, payload) {
    commit('CHANGED_SELECTED_DRUG_QUANTITY', payload);
  },
  async getDrugPrices({ commit }, payload) {
    console.log(payload);
    //HERE YOU CAN MAKE YOUR API CALL TO GET THE DRUG PRICES
    //Note: Setting this line to add example data to drug_prices
    commit('SET_SELECTED_DRUG_PRICES', [
      {
        BrandGeneric: 1,
        BrandGeneric_formatted: 'Generic',
        Qty: 30,
        LN: null,
        NPI: '1013922236',
        NDC: '00093505898',
        usualAndCustomaryPrice: '127.79',
        UCPrice: '127.78817316409837',
        PharmacyName: 'WALGREENS',
        network_price: '33.00',
        network_price_formatted: '33.00',
        discount: 94.79,
        discount_formatted: '$94.79',
        discount_percentage_formatted: '74%',
        UCPrice_formatted: '$127.79',
        City_State_Zip: 'MIAMI, FL, 33135',
        Distance: 0,
        Address: '2700 W FLAGLER ST',
      },
      {
        BrandGeneric: 1,
        BrandGeneric_formatted: 'Generic',
        Qty: 30,
        LN: null,
        NPI: '1013010479',
        NDC: '00093505898',
        usualAndCustomaryPrice: '127.04',
        UCPrice: '127.03786771105293',
        PharmacyName: 'CVS PHARMACY',
        network_price: '34.32',
        network_price_formatted: '34.32',
        discount: 92.72,
        discount_formatted: '$92.72',
        discount_percentage_formatted: '73%',
        UCPrice_formatted: '$127.04',
        City_State_Zip: 'COLUMBUS, OH, 43224',
        Distance: 0,
        Address: '4400 CLEVELAND AVE',
      },
    ]);
  },
};

const mutations = {
  SET_SELECTED_DRUG_NAME: (state, payload) =>
    (state.selectedDrug.name = payload),
  SET_SELECTED_DRUG_TYPE: (state, payload) =>
    (state.selectedDrug.type = payload),
  SET_SELECTED_DRUG_NAMES: (state, payload) => {
    const brandDrugName = payload.drug_names.brand.map((name) => [
      {
        label: `${name} (Brand)`,
        selected: payload.drug_type == 'B' ? true : false,
        drug_type: 'B',
        name: payload.name,
      },
    ]);
    const GenericDrugName = payload.drug_names.generic.map((name) => [
      {
        label: `${name} (Generic)`,
        selected: payload.drug_type == 'G' ? true : false,
        drug_type: 'G',
        name: payload.name,
      },
    ]);
    state.selectedDrug.drug_names = [
      ...brandDrugName[0],
      ...GenericDrugName[0],
    ];
  },
  SET_SELECTED_DRUG_FORMS: (state, payload) =>
    (state.selectedDrug.drug_form = payload),
  CHANGED_SELECTED_DRUG_FORM: (state, payload) => {
    const selectedDrugForms = [...state.selectedDrug.drug_form];
    const drugFormList = [];
    selectedDrugForms.map((drugForm) => {
      if (drugForm == payload) {
        drugFormList.push({ ...drugForm, select: true });
      } else {
        drugFormList.push({ ...drugForm, select: false });
      }
      return drugFormList;
    });
    state.selectedDrug.drug_form = drugFormList;
  },
  SET_SELECTED_DRUG_STRENGTH: (state, payload) =>
    (state.selectedDrug.drug_strength = payload),
  CHANGED_SELECTED_DRUG_STRENGTH: (state, payload) => {
    const selectedDrugStrengths = [...state.selectedDrug.drug_strength];
    const drugStrengthList = [];
    selectedDrugStrengths.map((drugStrength) => {
      if (drugStrength == payload) {
        drugStrengthList.push({ ...drugStrength, select: true });
      } else {
        drugStrengthList.push({ ...drugStrength, select: false });
      }
      return drugStrengthList;
    });
    state.selectedDrug.drug_strength = drugStrengthList;
  },
  SET_SELECTED_DRUG_QUANTITY: (state, payload) =>
    (state.selectedDrug.drug_quantity = payload),
  CHANGED_SELECTED_DRUG_QUANTITY: (state, payload) => {
    const selectedDrugQuantities = [...state.selectedDrug.drug_quantity];
    const drugQuantityList = [];
    selectedDrugQuantities.map((drugQuantity) => {
      if (drugQuantity == payload) {
        drugQuantityList.push({ ...drugQuantity, select: true });
      } else {
        drugQuantityList.push({ ...drugQuantity, select: false });
      }
      return drugQuantityList;
    });
    state.selectedDrug.drug_quantity = drugQuantityList;
  },
  SET_SELECTED_REAL_DRUG_DATA: (state, payload) => {
    state.selectedDrug.realDrugData = payload;
  },
  SET_SELECTED_DRUG_PRICES: (state, payload) =>
    (state.selectedDrug.drug_prices = payload),
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
