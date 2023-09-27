<template>
    <div class="flex flex-row justify-between bg-green-600 p-2">
        <div>
            <UButton to="/">
                DÖK
            </UButton>
        </div>
        <div>
            <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
                :popper="{ placement: 'bottom-start' }">
                <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
                <template #account="{ item }">
                    <div class="text-left">
                        <p>
                            Bejelentkezve
                        </p>
                        <p class="truncate font-medium text-gray-900 dark:text-white">
                            {{ item.label }}
                        </p>
                    </div>
                </template>
                <template #item="{ item }">
                    <span class="truncate">{{ item.label }}</span>
                    <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
                </template>
            </UDropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pb.urbinturbina.tech')

async function signOut() {
    pb.authStore.clear()
    navigateTo("/login")
}

const items = [
    [{
        label: pb.authStore.model.name,
        slot: 'account',
        disabled: true
    }], [{
        label: 'Settings',
        icon: 'i-heroicons-cog-8-tooth'
    }], [{
        label: 'Documentation',
        icon: 'i-heroicons-book-open'
    }, {
        label: 'Changelog',
        icon: 'i-heroicons-megaphone'
    }, {
        label: 'Status',
        icon: 'i-heroicons-signal'
    }], [{
        label: 'Sign out',
        icon: 'i-heroicons-arrow-left-on-rectangle',
        click: () => {
            signOut();
        }
    }]
]
</script>

<style lang="scss" scoped></style>