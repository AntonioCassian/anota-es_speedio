<template>
    <div class="card">
        <i class="pi pi-paperclip"></i>
        <div class="text-card">
            <p>Exp.: Ao ligar falar com Luiza muitas coisas em</p>
            <span>11/10/2023 - 13:32h</span>
        </div>
        <i class="pi pi-trash card-del"></i>
    </div>
</template>

<script setup lang="ts">

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