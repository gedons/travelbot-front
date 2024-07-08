<template>
    <div class="bg-gray-50">
      <!-- Navigation Bar -->
      <nav class="bg-gray-900 p-4">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button -->
              <button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:bg-gray-600 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                <!-- Icon when menu is closed. -->
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <!-- Icon when menu is open. -->
                <svg v-show="isMobileMenuOpen" class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0">
                <h1 class="text-white text-lg font-semibold">Chat App</h1>
              </div>
              <div class="hidden sm:block sm:ml-6">
                <div class="flex">
                  <router-link 
                    :to="{ name: 'Home' }"
                    class="text-white text-sm underline mt-1 font-semibold"
                  >
                    Back Home
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Mobile menu, toggle classes based on menu state. -->
        <div v-show="isMobileMenuOpen" class="sm:hidden">
          <!-- Mobile menu items -->
          <router-link 
            :to="{ name: 'Home' }"
            class="text-white text-sm underline ml-2 font-semibold"
          >
            Back Home
          </router-link>
        </div>
      </nav>
  
      <!-- Success Card -->
      <div class="max-w-xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md text-center">
        <h2 class="text-2xl font-semibold mb-4">Congratulations!!!</h2>
        <p>You have successfully completed your payment.</p>
        <a href="/" class="underline">Back Home</a>
        <div class="mt-6">
          <Vue3Lottie 
            :autoplay="true"
            :loop="true" 
            :animationData="successAnimation"
            class="w-full h-64"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Vue3Lottie } from 'vue3-lottie';
  import successAnimation from '../assets/success.json';
  
  export default {
    components: {
      Vue3Lottie
    },
    data() {
      return {
        isMobileMenuOpen: false,
        successAnimation
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  .fullscreen-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 9999;    
  }
  
  .fullscreen-lottie {
    width: 100%;
    height: 100%;
  }
  </style>
  