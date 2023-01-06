const app = Vue.createApp({
    data(){
        return{
            name: '',
            name2: '',
            confirmedName: ''
        }
    },
    methods: {
        alertFunction(){
            alert('Button Alert Clicked')
        },
        inputFunction(event){
            this.name = event.target.value;
        },
        inputFunction2(event){
            this.name2 = event.target.value;
        },
        inputConfirmedEvent(){
            this.confirmedName = this.name2
        }
    }
})

app.mount('#assignment')