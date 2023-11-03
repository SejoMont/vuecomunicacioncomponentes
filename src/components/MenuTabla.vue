<template>
  <div>
    <ul id="menu">
      <li v-for="n in numeros" :key="n">
        <router-link :to="'/tablamultiplicar/' + n">
          | Tabla {{ n }} |
        </router-link>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: "MenuTabla",
  created() {
    for (let i = 0; i < 5; i++) {
      var random = parseInt(Math.random() * 100 + 1);
      this.numeros.push(random);
    }
    console.log(this.numeros);
  },
  data() {
    return {
      numeros: [],
    };
  },
};
</script>
  
  <style>
ul#menu li {
  display: inline;
}
</style>