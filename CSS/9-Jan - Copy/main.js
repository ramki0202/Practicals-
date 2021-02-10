new Vue({
  el: '#app',
  data() {
    return {
      burgerVisibility: false
    }
  },
  methods: {
    changeVisibility() {
      this.burgerVisibility = !this.burgerVisibility;
    }
  }
})