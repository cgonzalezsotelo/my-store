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
      <ul v-else></ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    zapatillas: { type: Object, require: true },
    busqueda: { type: Object, require: true },
  },
};
</script>
