import type { RouteRecordRaw } from 'vue-router'

import HeroesLayout from '../layout/HeroesLayout.vue'

import HeroesView from '../views/HeroesView.vue'
import HeroeDetail from '../views/HeroeDetail.vue'
import HeroesSearch from '../views/HeroesSearch.vue'

const routeName = 'heroes'

export const heroesRoute: RouteRecordRaw = {
  path: `/${routeName}`,
  component: HeroesLayout,
  children: [
    {
      path: `/${routeName}`,
      name: 'heroes',
      component: HeroesView
    },
    {
      path: `:id`,
      name: 'heroe-detail',
      component: HeroeDetail
    },
    {
      path: `search`,
      name: 'heroes-search',
      component: HeroesSearch
    }
  ]
}
