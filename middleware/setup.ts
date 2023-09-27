import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pb.urbinturbina.tech')

export default defineNuxtRouteMiddleware((to, from) => {
   if(pb.authStore.model.isSetup == false){
    return navigateTo("/setup")
   }
})
