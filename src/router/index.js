import { createRouter, createWebHistory } from 'vue-router'
import MetamaskConnect from '../components/MetamaskConnect.vue'
import Getsha256 from '../components/Getsha256.vue'
import AppList from '../components/AppList.vue'
import EncryptionAes from '../components/EncryptionAes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MetamaskConnect',
      component: MetamaskConnect
    },
    {
      path: '/get-sha256',
      name: 'Getsha256',
      component: Getsha256
    },
    {
      path: '/app-list',
      name: 'AppList',
      component: AppList
    },
    {
      path: '/encryption-aes',
      name: 'EncryptionAes',
      component: EncryptionAes
    }
  ]
})

export default router
