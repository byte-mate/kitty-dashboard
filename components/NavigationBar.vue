<script setup lang="ts">

</script>

<template>
  <footer class="bg-white dark:bg-gray-800 h-20 p-6">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="block text-sm text-gray-500 dark:text-gray-200">Copyright © <NuxtLink to="/" class="hover:text-gray-300">kitty.website</NuxtLink></span>
        <ul class="flex flex-wrap items-center mb-6 text-xl font-medium sm:mb-0 text-white">
          <li>
            <NuxtLink to="/panel" class="hover:text-gray-200 me-4 md:me-6">Panel</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://discord.gg/Hzk2NFJVFw" class="hover:text-gray-200 me-4 md:me-6">Discord</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/docs" class="hover:text-gray-200 me-4 md:me-6">Documentation</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/help" class="hover:text-gray-200 me-4 md:me-6">Help</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>