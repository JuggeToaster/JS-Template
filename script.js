const myString = "Hello, world!";
console.log(myString);


const färger = ["♠", "♥", "♦", "♣"];
const valörer = [
  "Ess",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Knekt",
  "Dam",
  "Kung",
];

// Klass för att skapa spelkort
class Kort {
  constructor(valör, färg) {
    this.valör = valör;
    this.färg = färg;
  }
}

// Klass för stack
class Kortlek {
  constructor() {
    this.stack = [];
  }

  // Lägg ett kort överst i leken
  lägg_till_kort(item) {
    this.stack.push(item);
  }
  // Ta ett kort överst från leken
  dra_kort() {
    let draget_kort = this.stack.pop();
    console.log(`Du drar ${draget_kort.färg} ${draget_kort.valör}`);
    return draget_kort;
  }

  // Visa korten som finns i leken (I ordning)
  visa_lek() {
    this.stack.forEach((kort) => {
      console.log(kort.färg, kort.valör);
    });
  }

  // Visa hur många kort som finns
  visa_längd() {
    console.log(`Kortleken har ${this.stack.length} kort`);
  }

  // Blanda leken
  blanda() {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.stack[i];
      this.stack[i] = this.stack[j];
      this.stack[j] = temp;
    }
  }
}

// 1. Skapa ett kortleks-objekt från klassen Kortlek

// 2. Skapa 52 kort som ni lägger till i erat kortleksobjekt.
//   a) Skapa en for-slinga som med variabeln i itererar genom alla färger.
//   b) Inuti den första for-slingan, skapa en ny for-slinga som med variabeln j itererar
//       genom alla valörer.
//   c) Nu kan ni i den nästlade for-slingan skapa ett nytt kort, och sedan pusha det till
//       kortleks-objektet.
//   d) Efter den nästlade for-slingan, testa att skriva ut alla kort med metoden visa_lek().

// 3. Testa att blanda kortleken med blanda() och visa kortleken igen.
// 4. Skapa en litet spel med en huvudmeny med följande menyval:

// ======================= ♠ ♥ ♦ ♣ ========================
//                        ~ Poker ~
// 1. Blanda Kortlek                     2. Välj fem kort
// 3. Värdera hand                       4. Avsluta
// ========================================================

// Spelet ska låta användaren välja fem kort (Du skapar alltså en kortlek och 'poppar' fem kort)
// Lätt: Värdera hand ska gå igenom de fem korten och meddela om användaren har ett par.
// Medel: Värdera hand ska även kunna märka om användaren har triss eller kåk.
// Svår: Värdera hand ska meddela om användaren har någon giltig pokerhand.
// Här finns olika pokerhänder: https://sv.wikipedia.org/wiki/Pokerhand

Min_kortlek = new Kortlek()

for (let i = 0; i < färger.length; i++) {
    for (let j = 0; j < valörer.length; j++) {
        nytt_kort = new Kort(valörer[j], färger[i] );
        Min_kortlek.lägg_till_kort(nytt_kort);
    }

}

visa_lek(nytt_kort)

let min_lista = [2, 4, 5, 8, 1, 6]

min_lista.forEach( (nummer) => {
  console.log("hej", nummer);
})

console.log(pokerhand)

let count = {
  Ess: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0, 
  Knekt: 0,
  Dam: 0,
  Kung: 0,
}

pokerhand.forEach((kort) => {
  count[kort.valör] = count[kort.valör] + 1;
  if (count[kort.valör] == 2) {
    console.log("Du har ett par i", kort.valör);
  }
});
