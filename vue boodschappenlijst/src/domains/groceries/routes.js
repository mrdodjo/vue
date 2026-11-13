import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';

export const routes = [
    {path: '/create', component: Create, name: 'groceries.create'},
    {path: '/edit/:id', component: Edit, name: 'groceries.edit'},
    {path: '/overview', component: Overview, name: 'groceries.overview'},
];
