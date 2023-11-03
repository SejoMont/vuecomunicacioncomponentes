<template>
  <div>
    <h1>Suma: {{ total }}</h1>
    <button @click="nuevoNumero()">Nuevo Número</button>
    <div v-for="n in numeros" :key="n">
        <NumeroHijo :numero="n" v-on:sumarNumerosParent="sumarNumerosParent"/>
    </div>
  </div>
</template>

<script>
import NumeroHijo from './NumeroHijo.vue';
export default {

  name: "NumerosPadre",
  components: {
    NumeroHijo,
  },
  methods: {
    nuevoNumero() {
        var random = parseInt((Math.random()*100) + 1);
        this.numeros.push(random);
    },
    sumarNumerosParent(numero) {
      this.total = this.total + parseInt(numero);
    },
  },
  data() {
    return {
      numeros: [14, 22, 67],
      total: 0,
    };
  },
};
</script>