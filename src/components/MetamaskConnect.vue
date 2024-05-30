<script setup>
import { ref } from 'vue';

const address = ref('')

const connectMetamask = async () => {
  if (typeof window.ethereum!== 'undefined') {
      try {
          const accounts = ref(null)
          accounts.value = await ethereum.request({ method: 'eth_requestAccounts' });
          address.value = accounts.value[0]

      } catch (error) {
          console.log(error);
      }
  } else {
      alert("Not connect");
  }
}

</script>

<template>
  <div class="metamask-contaienr">
    <h2>Metamask Connect</h2>

    <button @click="connectMetamask">Подключиться к Metamask</button>
    <p class="result"><span>Address: </span>{{ address }}</p>
    
  </div>
</template>

<style lang="sass" scoped>

  p 
    margin-top: 20px
    font-size: 22px
    color: #40B66B
    
    span
      color: #FC7CFF 

  .metamask-contaienr
    display: flex
    flex-direction: column
</style>