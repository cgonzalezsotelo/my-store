<template>
  <div>
    <form class="p-5" @submit.prevent="agregarNuevoProducto">
      <div class="mb-3">
        <label class="form-label">Nombre del producto:</label>
        <input
          type="text"
          class="form-control"
          required
          v-model="nuevoProducto.nombre"
        />
        <div class="form-text"></div>
      </div>
      <div class="mb-3">
        <label class="form-label">Imagen del Producto:</label>
        <input
          type="text"
          class="form-control"
          required
          v-model="nuevoProducto.imagen"
        />
        <div class="form-text"></div>
      </div>
      <div class="mb-3">
        <label class="form-label">Marca</label>
        <input
          type="text"
          class="form-control"
          required
          v-model="nuevoProducto.marca"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Color</label>
        <input
          type="text"
          class="form-control"
          required
          v-model="nuevoProducto.color"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Precio</label>
        <input
          type="number"
          class="form-control"
          required
          v-model.number="nuevoProducto.precio"
        />
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          v-model="nuevoProducto.oferta"
        />
        <label class="form-check-label">Oferta</label>
      </div>
      <div class="mb-3" v-if="nuevoProducto.oferta">
        <label class="form-label">Descuento</label>
        <input
          type="number"
          class="form-control"
          required
          min="0"
          max="99"
          step="1"
          v-model.number="nuevoProducto.descuento"
        />
      </div>
      <button type="submit" class="btn btn-primary">Agregar Producto</button>
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    nuevoProducto: {
      nombre: null,
      imagen: "",
      marca: null,
      color: null,
      precio: null,
      oferta: null,
      descuento: null,
    },
  }),
  methods: {
    agregarNuevoProducto() {
      this.$store.dispatch("zapatillas/crearNuevoProducto", {
        ...this.nuevoProducto,
      });
      this.$router.push("/");
    },
  },
};
</script>
