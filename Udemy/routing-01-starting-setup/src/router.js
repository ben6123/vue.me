import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import UserFooter from './pages/UserFooter.vue';
import TeamFooter from './pages/TeamFooter.vue';

const router = createRouter({
  routes: [
    { path: '/', redirect: '/teams' }, //with redirect the url changes unlike alias
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        {
          name: 'teams-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ] /*alias:'/'*/,
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UserFooter },
      // beforeEnter(to, from, next) {
      // console.log('Users Before Enter')
      // console.log(to, from);
      // next()
      // },
    }, //our-domain.com/teams=>UsersList
    { path: '/:notFound(.*)', component: NotFound }, //this should come last
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to,from,savedposition)
    if (savedPosition) {
      return savedPosition;
    }
    return {
      top: 0,
      left: 0,
    };
  },
});

router.beforeEach(function (to, from, next) {
  if (to.meta.needsAuth) {
    console.log('needs authenticaton');
    next();
  } else {
    next();
  }

  // console.log('Global before each');
  // console.log(to, from)
  // next(false);
  // if (to.name==='teams-members') {
  //   next();
  // } else {
  //   next({ name: 'teams-members', params: { teamId: 't2' } });
  // }
  // next();
});
router.afterEach(function () {
  //could be used to send data after theres a route update
  console.log('success');
});

export default router;