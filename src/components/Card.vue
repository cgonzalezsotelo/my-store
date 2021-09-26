<template>
  <div class="col pb-5">
    <div class="card">
      <img
        :src="zapatillas.imagen"
        :alt="zapatillas.nombre"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ zapatillas.nombre }}</h5>
        <p class="card-text">{{ zapatillas.marca }}</p>
        <p class="card-text">{{ zapatillas.color }}</p>
        <div class="list-group-item">
          <h5>${{ zapatillas.precio.toLocaleString("de-DE") }}</h5>
          <p class="card-text">
            {{
              zapatillas.oferta
                ? `${zapatillas.descuento}% descuento`
                : "Sin descuento"
            }}
          </p>
        </div>
        <button class="btn btn-primary mt-2" @click="agregarZapatillaCarrito">
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    zapatillas: { type: Object, require: true },
  },
  methods: {
    agregarZapatillaCarrito() {
      this.$store.dispatch("carrito/agregarZapatilla", this.zapatillas);
    },
  },
};
</script>
