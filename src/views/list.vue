<template>
  <div class="list-view">
    <abc-signs-list />
  </div>
</template>

<script>
  import AbcSignsList from '@/components/signs-list'

  export default {
    name: 'abc-list-view',
    components: { AbcSignsList },
  }
</script>
