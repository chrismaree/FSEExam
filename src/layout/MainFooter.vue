<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav></nav>
      <div class="copyright">
        &copy; {{ year }}, made with
        <md-icon>favorite</md-icon> by
        <a href="https://www.chrismaree.io" target="_blank">Chris Maree</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
