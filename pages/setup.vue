<script setup lang="ts">
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pb.urbinturbina.tech')
import { ref } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'
const state = ref({
  fullName: undefined,
})
const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.fullName) errors.push({ path: 'fullName', message: 'Required' })
  return errors
}
async function submit(event: FormSubmitEvent<any>) {
  const data = {
    "isSetup": true,
    "name": event.data.fullName
  }
  await pb.collection('users').update(pb.authStore.model.id, data);
  navigateTo("/")
}

async function setup() {

  navigateTo("/")
}

definePageMeta({
  layout: "normal",

})
</script>
<template>
  <div class="flex flex-col justify-center">
    <h1 class="py-4 text-center text-4xl font-bold">Account Setup</h1>
    <UForm :validate="validate" :state="state" @submit="submit" class="self-center">
      <UFormGroup class="py-2" label="Teljes név" name="fullName">
        <UInput v-model="state.fullName" />
      </UFormGroup>
      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>