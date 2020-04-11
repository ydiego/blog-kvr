<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100%;
}
</style>
