<template>
  <div>
    <header class="shadow-sm" style="background-color: #181c14">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <!-- Left side: Vue Exercise Merch -->
        <NuxtLink to="/products" class="font-bold text-white"
          >Vue Exercise Merch</NuxtLink
        >

        <!-- Right side: Home and Cart -->
        <div class="flex items-center space-x-4">
          <!-- Home link -->
          <NuxtLink to="/" class="font-bold text-white">Home</NuxtLink>

          <!-- Cart button -->
          <v-btn icon @click="drawer = !drawer">
            <v-icon color="red">fa-solid fa-cart-shopping</v-icon>
          </v-btn>
        </div>
      </nav>
    </header>

    <!-- Cart Drawer -->
  <v-navigation-drawer v-model="drawer" right app temporary>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">{{ name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="cartlist.length === 0">
        <v-list-item-content class="text-center">
          <v-icon color="grey" large class="mb-2">mdi-cart-off</v-icon>
          <p>Your cart is empty.</p>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        v-for="(item, index) in cartlist"
        :key="index"
        class="cart-item"
        two-line
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="grey--text">
            ID: {{ item.id }} | Price: 
            <span class="font-weight-bold">${{ item.price }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click="removeItem(item)">
            <v-icon color="red">fa-solid fa-trash</v-icon>
          </v-btn>
        </v-list-item-action>

        <v-divider v-if="index < cartlist.length - 1" class="my-3"></v-divider>
      </v-list-item>

      <v-list-item v-if="cartlist.length > 0">
        <v-list-item-content class="text-right">
          <v-list-item-subtitle class="grey--text text-h6">
            Total Price: 
            <span class="font-weight-bold text-h5">${{ totalPrice }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="cartlist.length > 0">
        <v-btn color="success" class="mt-4 mb-2 py-4" block @click="checkout">
          Proceed to Checkout
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>


    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { cartlist } = storeToRefs(store);
const drawer = ref(false); // Drawer state

// Use the computed function to calculate total price
const totalPrice = computed(() => {
  return cartlist.value.reduce((total, item) => total + item.price, 0);
});

// Method to remove an item from the cart
function removeItem(item) {
  const index = cartlist.value.indexOf(item);
  if (index > -1) {
    store.removeItem(index); // Call the method from the Pinia store
  }
}

// Checkout method placeholder
function checkout() {
  // Logic for checkout
}
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>

