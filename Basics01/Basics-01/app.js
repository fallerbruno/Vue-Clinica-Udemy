//instancia o Vue
const app = Vue.createApp({
    //configuracao da minupulacao dos dados
    data() {
        return {
            //pode iniciarlizar qualquer coisa que queira utlizar
            //por exemplom vetores, string, etc...
            courseGoalA: ' Finish the course and learn Vue  ',
            courseGoalB: ' Master Vue and build amazin apps! ',

            vueLink: 'https://vuejs.org/guide/quick-start.html'
        };
    },
    // methods permite criar funncoes que serao executadas quando chamadas
    methods: {
        //define a funcao que vai ser executada
        outputGoal() {
             const randomNumber = Math.random();

            // if (randomNumber < 0.5) {
            //     return 'Learn Vue';
            // }
            //     return 'Master Vue!';

            //se utuliza o this para acessar os dados do data
            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
});
//diz pro vue qual parte do HTML ele deve controlar
app.mount('#user-goal');