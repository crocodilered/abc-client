<template>
  <div class="abc-signs-item" v-if="sign">
    <div>{{ sign.serial }} — {{ sign.published }}</div>
    <div>
      {{ sign.name }}
      <span v-if="sign.profession">({{ sign.profession }})</span>
    </div>
    <div v-if="sign.comments">{{ sign.comments }}</div>
  </div>
</template>

<script>
  export default {
    name: 'abc-signs-item',
    props: ['sign'],
  }
</script>

<style>
  .abc-signs-item {
    margin: 1rem 0;
  }
</style>