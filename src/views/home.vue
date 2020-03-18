<template>
  <div class="home-view">
    <div class="intro">
      <!-- Petition text goes here -->
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere mauris quis velit porttitor aliquam. Morbi tincidunt pulvinar elit, sed malesuada purus aliquam eget. Maecenas congue, nulla vel iaculis auctor, neque magna tristique nunc, ut vestibulum neque dui in metus. Morbi ultrices sapien turpis, sit amet pellentesque velit ultrices in. Integer varius ex urna, at aliquam sem rhoncus ac. Fusce quis mauris dignissim nunc iaculis auctor. Aenean ut orci vitae odio aliquet consequat. Duis vestibulum efficitur luctus. Etiam id orci nec nulla facilisis pretium. Etiam in lobortis mauris.</p>
      <p>Ut sed tincidunt arcu. Nulla non vulputate mi. Vivamus ut mi sit amet massa fermentum commodo. Nam tincidunt aliquet interdum. Aliquam eget justo elementum, volutpat enim ac, finibus diam. Cras eu dolor quis diam vestibulum vulputate eu vitae mi. Nam gravida rhoncus erat, eget semper sapien congue in.</p>
    </div>

    <abc-signs-post />

    <h2>Подписей уже {{ $appStatistics.signs_count }}</h2>
    
    <abc-signs-list />
  </div>
</template>

<script>
  import AbcSignsList from '@/components/signs-list'
  import AbcSignsPost from '@/components/signs-post'

  export default {
    name: 'abc-home',
    components: { AbcSignsList, AbcSignsPost },
  }
</script>

<style>
  .intro {
    margin: 2rem 0;
    font-size: 130%;
  }
</style>
