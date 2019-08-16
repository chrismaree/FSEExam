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
            <md-button href class="md-success md-lg" target="_blank">
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
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Sneaker Catalog</h2>
              <h5
                class="description"
              >View a history of all your sneakers that you have purchased in the past.</h5>
              <flip-card :shoeInfo="shoeInfo" />
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
import flipCard from "@/components/flipCard.vue";

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
      shoeInfo: {
        Brand: "Nike",
        img:
          "https://rubinoshoes-9aed.kxcdn.com/35963-large_default/nike-cortez-basic-m-white-black-819719-100.jpg",
        Style: "Cortez",
        Color: "White",
        Date: "2019-01-30",
        Price: "1500"
      }
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
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
