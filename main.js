const { createApp } = Vue;

createApp({
  data() {
    return {
      bulbOn: false
    }
  },
  methods: {
    toggleBulb() {
      console.log(this.bulbOn);
      this.bulbOn = !this.bulbOn;
    }
  }
}).mount('#app')