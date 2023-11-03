<template>
  <div>
    <h1>Numero Doble</h1>
    <h2 style="color:red" v-if="mensaje">{{ mensaje }}</h2>
    <div v-else>
        <h2 style="color:blue">El numero recibido es: {{ numero }}</h2>
        <h2 style="color:green">El doble es: {{ doble }}</h2>
    </div>
  </div>
  <button @click="redirectToHome()">🏠</button>
</template>
<script>
export default {
  name: "NumeroDoble",
  methods: {
    redirectToHome() {
        this.$router.push("/");
    }
  },
  watch: {
    '$route.params.numero'(nextVal, oldVal){
        if(nextVal != oldVal){
            this.numero = parseInt(this.$route.params.numero);
            this.doble = this.numero * 2
        }
    }
  },
  data() {
    return {
        mensaje: null,
        numero: 0,
        doble: 0
    };
  },
  mounted() {
    //   Dibujamos nuestro parametro
    console.log(this.$route.params.numero);
    var paramNumero =  this.$route.params.numero;
    if (paramNumero == ""){
        console.log("sin parametro")
        this.mensaje = ("Sin parametros...")
    }else{
        console.log("parametro recibido "+ paramNumero)
        this.numero = parseInt(paramNumero);
        this.doble = this.numero * 2;
    }
  },
};
</script>