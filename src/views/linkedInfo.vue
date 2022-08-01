<template>
  <div>
    <a href="http://49.247.19.95"> 개발 진척 상황 확인하기 </a>

    <br /><br />

    <div>
      <v-btn @click="whileread">주식수 확인하기</v-btn>
      <div v-for="item in userlist" :key="item._id">
        <div @click="updateinfo(item._id)">
          {{ item }}
        </div>
      </div>
    </div>

<div @click="request0" >
  아무거나 요청하기
</div>


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
    <!-- </ValidationProvider> -->
    <!-- <ValidationProvider name="Email" rules="required|email"> -->
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
    <!-- </ValidationProvider> -->
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
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
        firaddress: "",
        secaddress: "",
        thraddress: "",
      },

      userlist: [],
    };
  },

  methods: {
    whileread() {
      axios
        .get("http://localhost:5100/member/accounts")
        .then((res) => {
          this.userlist = res.data.posts;
          console.log(res.data);
        })
        .catch((e) => {
          console.error(e.message);
        });
    },

    updateinfo(_id) {
      let myid = _id;
      console.log(myid);

      axios
        .post("http://localhost:5100/update/list", {
          yourid: myid,
          name: this.form.name,
        })
        .then((res) => {
          console.log(res.data);
        });
    },

  request0() {

    axios.post("http://localhost:5100/property/request", { 

      email: "cranis@naver.com"

     }).then((res) => console.log(res.data.yourpost))



  }




  },
};
</script>
<style>
</style>