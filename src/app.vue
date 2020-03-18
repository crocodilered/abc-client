<template>
  <div id="app">
    <b-container>
      <h1>Nulla non vulputate mi</h1>
      <hr />
      <router-view />
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  h1, h2 {
    margin: 2rem 0;
    font-weight: 400;
  }
</style>
