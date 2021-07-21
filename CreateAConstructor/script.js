/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

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
  this.toggleLid = function (lidStatus) {
    this.lidOpen = lidStatus;
  };
}
piggybankAge() {
  let now = new Date();
  let acquired = new Date(this.dateAcquired);
  let elapsed = now - acquired; // elapsed time in milliseconds
  let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
  return daysSinceAcquired;
}
}
const smallPiggybank = new Piggybank(
  "Small Piggybank",
  10,
  "white",
  150,
  1,
  false
);
