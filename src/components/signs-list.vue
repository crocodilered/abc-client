<template>
  <div class="abc-signs-list">
    <abc-signs-item
      v-for="(o, k) in list"
      :key="`sign-item-${k}`"
      :sign="o"
    />

    <b-pagination-nav
      :link-gen="generatePaginationLink"
      :number-of-pages="pagesCount"
      limit=10
      use-router
      @change="loadData"
    />
  </div>
</template>

<script>
  import Api from '@/api'
  import AbcSignsItem from './signs-item'

  export default {
    name: 'abc-signs-list',

    components: { AbcSignsItem },

    data () {
      return {
        list: [],
      }
    },

    methods: {
      generatePaginationLink(pageNum) {
        return pageNum === 1 ? '/' : `/list/${pageNum}/`
      },

      loadData (offset) {
        this.list = []

        Api.list(offset || this.offset || 0)
          .then(list => (this.list = list))
      }
    },

    computed: {
      offset () {
        return this.$router.currentRoute.params.offset
      },

      pagesCount () {
        return Math.floor(this.$appStatistics.signs_count / 100)
      }
    },

    mounted () {
      this.loadData()
    }
  }
</script>
