
class Pokemon {
    constructor() {
        this.name = "имя";
        this.photo = "Картинка";
        this.hp = 1000;
        this.hunger = "80";
        this.hygiene = "100";
        this.depression = "200";

    }
    ozb() {
        let blockPoke = document.querySelector('.PokeDiv');
        let out = document.querySelector('.outPoke');
        
        out.innerHTML += "Новый Покемон";
        out.append(blockPoke);
        console.log(out)
        //blokPoke.innerHTML += newPoke;
        let PokeName = document.querySelector('.PokeName');
        PokeName.innerHTML = "Имя: " + this.name;
        let PokePhoto = document.querySelector('.PokePhoto');
        PokePhoto.innerHTML = this.photo;
        let PokeHP = document.querySelector('.PokeHP');
        PokeHP.innerHTML = "HP: " + this.hp;
        let PokeHunger = document.querySelector('.PokeHunger');
        PokeHunger.innerHTML = "Голод: " + this.hunger;
        let PokeHygiene = document.querySelector('.PokeHygiene');
        PokeHygiene.innerHTML = "Гигиена: " + this.hygiene;
        let PokeDepression = document.querySelector('.PokeDepression');
        PokeDepression.innerHTML = "Депрессия: " + this.depression;
    }
}

/*let arrPokemon = [
    new Pokemon("имя")
];*/
/*function createPokemon() {
    console.log()
}*/

const asd = new Pokemon();

function callPokemon() {  
    asd.ozb();
}
