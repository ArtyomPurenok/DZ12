
class Pokemon {
    constructor() {
        this.name = "Покемон";
        this.photo = "Картинка";
        this.hp = 1000;
        this.hunger = "80";
        this.hygiene = "100";
        this.depression = "200";

    }
    ozb() {
        let blockPoke = document.querySelector('.PokeDiv');
        let out = document.querySelector('.outPoke');
        
        out.innerHTML += "<hr>";
        out.append(blockPoke);
        console.log(out)
        //blokPoke.innerHTML += newPoke;
    }
    rondomPhoto() {
        let numPhoto = Math.round(Math.random() * 5);
        console.log(numPhoto)
        var arrPhoto = [];
        let divImg = document.querySelector('.divImg');
        [...divImg.getElementsByTagName('img')].map((e,i)=>
        arrPhoto.push(e.src)
        );
        console.log(arrPhoto[1])
        document.querySelector('.PokePhoto').innerHTML = `<img src="${arrPhoto[numPhoto]}">`;
        }
    argumentPokemon() {
        let PokeName = document.querySelector('.PokeName');
        PokeName.innerHTML = "Имя: " + this.name;
        //let PokePhoto = document.querySelector('.PokePhoto');
        //PokePhoto.innerHTML = `<img src="${arrPhoto[numPhoto]}">`;
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


const asd = new Pokemon();

function callPokemon() {  
    asd.ozb();
    asd.rondomPhoto();
    asd.argumentPokemon();
}


