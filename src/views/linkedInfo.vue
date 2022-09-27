<template>
  <div>
    <br /><br />

    <!-- <v-text-field v-model="getreq"></v-text-field> -->

    <div>
      <v-btn @click="whileread"> 나의 할일 확인하기</v-btn>

      <v-btn @click="ontoread"> mongoDB 확인하기</v-btn>

      <v-text-field v-model="time0"></v-text-field>

      <v-btn @click="onpost"> 할일 추가하기 </v-btn>

      <v-btn @click="inpost"> mongoDB </v-btn>

      <br />

      <v-text-field v-model="time1"></v-text-field>

      <div v-for="item in userlist" :key="item.id">
        <div>
          제목: {{ item.title }} 내용: {{ item.content }}
          <v-btn @click="updateinfo(item.id)"> 수정하기 </v-btn>
        </div>
      </div>
    </div>

    <button @click="checkurl">url</button>

    <a id="hrefurl"
      :href="node0"

      download="url바로가기.url"
    
    > 바로가기 저장 </a>

    <!-- <div @click="request0">아무거나 요청하기</div> -->

    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0 hide-details"
          v-model="form.name"
          type="text"
          placeholder="이름"
        >
        </v-text-field>
      </div>
    </div>

    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0 hide-details">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0"
          v-model="form.email"
          type="text"
          placeholder="이메일"
        >
        </v-text-field>
      </div>
    </div>

    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0 hide-details"
          v-model="form.password"
          type="text"
          placeholder="비밀번호"
        >
        </v-text-field>
      </div>
    </div>
    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0 hide-details"
          v-model="form.passwordConfirm"
          type="text"
          placeholder="비밀번호 확인"
        >
        </v-text-field>
      </div>
    </div>
    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0 hide-details"
          v-model="form.firaddress"
          type="text"
          placeholder="주소(시,도 단위)"
        >
        </v-text-field>
      </div>
    </div>
    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0 hide-details"
          v-model="form.secaddress"
          type="text"
          placeholder="주소(군,구 단위)"
        >
        </v-text-field>
      </div>
    </div>
    <div class="rule pa-0 ma-0">
      <div class="include justify-center pa-0 ma-0">
        <v-text-field
          hide-details
          class="setinput pa-0 ma-0 hide-details"
          v-model="form.thraddress"
          type="text"
          placeholder="주소(읍,면,동 단위)"
        >
        </v-text-field>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      getreq: null,

      time0: null,

      time1: null,

      form: {
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
        firaddress: "",
        secaddress: "",
        thraddress: "",
      },

      userlist: null,

      node0: null,
    };
  },

  methods: {
    checkurl() {
      console.log(window.location.href);

      // let element = document.getElementById("hrefurl");
      // element.setAttribute(
      //   "href",
      //   "data:text/plain;charset=utf-8," +
      //     encodeURIComponent("[InternetShortcut]\nURL=" + window.location.href)
      // );
      // element.setAttribute("download", "내용체크.url");

      this.node0 = "ddd";

      console.log(this.node0);
    },

    async onpost() {
      console.log(this.$store.state.usersId);

      try {
        await axios.post("http://localhost:5300/todos", {
          title: this.time0,
          content: this.time0,
          rootid: this.$store.state.usersId,
        });
      } catch (err) {
        console.log(err);
      }
    },

    async inpost() {
      console.log(this.$store.state.usersId);

      try {
        await axios.post("http://localhost:5100/root/post", {
          title: this.time0,
          content: this.time0,
          // rootid: this.$store.state.usersId,
        });
      } catch (err) {
        console.log(err);
      }
    },

    whileread() {
      axios
        .get("http://localhost:5300/todos/" + this.$store.state.usersId)
        .then((res) => {
          this.userlist = res.data.data;
          console.log(res.data.data);
        })
        .catch((e) => {
          console.error(e.message);
        });
    },

    ontoread() {
      axios
        .get("http://localhost:5100/member/accounts")
        .then((res) => {
          this.userlist = res.data.posts;
          console.log(res.data.posts);
        })
        .catch((e) => {
          console.error(e.message);
        });
    },

    updateinfo(id) {
      let myid = id;
      console.log(myid);

      axios
        .post("http://localhost:5300/todos/update", {
          id: myid,
          title: this.time1,
          content: this.time1,
        })
        .then((res) => {
          console.log(res.data);
        });
    },

    request0() {
      axios
        .post("http://localhost:5100/property/request", {
          email: "cranis@naver.com",
        })
        .then((res) => console.log(res.data.yourpost));
    },
  },

  mounted() {
    // let element = document.getElementById("hrefurl");
    // element.setAttribute(
    //   "href",
    //   "data:text/plain;charset=utf-8," +
    //     encodeURIComponent("[InternetShortcut]\nURL=" + window.location.href)
    // );
    // element.setAttribute("download", "내용체크.url");

    this.node0 =
      "data:text/plain;charset=utf-8," +
      encodeURIComponent("[InternetShortcut]\nURL=" + window.location.href);
  },

  computed: {
    ...mapState(["islogin"]),

    ...mapState(["usersId"]),

    ...mapState(["tradeditem"]),
    ...mapState(["boughtinfo"]),
    ...mapState(["soldinfo"]),
    ...mapState(["vrcp"]),
  },
};
</script>
<style>
</style>