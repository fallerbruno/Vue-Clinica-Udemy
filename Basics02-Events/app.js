const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    counterPlus(){
      this.counter++
    },
    counterReduce(){
      this.counter--
    }
  }
});

app.mount('#events');
