<template>
  <div id="app">
    <poptip></poptip>
    <router-view />
  </div>
</template>
<script>
import Vue from "vue";
import poptip from "./components/public/poptip/index.vue";
export default Vue.extend({
  name: "App",
  components: {
    poptip,
  },
});
</script>