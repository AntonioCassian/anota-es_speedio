<template>
  <button class="btn">
    <i v-if="icone" :class="icone"></i>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps,toRefs } from 'vue';
interface ButonInterface{
  text: string,
  icone?: string,
}

const props = defineProps<ButonInterface>()

const { text, icone }= toRefs(props);
</script>

<style scoped>
.btn {
  position: relative;
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