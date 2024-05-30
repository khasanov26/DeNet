<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container main-content">
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/">Metamask connect</RouterLink>
        <RouterLink to="/get-sha256">Get sha256</RouterLink>
        <RouterLink to="/app-list">App list</RouterLink>
        <RouterLink to="/encryption-aes">Encryption Aes</RouterLink>
      </nav>
      <RouterView class="content" />
  </div>





</template>

<style lang="sass">

  body 
    color: #fff
    background: #000
    font-family: "Roboto", sans-serif
    font-weight: 400
    font-style: normal
    font-size: 16px

  .container 
    max-width: 1950px
    padding: 15px
    margin: 0 auto
  
  .main-content 
    display: grid
    grid-template-columns: 30% 70%
    @media (max-width: 768px)
      grid-template-columns: 1fr

  .content
    padding: 0 10px  
  
  a 
    text-decoration: none
    font-weight: 400
    font-style: normal
    font-size: 20px
    font-family: "Roboto", sans-serif
    color: #FC7CFF 
    transition: all 0.3s
    &:hover 
      color: #598BFB   
    

  nav 
    display: flex
    flex-direction: column
    row-gap: 15px
    border-right: 1.5px solid #fc72ff
    height: 100vh
    @media (max-width: 768px)
      height: unset
      flex-direction: row
      flex-wrap: wrap
      column-gap: 20px
      margin-bottom: 50px
  

  input 
    background: rgb(19, 19, 19)
    border: 1.5px solid rgba(255, 255, 255, 0.12)
    border-radius: 12px
    color: #fff
    font-size: 16px
    height: 44px
    padding: 12px


  .router-link-active 
    color: #598BFB 

  /* Default state */
  .router-link-default 
    color: inherit
  
  h2 
    font-size: 30px

  button
    margin-top: 30px
    padding: 16px
    width: 100%
    line-height: 24px
    font-weight: 400
    text-align: center
    border-radius: 16px
    outline: none
    border: 1px solid transparent
    color: rgb(255, 255, 255)
    text-decoration: none
    display: flex
    justify-content: center
    flex-wrap: nowrap
    align-items: center
    cursor: pointer
    background-color: rgb(73 12 73)
    color: rgb(252, 114, 255)
    font-size: 20px
    transition: all 0.3s
    &:hover 
      background-color: rgb(49, 28, 49)

  p
    word-break: break-all
</style>
