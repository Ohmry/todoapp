<template>
  <li>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path :d="pathValue" />
    </svg>
    <span>{{ props.label }}</span>
  </li>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  }
})

const svgValues = {
  star: 'm283-150.076 52.615-223.539-173.923-150.847 229.231-18.846L480-754.693l90.077 211.385 228.231 18.846-173.923 150.847L677-150.076 480-268.923 283-150.076Z',
  all: 'M144-260.231V-304h672v43.769H144Zm0-198.384v-43.77h672v43.77H144ZM144-657v-43.769h672V-657H144Z',
  today:
    'M458.615-741.692v-143.77h43.77v143.77h-43.77Zm221.231 92.846-30.231-30.231L750-782.769l31.769 32-101.923 101.923Zm61.846 190.231v-43.77h143.77v43.77h-143.77ZM458.615-75.538v-143h43.77v143h-43.77ZM281.461-649.846 177.461-750 211-781l100.923 101.154-30.462 30ZM752-178.461 649.615-280.923l30.001-29.231 101.615 99.923L752-178.461ZM75.538-458.615v-43.77h143.77v43.77H75.538Zm133.923 281.154L180-211l99.154-99.154 16.231 14.7 16 16.07-101.924 101.923ZM480.181-280q-83.258 0-141.72-58.28Q280-396.561 280-479.819q0-83.258 58.28-141.72Q396.561-680 479.819-680q83.258 0 141.72 58.28Q680-563.439 680-480.181q0 83.258-58.28 141.72Q563.439-280 480.181-280Zm-.304-43.769q64.508 0 110.431-45.801 45.923-45.8 45.923-110.307 0-64.508-45.801-110.431-45.8-45.923-110.307-45.923-64.508 0-110.431 45.801-45.923 45.8-45.923 110.307 0 64.508 45.801 110.431 45.8 45.923 110.307 45.923ZM480-480Z',
  done: 'M380.308-259.615 171.231-468.692l31.23-30.462 177.847 177.846 378-378.769 31.231 31.231-409.231 409.231Z'
}

const pathValue = computed(() => {
  return props.icon ? svgValues[props.icon] : ''
})
</script>
<style scoped>
li {
  position: relative;
  padding: 5px 5px;
  width: calc(100% - 20px);
  font-size: 14px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  cursor: default;
  box-sizing: border-box;
}
li:hover {
  background-color: #d7d7d7;
}
li > span {
  padding: 0 10px;
}
</style>
