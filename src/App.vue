<script setup lang="ts">

</script>

<template>
  <div class="centered">
    <div class="centere">
      <form action="">
        <textarea class="textarea" rows="7" cols="40" placeholder="Exp.: Ao ligar falar com Luiza"></textarea>
        <label for="valor" class="label">Potencial do négocio</label>
        <input id="valor" placeholder="R$00,00" type="number" class="input-number input">


        <label for="category" class="label">Categorização</label>
        <select class="input" id="category">
          <option>importante</option>
          <option>B</option>
          <option>C</option>
        </select>

        <label for="date" class="label">Lembrete</label>
        <input id="date" placeholder="Selecione uma data" type="text" onfocus="this.type='date'"
          onblur="if (!this.value) this.type='text'" class="input">


        <div class="mt-5">
          <div class="ic-trash">
            <i class="pi pi-trash"></i>
          </div>
          <button class="btn">
            Salvar
          </button>
        </div>
      </form>

      
    </div>
  </div>
</template>

<style scoped>
.centered {
  margin-top: 30px;
}

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
