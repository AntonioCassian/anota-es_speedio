<template>
    <div class="center">
        <Logo />
        <Button text="Criar anotação" icone="pi pi-plus"/>
    </div>
</template>

<script setup lang="ts">
import Button from '../components/button/Button.vue';
import Logo from '../components/logo/Logo.vue';
</script>

<style scoped>
.center {
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
}
</style>