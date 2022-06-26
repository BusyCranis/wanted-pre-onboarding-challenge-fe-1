<template>
  <div>
    <a href="http://49.247.19.95"> 개발 진척 상황 확인하기 </a>

    <br><br>

    <div>
      <v-btn @click="whileread">주식수 확인하기</v-btn>
      <div v-for="item in userlist" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";


export default {
  data() {
    return {
      userlist: [],
    };
  },

  methods: {
    whileread() {
      axios
        .get("https://49.247.26.149:5100/member/accounts")
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