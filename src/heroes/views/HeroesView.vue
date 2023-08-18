<script setup lang="ts">
import { onMounted } from 'vue'
import useHeroes from '@/heroes/composables/useHeroes'
import HeroeCard from '../components/HeroeCard.vue'

const { getHeroes, isLoading, heroes } = useHeroes()

onMounted(async () => await getHeroes())
</script>

<template>
  <div class="d-flex flex-wrap">
    <p v-if="isLoading">Loading...</p>
    <HeroeCard v-else v-for="heroe in heroes" :key="heroe.id" :heroe="heroe" />
  </div>
</template>

<style lang="sass" scoped>
.heroe-card
  margin-top: 10px
</style>
