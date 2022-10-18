<script setup lang="ts">
import PropertyList from "@/components/organisms/OrganismPropertyList.vue";
import OrganismEditPropertyModal from "@/components/organisms/OrganismEditPropertyModal.vue";
import {ref} from "vue";
import AtomButton from "@/components/atoms/AtomButton.vue";
const isEditModal = ref(false);
</script>

<template>
  <main>
    <div class="w-10/12 m-auto mt-6">
      <div class="flex w-full justify-between mb-12">
        <h1 class="text-2xl">TABLEAU DE BOARD</h1>
        <AtomButton @click="isEditModal = true">
          Ajouter un bien
        </AtomButton>
      </div>
      <PropertyList />
      <OrganismEditPropertyModal v-if="isEditModal" @closeModal="isEditModal=false"/>
    </div>
  </main>
</template>
