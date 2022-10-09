//Array of pokemon data categorized by number, name, and type
let pokeList = [
  {
    pokeNum: "001",
    name: "Bulbasaur",
    type: "Grass/Poison ",
    Stage: "1 ",
    Move: "Sludge Bomb",
  },
  {
    pokeNum: "002",
    name: "Ivysaur",
    type: "Grass/Poison ",
    Stage: "2 ",
    Move: "Sludge Bomb",
  },
  {
    pokeNum: "003",
    name: "Venusaur",
    type: "Grass/Poison ",
    Stage: "3 ",
    Move: "Sludge Bomb",
  },
  {
    pokeNum: "004",
    name: "Charmander",
    type: "Fire ",
    Stage: "1 ",
    Move: "Flame Burst",
  },
  {
    pokeNum: "005",
    name: "Charmeleon",
    type: "Fire ",
    Stage: "2 ",
    Move: "Flame Burst",
  },
  {
    pokeNum: "006",
    name: "Charizard",
    type: "Fire/Flying ",
    Stage: "3 ",
    Move: "Fire Blast",
  },
  {
    pokeNum: "007",
    name: "Squirtle",
    type: "Water ",
    Stage: "1 ",
    Move: "Aqua Jet",
  },
  {
    pokeNum: "008",
    name: "Wartortle",
    type: "Water ",
    Stage: "2 ",
    Move: "Aqua Jet",
  },
  {
    pokeNum: "009",
    name: "Blastoise",
    type: "Water ",
    Stage: "3 ",
    Move: "Ice Beam",
  },
  {
    pokeNum: "010",
    name: "Caterpie",
    type: "Bug ",
    Stage: "1 ",
    Move: "Struggle",
  },
  {
    pokeNum: "011",
    name: "Metapod",
    type: "Bug ",
    Stage: "2 ",
    Move: "Struggle",
  },
  {
    pokeNum: "012",
    name: "Butterfree",
    type: "Bug/Flying ",
    Stage: "3 ",
    Move: "Psychic",
  },
  {
    pokeNum: "013",
    name: "Weedle",
    type: "Bug/Poison ",
    Stage: "1 ",
    Move: "Struggle",
  },
  {
    pokeNum: "014",
    name: "Kakuna",
    type: "Bug/Poison ",
    Stage: "2 ",
    Move: "Struggle",
  },
  {
    pokeNum: "015",
    name: "Beedrill",
    type: "Bug/Poison ",
    Stage: "3 ",
    Move: "Aerial Ace",
  },
  {
    pokeNum: "016",
    name: "Pidgey",
    type: "Normal/Flying ",
    Stage: "1 ",
    Move: "Twister",
  },
  {
    pokeNum: "017",
    name: "Pidgeotto",
    type: "Normal/Flying ",
    Stage: "2 ",
    Move: "Twister",
  },
  {
    pokeNum: "018",
    name: "Pidgeot",
    type: "Normal/Flying ",
    Stage: "3 ",
    Move: "Hurricane",
  },
  {
    pokeNum: "019",
    name: "Rattata",
    type: "Normal ",
    Stage: "1 ",
    Move: "Dig",
  },
  {
    pokeNum: "020",
    name: "Raticate",
    type: "Normal ",
    Stage: "2 ",
    Move: "Dig",
  },
];

//Add Array of Pokemon Images to add with List Items for Dynamic Search Results
let pokeImages = [19];
pokeImages[0] = "images/1.png";
pokeImages[1] = "images/2.png";
pokeImages[2] = "images/3.png";
pokeImages[3] = "images/4.png";
pokeImages[4] = "images/5.png";
pokeImages[5] = "images/6.png";
pokeImages[6] = "images/7.png";
pokeImages[7] = "images/8.png";
pokeImages[8] = "images/9.png";
pokeImages[9] = "images/10.png";
pokeImages[10] = "images/11.png";
pokeImages[11] = "images/12.png";
pokeImages[12] = "images/13.png";
pokeImages[13] = "images/14.png";
pokeImages[14] = "images/15.png";
pokeImages[15] = "images/16.png";
pokeImages[16] = "images/17.png";
pokeImages[17] = "images/18.png";
pokeImages[18] = "images/19.png";
pokeImages[19] = "images/20.png";

//Limit Input Range for Index Search
document.getElementById("indexSearch").oninput = function () {
  //Change Input Value upon exceeding specified range
  let currentValue = parseInt(this.value);
  if (currentValue < 1) this.value = 1;
  if (currentValue > 20) this.value = 20;
};

//Dynamic Search Results
const ul = document.createElement("ul");
ul.setAttribute("class", "results-list");
ul.setAttribute("id", "unorderedList");

document.getElementById("divBlock").appendChild(ul);

//Loop through array and add respective pokemon dynamically
for (x = 0; x < pokeList.length; x++) {
  var li = document.createElement("li");
  li.setAttribute("class", "results-list-item");

  var img = document.createElement("img");
  img.setAttribute("width", "150");
  img.setAttribute("height", "150");
  img["src"] = pokeImages[x];

  ul.appendChild(li);
  li.appendChild(img);
  li.appendChild(document.createElement("br")); //Break after image tag
  li.style.display = "none"; //Hide pokemon until necessary for result

  //Format Pokemon Descriptions
  itemText = [
    pokeList[x].pokeNum.toString(),
    pokeList[x].name,
    pokeList[x].type,
    "Evolution Stage: " + pokeList[x].Stage,
    "Move: " + pokeList[x].Move,
  ];

  //Format Line Spacing
  for (i = 0; i < itemText.length; i++) {
    li.appendChild(document.createTextNode(itemText[i]));
    li.appendChild(document.createElement("br"));
  }
}
//Dynamic Search Filter by Name
function dynamicSearchName() {
  var input, filter, ul, li, a, x, textValue;
  input = document.getElementById("nameSearch");
  filter = input.value.toLowerCase();
  ul = document.getElementById("unorderedList");
  li = ul.getElementsByTagName("li");

  if (input.value.length === 0) {
    ul.style.display = "none"; //No Results if Input is Empty
  } else {
    ul.style.display = "";
    for (x = 0; x < li.length; x++) {
      textValue = pokeList[x].name;
      //Show Pokemon if matching characters
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        li[x].style.display = "";
        //Hide Pokemon if no matching characters
      } else {
        li[x].style.display = "none";
      }
    }
  }
}
//Dynamic Search Filter by Index
function dynamicSearchIndex() {
  var input, filter, ul, li, a, x, textValue;
  input = document.getElementById("indexSearch");
  filter = input.value.toLowerCase();
  ul = document.getElementById("unorderedList");
  li = ul.getElementsByTagName("li");

  if (input.value.length === 0) { //No Results if Input is Empty
    ul.style.display = "none";
  } else {
    ul.style.display = "";
    for (x = 0; x < li.length; x++) {
      textValue = pokeList[x].pokeNum;
      //Show pokemon if matching numbers
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        li[x].style.display = "";
        //Hide pokemon if no matching numbers
      } else {
        li[x].style.display = "none";
      }
    }
  }
}
