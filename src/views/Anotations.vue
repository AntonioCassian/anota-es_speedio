<template>
    <div class="anotations">
        <Card :anotations="anotations" />
        <div class="anot-foo">
            <Button text="Criar anotação" icone="pi pi-plus"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Card from '../components/card/Card.vue';
import Button from '../components/button/Button.vue';
import api from '../services/api';
// import PopUp from '../components/pop/PopUp.vue';

// const showPopup = ref(false);

interface AnotationInterface {
    id: number | string,
    text: string,
    valor?: number,
    categoria?: string,
    data: string
}

const anotations = ref<AnotationInterface[]>([]);


const getAnotation = async () => {
    const response = await api.get('/anotations')
    anotations.value = response.data;
}

onMounted(getAnotation);


</script>

<style scoped>
.anot-foo {
    margin-top: 80px;
}
</style>