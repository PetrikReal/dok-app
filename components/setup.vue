<template>
    <div>
        setup your account nig
        <UButton @click="setup">Setup</UButton>
    </div>
</template>

<script setup>
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pb.urbinturbina.tech')
async function setup() {
    const data = {
        "isSetup": true
    }
    await pb.collection('users').update(pb.authStore.model.id, data);
    this.$router.app.refresh()
}
</script>

<style lang="scss" scoped>

</style>