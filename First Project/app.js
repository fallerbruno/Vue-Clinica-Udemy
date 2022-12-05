Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemElement = document.createElement('li');
//     listItemElement.textContent = enteredValue;
//     listEl.append(listItemElement);
//     inputEl.value = "";
// }

// buttonEl.addEventListener('click', addGoal );

