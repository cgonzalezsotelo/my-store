<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="./assets/Logo_MyDROPS_web.png"
            alt=""
            width="250"
            height="54"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Lanzamientos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/nuevo-producto" class="nav-link" href="#"
                >Nuevo Producto</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/carrito" class="nav-link" href="#"
                >Carrito</router-link
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar Zapatilla"
              aria-label="Search"
              :value="$store.state.zapatillas.busqueda"
              @input="
                $store.dispatch('zapatillas/setBusqueda', $event.target.value)
              "
            />
          </form>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Navbar from "./components/Navbar.vue";
export default {
  // componets: { Navbar },
};
</script>
