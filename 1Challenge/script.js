import Piggybank from "./Piggybank.js";
import Book from "./Book.js";

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

// Book param order:  title, authorFirstName, authorLastName, ISBN, pubYear, pagesNum, genre, 

const eragon = new Book(
  "Eragon", 
  "Christopher",
  "Paolini",
  1111111111111,
  "2005",
  "800",
  "Fantacy"
);
console.log(eragon);

const eldest = new Book(
  "Eldest", 
  "Christopher",
  "Paolini",
  2222222222222,
  "2008",
  "850",
  "Fantacy"
);
console.log(eldest);

const brisinger = new Book(
  "Brisinger", 
  "Christopher",
  "Paolini",
  3333333333333,
  "2015",
  "900",
  "Fantacy"
);
console.log(brisinger);

const thewormandthewitch = new Book(
  "The Worm and the Witch", 
  "Christopher",
  "Paolini",
  4444444444444,
  "2019",
  "200",
  "Fantacy"
);
console.log(thewormandthewitch);

const acheron = new Book(
  "Acheron", 
  "Sherrilyn",
  "Kenyon",
  5555555555555,
  "2015",
  "1000",
  "Paranormal"
);
console.log(acheron);