<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <aside>
    <nav
      class="bg-sideNav text-white fixed top-0 left-0 flex flex-col h-[100vh] w-[60px] overflow-hidden"
    >
      <RouterLink to="/">Haomssse</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </aside>
</template>
