import { createApp } from 'vue'; //importing function
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  routes: [
    { path: '/', redirect: '/teams' }, //with redirect the url changes unlike alias
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {name:'teams-members', path: ':teamId', component: TeamMembers, props: true },
      ] /*alias:'/'*/,
    },
    { path: '/users', component: UsersList }, //our-domain.com/teams=>UsersList
    { path: '/:notFound(.*)', component: NotFound }, //this should come last
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
});
const app = createApp(App);

app.use(router);
app.mount('#app');
