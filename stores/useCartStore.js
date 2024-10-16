import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartlist = ref([]);
  const product = ref([]);


  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      product.value = data; 
      // console.log("Products fetched:", data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };


  const removeItem = (index) => {
    if (index >= 0 && index < cartlist.value.length) {
      cartlist.value.splice(index, 1); 
    }
  };

  return {
    cartlist,
    product,
    fetchProducts, // Expose the fetchProducts function
    removeItem,    
  };
});
