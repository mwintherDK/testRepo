// Se her for nyttige git commands: https://github.com/joshnh/Git-Commands
// Lær at anvende ternary, omskriv de tre if/else nedenfor

// 1:
let names = ["Arne", "Balder", "Calle", "Doriiiith", "Einar", "Franke"];

if (names.length > 3) {
  console.log(`Der er ${names.length} navne i dit array!`);
} else {
  console.log(`Det er under fire navne i dit array`);
}
// Asger
console.log(names.length > 3 ? `Der er ${names.length} navne i dit array!` : `Det er under fire navne i dit array`);
//

// Maren

//

// Birk

//

// Nickolai

//

// Nicklas

//

// 2:
let jamie = {
  nick: "Kingslayer",
  name: "Jamie Lannister",
  girlfriend: {
    nick: "Protector of the Realm",
    name: "Cersei Lannister"
  },
  alive: false
};

// Asger

//

// Maren

//

// Birk

//

// Nickolai

//

// Nicklas

//

if (jamie.alive) {
  console.log("Hes alive! Hurrah");
} else {
  console.log("Awww...Jamie is dead");
}

// 3:
let clientWindowWidth = window.innerWidth;
let container = document.querySelector(".container");

if (clientWindowWidth > 1200) {
  container.classList.add("hugeScreen");
} else {
  container.classList.remove("hugeScreen");
}

// Asger

//

// Maren

//

// Birk

//

// Nickolai

//

// Nicklas

//
