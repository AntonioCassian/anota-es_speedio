<script setup lang="ts">
import Titulo from './components/titulo/Titulo.vue';
</script>

<template>
  <div>
    <Titulo title="Anotações"/>
    <div class="container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}








</style>
