<template>
  <div>
    <div class="card" v-for="anotation in props.anotations" :key="anotation.id">
      <i class="pi pi-paperclip i-clip"></i>
      <div class="text-card">
        <p>{{ anotation.anotation }}</p>
        <span>{{ anotation.date }}</span>
      </div>
      <i class="pi pi-trash card-del"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';

interface AnotationInterface {
  id: number,
  anotation: string,
  date: string
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