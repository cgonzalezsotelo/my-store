export const carritoModule = {
  namespaced: true,
  state: {
    zapatillas: [],
  },
  getters: {
    totalCarrito(state) {
      return state.zapatillas.reduce((accumulator, zapatilla) => {
        accumulator +=
          zapatilla.precio *
          (1 - zapatilla.descuento / 100) *
          zapatilla.cantidad;
        return accumulator;
      }, 0);
    },
  },
  mutations: {
    AGREGAR_ZAPATILLA(state, nuevaZapatilla) {
      state.zapatillas.push(nuevaZapatilla);
    },
    AGREGAR_CANTIDAD_CARRITO(state, indexZapatilla) {
      state.zapatillas[indexZapatilla].cantidad++;
    },
    QUITAR_CANTIDAD_CARRITO(state, indexZapatilla) {
      state.zapatillas[indexZapatilla].cantidad--;
    },
    ELIMINAR_ZAPATILLA(state, indexZapatilla) {
      state.zapatillas.splice(indexZapatilla, 1);
    },
    ELIMINAR_TODAS_LAS_ZAPATILLAS(state) {
      state.zapatillas = [];
    },
  },
  actions: {
    agregarZapatilla(context, zapatilla) {
      const indexZapatillaABuscar = context.state.zapatillas.findIndex(
        (zapatillaCarrito) => zapatillaCarrito.nombre === zapatilla.nombre
      );
      if (indexZapatillaABuscar === -1) {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...nuevaZapatilla } = zapatilla;
        context.commit("AGREGAR_ZAPATILLA", { ...nuevaZapatilla, cantidad: 1 });
      } else {
        context.commit("AGREGAR_CANTIDAD_CARRITO", indexZapatillaABuscar);
      }
    },
    quitarZapatillaCarrito(context, zapatilla) {
      const indexZapatillaABuscar = context.state.zapatillas.findIndex(
        (zapatillaCarrito) => zapatillaCarrito.nombre === zapatilla.nombre
      );
      if (indexZapatillaABuscar >= 0) {
        if (context.state.zapatillas[indexZapatillaABuscar].cantidad > 1) {
          context.commit("QUITAR_CANTIDAD_CARRITO", indexZapatillaABuscar);
        } else {
          context.commit("ELIMINAR_ZAPATILLA", indexZapatillaABuscar);
        }
      } else {
        console.log("error");
      }
    },
    comprar(context) {
      context.commit("ELIMINAR_TODAS_LAS_ZAPATILLAS");
    },
  },
};
