import ShortHeader from '@/Components/Headers/ShortHeader'
import BackIcon from '@/Components/Icons/BackIcon.vue'
import RadioInput from '@/Components/Inputs/RadioInput'
const DrugOptionsPickerCommon = {
    components: {
        ShortHeader,
        BackIcon,
        RadioInput,
    },
    data() {
        return {
            loader: false,
            previousRoute: '',
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.previousRoute = from;
        });
    },
    methods: {
        goBackToPreviousView(){
            this.$router.push({ path: this.previousRoute.path, query: {...this.previousRoute.query} })
        }
    }
};

export default DrugOptionsPickerCommon;