<script setup lang="ts">
import PropertyList from "@/components/PropertyList.vue";
</script>

<template>
  <main>
    <div class="w-10/12 m-auto mt-6">
      <div class="flex w-full justify-between mb-12">
        <h1 class="text-2xl">TABLEAU DE BOARD</h1>
        <button class="rounded bg-black px-5 py-3 text-white hover:bg-gray-800">Ajouter un bien</button>
      </div>
      <PropertyList />

    </div>
  </main>
</template>
