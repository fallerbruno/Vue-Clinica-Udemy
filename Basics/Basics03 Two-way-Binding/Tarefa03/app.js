const app = Vue.createApp({
    data(){
        return{
            counter: 0
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
          },
    },
    watch:{
        result(){
            const that = this;
            setTimeout(() => {
                that.counter = 0;
            }, 5000);
        }
    },
    computed: {
        //faz as logicas de retorno
        result(){
            console.log('watching...')
            if(this.counter < 37){
                return "not there yet";
            }else if( this.number === 37){
                return this.number;
            }else{
                return "TOO MUCH!!";
            }
        }
    }
})

app.mount('#assignment')