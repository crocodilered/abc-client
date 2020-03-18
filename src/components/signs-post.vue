<template>
  <div>
    
    <b-button v-b-modal.form-modal size="lg" variant="primary">Подписать…</b-button>

    <b-modal
      id="form-modal"
      title="Подписать"
      ok-title="Подписать"
      ok-only
      @show="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Ваше имя:"
          label-for="name-input"
          invalid-feedback="Это поле необходимо заполнить"
        >
          <b-form-input
            id="name-input"
            ref="name-input"
            v-model="name"
            :state="nameState"
            required
          />
        </b-form-group>

        <b-form-group
          :state="emailState"
          label="Адрес эл. почты:"
          label-for="email-input"
          invalid-feedback="Необходимо указать адрес электронной почты"
        >
          <b-form-input
            type="email"
            id="email-input"
            ref="email-input"
            v-model="email"
            :state="emailState"
            required
          />
        </b-form-group>

        <b-form-group
          label="Профессия:"
          label-for="profession-input"
        >
          <b-form-input
            id="profession-input"
            v-model="profession"
          />
        </b-form-group>

        <b-form-group
          label="Комментарий:"
          label-for="comments-input"
        >
          <b-form-textarea
            id="comments-input"
            v-model="comments"
            rows="3"
          />
        </b-form-group>
      </form>
    </b-modal>

  </div>
</template>

<script>
  import Api from '@/api'

  export default {
    name: 'sign-modal-button',
    
    data () {
      return {
        name: null,
        profession: null,
        email: null,
        comments: null,

        nameState: null,
        emailState: null,

        loading: false,
        error: false,
      }
    },

    methods: {
      checkFormValidity() {
        this.nameState = this.$refs['name-input'].checkValidity()
        this.emailState = this.$refs['email-input'].checkValidity()
        return this.nameState && this.emailState
      },

      resetModal() {
        this.name = this.nameState = null
        this.email = this.emailState = null
        this.profession = ''
        this.comments = null
      },

      handleOk(event) {
        event.preventDefault()
        this.handleSubmit()
      },

      async handleSubmit() {
        if (!this.checkFormValidity()) return

        // post data here
        this.loading = true
        this.error = false

        const resp = await Api.sign({
          name: this.name,
          profession: this.profession,
          email: this.email,
          comments: this.comments,
        })

        if (resp && resp.data && resp.data.code !== 0) {
          this.error = true
        }

        this.loading = false

        this.$nextTick(() => {
          this.$bvModal.hide('form-modal')
        })
      }
    }
  }
</script>

<style>

</style>
