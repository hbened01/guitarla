<script setup>

defineProps({
  guitar: {
    type: Object,
    default: null
  },
  index: {
    type: Number,
    default: 0
  }
})

defineEmits(['add-to-cart', 'view-guitar-detail'])

</script>

<template>
  <div
    class="col-md-6 col-lg-4 my-4 row align-items-center"
    @click="$emit('view-guitar-detail', guitar.id)"
  >
    <div class="col-4">
      <img
        class="img-fluid"
        :src="`/img/${guitar.img}.jpg`"
        :alt="`imagen guitarra ${index}`"
      >
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">
        {{ guitar.name }}
      </h3>
      <p>{{ guitar.description }}</p>
      <p class="fw-black text-primary fs-3">
        ${{ guitar.price.toFixed(2) }}
      </p>
      <button
        type="button"
        class="btn btn-dark w-100"
        @click="$emit('add-to-cart', guitar)"
      >
        Agregar al Carrito
      </button>
    </div>
  </div>
</template>

<style scoped></style>
