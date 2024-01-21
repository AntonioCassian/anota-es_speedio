<template>
    <div>
        <div class="center" v-if="anotations.length <= 0">
            <Logo />
            <Button text="Criar anotação" icone="pi pi-plus" :onClick="proximaTela" />
        </div>
    </div>

    <div class="anotations" v-if="anotations.length >= 1">
        <Card :anotations="anotations" />
        <div class="anot-foo">
            <Button text="Criar anotação" icone="pi pi-plus" :onClick="proximaTela"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Logo from '../components/logo/Logo.vue';
import Card from '../components/card/Card.vue';
import Button from '../components/button/Button.vue';
import api from '../services/api';
const route = useRouter();

const proximaTela = () => {
    route.push({ path: '/form' })
}

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
.center {
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
}

.anot-foo {
    margin-top: 80px;
}
</style>