<template>
  <div class="login-container">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                { required: true, message: 'Please input your email!' },
                { validator: emailValidate }
              ]
            }
          ]"
          placeholder="email"
        >
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'pwd',
            {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            }
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button block type="primary" html-type="submit">Login</a-button>
      </a-form-item>
      <a-form-item style="text-align: right;">
        <router-link to="/adminregister">
          <a-button>Register</a-button>
        </router-link>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: this.$form.createForm(this, { name: "login" })
    };
  },
  methods: {
    emailValidate(rule, value, callback) {
      const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!emailReg.test(value)) {
        callback("invalid email address");
      }
      callback();
    },
    handleSubmit(e) {
      e.preventDefault();
      const _ = this;
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$http
            .post("/api/login", values)
            .then(res => {
              const { redirect } = _.$route.query;
              const { token } = res.data;
              localStorage.setItem("token", token);
              _.$router.push({ path: redirect });
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto 0;
}
</style>
