<template>
  <div class="h-screen flex items-center justify-center flex-col">
    <h1 class="text-3xl font-bold">DÖK App</h1>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700">
    <UButton variant="link" @click="signInWithMicrosoft">
      <img src="https://learn.microsoft.com/en-us/azure/active-directory/develop/media/howto-add-branding-in-apps/ms-symbollockup_mssymbol_19.png" alt="">
      <h1 class="text-white">Sign in with Microsoft</h1>
    </UButton>
  </div>
</template>
  
<script setup>
import PocketBase from 'pocketbase';
async function signInWithMicrosoft() {
  try {
    const pb = new PocketBase('https://pb.urbinturbina.tech')
    pb.authStore.clear()
    const authData = await pb.collection('users').authWithOAuth2({
      provider: 'microsoft',
    })
    console.log(authData)
    console.log(pb.authStore.exportToCookie({ httpOnly: false }))
    if (pb.authStore.isValid) {
      navigateTo("/")
    }
  } catch (e) {
    console.log(e)
  }
}
definePageMeta({
    title: "Login",
    middleware: "login"
})
</script>
  
<style lang="scss" scoped>
</style>