import Piggybank from "./Piggybank.js";
import Book from "./Book";

const smallPiggybank = new Piggybank(
    "Small Piggybank",
    10,
    "white",
    150,
    1,
    false,
    "December 5, 2018 15:00:00 PST"
  );

console.log("The piggybank object:", piggybank);
console.log("The coinNum value:", piggybank.coinNum);
console.log("Days since aquired:", piggybank.piggybankAge());