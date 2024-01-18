<script setup lang="ts">



</script>

<template>
  <div class="ceter">
    <div class="centere">
      <div class="logo">
        <div class="icon-logo">
          <i class="pi pi-paperclip"></i>
        </div>
        <div class="text-logo">
          Anotações
          <span>by Speedio</span>
        </div>
      </div>
      <button class="btn">
        <i class="pi pi-plus"></i>
        Criar anotação
      </button>
    </div>
  </div>
</template>

<style scoped>
.ceter {
  width: 500px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.centere {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}
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

.btn {
  position: relative;
  background: #1295FD;
  color: #fafafa;
  border: none;
  padding: 15px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 16px;
}

.btn i {
  margin-right: 4px;
}
</style>
