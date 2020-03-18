<template>
  <div>
    
    <div v-if="sign">
      <h2>Подпись подтверждена</h2>
      <p>Время публикации: {{ sign.published }}</p>
      <p>Имя: {{ sign.name }}</p>
      <p>
        Профессия:
        <span v-if="sign.profession">{{ sign.profession }}</span>
        <span v-else>—</span>
      </p>
      <p>
        Комментарий:
        <span v-if="sign.comments">{{ sign.comments }}</span>
        <span v-else>—</span>
      </p>
    </div>

    <b-alert variant="danger" :show="error">
      {{ error }}
    </b-alert>

    <hr />

    <b-button @click="$router.push('/')">
      OK
    </b-button>
  </div>
</template>

<script>
  import Api from '@/api'
  
  export default {
    name: 'abc-publish',

    data () {
      return {
        sign: null,
        error: null,
      }
    },

    computed: {
      secretKey () {
        return this.$router.currentRoute.params['secretKey']
      }
    },

    mounted () {
      Api.publish(this.secretKey)
        .then(sign => (this.sign = sign))
        .catch(error => (this.error = error))
    }
  }
</script>
