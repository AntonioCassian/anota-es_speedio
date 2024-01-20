<template>
    <div class="anotations">
        <Card :anotations="anotations" />
        <div class="anot-foo">
            <Button text="Criar anotação" icone="pi pi-plus"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from '../components/card/Card.vue';
import Button from '../components/button/Button.vue';
// import PopUp from '../components/pop/PopUp.vue';

interface AnotationInterface {
    id: number,
    anotation: string,
    date: string
}

const anotations = ref<AnotationInterface[]>(
    [
        {
            id: 1,
            anotation: 'Ao ligar o computador falar com Luiza',
            date: '10/05/2024'
        },
        {
            id: 2,
            anotation: 'Ao ligar o computador falar com Luiza',
            date: '10/05/2024'
        },
        {
            id: 3,
            anotation: 'Ao ligar o computador falar com Luiza',
            date: '10/05/2024'
        },
        {
            id: 4,
            anotation: 'Ao ligar o computador falar com Luiza',
            date: '10/05/2024'
        },
        {
            id: 5,
            anotation: 'Ao ligar o computador falar com Luiza',
            date: '10/05/2024'
        },
        {
            id: 6,
            anotation: 'Ao ligar o computador falar com Luiza',
            date: '10/05/2024'
        },
    ]
)
</script>

<style scoped>
.anot-foo{
    margin-top: 80px;
}
</style>