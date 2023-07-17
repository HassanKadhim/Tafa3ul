import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/hassa/Desktop/Tafa3ul Hub/Day 2/Tafa3ul/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}