export const zapatillasModule = {
  namespaced: true,
  state: {
    busqueda: "",
    zapatillas: [
      {
        nombre: "Yeezy 700 Teal Blue",
        marca: "Adidas",
        color: "Teal Blue",
        oferta: false,
        descuento: 0,
        stock: 10,
        imagen:
          "https://exclusiveshopperu.com/wp-content/uploads/adidas-yeezy-boost-700-teal-blue-3.jpg",
        precio: 209000,
      },
      {
        nombre: "Continental 80",
        marca: "Adidas",
        color: "White",
        oferta: true,
        descuento: 10,
        stock: 10,
        imagen:
          "https://assets.adidas.com/images/w_600,f_auto,q_auto/0288ea20a2014e17a79aaac40102877e_9366/Zapatillas_Continental_80_Blanco_EF2101_07_standard.jpg",
        precio: 45000,
      },
      {
        nombre: "Air Max 720 OBJ",
        marca: "Nike",
        color: "Sand/White",
        oferta: false,
        descuento: 0,
        stock: 10,
        imagen:
          "https://cdn.shopify.com/s/files/1/2031/6995/files/air-max-720-obj-desert-ore-release-date-Email.jpg?v=1567786135",
        precio: 120000,
      },
    ],
  },
  getters: {
    buscarZapatilla(state) {
      if (state.busqueda === "") {
        return [];
      } else {
        return state.zapatillas.filter(
          (zapatilla) =>
            zapatilla.nombre
              .toLowerCase()
              .includes(state.busqueda.toLowerCase()) ||
            zapatilla.marca
              .toLowerCase()
              .includes(state.busqueda.toLowerCase()) ||
            zapatilla.color
              .toLowerCase()
              .includes(state.busqueda.toLowerCase()) ||
            zapatilla.marca.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
  },
  mutations: {
    AGREGAR_ZAPATILLA(state, nuevoProducto) {
      state.zapatillas.push(nuevoProducto);
    },
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda;
    },
  },
  actions: {
    crearNuevoProducto(context, zapatilla) {
      context.commit("AGREGAR_ZAPATILLA", zapatilla);
    },
    setBusqueda(context, nuevaBusqueda) {
      context.commit("SET_BUSQUEDA", nuevaBusqueda);
    },
  },
};
