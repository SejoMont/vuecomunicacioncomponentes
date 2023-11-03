<template>
  <div>
    <h1>Tabla del {{ numero }}</h1>
    <table>
      <thead>
        <tr>
          <th>Operación</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 10" :key="n">
          <td>{{ numero }} * {{ n }}</td>
          <td>{{ numero * n }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
export default {
  name: "TablaMultiplicar",
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.numero = this.$route.params.numero;
      }
    },
  },
  data() {
    return {
      numero: 0,
    };
  },
  mounted() {
    this.numero = this.$route.params.numero;
  },
};
</script>
<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.tabla {
  
  text-align: center;
}
</style>
  
