//Array of pokemon data categorized by number, name, and type
let pokeList = [
    {pokeNum:1,     name:'bulbasoar',     type:"Grass/Poison"},
    {pokeNum:2,     name:"Ivysaur",       type:"Grass/Poison"},
    {pokeNum:3,     name:"Venusaur",      type:"Grass/Poison"},
    {pokeNum:4,     name:"Charmander",    type:"Fire"},
    {pokeNum:5,     name:"Charmeleon",    type:"Fire"},
    {pokeNum:6,     name:"Charizard",     type:"Fire/Flying"},
    {pokeNum:7,     name:"Squirtle",      type:"Water"},
    {pokeNum:8,     name:"Wartortle",     type:"Water"},
    {pokeNum:9,     name:"Blastoise",     type:"Water"},
    {pokeNum:10,    name:"Caterpie",      type:"Bug"},
    {pokeNum:11,    name:"Metapod",       type:"Bug"},
    {pokeNum:12,    name:"Butterfree",    type:"Bug/Flying"},
    {pokeNum:13,    name:"Weedle",        type:"Bug/Poison"},
    {pokeNum:14,    name:"Kakuna",        type:"Bug/Poison"},
    {pokeNum:15,    name:"Beedrill",      type:"Bug/Poison"},
    {pokeNum:16,    name:"Pidgey",        type:"Normal/Flying"},
    {pokeNum:17,    name:"Pidgeotto",     type:"Normal/Flying"},
    {pokeNum:18,    name:"Pidgeot",       type:"Normal/Flying"},
    {pokeNum:19,    name:"Rattata",       type:"Normal"},
    {pokeNum:20,    name:"Raticate",      type:"Normal"}
]

//Event Handler to search upon enter keypress
function handle(e){
    if(e.keyCode === 13){ //13 is "Enter" key
        searchPokemonByName(); //Function Call
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

