<template>
  <div class="home">
    회원 가입 페이지
    <br />
    <br />
    <form @submit.prevent="onSubmit">
      <ValidationProvider name="Name" rules="required">
        이름
        <input v-model="form.name" type="text" required />
        <!-- <FormErrorMessage :errors="errors" /> -->
      </ValidationProvider>
      <br />
      <ValidationProvider name="Email" rules="required|email">
        이메일
        <input v-model="form.email" type="email" required />
      </ValidationProvider>
      <br />
      <ValidationProvider name="Password" rules="required|min:6">
        비밀번호
        <input type="password" v-model="form.password" required />
      </ValidationProvider>
      <br />
      <ValidationProvider name="Password Confirmation" rules="required|min:6">
        비밀번호 확인
        <input type="password" v-model="form.passwordConfirm" required />
        <!-- <FormErrorMessage :errors="errors" /> -->
      </ValidationProvider>
      <br />
      <br />
      <button type="submit" variant="primary">Sign Up</button>

      <button @click="goinfo">개발 진척 상황, 주식수 확인</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";

export default {
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
    async onSubmit() {
      try {
        await axios.post("http://localhost:5100/signup/account", {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name,
        });

        //  this.$router.push({ name: "linkedinfo" })
      } catch (err) {
        console.log(err);
      }

      this.form.email = ""
      this.form.password = ""
      this.form.name = ""
      this.form.passwordConfirm = ""

      //   this.$router.push({ name: "linkedinfo" })
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

    goinfo() {
      this.$router.push({ name: "linkedinfo" });
    },
  },
};
</script>