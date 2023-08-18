import { storeToRefs } from 'pinia'
import { useUserStore } from '../../store/userStore'

const useProfile = () => {
  const userStore = useUserStore()
  const { firstName, counter, fullName } = storeToRefs(userStore)

  return {
    // ? Properties
    firstName,
    counter,

    // ? Getters
    fullName,

    // ? Methods
    increaseCounter: userStore.increaseCounter,
    updateFirstName: userStore.updateFirstName
  }
}

export default useProfile
