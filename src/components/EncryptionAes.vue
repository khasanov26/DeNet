<script setup>
import { ref, computed } from 'vue';


//шифруем
const encryptionValue = ref(null)
const encryptionKey = ref(null)

const encryptionResult = computed(() => {
  if(encryptionValue.value && encryptionKey.value ) {
    return CryptoJS.AES.encrypt(encryptionValue.value, encryptionKey.value).toString();
  }
  
})


//расшифруем
const decryptionValue = ref(null)
const decryptionKey = ref(null)

const decryptionResult = computed(() => {
  if(decryptionValue.value && decryptionKey.value ) {
    const bytes = ref(null)
    bytes.value = CryptoJS.AES.decrypt(decryptionValue.value, decryptionKey.value);
    return bytes.value.toString(CryptoJS.enc.Utf8);
  }
})


</script>

<template>
  <div>
    <h2>Encryption Aes</h2>

    <h3>Шифруем значение</h3>
    <div>
      <div>
        Значение <input v-model="encryptionValue" type="text"> <br><br>
        Ключ <input v-model="encryptionKey" type="text"> <br>
        <p class="result">Зашифрованное значение: <span>{{ encryptionResult }}</span></p>
      </div>
    </div>
    <br>
    <h3>Расшифровываем значение</h3>
    <div>
      <div>
        Зашифрованное значение <input v-model="decryptionValue" type="text"> <br><br>
        ключ <input v-model="decryptionKey" type="text"> <br>
        <p class="result">Полученное значение: <span>{{ decryptionResult  || 'Введен неправильный ключ или отсутвует зашифрованное значение'  }}</span></p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  h3
    margin-top: 10px
    margin-bottom: 10px
    font-size: 24px
    color: #598BFB
  .result
    margin-top: 10px
    color: #FC7CFF
    word-break: unset
    span
      color: #40B66B
</style>