<script setup>
import { computed } from 'vue'

const props = defineProps({
  cart: {
    type: Array,
    required: true
  },
  guitarView: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart', 'delete-item-cart', 'empty-cart', 'increment-item-cart', 'decrement-item-cart'])

const totalPay = computed(() => {
  return props.cart.reduce((total, item) => total + item.price * item.quantity, 0)
})
</script>

<template>
  <header class="py-5 header">
    <div class="container-xl">
      <div class="row justify-content-center justify-content-md-between">
        <div class="col-8 col-md-3">
          <a href="index.html">
            <img
              class="img-fluid"
              src="/img/logo.svg"
              alt="imagen logo"
            >
          </a>
        </div>
        <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
          <div class="carrito">
            <img
              class="img-fluid"
              src="/img/carrito.png"
              alt="imagen carrito"
            >

            <div
              id="carrito"
              class="bg-white p-3"
            >
              <p
                v-if="cart.length === 0"
                class="text-center m-0"
              >
                El carrito esta vacio
              </p>
              <div v-else>
                <table class="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(guitar, index) in cart"
                      :key="index"
                    >
                      <td>
                        <img
                          class="img-fluid"
                          :src="`/img/${guitar.img}.jpg`"
                          :alt="`imagen guitarra ${index}`"
                        >
                      </td>
                      <td>{{ guitar.name }}</td>
                      <td class="fw-bold">
                        ${{ guitar.price }}
                      </td>
                      <td class="flex align-items-start gap-4">
                        <button
                          type="button"
                          class="btn btn-dark"
                          @click="$emit('decrement-item-cart', guitar.id)"
                        >
                          -
                        </button>
                        {{ guitar.quantity }}
                        <button
                          type="button"
                          class="btn btn-dark"
                          @click="$emit('increment-item-cart', guitar.id)"
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          class="btn btn-danger"
                          type="button"
                          @click="$emit('delete-item-cart', index)"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p class="text-end">
                  Total pagar: <span class="fw-bold">${{ totalPay }}</span>
                </p>
                <button
                  class="btn btn-dark w-100 mt-3 p-2"
                  @click="$emit('empty-cart')"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div><!--.row-->

      <div class="row mt-5">
        <div class="col-md-6 text-center text-md-start pt-5">
          <h1 class="display-2 fw-bold">
            {{ guitarView.name }}
          </h1>
          <p class="mt-5 fs-5 text-white">
            {{ guitarView.description }}.
          </p>
          <p class="text-primary fs-1 fw-black">
            ${{ guitarView.price }}
          </p>
          <button
            type="button"
            class="btn fs-4 bg-primary text-white py-2 px-5"
            @click="$emit('add-to-cart', guitarView)"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>

    <img
      class="header-guitarra"
      src="/img/header_guitarra.png"
      alt="imagen header"
    >
  </header>
</template>