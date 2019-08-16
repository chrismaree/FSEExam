<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Sneaky Sneaker Registry</h1>
            <h4
              style="font-weight:bold"
            >Take control of your sneaker collection and record and store all information about every pair you own. Keep track of when you bought your shoes, the branding, style and price so you never miss an important detail!</h4>
            <br />
            <md-button
              href
              class="md-success md-lg"
              target="_blank"
              @click="scrollToElement('sneakerCatalog')"
            >
              <i class="fas fa-arrow-down"></i> Begin
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised" id="sneakerCatalog">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Sneaker Catalog</h2>
              <h5
                class="description"
              >View a history of all your sneakers that you have purchased in the past.</h5>
              <md-button class="md-info" @click="filtered=!filtered; ordered = false">
                <i class="fas fa-search"></i>Filter Sneakers
              </md-button>
              <md-button
                class="md-info"
                @click="ordered=!ordered; filtered = false"
                style="margin-left:20px"
              >
                <i class="fas fa-list"></i>Order Sneakers
              </md-button>
              <transition-group name="fadeDown">
                <div
                  class="md-layout"
                  v-if="filtered"
                  style="padding-top:20px"
                  v-bind:key="'filter'"
                >
                  <div
                    class="md-layout-item md-size-33 md-xsmall-size-100 mx-auto text-center"
                    id="sliders"
                  >
                    <p style="font-weight:bold">Price range:</p>
                    <vue-slider
                      :min="0"
                      :max="5000"
                      :interval="50"
                      v-model="filterInfo.priceRange"
                      :tooltip="'always'"
                      :tooltip-placement="'bottom'"
                      :enable-cross="false"
                    ></vue-slider>
                  </div>
                  <div
                    class="md-layout-item md-size-33 md-xsmall-size-100 mx-auto text-center"
                    id="sliders"
                  >
                    <p style="font-weight:bold">Select Brand:</p>
                    <md-checkbox
                      v-for="brand in allBrands"
                      v-model="filterInfo.selectedBrands"
                      :value="brand"
                      style="margin:5px"
                    >{{brand}}</md-checkbox>
                  </div>
                  <div
                    class="md-layout-item md-size-33 md-xsmall-size-100 mx-auto text-center"
                    id="sliders"
                  >
                    <p style="font-weight:bold">Select colour:</p>
                    <md-checkbox
                      v-for="color in allColors"
                      v-model="filterInfo.selectedColors"
                      :value="color"
                      style="margin:5px"
                    >{{color}}</md-checkbox>
                  </div>
                </div>
              </transition-group>
              <transition-group name="fadeDown">
                <div
                  class="md-layout"
                  v-if="ordered"
                  style="padding-top:20px"
                  v-bind:key="'orderSneakers'"
                >
                  <div
                    class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto text-center"
                    id="sliders"
                  >
                    <p style="font-weight:bold">Sort Sneakers By:</p>
                    <md-radio style="margin:5px" v-model="filterInfo.sortBy" value="Brand">Brand</md-radio>
                    <md-radio style="margin:5px" v-model="filterInfo.sortBy" value="Style">Style</md-radio>
                    <md-radio style="margin:5px" v-model="filterInfo.sortBy" value="Color">Color</md-radio>
                    <md-radio style="margin:5px" v-model="filterInfo.sortBy" value="Date">Date</md-radio>
                    <md-radio style="margin:5px" v-model="filterInfo.sortBy" value="Price">Price</md-radio>
                  </div>
                </div>
              </transition-group>
              <div class="md-layout">
                <transition-group name="zoom" class="md-layout">
                  <div
                    class="md-layout-item md-size-33 md-xsmall-size-100 mx-auto text-center"
                    v-for="sneaker in sortedSneakers"
                    v-bind:key="sneaker.Date+sneaker.Style+sneaker.Brand"
                    v-if="render"
                  >
                    <flip-card :shoeInfo="sneaker" />
                  </div>
                </transition-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main main-raised" style="margin-top:25px" id="addNewSneakers">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Add New Sneakers</h2>
              <h5
                class="description"
              >Add a new sneaker to your catalog. Specify all the information you could possibly want about your beautiful sneaker!</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main main-raised" style="margin-top:25px" id="technology">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Sneaky Sneaker Registry Technology</h2>
              <h5
                class="description"
              >Built on the latest and greatest web development frameworks and tools.</h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Free Chat</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">Verified Users</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>fingerprint</md-icon>
                  </div>
                  <h4 class="info-title">Fingerprint</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("vue2-animate/dist/vue2-animate.min.css");
import flipCard from "@/components/flipCard.vue";
const axios = require("axios");

export default {
  bodyClass: "landing-page",
  components: { flipCard },
  props: {
    header: {
      type: String,
      default: require("@/assets/shoe.jpg")
    }
  },
  data() {
    return {
      render: true,
      filtered: false,
      ordered: false,
      allBrands: [],
      allColors: [],
      filterInfo: {
        selectedColors: [],
        selectedBrands: [],
        priceRange: [1000, 4000],
        sortBy: "Brand"
      },
      sneakers: []
    };
  },
  methods: {
    scrollToElement(elementId) {
      let element_id = document.getElementById(elementId);
      if (element_id) {
        element_id.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    filteredSneakers() {
      let filteredSneakers = [];
      this.sneakers.forEach(sneaker => {
        if (
          this.filterInfo.selectedBrands.indexOf(sneaker.Brand) != -1 &&
          this.filterInfo.selectedColors.indexOf(sneaker.Color) != -1 &&
          sneaker.Price > this.filterInfo.priceRange[0] &&
          sneaker.Price < this.filterInfo.priceRange[1]
        ) {
          filteredSneakers.push(sneaker);
        }
      });
      return filteredSneakers;
    },
    sortedSneakers() {
      let scopedThis = this;
      this.render = false;
      let sortedSneakers = this.filteredSneakers.sort((a, b) =>
        a[this.filterInfo.sortBy] > b[this.filterInfo.sortBy]
          ? 1
          : b[this.filterInfo.sortBy] > a[this.filterInfo.sortBy]
          ? -1
          : 0
      );
      setTimeout(function() {
        scopedThis.render = true;
      }, 1);
      return sortedSneakers;
    }
  },
  async mounted() {
    try {
      let response = await axios.get(
        "http://localhost:3000/api/sneaker/get-sneakers"
      );
      console.log(response);
      this.sneakers = response.data;

      let allSneakerBrands = [];
      let allSneakerColours = [];
      this.sneakers.forEach(element => {
        if (allSneakerBrands.indexOf(element.Brand) == -1) {
          allSneakerBrands.push(element.Brand);
        }
        if (allSneakerColours.indexOf(element.Color) == -1) {
          allSneakerColours.push(element.Color);
        }
      });

      this.allBrands = JSON.parse(JSON.stringify(allSneakerBrands));
      this.filterInfo.selectedBrands = JSON.parse(
        JSON.stringify(allSneakerBrands)
      );

      this.allColors = JSON.parse(JSON.stringify(allSneakerColours));
      this.filterInfo.selectedColors = JSON.parse(
        JSON.stringify(allSneakerColours)
      );
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
