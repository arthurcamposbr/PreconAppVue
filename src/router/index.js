import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/cadastre-se',
    name: 'Cadastro',
    component: () => import('../views/Auth/Cadastro.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/recuperar-senha',
    name: 'Recuperar',
    component: () => import('../views/Auth/Recupera.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/ativar-conta',
    name: 'AtivarConta',
    component: () => import('../views/Auth/Valida.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Dashboard/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/empreendimentos',
    name: 'Empreendimentos',
    component: () => import('../views/Dashboard/Empreendimentos.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/minhas-indicacoes',
    name: 'MinhasIndicacoes',
    component: () => import('../views/Dashboard/Indicacoes.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/minha-carteira',
    name: 'MinhaCarteira',
    component: () => import('../views/Dashboard/Carteira.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/minha-conta',
    name: 'MinhaConta',
    component: () => import('../views/Dashboard/MinhaConta.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
