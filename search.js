//Array of pokemon data categorized by number, name, and type
let pokeList = [
    {pokeNum:1,     name:'Bulbasaur',     type:"Grass/Poison ",      Stage:"1 ",     Move:"Sludge Bomb"},
    {pokeNum:2,     name:"Ivysaur",       type:"Grass/Poison ",      Stage:"2 ",     Move:"Sludge Bomb"},
    {pokeNum:3,     name:"Venusaur",      type:"Grass/Poison ",      Stage:"3 ",     Move:"Sludge Bomb"},
    {pokeNum:4,     name:"Charmander",    type:"Fire ",              Stage:"1 ",     Move:"Flame Burst"},
    {pokeNum:5,     name:"Charmeleon",    type:"Fire ",              Stage:"2 ",     Move:"Flame Burst"},
    {pokeNum:6,     name:"Charizard",     type:"Fire/Flying ",       Stage:"3 ",     Move:"Fire Blast"},
    {pokeNum:7,     name:"Squirtle",      type:"Water ",             Stage:"1 ",     Move:"Aqua Jet"},
    {pokeNum:8,     name:"Wartortle",     type:"Water ",             Stage:"2 ",     Move:"Aqua Jet"},
    {pokeNum:9,     name:"Blastoise",     type:"Water ",             Stage:"3 ",     Move:"Ice Beam"},
    {pokeNum:10,    name:"Caterpie",      type:"Bug ",               Stage:"1 ",     Move:"Struggle"},
    {pokeNum:11,    name:"Metapod",       type:"Bug ",               Stage:"2 ",     Move:"Struggle"},
    {pokeNum:12,    name:"Butterfree",    type:"Bug/Flying ",        Stage:"3 ",     Move:"Psychic"},
    {pokeNum:13,    name:"Weedle",        type:"Bug/Poison ",        Stage:"1 ",     Move:"Struggle"},
    {pokeNum:14,    name:"Kakuna",        type:"Bug/Poison ",        Stage:"2 ",     Move:"Struggle"},
    {pokeNum:15,    name:"Beedrill",      type:"Bug/Poison ",        Stage:"3 ",     Move:"Aerial Ace"},
    {pokeNum:16,    name:"Pidgey",        type:"Normal/Flying ",     Stage:"1 ",     Move:"Twister"},
    {pokeNum:17,    name:"Pidgeotto",     type:"Normal/Flying ",     Stage:"2 ",     Move:"Twister"},
    {pokeNum:18,    name:"Pidgeot",       type:"Normal/Flying ",     Stage:"3 ",     Move:"Hurricane"},
    {pokeNum:19,    name:"Rattata",       type:"Normal ",            Stage:"1 ",     Move:"Dig"},
    {pokeNum:20,    name:"Raticate",      type:"Normal ",            Stage:"2 ",     Move:"Dig"}
]

//Event Handler to search by name upon enter keypress
function handleNameSearch(e){
    if(e.keyCode === 13){ //13 is "Enter" key
        searchPokemonByName(); //Function Call for Name Search
    }
    return false;
}

//Event Handler to search by index upon enter keypress
function handleIndexSearch(e){
    if(e.keyCode === 13){ //Enter key press
        searchPokemonByIndex(); //Function call for Index Search
    }
    return false;
}

//Function to search for pokemon based on name
function searchPokemonByName() {

    let input = document.getElementById('nameSearch').value; //Search Bar Input
    console.log(input); //Test Input Values
    let searchOutput = null; //Placeholder variable for search result

    //Loop through pokelist by name, check for congruency
    for(x = 0; x < pokeList.length; x++){
        if(pokeList[x].name.toLowerCase() === input.toLowerCase()){ //Lowercase String Comparator w/ stored data and user input
            searchOutput = JSON.stringify(pokeList[x]); //If exists, define variable to desired pokemon data
            break;
        }else{
            searchOutput = "Pokemon Not Found. Try Again"; //If doesn't exist, define variable to error message
        }
    }
    alert(searchOutput); //Output search result
    location.reload(); //Reload webpage upon exiting alert
}

function searchPokemonByIndex(){

    let input = parseInt(document.getElementById('indexSearch').value); //Search Bar Input
    console.log(input); //Test Input Values
    
    let searchOutput = JSON.stringify(pokeList[input - 1]); //Match desired input to pokeList Index

    alert(searchOutput); //Output Search Result
    location.reload(); //Reload webpage upon exiting alert
}

//Limit Input Range for Index Search
document.getElementById('indexSearch').oninput = 
function(){
    //Change Input Value upon exceeding specified range
    let currentValue = parseInt(this.value);
    if(currentValue < 1) this.value = 1;
    if(currentValue > 20) this.value = 20;
}

//Test Changes for Lab 2 Branch
const para = document.createElement('p');
const node = document.createTextNode("This is new test.")
para.appendChild(node);
const htmlElement = document.getElementById("p1");
htmlElement.appendChild(para);