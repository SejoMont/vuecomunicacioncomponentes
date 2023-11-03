<template>
  <div>
    <h2>{{ comic.titulo }}</h2>
  </div>
  <p>{{ comic.descripcion }}</p>
  <img :src="comic.imagen" />
  <h3
    :class="{
      rojo: comic.year <= 2000,
      verde: comic.year > 2000,
    }"
  >
    Año: {{ comic.year }}
  </h3>
  <button @click="seleccionarFavorito()">Seleccionar Favorito</button>
  <button @click="eliminarComic()">Borrar Comic</button>
  <hr>
</template>
  
  <script>
export default {
  name: "ComicComponent",
  props: ["comic","index"],
  methods: {
    seleccionarFavorito(){
      this.$emit("seleccionarFavorito", this.comic)
    },
    eliminarComic(){
      console.log(this.index)
      this.$emit("eliminarComic", this.index)
    },
  }
};
</script>

  <style>
@import "./../assets/css/estilocomics.css";
</style>