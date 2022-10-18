<script setup lang="ts">
  import { useStore } from 'vuex'
  import MoleculeListRow from "@/components/molecules/MoleculeListRow.vue";
  import AtomButton from "@/components/atoms/AtomButton.vue";
  import OrganismEditPropertyModal from "@/components/organisms/OrganismEditPropertyModal.vue";
  import { ref } from "vue";
  const store = useStore();
  const isEditModal = ref(false);
  const propertyToEdit = ref({});

  function editProperty(property: object) {
    isEditModal.value = true;
    propertyToEdit.value = Object.assign({}, property);
  }
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th
              v-for="name in ['DESTINATION', 'STATUS', 'LOYER', 'EDIT']"
              :key="name"
              class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
          >
           {{ name }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr
        v-for="property in store.state.properties"
      >
        <MoleculeListRow>
          <div class="flex items-center">
            <img :src="property.image" alt="Un appartement" class="object-cover h-24 w-24 mr-3">
            <div>
              <h3 class="text-xl">{{ property.name }}</h3>
              <span>{{ property.address.number }} {{ property.address.street }}, {{ property.address.postcode }} {{ property.address.city }}</span>
            </div>
          </div>
        </MoleculeListRow>
        <MoleculeListRow>
          <div>
            Loué depuis le {{ property.rented_at }}
          </div>
          <div>
            {{ property.tenants.length }} locataires
          </div>
        </MoleculeListRow>
        <MoleculeListRow>
          {{ property.amount }}€ (CC) / mois
        </MoleculeListRow>
        <MoleculeListRow>
          <atom-button @click="editProperty(property)">
            EDIT
          </atom-button>
        </MoleculeListRow>
      </tr>
      </tbody>
    </table>
    <OrganismEditPropertyModal
        v-if="isEditModal"
        :editingProperty="propertyToEdit"
        is-editing
        @closeModal="isEditModal=false"/>
  </div>
</template>