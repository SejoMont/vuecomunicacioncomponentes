<template>
  <div>
    <h1>Select Multiple</h1>
    <form v-on:submit.prevent="mostrarSeleccionados()">
      <select multiple v-model="opcionesSeleccionadas">
        <option v-for="opt in opciones" :key="opt">
          {{ opt }}
        </option>
      </select>
      <br />
      <button>Mostrar Seleccionados</button>
    </form>
    <h2 style="color:purple">{{ seleccionados }}</h2>
  </div>
</template>

<script>
export default {
  name: "SelectMultiple",
  methods: {
    mostrarSeleccionados() {
      this.seleccionados = "";
      for (var opt of this.opcionesSeleccionadas) {
        this.seleccionados += opt + ", ";
      }
    },
  },
  data() {
    return {
      opciones: ["A", "B", "C", "D", "E", "F", "G"],
      opcionesSeleccionadas: [],
      seleccionados: "",
    };
  },
};
</script>