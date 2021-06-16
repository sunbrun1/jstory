import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ed8159a = () => interopDefault(import('..\\pages\\bestMovies.vue' /* webpackChunkName: "pages/bestMovies" */))
const _21999261 = () => interopDefault(import('..\\pages\\movieChart.vue' /* webpackChunkName: "pages/movieChart" */))
const _1844cc05 = () => interopDefault(import('..\\pages\\movieDetails.vue' /* webpackChunkName: "pages/movieDetails" */))
const _1dc1d879 = () => interopDefault(import('..\\pages\\movieRank.vue' /* webpackChunkName: "pages/movieRank" */))
const _e402f3d4 = () => interopDefault(import('..\\pages\\movies.vue' /* webpackChunkName: "pages/movies" */))
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
    path: "/bestMovies",
    component: _3ed8159a,
    name: "bestMovies"
  }, {
    path: "/movieChart",
    component: _21999261,
    name: "movieChart"
  }, {
    path: "/movieDetails/:id",
    component: _1844cc05,
    name: "movieDetails"
  }, {
    path: "/movieRank",
    component: _1dc1d879,
    name: "movieRank"
  }, {
    path: "/movies",
    component: _e402f3d4,
    name: "movies"
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
