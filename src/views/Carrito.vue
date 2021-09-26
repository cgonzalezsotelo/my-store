<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col pt-3 pb-3">
          <h2>Carrito de Compras</h2>
        </div>
      </div>
      <Carrito
        v-for="(zapatilla, index) in $store.state.carrito.zapatillas"
        :key="index"
        :zapatillas="zapatilla"
      />
      <div class="row">
        <div class="col">
          <h3>
            Total a Pagar: ${{
              $store.getters["carrito/totalCarrito"].toLocaleString("de-DE")
            }}
          </h3>
        </div>
        <div class="col">
          <button
            class="btn btn-success"
            @click="$store.dispatch('carrito/comprar')"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Carrito from "../components/Carrito.vue";
export default {
  components: { Carrito },
};
</script>
