<template>
  <div class="top-drugs-list-wrapper">
    <div class="top-drugs-list-header">
      <h3>
        <span>TOP DISCOUNTS</span>
      </h3>
    </div>
    <div class="drug-list-wrapper">
      <div class="drug-list">
        <div class="drug-list-item">
          <div class="drug-option" v-for="drug in drugTopList" :key="drug.id">
            <drug-anchor
              class="drug-link"
              :drugName="drug.drugName"
              @actionDrugAnchor="goToDrug($event)"
            ></drug-anchor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DrugAnchor from '@/Components/DrugAnchor';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'TopDiscountsDrugsSection',
  components: {
    DrugAnchor,
  },
  computed: {
    ...mapGetters('drugs', ['getTopDrugsList']),
    drugTopList() {
      return this.getTopDrugsList;
    },
  },
  methods: {
    ...mapActions('drugs', ['setSelectedDrugName']),
    goToDrug(drugSelected) {
      const { drugName, drugType } = drugSelected;
      this.$router
        .push({
          name: 'drug_options',
          query: { drugName: drugName, drugType: drugType },
        })
        .then(() => {
          this.setSelectedDrugName(drugName);
        });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.style.scss';
.top-drugs-list-wrapper {
  .top-drugs-list-header {
    padding: 2rem 1.5rem 0.5rem;
    h3 {
      span {
        color: $black;
        padding: 5px 0;
        border-bottom: 2px solid $secondary;
        font-weight: bold;
      }
    }
  }
  .drug-list {
    margin: 10px auto;
    max-width: 300px;
    @media all and (max-width: $mobile) {
      padding: 0;
      margin-top: -10px;
    }

    .drug-option {
      padding: 0.75rem 0.75rem 0;
      a {
        color: $black;
        text-transform: uppercase;
        border-radius: 2rem;
        border: 1px solid #efd3e0;
        display: block;
        margin: 0 auto;
        box-sizing: content-box;
        font-weight: bold;
        transition: all 0.15s;
        padding: 11px;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
          border: 1px solid $secondary;
          text-decoration: none;
          cursor: pointer;
          color: $secondary;
        }
      }
    }
  }
}
</style>
