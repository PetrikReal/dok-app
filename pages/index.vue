<template>
    <div>
        <h1 class="text-4xl font-bold text-center py-4">Szia {{ pb.authStore.model.username }}!</h1>
    </div>
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pb.urbinturbina.tech')

definePageMeta({
    middleware: ["auth", "setup"],
    layout: "normal"
})

</script>

<style lang="scss" scoped>

</style>