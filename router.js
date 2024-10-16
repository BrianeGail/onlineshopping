// router.js (or the existing file where you define routes)
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'; // Example, adjust according to your actual components
import ProductDetails from '@/components/ProductDetails.vue'; // Your ProductDetails component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id', // Dynamic route for product details
    name: 'ProductDetails',
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
