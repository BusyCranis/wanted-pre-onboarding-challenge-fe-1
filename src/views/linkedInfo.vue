<template>
  <div>
    <a href="http://49.247.19.95"> 개발 진척 상황 확인하기 </a>

    <div>
      주식수
      <div v-for="item in userlist" :key="item.id">
        {{ item.stock }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userlist: [],
    };
  },

  methods: {
    whileread() {
      axios
        .get("http://localhost:5100/signup/account")
        .then((res) => {
          this.userlist = res.data.posts;
          console.log(res.data.posts);
        })
        .catch((e) => {
          console.error(e.message);
        });
    },
  },
};
</script>
<style>
</style>