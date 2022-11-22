function getrandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// const app = Vue.createApp({})
const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null, //winner is falsy ,when its truthy section children will nt display
      logMessages:[],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    specialAttackAvailable() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "Draw";
      } else if (value <= 0) {
        this.winner = "Monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "Draw";
      } else if (value <= 0) {
        this.winner = "Player";
      }
    },
  },
  methods: {
    startGame() {
        this.monsterHealth= 100,
        this.playerHealth= 100,
        this.currentRound=0,
        this.winner = null,
        this.logMessages=[]
      },
    attackMonster() {
      this.currentRound++;
      const attackValue = getrandom(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player','attack',attackValue)
      // console.log(this.monsterHealth)
      this.attackPlayer();
      // console.log(this.playerHealth)
    },
    attackPlayer() {
      const attackValue = getrandom(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getrandom(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "special-attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getrandom(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner='Monster'
    },
    addLogMessage(who, what,value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue:value
      })
    }
  },
});
app.mount("#game");
