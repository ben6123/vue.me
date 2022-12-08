import { createRouter, createWebHistory } from 'vue-router';

import CoachDatail from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue'
import NotFound from './pages/NotFound.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches', name: 'home' },
    {
      path: '/coaches/:id',
      component: CoachDatail,
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
    { path: '/register', component: CoachRegistration, name: 'register' },
    { path: '/requests', component: RequestsRecieved, name: 'requests' },
    { path: '/:notFound(.*)', component: NotFound, name: 'notFound' },
  ],
});

export default router;
