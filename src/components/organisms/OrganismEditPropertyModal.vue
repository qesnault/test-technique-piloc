<template>
  <div class="w-screen h-screen fixed bg-modal top-0 left-0">
    <div class="modal p-7">
      <h2 class="text-4xl mb-3">{{ isEditing ? 'Édition' : 'Ajout' }} d'une propriété</h2>
      <form class="space-y-4 mb-4">
        <div>
          <label class="sr-only" for="name">Nom</label>
          <input
              v-model="property.name"
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nom"
              type="text"
              id="name"
          />
        </div>
      </form>
      <div class="ml-auto">
        <AtomButton @click="emit('closeModal')">
          Fermer la Modal
        </AtomButton>
        <AtomButton @click="actionModal" class="ml-6">
          {{ isEditing ? 'Éditer' : 'Ajouter' }}
        </AtomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AtomButton from "@/components/atoms/AtomButton.vue";
import {computed, reactive} from "vue";
import {useStore} from "vuex";
const emit = defineEmits(['closeModal'])
const props =  defineProps({
  isEditing: {type: Boolean, default: false},
  editingProperty: {type: Object, default: null}
});

const propertiesStore = useStore();

const newProperty = reactive({
  "id": propertiesStore.getters.getProperties.length + 1,
  "created_at": "2022-01-01 09:00:00",
  "updated_at": "2022-01-02 09:00:00",
  "rented_at": "2021-11-30",
  "name": "Maison Principale",
  "image": "https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?w=1080",
  "address": {
    "number": 15,
    "street": "rue du Paradis",
    "postcode": 75010,
    "city": "Paris"
  },
  "surface": 56.77,
  "amount": 1280,
  "status": "available",
  "tenants": [
    {
      "id": 1,
      "firstname": "John",
      "lastname": "DOE"
    },
    {
      "id": 2,
      "firstname": "Bob",
      "lastname": "MORANE"
    }
  ]
});

const property = computed((): object => {
  return props.isEditing ? props.editingProperty || newProperty : newProperty;
});

function actionModal() {
  props.isEditing ? editProperty() : addNewProperty();
}

function addNewProperty() {
  propertiesStore.commit("ADD_PROPERTY", property.value);
  emit("closeModal");
}

function editProperty() {
  propertiesStore.commit("EDIT_PROPERTY", property.value);
  emit("closeModal");
}
</script>

<style scoped>
.bg-modal {
  background-color: rgba(0,0,0, 0.3);
}
.modal {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 70%;
  background-color: white;
}
</style>