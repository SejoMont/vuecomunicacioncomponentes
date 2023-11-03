<template>
  <div>
    <ul id="menu">
      <li>
        <router-link to="/">| Home | </router-link>
      </li>
      <li>
        <router-link to="/deporte">Deporte | </router-link>
      </li>
      <li>
        <router-link to="/comics">Comics | </router-link>
      </li>
      <li>
        <router-link to="/selectmultiple">Select Multiple | </router-link>
      </li>
      <li>
        <router-link to="/checkbox">Checkbox | </router-link>
      </li>
      <li>
        <router-link to="/numerodoble">Numero Doble SN | </router-link>
      </li>
      <li>
        <router-link to="/numerodoble/77">Numero Doble 77 | </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li {
  display: inline;
}
</style>