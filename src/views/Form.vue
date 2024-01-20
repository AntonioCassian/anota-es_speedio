<template>
    <div>
        <form action="">
        <textarea class="textarea" rows="7" cols="40" placeholder="Exp.: Ao ligar falar com Luiza"></textarea>
        <label for="valor" class="label">Potencial do négocio</label>
        <input id="valor" placeholder="R$00,00" type="number" class="input-number input">


        <label for="category" class="label">Categorização</label>
        <select class="input" id="category">
          <option value="" disabled></option>
          <option>importante</option>
          <option>irrelevante</option>
          <option>indispensável</option>
        </select>

        <label for="date" class="label">Lembrete</label>
        <input id="date" placeholder="Selecione uma data" type="text" onfocus="this.type='date'"
          onblur="if (!this.value) this.type='text'" class="input">


        <div class="mt-5">
          <div class="ic-trash">
            <i class="pi pi-trash"></i>
          </div>
          <Button text="Salvar"/>
        </div>
      </form>
    </div>
</template>

<script setup lang="ts">
import Button from '../components/button/Button.vue';


</script>

<style>

form {
  display: flex;
  flex-direction: column;
}

.textarea {
  resize: none;
  border: none;
  border-radius: 7px;
  padding: 12px;
  font-size: 14px;
  outline: none;
}

.label {
  font-size: 12px;
  color: #B7BBBE;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 20px;
}

.input {
  padding: 12px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
}

.input-number::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.select {
  background: #B7BBBE;
  font-size: 10px;
  padding: 4px;
}

.mt-5 {
  margin-top: 100px;
  display: inline-flex;
  justify-content: space-between;
}

.mt-5 .btn {
  width: 80%;
}

.ic-trash {
  background: #EB735D;
  width: 15%;
  border-radius: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ic-trash i {
  font-size: 25px;
}
</style>