<template>
    <div class="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 class="text-4xl font-bold mb-4">Welcome to Our Store!</h1>
      <p class="text-lg text-gray-600 mb-8">
        Explore our latest collections and offers.
      </p>
  
      <p
        class="btn px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-gray-700 hover:bg-gray-600 transition duration-200"
        @click="goToShopping"
      >
        <i class="fa-solid fa-eye"></i> GO SHOPPING
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home", // Comma added here
    methods: {
      goToShopping() {
        window.location.href = '/products';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles specific to the Home page here */
  </style>
  