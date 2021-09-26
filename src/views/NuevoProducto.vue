<template>
  <div>
    <div class="container p-5">
      <div class="row">
        <div class="col">
          <h2>Agregar Nuevo Producto</h2>
        </div>
      </div>
      <Form />
    </div>
  </div>
</template>
<script>
import Form from "../components/Form.vue";

export default {
  components: { Form },
};
</script>
