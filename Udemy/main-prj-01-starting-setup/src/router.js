import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue'
import NotFound from './pages/NotFound.vue';
// import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index'

const CoachDetail = defineAsyncComponent(() =>
  import('./pages/coaches/CoachDetails.vue')
);
const CoachRegistration = defineAsyncComponent(() =>
  import('./pages/coaches/CoachesList.vue')
);
const ContactCoach = defineAsyncComponent(() =>
  import('./pages/requests/ContactCoach.vue')
);
const RequestsRecieved = defineAsyncComponent(() =>
  import('./pages/requests/RequestsRecieved.vue')
);
const UserAuth = defineAsyncComponent(() =>
  import('./pages/auth/UserAuth.vue')
);


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches', name: 'home' },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props:true,
      name: 'coachesId',
      children: [
        {
          path: 'contact',
          component: ContactCoach,
          name: 'contact',
        },
      ],
    },
    { path: '/coaches', component: CoachesList, name: 'coaches' },
    { path: '/register', component: CoachRegistration, name: 'register' ,meta:{requiresAuth:true}},
    { path: '/requests', component: RequestsRecieved, name: 'requests', meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, name: 'auth', meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound, name: 'notFound' },
  ],
});


router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // sends the user to the auth page if he is not registered and he tries to access routes with meta=requireAuth(register)
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    // we can go to auth page only if we are not logged in,if we are logged in take us to coaches
    next('/coaches');
  } else {
    next();
  }
});
export default router;
