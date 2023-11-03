<template>
  <div>
    <h2>Numero Hijo: {{ numero }}</h2>
    <button @click="sumarNumero()">Sumar {{ numero }}</button>
  </div>
</template>
  
  <script>
export default {
  name: "NumeroHijo",
  props: ["numero"],
  methods: {
    sumarNumero() { 
        this.$emit("sumarNumerosParent", this.numero);
    },
  },
  data() {
    return;
  },
};
</script>