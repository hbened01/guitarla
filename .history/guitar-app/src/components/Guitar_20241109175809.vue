<script setup>
import { ref } from "vue";

defineProps({
  data: Object,
  index: Number,
});
</script>

<template>
  <div
    class="col-md-6 col-lg-4 my-4 row align-items-center"
  >
    <div class="col-4">
      <img
        class="img-fluid"
        :src="`/img/${data.img}.jpg`"
        :alt="imagen guitarra {{ index }}"
      />
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">{{ data.name }}</h3>
      <p>{{ data.description }}</p>
      <p class="fw-black text-primary fs-3">${{ data.price.toFixed(2) }}</p>
      <button type="button" class="btn btn-dark w-100">
        Agregar al Carrito
      </button>
    </div>
  </div>
</template>

<style scoped></style>
