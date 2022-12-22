<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">{{ error }}</base-dialog>
    <base-dialog :show="isLoading" title="Authenticating"  fixed>
  <base-spinner></base-spinner>
  </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password">
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password(password must be at least 6 characters long)</p>
        <base-button>{{ sibmitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    }
  },
  computed: {
    sibmitButtonCaption() {
      if (this.mode === 'login') {
        return 'login';
      } else {
        return 'signup'
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'signup Instead';
      } else {
        return 'login Instead'
      }
    }
  },
  methods: {
    async submitForm() {
      // console.log('hey')
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password
}

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', actionPayload)
        } else {
          await this.$store.dispatch('signup', actionPayload)
        }

        const redirectUrl = '/'+(this.$route.query.redirect || 'coaches')
        
        // any of the two bellow are acceptable
        // this.$router.push({ path: '/coaches', replace: true })
        this.$router.replace(redirectUrl)
      } catch (err) {
        console.log(err)
        // this.error = err.message || 'Failed to Authenticate,try again later'
        this.error = err || 'Failed to Authenticate,try again later'
      }

      this.isLoading = false

    },
   
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
    handleError() {
      this.error=null
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>

