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
              <div class="md-layout">
                <div class="md-layout-item md-small-hide"></div>
                <div class="md-layout-item">
                  <md-button class="md-info" @click="filtered=!filtered; ordered = false">
                    <i class="fas fa-search"></i>Filter Sneakers
                  </md-button>
                </div>
                <div class="md-layout-item">
                  <md-button
                    class="md-info"
                    @click="ordered=!ordered; filtered = false"
                    style="margin-left:20px"
                  >
                    <i class="fas fa-list"></i>Order Sneakers
                  </md-button>
                </div>
                <div class="md-layout-item">
                  <md-field>
                    <md-icon>search</md-icon>
                    <label>Search</label>
                    <md-input v-model="filterInfo.searchString"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-hide"></div>
              </div>

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
                      :interval="200"
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
                    class="md-layout-item md-size-33 md-medium-size-50 md-small-size-100 mx-auto text-center"
                    v-for="sneaker in sortedSneakers"
                    v-bind:key="sneaker.Date+sneaker.Style+sneaker.Brand"
                    v-if="render"
                  >
                    <flip-card :shoeInfo="sneaker" />
                  </div>
                </transition-group>
              </div>
              <transition-group name="zoom" class="md-layout">
                <md-empty-state
                  v-if="sortedSneakers.length==0"
                  v-bind:key="'emptyState'"
                  md-icon="search"
                  md-label="No Sneakers selected"
                  md-description="Your Filter criteria does not match any sneakers. Please change."
                ></md-empty-state>
              </transition-group>
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
              >Add a new sneaker to your catalog. Specify all the information you could possibly want about your beautiful sneaker! The image you add should ideally be 350x350px.</h5>
              <md-button
                class="md-primary"
                v-if="!addNewSneaker"
                @click="addNewSneaker=!addNewSneaker"
              >
                <i class="fas fa-rocket"></i> Add Sneaker
              </md-button>
            </div>
          </div>

          <transition-group name="flipX">
            <div class="md-layout md-gutter" v-bind:key="'AddNewSneaker'" v-if="addNewSneaker">
              <div class="md-layout-item md-size-40 md-small-size-100 mx-auto text-center">
                <h3>New Sneaker information</h3>
                <md-field :class="messageBrand">
                  <md-icon>visibility</md-icon>
                  <label>Brand</label>
                  <span class="md-error">Brand is required</span>
                  <md-input v-model="newSneakerInfo.Brand" required></md-input>
                </md-field>
                <md-field :class="messageStyle">
                  <md-icon>style</md-icon>
                  <label>Style</label>
                  <md-input v-model="newSneakerInfo.Style" required></md-input>
                  <span class="md-error">Style is required</span>
                </md-field>
                <md-field :class="messageimg">
                  <md-icon>image_search</md-icon>
                  <label>Sneaker Image URL</label>
                  <md-input v-model="newSneakerInfo.img" required></md-input>
                  <span class="md-error">Image URL is required and should be a valid link to an image</span>
                </md-field>
                <md-field>
                  <md-icon>color_lens</md-icon>
                  <label for="color">Colour</label>
                  <md-select v-model="newSneakerInfo.Color" name="color" id="color">
                    <md-option style="margin:5px" value="Black">Black</md-option>
                    <md-option style="margin:5px" value="White">White</md-option>
                    <md-option style="margin:5px" value="Red">Red</md-option>
                    <md-option style="margin:5px" value="Grey">Grey</md-option>
                    <md-option style="margin:5px" value="Other">Other</md-option>
                  </md-select>
                </md-field>
                <md-datepicker v-model="newSneakerInfo.Date">
                  <label>Select date</label>
                </md-datepicker>
                <md-field :class="messagePrice">
                  <md-icon>attach_money</md-icon>
                  <label>Price</label>
                  <md-input
                    min="0"
                    max="10000"
                    step="100"
                    v-model="newSneakerInfo.Price"
                    type="number"
                    required
                  ></md-input>
                  <span class="md-error">Price is required</span>
                </md-field>
                <p
                  class="text-muted"
                >Ppppssst. Click your sneaker card to view the details on the back</p>
              </div>
              <div class="md-layout-item md-size-40 md-small-size-100 mx-auto text-center">
                <flip-card :shoeInfo="newSneakerInfoProcessed" />
              </div>
            </div>
          </transition-group>
          <transition-group name="bounceUp">
            <div
              class="md-layout md-gutter"
              style="padding-top:50px"
              v-if="addNewSneaker"
              v-bind:key="'button'"
            >
              <div class="md-layout-item md-size-40 md-xsmall-size-100 mx-auto text-center">
                <md-button class="md-primary" :disabled="validAddNewSneaker" @click="addSneaker">
                  <i class="fas fa-plus"></i> Add Sneaker
                </md-button>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>

    <md-dialog-alert
      :md-active.sync="createdDialog"
      md-content="Your sneaker has been added!"
      md-confirm-text="Cool!"
    />
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
                    <i class="fas fa-window-restore"></i>
                  </div>
                  <h4 class="info-title">Modern web Development</h4>
                  <p>Built with VueJS, MaterialUI and Yarn to leverage powerful javascript frameworks, package managers and styled components.</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <i class="fas fa-server"></i>
                  </div>
                  <h4 class="info-title">Serverless Infrastructure</h4>
                  <p>Backend CRUD API built using Node Serverless infrastructure to be light weight, simple and expandable. Stores information in JSON object.</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <i class="fas fa-recycle"></i>
                  </div>
                  <h4 class="info-title">CI/CD Pipelines Included</h4>
                  <p>
                    Deployed on
                    <a href="https://zeit.co">zeit.co</a> for continuous integration and deployment pipelines for both the frontend and serverless infrastructure that deploy on every git push.
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
      addNewSneaker: false,
      allBrands: [],
      allColors: [],
      createdDialog: false,
      filterInfo: {
        selectedColors: [],
        selectedBrands: [],
        priceRange: [1000, 4000],
        sortBy: "Brand",
        searchString: ""
      },
      sneakers: [],
      newSneakerInfo: {
        Brand: null,
        Style: null,
        Price: null,
        Color: null,
        Date: null,
        img: null
      }
    };
  },
  methods: {
    scrollToElement(elementId) {
      let element_id = document.getElementById(elementId);
      if (element_id) {
        element_id.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
    async addSneaker() {
      console.log("AADDD");
      console.log(newSneakerObject);
      let newSneakerObject = {
        index: this.sneakers.length,
        sneaker: this.newSneakerInfoProcessed
      };
      console.log(newSneakerObject);
      await axios.post("/api/sneaker/add-sneaker", newSneakerObject);
      this.sneakers.push(this.newSneakerInfoProcessed);
      this.extractUniqueInfo();
      this.createdDialog = true;
    },
    extractUniqueInfo() {
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
    },
    checkURL(url) {
      if (url != null) {
        return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
      }
      if (url === "") {
        return true;
      }
      return false;
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
      if (this.filterInfo.searchString != "") {
        filteredSneakers = filteredSneakers.filter(sneaker => {
          let includeSneaker = false;
          Object.keys(sneaker).forEach(sneakerKey => {
            if (
              sneaker[sneakerKey]
                .toLocaleLowerCase()
                .includes(this.filterInfo.searchString.toLocaleLowerCase()) &&
              sneakerKey != "img"
            ) {
              includeSneaker = true;
            }
          });
          return includeSneaker;
        });
      }
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
    },
    messageBrand() {
      return {
        "md-invalid": this.newSneakerInfo.Brand === ""
      };
    },
    messageStyle() {
      return {
        "md-invalid": this.newSneakerInfo.Style === ""
      };
    },
    messageimg() {
      if (this.newSneakerInfo.img === null) {
        return { "md-invalid": false };
      } else {
        return {
          "md-invalid":
            this.newSneakerInfo.img === "" ||
            !this.checkURL(this.newSneakerInfo.img)
        };
      }
    },
    messagePrice() {
      return {
        "md-invalid": this.newSneakerInfo.Price === 0
      };
    },
    newSneakerInfoProcessed() {
      let processedInfo = JSON.parse(JSON.stringify(this.newSneakerInfo));
      if (processedInfo.Date) {
        processedInfo.Date = this.newSneakerInfo.Date.toISOString().substring(
          0,
          10
        );
      }
      if (!processedInfo.Date) {
        processedInfo.Date = "Some Date";
      }
      if (!processedInfo.Brand) {
        processedInfo.Brand = "Brand";
      }
      if (!processedInfo.Style) {
        processedInfo.Style = "Style";
      }
      if (!processedInfo.Price) {
        processedInfo.Price = "$$$";
      }
      if (!processedInfo.Color) {
        processedInfo.Color = "Color";
      }
      return processedInfo;
    },
    validAddNewSneaker() {
      if (
        this.newSneakerInfo.Date &&
        this.newSneakerInfo.Brand &&
        this.newSneakerInfo.Style &&
        this.newSneakerInfo.Price &&
        this.newSneakerInfo.Color &&
        this.newSneakerInfo.img
      ) {
        return false;
      }
      return true;
    }
  },
  async mounted() {
    try {
      let response = await axios.get("/api/sneaker/get-sneakers");
      console.log(response);
      this.sneakers = response.data;
      if (response) {
        this.extractUniqueInfo();
      }
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
