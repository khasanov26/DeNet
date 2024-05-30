<script setup>

defineProps({
  link: {
    type: Object,
  }
})

// const openSite = (url) => {
//   document.getElementById("siteFrame").src = url;
// };

</script>

<template>
  <li v-if="link">
    <a href="#" @click="$emit('changeSrc', link.url)">{{ link.name }}</a>
  </li>
</template>