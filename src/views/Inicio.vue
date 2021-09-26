<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <Busqueda />
        </div>
      </div>
    </div>
    <div class="container text-center p-5">
      <div class="row">
        <div class="col">
          <img
            src="../assets/Miniatura-Air-Max-720-2.jpg"
            alt="Review Nike Air Max 720 OBJ"
            class="img-fluid"
          />
          <h2 class="p-5">Productos Destacados</h2>
        </div>
      </div>
    </div>
    <div class="row row-cols-md-3 row-cols-sm-2 text-center">
      <Card
        v-for="(zapatilla, index) in $store.state.zapatillas.zapatillas"
        :key="index"
        :zapatillas="zapatilla"
      />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import Busqueda from "../components/Busqueda.vue";
export default {
  components: { Card, Busqueda },
  props: {
    zapatillas: { type: Object, require: true },
    busqueda: { type: Object, require: true },
  },
};
</script>
