import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { carritoModule } from "./modules/carrito";
import { zapatillasModule } from "./modules/zapatillas";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    carrito: carritoModule,
    zapatillas: zapatillasModule,
  },
});
