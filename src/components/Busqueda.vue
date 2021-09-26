<template>
  <div>
    <div class="table table-bordered">
      <ul v-if="$store.state.zapatillas.busqueda.length > 0">
        <li
          v-for="zapatilla in $store.getters.buscarZapatilla"
          :key="zapatilla.nombre"
        >
          {{ zapatilla.nombre }} | {{ zapatilla.marca }} |
          {{ zapatilla.precio }}
        </li>
      </ul>
      <ul v-else>
        <li>Escribe Algo para buscar</li>
      </ul>
    </div>
  </div>
  <!-- <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <pre>{{ $store.getters.buscarZapatilla }} hola</pre>
        <img
          :src="zapatillas.imagen"
          class="img-fluid rounded-start"
          :alt="zapatillas.nombre"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5
            class="card-title"
            v-for="zapatilla in $store.getters.buscarZapatilla"
            :key="zapatilla.nombre"
          >
            {{ zapatilla.nombre }}
          </h5>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
export default {
  props: {
    zapatillas: { type: Object, require: true },
    busqueda: { type: Object, require: true },
  },
};
</script>
