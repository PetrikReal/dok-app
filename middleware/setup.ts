import PocketBase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090')

export default defineNuxtRouteMiddleware((to, from) => {
   if(!pb.authStore.model.isSetup){
    return navigateTo("/setup")
   }
})
