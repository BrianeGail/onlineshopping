<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in cartlist" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
    
  </div>
</template>

<script setup>  
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";

definePageMeta({
    layout: "products",
  })

// Access the store
const cartStore = useCartStore();
const { cartlist } = storeToRefs(cartStore);

// Fetch products automatically on component mount
cartStore.fetchProducts();
</script>
