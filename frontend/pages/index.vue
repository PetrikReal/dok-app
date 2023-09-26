<template>
    <div>
        <UButton @click="signOut">
            Sign Out
        </UButton>
    </div>
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://localhost:8090')
console.log(pb.authStore.isValid)

async function signOut() {
    pb.authStore.clear()
    navigateTo("/login")
}

definePageMeta({
    middleware: "auth"
})
</script>

<style lang="scss" scoped>

</style>