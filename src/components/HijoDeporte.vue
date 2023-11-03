<template>
  <div>
    <h2 style="color: blue">{{nombredeporte}}</h2>
    <button @click="seleccionarFavorito()"> Seleccionar favorito </button>
  </div>
</template>

<script>
export default {
  name: "HijoDeporte",
  props: ["nombredeporte"],
  methods: {
    seleccionarFavorito() {
        this.$emit("seleccionarFavoritoParent", this.nombredeporte);
    }
  },
  mounted() {
    console.log(this.nombredeporte)
  }
};
</script>