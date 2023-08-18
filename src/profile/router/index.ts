import type { RouteRecordRaw } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import ProfileEditView from '../views/ProfileEditView.vue'

const routeName = 'profile'

export const profileRoute: RouteRecordRaw = {
  path: `${routeName}`,
  name: 'profile',
  component: ProfileView,
  children: [
    {
      path: `${routeName}/edit`,
      name: 'edit-profile',
      component: ProfileEditView
    }
  ]
}
