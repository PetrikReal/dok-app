<template>
    <div class="flex flex-col items-center">
        <h1 class="text-center text-4xl font-bold pt-4">Név beállítása</h1>
        <UForm :validate="validate" :state="state" @submit="submit">
            <UInput class="pb-4" size="lg" placeholder="Teljes Neved" v-model="state.fullName" />
        </UForm>
        <UButton @click="setup">Kész</UButton>
    </div>
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';
import { ref } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'
const pb = new PocketBase('https://pb.urbinturbina.tech')

const state = ref({
    fullName: undefined,
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.fullName) errors.push({ path: 'fullName', message: 'Kötelező mező' })
    return errors
}

async function setup() {
    const data = {
        "isSetup": true,
        "name": state.fullName
    }
    await pb.collection('users').update(pb.authStore.model.id, data);
    navigateTo("/")
}

definePageMeta({
    layout: "normal"
})
</script>

<style lang="scss" scoped></style>