<template>
  <div class="home">
    회원 가입 약관
    <br />
    <br />

    <button @click="agree">동의</button>
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";

export default {
  name: "Home",
  components: {
    ValidationProvider,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
      },

      userlist: [],
    };
  },

  methods: {
    agree() {
      this.$router.push({ name: "signup" });
    },

    async onSubmit() {
      try {
        await axios.post("http://localhost:5100/signup/account", {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name,
        });
      } catch (err) {
        console.log(err);
      }
    },

    whileread() {
      axios
        .get("http://localhost:5100/signup/account")
        .then((r) => {
          this.userlist = r.data.posts;
          console.log(r.data.posts);
        })
        .catch((e) => {
          console.error(e.message);
        });
    },
  },
};
</script>
