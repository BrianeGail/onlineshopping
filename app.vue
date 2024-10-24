<template>
  <v-app>

    <NuxtLayout>
      <NuxtPage />

    </NuxtLayout>
  </v-app>
</template>

<script>
import Navbar from "~/components/ProductCard.vue"; // Make sure the import path is correct

export default { 
  components: {
    Navbar // Register the Navbar component
  }
};
</script>

<style scoped>
/* Global styles can go here */
</style>
