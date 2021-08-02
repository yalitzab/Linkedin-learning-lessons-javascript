class Piggybank{
    constructor(
    name,
    volume,
    color,
    coinNum,
    coinSlot,
    lidOpen,
    dateAcquired
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.coinNum = coinNum;
    this.coinSlot = coinSlot;
    this.lidOpen = lidOpen;
    // this.toggleLid = function (lidStatus) {
    //   this.lidOpen = lidStatus;
    // };
    this.dateAcquired = dateAcquired;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  piggybankAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
  }
  export default Piggybank;