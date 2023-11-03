<template>
  <div>
    <h1 style="color: red">Padre Deporte</h1>
    <h2 style="background-color:yellow" v-if="favorito">
    Su deporte favorito es {{ favorito }}</h2>
    <ul>
      <li v-for="depor in deportes" :key="depor">
        <HijoDeporte
          :nombredeporte="depor"
          v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import HijoDeporte from "./HijoDeporte.vue";
export default {
  name: "PadreDeporte",
  components: {
    HijoDeporte,
  },
  methods: {
    seleccionarFavoritoParent(nombredeporte) {
      console.log("Padre deportes activado, "+nombredeporte);
      this.favorito = nombredeporte;
    },
  },
  data() {
    return {
      deportes: ["Surf", "Curling", "Bolos", "Petanca", "Futbol"],
      favorito : null
    };
  },
};
</script>