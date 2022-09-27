<template>
  <div>
    <div class="content">
      <div class="before">
        <div>
          <canvas
            id="bCanvas"
            style="position: absolute"
            @mousedown="start0"
            @mousemove="ondraging"
            @mouseup="enddrag"
          ></canvas>
          <img
            id="image"
            src="https://user-images.githubusercontent.com/25702775/109247653-a1e30700-7827-11eb-887c-8811a2df6671.jpg"
          />
        </div>
      </div>
      <div class="after">
        <div class="aDiv" id="aDiv"></div>
      </div>
    </div>

    <br />

    <button
        @click="submitToken"
    >
    
    인증
    </button>

   <p><button @click="">선택한 영역 자르기</button></p>


    <p><button @click="syncronize0">선택한 영역 자르기</button></p>

    <p><button @click="checkconsole">확인</button></p>

    <p><button @click="agree">서버 체크</button></p>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      size0: 250,
      canvas0: null,
      ctx0: null,
      sX: null,
      sY: null,
      cX: null,
      cY: null,
      width0: null,
      height0: null,
      drawing: false,
      canvasX: null,
      canvasY: null,
      subcanv: null,
      imgslot: null,
      subwd: null,
      subhgt: null,

      // linkload: require("@/assets/urlexample.url"),
    };
  },

  methods: {

    allcap() {




    },




    async submitToken() {
      // let frontnum = document.getElementById("PhoneNumber02").value

      // let backnum = document.getElementById("PhoneNumber03").value

      // let fullnum = "010" + frontnum + backnum

      // let tokennumber = document.getElementById("TokenInput").value

      axios.post("http://localhost:3000/tokens/phone/patch", {
        phone: "01084726360",
        token: "436285",
      });

      console.log("핸드폰 인증 완료");
    },

    agree() {
      this.$router.push({ name: "linkedinfo" });
    },

    checkconsole() {
      console.log(this.canvasX);
      console.log(this.canvasY);
      console.log(this.canvas0);
    },

    start0(e) {
      this.sX = parseInt(e.clientX - this.canvasX);

      this.sY = parseInt(e.clientY - this.canvasY);

      console.log(this.sX);
      console.log(this.sY);

      this.drawing = true;
    },

    ondraging(e) {
      if (this.drawing) {
        this.cX = parseInt(e.clientX - this.canvasX);
        this.cY = parseInt(e.clientY - this.canvasY);

        this.ctx0.clearRect(0, 0, this.canvas0.width, this.canvas0.height);

        this.ctx0.strokeRect(
          this.sX,
          this.sY,
          this.cX - this.sX,
          this.cY - this.sY
        );
      }
    },

    drawcanvasasync(x, y, width, height) {
      $("#aDiv").children().remove();
      this.subcanv = document.createElement("canvas");
      this.imgslot = new window.Image();
      this.imgslot.width = 250;
      this.imgslot.height = 250;
      console.log(this.imgslot);
      if (Math.abs(width) <= Math.abs(height)) {
        this.subhgt = this.size0;
        this.subwd = (this.subhgt * width) / height;
      } else {
        this.subwd = this.size0;
        this.subhgt = (this.subwd * height) / width;
      }
      this.subcanv.width = this.subwd;
      this.subcanv.height = this.subhgt;

      this.imgslot.addEventListener(
        "load",
        function () {
          var RATE = this.imgslot.width / 250;
          this.subcanv
            .getContext("2d")
            .drawImage(
              this.imgslot,
              x * RATE,
              y * RATE,
              width * RATE,
              height * RATE,
              this.subwd * 0.05,
              this.subhgt * 0.05,
              this.subwd * 0.9,
              this.subhgt * 0.9
            );
        },
        false
      );

      this.imgslot.src =
        "https://user-images.githubusercontent.com/25702775/109247653-a1e30700-7827-11eb-887c-8811a2df6671.jpg";
      $("#aDiv").append(this.subcanv);

      console.log(this.subcanv);
    },

    drawcanvas(x, y, width, height) {
      $("#aDiv").children().remove();
      this.subcanv = document.createElement("canvas");
      this.imgslot = new window.Image();
      this.imgslot.width = 250;
      this.imgslot.height = 250;
      console.log(this.imgslot);
      if (Math.abs(width) <= Math.abs(height)) {
        this.subhgt = this.size0;
        this.subwd = (this.subhgt * width) / height;
      } else {
        this.subwd = this.size0;
        this.subhgt = (this.subwd * height) / width;
      }
      this.subcanv.width = this.subwd;
      this.subcanv.height = this.subhgt;

      this.imgslot.src =
        "https://user-images.githubusercontent.com/25702775/109247653-a1e30700-7827-11eb-887c-8811a2df6671.jpg";
      $("#aDiv").append(this.subcanv);

      console.log(this.subcanv);
    },

    enddrag() {
      this.drawing = false;

      this.drawcanvas(this.sX, this.sY, this.cX - this.sX, this.cY - this.sY);
    },

    syncronize0() {
      let width = this.cX - this.sX;

      let height = this.cY - this.sY;

      console.log(this.sY);

      console.log(width);

      //   this.imgslot.addEventListener(
      //     "load",
      //     function () {
      var RATE = this.imgslot.width / 250;
      this.subcanv
        .getContext("2d")
        .drawImage(
          this.imgslot,
          this.sX * RATE,
          this.sY * RATE,
          width * RATE,
          height * RATE,
          this.subwd * 0.05,
          this.subhgt * 0.05,
          this.subwd * 0.9,
          this.subhgt * 0.9
        );
      //     },
      //     false
      //   );
    },
  },

  mounted() {
    this.canvas0 = document.getElementById("bCanvas");

    this.canvas0.width = this.size0;

    this.canvas0.height = this.size0;

    this.ctx0 = this.canvas0.getContext("2d");

    this.ctx0.lineWidth = 3;

    this.canvasX = $("#bCanvas").offset().left;
    this.canvasY = $("#bCanvas").offset().top;
  },
};
</script>
<style>
/* div {
  display: flex;
  justify-content: space-around;
  align-items: center;
} */

.before,
.after {
  border: 1px solid black;
  flex-direction: column;
  align-items: center;
  width: 250px;
}

img {
  width: 250px;
  height: 250px;
}

.aDiv {
  width: 250px;
  height: 250px;
}
</style>