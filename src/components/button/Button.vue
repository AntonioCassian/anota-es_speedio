<template>
  <button class="btn" :click="click">
    <i v-if="icone" :class="icone" ></i>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps,toRefs } from 'vue';
interface ButonInterface{
  text: string;
  icone?: string;
  click?: () => void;
}

const props = defineProps<ButonInterface>()

const { text, icone, click }= toRefs(props);
</script>

<style scoped>
.btn {
  cursor: pointer;
  background: #1295FD;
  color: #fafafa;
  border: none;
  padding: 15px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
}

.btn i {
  margin-right: 4px;
}
</style>