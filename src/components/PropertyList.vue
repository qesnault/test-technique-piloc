<script setup lang="ts">
  import { useStore } from 'vuex'

  const store = useStore();

</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th
              v-for="name in ['DESTINATION', 'STATUS', 'LOYER']"
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
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          <div class="flex">
            <img :src="property.image" alt="Un appartement" class="object-cover h-24 mr-3">
            <div>
              <h3>{{ property.name }}</h3>
              <span>{{ property.address.number }} {{ property.address.street }}, {{ property.address.postcode }} {{ property.address.city }}</span>
            </div>
          </div>
        </td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Loué depuis le
        </td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {{ property }}
        </td>
      </tr>
<!--      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          <img src="https://source.unsplash.com/random/?apartment" alt="Un appartement" class="object-cover h-24">
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
      </tr>-->
      </tbody>
    </table>
  </div>
</template>