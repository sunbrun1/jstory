import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c61b3440 = () => interopDefault(import('..\\pages\\movie\\News.vue' /* webpackChunkName: "pages/movie/News" */))
const _5911d2b9 = () => interopDefault(import('..\\pages\\movie\\Rank.vue' /* webpackChunkName: "pages/movie/Rank" */))
const _191f475f = () => interopDefault(import('..\\pages\\tv\\Program.vue' /* webpackChunkName: "pages/tv/Program" */))
const _43b0c2dd = () => interopDefault(import('..\\pages\\movie\\_id.vue' /* webpackChunkName: "pages/movie/_id" */))
const _51151135 = () => interopDefault(import('..\\pages\\tv\\_id.vue' /* webpackChunkName: "pages/tv/_id" */))
const _0128794f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/movie/News",
    component: _c61b3440,
    name: "movie-News"
  }, {
    path: "/movie/Rank",
    component: _5911d2b9,
    name: "movie-Rank"
  }, {
    path: "/tv/Program",
    component: _191f475f,
    name: "tv-Program"
  }, {
    path: "/movie/:id?",
    component: _43b0c2dd,
    name: "movie-id"
  }, {
    path: "/tv/:id?",
    component: _51151135,
    name: "tv-id"
  }, {
    path: "/",
    component: _0128794f,
    name: "index"
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
