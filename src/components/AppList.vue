<script setup>
import { computed, ref } from "vue";
import AppItem from '../components/AppItem.vue'

const links = [
  {
    id: 1,
    name: "Uniswap",
    url:"https://app.uniswap.org/",
  },
  {
    id: 2,
    name: "Bugs.denet.pro",
    url:"https://bugs.denet.pro",
  },
  {
    id: 3,
    name: "Revert.finance",
    url:"https://revert.finance/",
  }
];

let selectedSrc = ref('https://app.uniswap.org/')

const openSite = (src) => {
  console.log(src);
  selectedSrc.value = src
}

</script>

<template>
  <div>
    <h2>App List</h2>

    <ul>
      <AppItem :link="link" @changeSrc="openSite" v-for="link in links" :key="link.id"/>
    </ul>
    <iframe width="100%" height="500px" :src="selectedSrc"></iframe>
  </div>
</template>

<style lang="sass" scoped>
  ul
    margin-top: 30px
    display: flex
    flex-direction: column
    row-gap: 10px

  iframe
    margin-top: 30px
</style>