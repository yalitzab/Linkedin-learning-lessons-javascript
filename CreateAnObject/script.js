// Create a piggy bank object

const piggybank = {
    name: "Small Piggybank",
    volume: 10, 
    color: "white", 
    coinNum: 150,
    coinSlot: 1, 
    lidOpen: false, 
    toggleLid: function (lidStatus) {
        this.lid = lidStatus;
    },

}