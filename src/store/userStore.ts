import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const firstName = ref<string>('Edson')
  const LastName = ref<string>('Rodriguez')
  const counter = ref<number>(0)

  return {
    // ? Propperties
    firstName,
    LastName,
    counter,
    // ? Getters
    fullName: computed(() => firstName.value + ' ' + LastName.value),
    // ? Methods
    increaseCounter: () => {
      counter.value++
    },
    updateFirstName: (newName: string) => {
      firstName.value = newName
    }
  }
})
