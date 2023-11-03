<template>
  <div>
    <h1>Ejemplo Checkbox</h1>
    <h2 style="color:purple">Total: {{ total }}</h2>
    <button @click="cargarCheckbox()">Generar checkbox</button>
    <div v-for="cb in cbox" :key="cb">
        <input type="checkbox" :value="cb" v-model="cboxSeleccionados" @change="sumarCbox">
        <label>{{ cb }}</label>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  methods: {
    cargarCheckbox() {
      this.cbox = [];
      for (let i = 0; i < 10; i++) {
        var random = parseInt(Math.random() * 100 + 1);
        this.cbox.push(random);
      }
      console.log(this.cbox);
    },
    sumarCbox(){
        this.total = 0;
        for(var i in this.cboxSeleccionados){
            this.total = this.total+ this.cboxSeleccionados[i]
        }
    }
  },
  data() {
    return {
      cbox: [],
      cboxSeleccionados: [],
      total: 0,
    };
  },
};
</script>