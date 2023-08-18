<script lang="ts" setup>
import NavBar from '../shared/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div id="main-layout">
    <RouterView />
  </div>
</template>

<style lang="sass" scoped>
#main-layout
  padding: 2em
  padding-top: 90px
</style>
