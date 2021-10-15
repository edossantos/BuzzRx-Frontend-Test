import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/Views/Home.vue')
        },
        {
            path: '/drug_options',
            name: 'drug_options',
            props: route => ({ query: route.query.drugName }),
            component: () => import('@/Views/DrugOption.vue')
        },
        {
            path: '/drug_type_picker',
            name: 'drug_type_picker',
            component: () => import('@/Views/DrugOptionsPickers/DrugTypeOptionsPicker.vue')
        },
        {
            path: '/drug_form_picker',
            name: 'drug_form_picker',
            component: () => import('@/Views/DrugOptionsPickers/DrugFormOptionsPicker.vue')
        },
        {
            path: '/drug_strength_picker',
            name: 'drug_strength_picker',
            component: () => import('@/Views/DrugOptionsPickers/DrugStrengthOptionsPicker.vue')
        },
        {
            path: '/drug_quantity_picker',
            name: 'drug_quantity_picker',
            component: () => import('@/Views/DrugOptionsPickers/DrugQuantityOptionsPicker.vue')
        },
        {
            path: '/drug_prices',
            name: 'drug_prices',
            component: () => import('@/Views/DrugPrices.vue')
        }

    ]
})