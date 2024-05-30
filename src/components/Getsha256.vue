<script setup>
import { computed, ref } from 'vue';

const text = ref(null)
const hash = ref(null)

const getSHA256 = computed(() => {
  hash.value = CryptoJS.SHA256(text.value).toString();
  console.log("qwewqe");
})

</script>

<template>
  <div>
    <h2>Get sha256</h2>
    <textarea v-model="text"  name="" id="" cols="30" rows="10"></textarea>
    <button @click="getSHA256">Get sha256</button>
    <p class="result"><span>Result: </span>{{ hash }}</p>
  </div>
</template>

<style lang="sass" scoped>

  p 
    margin-top: 20px
    font-size: 22px
    color: #40B66B
    
    span
      color: #FC7CFF 

  textarea 
    margin-top: 30px
    width: 100%
    background: rgb(19, 19, 19)
    border: 1.5px solid rgba(255, 255, 255, 0.12)
    border-radius: 12px
    color: #fff
    font-size: 16px
    height: 100px
    padding: 12px
    resize: none

</style>

