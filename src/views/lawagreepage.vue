<template>
  <div class="home">
    회원 가입 약관
    <br />
    <br />

    <button @click="agree">동의</button>
  </div>
</template>

<script>
// import axios from "axios";
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

  
  },
};
</script>
