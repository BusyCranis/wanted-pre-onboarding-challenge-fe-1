<template>
  <div>
    로그인 페이지

    <form @submit.prevent="onSubmit">
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

      <br />
      <br />
      <button type="submit" variant="primary">로그인</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";
import { mapState, mapActions, mapMutations } from "vuex";

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
    ...mapMutations(["loginsuccess"]),

    async onSubmit() {
      try {
        await axios
          .get("http://localhost:5100/signup/account", {
            email: this.form.email,
            password: this.form.password,
          })
          .then((res) => {
            console.log(res.data.info);
            this.loginsuccess();
            this.$router.push({ name: "linkedinfo" });
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

    goinfo() {
      if (this.$store.state.islogin === false)
        this.$router.push({ name: "login" });
      else {
        this.$router.push({ name: "linkedinfo" });
      }
    },
  },
};
</script>
<style>
</style>