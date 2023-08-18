import { ref } from 'vue'
import { marvelApi } from '@/api/marvelApi'
import { sleep } from '@/helpers/sleep'
import type { HerosRequest, Heroe } from '@/interfaces/interfaces'

const useHeroes = () => {
  const heroes = ref<Heroe[]>()
  const isLoading = ref<boolean>(false)
  const hasError = ref<boolean>(false)

  const getHeroes = async (): Promise<void> => {
    try {
      isLoading.value = true
      await sleep()
      const { data } = await marvelApi.get<HerosRequest>('/characters')
      heroes.value = data.data.results
    } catch (error) {
      hasError.value = true
      throw new Error('Error requesting heroes')
    } finally {
      isLoading.value = false
    }
  }

  return {
    // ? Properties
    heroes,
    isLoading,
    hasError,

    // ? Getters

    // ? Methods
    getHeroes
  }
}

export default useHeroes
