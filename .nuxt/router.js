import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61a26ba0 = () => interopDefault(import('..\\pages\\movieNews.vue' /* webpackChunkName: "pages/movieNews" */))
const _1dc1d879 = () => interopDefault(import('..\\pages\\movieRank.vue' /* webpackChunkName: "pages/movieRank" */))
const _13311f9f = () => interopDefault(import('..\\pages\\tvProgram.vue' /* webpackChunkName: "pages/tvProgram" */))
const _0128794f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7bd28377 = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/movieNews",
    component: _61a26ba0,
    name: "movieNews"
  }, {
    path: "/movieRank",
    component: _1dc1d879,
    name: "movieRank"
  }, {
    path: "/tvProgram",
    component: _13311f9f,
    name: "tvProgram"
  }, {
    path: "/",
    component: _0128794f,
    name: "index"
  }, {
    path: "/:id",
    component: _7bd28377,
    name: "id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
