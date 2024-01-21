<template>
  <div>
    <div class="card" v-for="anotation in props.anotations" :key="anotation.id">
      <PopUp :show="isOpen" :delet="anotation.id" @close="isOpen = !isOpen" />
      <i class="pi pi-paperclip i-clip"></i>
      <div class="text-card">
        <p>{{ anotation.text }}</p>
        <span>{{ anotation.data }}</span>
      </div>
      <i class="pi pi-trash card-del" @click="openPopup"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import PopUp from '../pop/PopUp.vue';
import { defineProps, PropType, ref } from 'vue';

const isOpen = ref(false);

const openPopup = () => {
  isOpen.value = !isOpen.value;
}



interface AnotationInterface {
  id: number | string,
  text: string,
  valor?: number,
  categoria?: string,
  data: string
}

const props = defineProps({
  anotations: {
    required: true,
    type: Array as PropType<AnotationInterface[]>
  }
})

</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
}

.i-clip {
  transform: scale(-1);
}

.text-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7px;
  width: 250px;
  margin-right: 55px;
}

.text-card p {
  text-decoration: underline;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text-card>span {
  font-size: 12px;
  color: #B7BBBE;
}

.card-del {
  cursor: pointer;
  color: #EB735D;
}
</style>
