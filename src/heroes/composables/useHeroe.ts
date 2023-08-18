import { ref } from 'vue'
import { marvelApi } from '@/api/marvelApi'
import { sleep } from '@/helpers/sleep'
import type { Heroe, HerosRequest } from '@/interfaces/interfaces'

const useHeroe = () => {
  const heroe = ref<Heroe>()
  const isLoading = ref<boolean>(false)
  const hasError = ref<boolean>(false)

  const getHeroe = async (id: number): Promise<void> => {
    try {
      isLoading.value = true
      await sleep()
      const { data } = await marvelApi.get<HerosRequest>(`/characters/${id}`)
      heroe.value = data.data.results[0]
    } catch (error) {
      hasError.value = true
      throw new Error(`Error requesting the hero with the id - ${id}`)
    } finally {
      isLoading.value = false
    }
  }

  return {
    // ? Properties
    heroe,
    isLoading,
    hasError,

    // ? Getters

    // ? Methods
    getHeroe
  }
}

export default useHeroe
