<template>
  <div>
    <h1 style="color: blue">Comics Parent</h1>
    <form v-on:submit.prevent="crearComic()">
      <label>Titulo:</label>
      <input type="text" v-model="comicForm.titulo" /> <br />
      <label>Descripcion:</label>
      <input type="text" v-model="comicForm.descripcion" /> <br />
      <label>Imagen:</label>
      <input type="text" v-model="comicForm.imagen" /> <br />
      <label>Año:</label>
      <input type="number" v-model="comicForm.year" /> <br />
      <button>Nuevo Comic</button>
    </form>
    <div v-if="comicFavorito" style="background-color: lightgreen">
      <h1>{{ comicFavorito.titulo }}</h1>
      <img :src="comicFavorito.imagen" />
    </div>
    <div v-for="(comic, index) in comics" :key="comic">
      <ComicComponent
        :comic="comic"
        v-on:seleccionarFavorito="seleccionarFavorito"
        :index="index"
        v-on:eliminarComic="eliminarComic"
      />
    </div>
  </div>
</template>
 
<script>
import ComicComponent from "./ComicComponent.vue";

export default {
  name: "ComicsComponent",
  components: {
    ComicComponent,
  },
  methods: {
    crearComic() {
      this.comics.push(this.comicForm);
    },
    seleccionarFavorito(comic) {
      this.comicFavorito = comic;
    },
    eliminarComic(index) {
      this.comics.splice(index, 1);
    },
  },
  data() {
    return {
      comicForm: {
        titulo: "",
        imagen: "",
        descripcion: "",
        year: 0,
      },
      comicFavorito: null,
      comics: [
        {
          titulo: "Spiderman",
          imagen:
            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
          descripcion: "Hombre araña",
          year: 1997,
        },
        {
          titulo: "Wolverine",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
          descripcion: "Lobezno",
          year: 2003,
        },
        {
          titulo: "Guardianes de la Galaxia",
          imagen:
            "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
          descripcion: "Yo soy Groot",
          year: 2006,
        },
        {
          titulo: "Avengers",
          imagen:
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
          descripcion: "Los Vengadores",
          year: 1993,
        },
        {
          titulo: "Spawn",
          imagen:
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
          descripcion: "Al Simmons",
          year: 2000,
        },
        {
          titulo: "Batman",
          imagen:
            "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
          descripcion: "Murcielago",
          year: 2001,
        },
      ],
    };
  },
};
</script>
 
<style>
</style>