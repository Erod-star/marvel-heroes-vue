<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import useHeroe from '../composables/useHeroe'
import LoaderComponent from '@/shared/components/LoaderComponent.vue'

const route = useRoute()
const id = route.params.id
const { getHeroe, isLoading, heroe } = useHeroe()

onMounted(async () => await getHeroe(+id))
</script>

<template>
  <LoaderComponent v-if="!heroe || isLoading" />
  <div v-else>
    <h1>{{ heroe.name }}</h1>
    <p>{{ heroe.description }}</p>
  </div>
</template>

<style scoped></style>
