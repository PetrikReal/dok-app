<template>
    <div>
        <h1 class="text-4xl font-bold text-center py-4">Szia {{ pb.authStore.model.username }}!</h1>
    </div>
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pb.urbinturbina.tech')
console.log(pb.authStore.isValid)

async function signOut() {
    pb.authStore.clear()
    navigateTo("/login")
}

definePageMeta({
    middleware: "auth",
    layout: "normal"
})
</script>

<style lang="scss" scoped>

</style>