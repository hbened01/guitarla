<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import Footer from './components/Footer.vue'
import Guitar from './components/Guitar.vue'
import Header from './components/Header.vue'
import { db } from './data'

const state = reactive({
  guitars: []
})

const guitars = ref([])
const guitarView = ref({})
const cart = ref([])

watch(cart, () => {
  saveCartInLocalStorage()
}, {
  deep: true
})
// console.log(state.guitars)
// console.log(guitars.value)

const emptyCart = () => {
  cart.value = []
  return cart
}

const saveCartInLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const addToCart = (guitar) => {
  const found = cart.value.find(({ id }) => guitar?.id === id)
  found ? (found.quantity += 1) : (cart.value.push({ ...guitar, quantity: 1 }))
}
const deleteItemCart = (index) => cart.value.splice(index, 1)

const getGuitarIntoCartById = (idGuitar) => cart.value.find(({ id }) => id === idGuitar)

const getGuitarById = (idGuitar) => guitars.value.find(({ id }) => id === idGuitar)

const viewGuitarDetail = (id) => {
  const foundGuitar = getGuitarById(id)
  guitarView.value = foundGuitar
}

const incrementItemCart = (id) => {
  const guitar = getGuitarIntoCartById(id)
  guitar.quantity += 1
}

const decrementItemCart = (id) => {
  const guitar = getGuitarIntoCartById(id)
  if (guitar.quantity > 1) {
    guitar.quantity--
  }
}

onMounted(() => {
  guitars.value = db.map(({ id, nombre: name, imagen: img, descripcion: description, precio: price }) => (
    {
      id,
      name,
      img,
      description,
      price
    }
  ))
  state.guitars = db
  guitarView.value = guitars.value[3]
  const getCartFromLocalStorage = localStorage.getItem('cart')
  if (getCartFromLocalStorage) {
    cart.value = JSON.parse(getCartFromLocalStorage)
  }
})

</script>

<template>
  <Header
    :cart="cart"
    :guitar-view="guitarView"
    @empty-cart="emptyCart"
    @add-to-cart="addToCart"
    @delete-item-cart="deleteItemCart"
    @increment-item-cart="incrementItemCart"
    @decrement-item-cart="decrementItemCart"
  />

  <main class="container-xl mt-5">
    <h2 class="text-center">
      Nuestra Colección
    </h2>

    <div class="row mt-5">
      <Guitar
        v-for="(guitar, index) in guitars"
        :key="guitar.id"
        :guitar="guitar"
        :index="index"
        @add-to-cart="addToCart"
        @view-guitar-detail="viewGuitarDetail"
      />
    </div>
  </main>

  <Footer />
</template>

<style scoped>

</style>
