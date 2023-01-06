function atk(min, max) {
    console.log(min, max)
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({

    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        monsterAtk(min = 0, max = 15) {
            this.currentRound++;
            damage = atk(min, max);
            this.playerHealth -= damage;
            this.addLogMessage('monster', 'atk', damage);
        },
        playerAtk() {
            this.monsterAtk(0, 15)
            damage = atk(0 , 10);
            this.monsterHealth -= damage;
            this.addLogMessage('player', 'atk', damage);
        },
        specialAtk() {
            this.currentRound++;
            damage = atk(5, 15);
            this.monsterHealth -= damage;
            this.addLogMessage('player', 'SpAtk', damage);
            this.count = 0;
        },
        healPlayer() {
            const healValue = atk(0, 20)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'Heal', healValue);
            this.monsterAtk()
        },
        disabledSPATK() {
            return this.count % 3 !== 0
        },
        surrender() {
            this.winner = 'Monster';
        },
        addLogMessage(who, what, value) {
            //add no inicio do array
            this.logMessages.unshift(
                {
                    actionBy: who, 
                    actionType: what,  
                    actionValue: value
                }
            );
        }
    },

    computed: {
        monsterHealthBarStyle() {
            if (this.monsterHealth <= 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' };
        },
        playerHealthBarStyle() {
            if (this.playerHealth <= 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' };
        },
        canUseSpecialAtk() {
            return this.currentRound % 3 !== 0;
        }
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'Monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'Player';
            }
        },
    }

});

app.mount('#game');