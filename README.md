# buzz-dev-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
## BuzzRx Test
---

## Drug Service API : 

#### Drug Service API Options:
#### Example how to get Drug Option Data (Type, Form, Strength, Quantity) 
>https://staging-drugservice-api-1.buzzrx.com/api/v2/drug/options?name=Lipitor&drug_type=G&key=QYCf8BeY7EkuHv43gtZeEA63vFV3XVcRyAyga6qg7cm6MCRfjE  

#### Drug Service API Prices:
#### Example how to get Drug Price Data
>https://staging-drugservice-api-1.buzzrx.com/api/v2/drug/prices?name=Lipitor&form=tablet&ndc=60505258008&qty=30&key=QYCf8BeY7EkuHv43gtZeEA63vFV3XVcRyAyga6qg7cm6MCRfjE


Note: You can also find API url and API key inside the file below:
>src/Common/api.config.js

## Test Todo List

1. Sort top drugs by position.
```
drugTopList(){
  return this.getTopDrugsList
}
```
**Note**: You can find the top drug data inside this file below.

>src/assets/data/topdrugs.data.js

    
2. Use the drug service API to get drug option.
  - Example: Right now after the top drug is clicked and routered to the DrugOption the `drugOptions` action gets called to the drug information and the data gets populated. 
  ```
  async drugOptions({commit}, payload){
    await axios.get(`${DRUG_SERVICE_URL}options`, {params: {...payload, key: DRUG_SERVICE_KEY}}, ).then(response => {
      const data = response.data;
      commit('SET_SELECTED_DRUG_TYPE', payload.drug_type)
      commit('SET_SELECTED_DRUG_NAMES', {drug_names: data.drug_names, ...payload})
      commit('SET_SELECTED_DRUG_FORMS', Object.values(data.data.forms))
      commit('SET_SELECTED_DRUG_STRENGTH', Object.values(data.data.strengths))
      commit('SET_SELECTED_DRUG_QUANTITY', Object.values(data.data.quantities))
    })
  }
  ```

***Todo**: On Drug Type changed called the `Drug Service API(options)` again passing the new drug_type and populate the new forms, strength and quantity for the new type of drug.


>https://staging-drugservice-api-1.buzzrx.com/api/v2/drug/options?name=Lipitor&drug_type=B&key=QYCf8BeY7EkuHv43gtZeEA63vFV3XVcRyAyga6qg7cm6MCRfjE  


     Note: the drug_type param in the url was changed from `G`(Generic) to `B`(Branch).

     The Drug type change event can be found inside: `src/Views/DrugTypeOptionsPicker.vue`

3. Drug API option `drugOptions` called every time the page gets `activated`, how can you prevent it from happening when the page is getting pushed by the back button of one of those option picker pages.
 

    - `src/Views/DrugTypeOptionsPicker.vue`
    - `src/Views/DrugFormOptionsPicker.vue`
    - `src/Views/DrugStrengthOptionsPicker.vue`
    - `src/Views/DrugQuantityOptionsPicker.vue`

    Note: If you notice the value you picked for the form inside the form picker will change after you click the back button to go back to the drugOption Page. 

4. Get Drug Prices from API `DRUG SERVICE API PRICES`

    On `The Show Saving` button click call the `DRUG SERVICE API PRICES` and redirect the user to the `drug_prices` page.

    You can find the button action inside `src/Views/DrugOption.vue`

    Note: the ndc value for the URL param comes from `strength ndc`

5. Refactor any code that you see that is repeating it self. DRY.

## Bonus: If you have enough time and want to give a style refresh to the Drug Price Page please feel free.
     



