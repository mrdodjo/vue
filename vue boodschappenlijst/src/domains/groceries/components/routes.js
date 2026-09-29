import {createWebHistory, createRouter} from 'vue-router';

import Create from './Create.vue';
import Edit from './Edit.vue';
import Overview from './Overview.vue';

const routes = [
    {path: '/create', component: Create},
    {path: '/edit', component: Edit},
    {path: '/overview', component: Overview},
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
