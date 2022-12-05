const app = Vue.createApp({
    data() {
        return {
            name: 'Bruno da Rosa Faller',
            age: 30,
            image: "https://i.pinimg.com/474x/03/52/28/0352284d077d08a1c70af3b992de5d83.jpg"
        };
    },
    methods: {
        outPutFavoriteNumber() {
            return Math.random();
        },
        outputBirthdayIn5Years() {
            return this.age +5
        }
    },
});
app.mount('#assignment');