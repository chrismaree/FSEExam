<template>
  <div class="container">
    <div class="card" @click="flip($event)">
      <md-card class="front">
        <img v-if="shoeInfo.img" :src="shoeInfo.img" style="width=350px" />
        <img v-if="!shoeInfo.img" src="@/assets/shoeHolder.jpg" />
        <h3 style="margin-top:0px">
          <span style="font-weight:bold">{{shoeInfo.Brand}}</span>
          {{shoeInfo.Style}}
        </h3>
      </md-card>
      <md-card class="back">
        <p>
          <span style="font-weight:bold">Colour:</span>
          {{shoeInfo.Color}}
        </p>
        <p>
          <span style="font-weight:bold">Date:</span>
          {{shoeInfo.Date}}
        </p>
        <p>
          <span style="font-weight:bold">price:</span>
          R{{shoeInfo.Price}}
        </p>
      </md-card>
    </div>
  </div>
</template>
<script>
export default {
  props: { shoeInfo: { type: Object }, sideFlip: { type: Number, default: 0 } },

  data() {
    return {
      front: true
    };
  },
  methods: {
    flip(event) {
      var element = event.currentTarget;
      if (element.className === "card") {
        if (element.style.transform == "rotateY(180deg)") {
          element.style.transform = "rotateY(0deg)";
        } else {
          element.style.transform = "rotateY(180deg)";
        }
      }
    }
  }
};
</script>
<style scoped>
body {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

div {
  width: 100%;
  height: 100%;
}

.container {
  margin: 20px;
  width: 350px;
  height: 400px;
  perspective: 1000px;
}

.card {
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.front,
.back {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
}

.front:hover {
  box-shadow: 0px 0px 20px 1px rgb(170, 170, 170);
}

.back {
  transform: rotateY(180deg);
}

.back:hover {
  box-shadow: 0px 0px 20px 1px rgb(170, 170, 170);
}
</style>