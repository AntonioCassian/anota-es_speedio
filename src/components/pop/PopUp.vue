<template>
  <div>
    <div class="pop-up" v-show="props.show">
      <div class="header-pop">
        Deseja excluir esta anotação
        <i class="pi pi-times" @click="$emit('close')"></i>
      </div>

      <div class="body-pop">
        <p>Você está preste a deletar uma anotação e esta ação não poderá ser desfeita.<br />
          Tem certeza que deseja excluí-la?
        </p>
      </div>

      <div class="pop-foo">
        <button class="outline" @click="$emit('close')">
          Cancelar
        </button>
        <button class="btn-foo" @click="handleDelete(props.delet)">
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import api from '../../services/api';

const handleDelete = async (id: number | string) => {
  await api.delete(`/anotations/${id}`)
    .then(() => {
      alert('Anotação exçuida, atualize a tela por favor!')
    })
    .catch((error) => {
      console.log(error);
    });
}

const props = defineProps({
  show: Boolean,
  delet: {
    required: true,
    type: [Number, String]
  }
});

</script>

<style scoped>
.pop-up {
  position: fixed;
  background: #fff;
  width: 50%;
  top: 30%;
  left: 30%;
  z-index: 9;
}

.header-pop {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #B7BBBE;
  padding: 20px 12px;
}

.header-pop i {
  color: #B7BBBE;
  cursor: pointer;
}

.body-pop {
  padding: 12px;
  color: #B7BBBE;
  font-size: 14px;
}

.pop-foo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  gap: 15px;
  padding: 12px;
  margin-top: 18px;
}

.outline {
  color: #B7BBBE;
  background: #fafafa;
  border: 1px solid #B7BBBE;
  padding: 15px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
}

.btn-foo {
  color: #fafafa;
  background: #EB735D;
  padding: 15px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
  border: none;
}
</style>