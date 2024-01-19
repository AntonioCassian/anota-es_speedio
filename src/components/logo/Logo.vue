<template>
    <div>
        <div class="logo">
        <div class="icon-logo">
          <i class="pi pi-paperclip"></i>
        </div>
        <div class="text-logo">
          Anotações
          <span>by Speedio</span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.logo{
  display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 12px;
}

.icon-logo i {
  color: #B7BBBE;
  font-size: 45px;
  transform: scale(-1);
}

.text-logo {
  font-size: 22px;
  font-weight: 800;
  color: #1295FD;
  display: inline-grid;
  justify-items: center;
  gap: 5px;

}

.text-logo span {
  font-size: 12px;
  color: #B7BBBE;
  font-weight: 500;
}

</style>