<script setup lang="ts"></script>

<template>
  <nav>
    <img src="@/assets/logo.svg" alt="Vue Logo" height="25" width="25" />
    <div class="d-flex">
      <router-link to="/">Home</router-link>
      <router-link to="/heroes">Heroes</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
nav
  align-items: flex-start
  background: red
  display: flex
  font-size: 18px
  justify-content: space-between
  height: 70px
  padding: 20px 10px
  position: fixed
  text-align: center
  width: 100%
  z-index: 20
img
  margin-right: 15px
a
  margin-right: 15px

.router-link-exact-active
  color: white !important
</style>
