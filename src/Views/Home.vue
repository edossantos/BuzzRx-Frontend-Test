<template>
  <div class="home-view">
    <short-header :centered-title="true">
          <template v-slot:centercontent>
              BuzzRx
          </template>
      </short-header>
     <top-discounts-drugs></top-discounts-drugs>
  </div>
</template>

<script>
import ShortHeader from "@/Components/Headers/ShortHeader"
import TopDiscountsDrugs from '@/Components/TopDiscountsDrugs'
export default {
    components: {
      ShortHeader,
      TopDiscountsDrugs
    }
}
</script>