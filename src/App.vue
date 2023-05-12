<script setup lang="ts">
import { RouterView } from "vue-router";
import SidebarNav from "./components/layout/SidebarNav.vue";
</script>

<template>
  <SidebarNav />
  <main class="ml-[60px] bg-bg">
    <RouterView />
  </main>
</template>

<styles scoped>

</styles>
