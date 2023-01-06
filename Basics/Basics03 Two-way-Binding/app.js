const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: "",
      // fullname: " ",

    };
  },
  methods: {

    //metodos podem ser usados em vincular dados e bind data, interpolacao,
    //associacao de eventos
    //rendereiza novamente para ciclo de re-renderizacao / useEffect
    //utlizado para coisas que voce sempre quer que renderizem novamente

    setName(event) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    },
    outputFullname(){
     console.log('running again....');
      return this.name === "" ? " " : this.name + " " + " Faller"
    },
  },
  computed: {

    //utilizado para data binding derivar dados baseado em outro dado sendo q so serao reavalidadas se executadas novamente ou se os dados
    //que ele depende mudarem
    //usar para dados que dependem de outros dados
    fullname() {
      console.log('running again....');
      return this.name === ""|| this.lastname === "" ? " " : this.name + " " + this.lastName 
    }
  },
  watch: { 
    //usados diretamente no modelo podendo observar qlqr propriedade do modelo
    // o watcher vai bem nesse tipo de solicitavao outra seria usando o solicitacoes HTTP, Timers
    //pode usar qulquer coisa declarada no computed ou data
    //quando o dado for alterado vai executar a funcao no watcher
    //pára qlqr atualizacao que nao seja de dados
    counter(value){
      value > 50 ? this.counter = 0 : this.counter = value;
    }
    // name(value){
    //   value === "" ? this.fullname = "" : this.fullname = value + " " + this.lastName 
    // },
    // lastName(value){
    //   value === "" ? this.fullname = "" : this.fullname = this.name + " " + value 
    // }
  }
});

app.mount('#events');
