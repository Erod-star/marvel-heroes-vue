<script setup lang="ts">
import useProfile from '../composables/useProfile'
import InputExample from '../../shared/components/InputExample.vue'

const { firstName, counter, fullName, increaseCounter } = useProfile()
</script>

<template>
  <div>
    <h1>Profile view</h1>
    <InputExample v-model="firstName" />
    {{ firstName }}
    <hr class="mt-5" />
    <p class="mt-5">{{ fullName }}</p>
    <hr class="mt-5" />
    <p class="mt-5">{{ counter }}</p>
    <v-btn class="mt-5" @click="increaseCounter"> Increase counter</v-btn>
  </div>
</template>

<style scoped></style>
