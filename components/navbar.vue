<template>
    <div class="flex flex-row justify-between bg-green-600 p-2">
        <div>
            <UButton to="/">
                DÖK
            </UButton>
        </div>
        <div>
            <UButton @click="signOut">
                Kijelentkezés
            </UButton>
        </div>
    </div>
</template>

<script setup>
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pb.urbinturbina.tech')

async function signOut() {
    pb.authStore.clear()
    navigateTo("/login")
}

</script>

<style lang="scss" scoped>

</style>