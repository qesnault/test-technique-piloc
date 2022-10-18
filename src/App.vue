<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex'

const propertiesStore = useStore();

fetch("/api/properties")
    .then((res) => res.json())
    .then((json) => {
      propertiesStore.commit("SET_PROPERTIES", json.properties)
    }).catch(() => console.log("Servor error"))
</script>

<template>
  <header>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
