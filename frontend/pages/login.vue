<template>
  <div>
    <UButton @click="signInWithMicrosoft">
      Microsoft sign in
    </UButton>
  </div>
</template>
  
<script setup>
import PocketBase from 'pocketbase';
async function signInWithMicrosoft() {
  try {
    const pb = new PocketBase('http://localhost:8090')
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
  
<style lang="scss" scoped></style>