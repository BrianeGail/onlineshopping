<template>
    <v-dialog v-model="isVisible" max-width="600">
      <v-card>
        <v-card-title class="text-h5">Checkout</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="(item, index) in cartlist" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  Quantity: {{ item.quantity }} | Price: ${{ item.price }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <p class="text-right">
            Total Price: <span class="font-weight-bold">${{ totalPrice }}</span>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="isVisible = false">Cancel</v-btn>
          <v-btn color="success" @click="proceedCheckout">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useCartStore } from '@/stores/useCartStore';
  import { storeToRefs } from 'pinia';
  
  const isVisible = ref(false);
  
  const store = useCartStore();
  const { cartlist } = storeToRefs(store);
  
  const totalPrice = computed(() => {
    return cartlist.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });
  
  const proceedCheckout = () => {
    // Handle the checkout process here
    console.log('Proceeding to checkout');
    isVisible.value = false;
  };
  
  defineExpose({ isVisible });
  </script>
  