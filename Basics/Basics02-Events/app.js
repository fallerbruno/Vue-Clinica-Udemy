const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: " ",
      confirmedName: "",
    };
  },
  methods: {
    counterPlus(num){
      this.counter =  + num;
    },
    counterReduce(num){
      this.counter = - num;
    },
    setName(event, subname){
      this.name = event.target.value + " " + subname;
    },
    submitForm(){
      
      alert('Submitted!');
    },
    confirmName(event){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
