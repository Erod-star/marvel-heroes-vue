<script setup lang="ts">
import { toRef } from 'vue'
import { useRouter } from 'vue-router'

import type { Heroe } from '@/interfaces/interfaces'

interface Props {
  heroe: Heroe
}

const props = defineProps<Props>()
const { push } = useRouter()
const heroe = toRef(props, 'heroe')
</script>

<template>
  <v-card class="heroe-card mx-auto" width="400" prepend-icon="mdi-home">
    <template v-slot:title> {{ heroe.name }} </template>

    <v-card-text> {{ heroe.description }} </v-card-text>
    <v-btn @click="push(`/heroes/${heroe.id}`)"> See more!</v-btn>
  </v-card>
</template>

<style scoped></style>
