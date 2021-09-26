<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="zapatillas.imagen"
          class="img-fluid rounded-start"
          :alt="zapatillas.nombre"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ zapatillas.nombre }}</h5>
          <h4 class="card-text">
            ${{ zapatillas.precio.toLocaleString("de-DE") }}
          </h4>
          <div class="row d-flex align-items-center">
            <div class="col">
              <p class="card-text">{{ zapatillas.cantidad }}</p>
            </div>
            <div class="col">
              <div class="btn-group-vertical">
                <button
                  class="btn btn-outline-primary"
                  @click="
                    $store.dispatch('carrito/agregarZapatilla', zapatillas)
                  "
                >
                  +
                </button>
                <button
                  class="btn btn-outline-primary"
                  @click="
                    $store.dispatch(
                      'carrito/quitarZapatillaCarrito',
                      zapatillas
                    )
                  "
                >
                  -
                </button>
              </div>
            </div>
            <div class="col">
              <h5>subtotal: ${{ zapatillas.cantidad * zapatillas.precio }}</h5>
              <h3>
                Total: ${{
                  (
                    zapatillas.precio *
                    (1 - zapatillas.descuento / 100) *
                    zapatillas.cantidad
                  ).toLocaleString("de-DE")
                }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    zapatillas: { type: Object, require: true },
  },
};
</script>
