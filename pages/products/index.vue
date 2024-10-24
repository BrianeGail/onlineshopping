<template>
  <div>
    <!-- Category selection (same as in your previous code) -->
    <v-select
      v-model="selectedChips"
      :items="categories"
      label="Select Category"
      chips
      multiple
      class="gray"
      hide-details
    ></v-select>

    <!-- Grid of filtered products -->
    <div class="grid grid-cols-4 gap-5">
      <!-- Use filteredProducts instead of product -->
      <div v-for="product in filteredProducts" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
import ProductCard from "@/components/ProductCard.vue"; // Assuming you have a ProductCard component

// Access the store
const cartStore = useCartStore();
const { product, categories } = storeToRefs(cartStore);

// Local state to track selected categories
const selectedChips = ref([]);

// Computed property to filter products based on selected categories
const filteredProducts = computed(() => {
  if (selectedChips.value.length === 0) {
    // If no categories are selected, show all products
    return product.value;
  }
  // Filter products based on selected categories
  return product.value.filter((item) =>
    selectedChips.value.includes(item.category)
  );
});

// Fetch products and categories on component mount
onMounted(() => {
  cartStore.fetchProducts(); // Fetches all products
  cartStore.fetchCategories(); // Fetches categories
});

definePageMeta({
  layout: "products",
});
</script>
