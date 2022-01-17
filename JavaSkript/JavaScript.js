let div = document.querySelector('.PokeDiv')
class Pokemon {
    constructor(name, photo, hp, hunger, hygiene, depression, element) {
        this.name = name;
        this.photo = photo;
        this.hp = hp;
        this.hunger = hunger;
        this.hygiene = hygiene;
        this.depression = depression;
        this.element = element
        
    }

      /*setInterval(function() {              //Не работает
            this.hp += 5;
        }, 2000) */                                                           
      

   dataPokemon() {
    console.log(this.hunger)
    let df = this.element.cloneNode(true);
    console.log(this.element)
    df.querySelector('.PokeName').innerHTML = this.name;
    df.querySelector('.PokePhoto').innerHTML = `<img src="${this.photo}">`;
    df.querySelector('.PokeHunger').innerHTML = "Голод: " + this.hunger + "%";
    df.querySelector('.PokeHygiene').innerHTML = "Гигиена: " + this.hygiene + "%";
    df.querySelector('.PokeDepression').innerHTML = "Депрессия: " + this.depression + "%";

    div = df

    let lessHunger = Math.round(Math.random() * 3 + 1);
    let lessHygiene = Math.round(Math.random() * 2 + 1);
    let lessDepression = Math.round(Math.random() * 1 + 1);

    let Countdown = setInterval(() => {
        
        if (this.hp <= 99) {
        this.hp += 1;
        df.querySelector('.PokeHP').innerHTML = this.hp + "%";
        }
        
        //Условия уменьшение HP
        if (this.hunger <= 15) {
            this.hp -= 5;
            df.querySelector('.PokeHP').innerHTML = this.hp + "%";
            }

        if (this.hunger <= 15) {
            this.hp -= 2;
            df.querySelector('.PokeHP').innerHTML = this.hp + "%";
            }

        if (this.depression <= 55) {
            this.hp -= 2;
            df.querySelector('.PokeHP').innerHTML = this.hp + "%";
            }

            
        if (this.hunger >= 1) {
            this.hunger -= lessHunger;
        } else {this.hunger = 0}
        
        if (this.hygiene >= 1) {
            this.hygiene -= lessHygiene;
        } else {this.hygiene = 0}

        if (this.depression >= 1) {
            this.depression -= lessDepression;
        } else {this.depression = 0}
        df.querySelector('.PokeHunger').innerHTML = "Голод: " + this.hunger + "%"; 
        df.querySelector('.PokeHygiene').innerHTML = "Гигиена: " + this.hygiene + "%";
        df.querySelector('.PokeDepression').innerHTML = "Депрессия: " + this.depression + "%";

        if (this.hp <= 0) {
            this.hp = 0;
            df.querySelector('.PokeHP').innerHTML = this.hp + "%";
            clearInterval(Countdown);
          }
      }, 3000)
      
      //Увеличение показателей
      df.querySelector('.HungerUP').addEventListener('click', () => {
          if (this.hunger <= 95) {
          this.hunger += 10;
          df.querySelector('.PokeHunger').innerHTML = "Голод: " + this.hunger + "%";}
      });
      df.querySelector('.HygieneUP').addEventListener('click', () => {
        if (this.hygiene <= 95) {
        this.hygiene += 10;
        df.querySelector('.PokeHygiene').innerHTML = "Гигиена: " + this.hygiene + "%";}
    });
      df.querySelector('.DepressionUP').addEventListener('click', () => {
        if (this.depression <= 95) {
            this.depression += 10;
            df.querySelector('.PokeDepression').innerHTML = "Депрессия: " + this.depression + "%";}
      });
      
   }
}


let NewPokemon;

function callPokemon() {  
    let Pokemonindex = Math.round(Math.random() * 11);
    NewPokemon = new Pokemon(arrPokemons[Pokemonindex].name, arrPokemons[Pokemonindex].photo, arrPokemons[Pokemonindex].hp, arrPokemons[Pokemonindex].hunger, arrPokemons[Pokemonindex].hygiene, arrPokemons[Pokemonindex].depression, div);
    console.log(NewPokemon.hunger)
    return NewPokemon
}


let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    callPokemon()
    NewPokemon.dataPokemon()
    document.querySelector('.outPoke2').append(div);
 
})

