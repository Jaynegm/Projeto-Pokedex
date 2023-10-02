import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pokedex';
  logo = "https://1000marcas.net/wp-content/uploads/2020/01/Pok%C3%A9mon.jpg";
  imgProfile: string = "https://static.vecteezy.com/ti/vetor-gratis/p1/5005840-user-icon-in-trendy-flat-style-isolated-on-gray-background-user-symbol-for-your-web-site-design-logo-app-ui-vector-illustration-eps10-gratis-vetor.jpg";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];


  pokemons: Pokemon[] = [
    new Pokemon(1, 'PIKACHU', ['Elétrico'],'Rato elétrico conhecido por sua fofura.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',35,55,40,50,90,6.0, ['Chão'],['Static', 'Lightning Rod']),
    new Pokemon(2, 'BULBASAUR',  ['Grama', 'Veneno'],'Possui uma planta brotando em seu dorso.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',45,49,49,65,45,6.9,['Fogo', 'Psíquico', 'Voo', 'Gelo'],['Overgrow']),
    new Pokemon(3, 'IVYSAUR', ['Grama','Veneno'],'Possui um botão de flor em sua planta.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',60,62,63,80,60,13.0,['Fogo', 'Psíquico', 'Gelo'],['Overgrow']),
    new Pokemon(4, 'CHARMANDER', ['Fogo'], 'Possui uma chama na ponta da cauda.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',39, 52,43,50,65,8.5,['Água', 'Terra', 'Pedra'],['Blaze']),
    new Pokemon(5, 'CHARMELEON', ['Fogo'],'Sua chama na cauda brilha mais forte.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',58,64,58,65,80,19.0,['Água', 'Terra', 'Pedra'],['Blaze']),
    new Pokemon(6, 'SQUIRTLE', ['Água'],'Pode disparar água de seu casco.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',44,48,65,50,43,9.0,['Elétrico', 'Grama'],['Torrent']),
    new Pokemon(7, 'CATERPIE', ['Inseto'],'Fácil de capturar, mas muito fraco.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',45,30,35,45,55,2.9,['Fogo', 'Voo', 'Rocha'],['Shield Dust']),
    new Pokemon(8, 'BUTTERFREE', ['Inseto', 'Voo'],'As asas são cobertas por pó brilhante.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',60,45,50,80,70,32.0,['Fogo', 'Voo', 'Elétrico', 'Gelo', 'Rocha'],['Compound Eyes']),
    new Pokemon(9, 'PIDGEY', ['Normal', 'Voo'],'Um Pokémon pássaro comum.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',40,45,40,35,56,1.8,['Elétrico', 'Gelo', 'Rocha'],['Keen Eye', 'Tangled Feet']),
    new Pokemon(10, 'RATTATA', ['Normal'],'Um roedor noturno muito rápido.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',30,56,35,25,72,3.5,['Lutador', 'Inseto'],['Run Away', 'Guts']),
    new Pokemon(11, 'NIDOQUEEN', ['Veneno', 'Terra'],'A Rainha Venenosa do Nido.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',90,82,87,76,75,60.0,['Água', 'Psíquico', 'Gelo', 'Elétrico', 'Terra'],['Poison Point', 'Rivalry']),
    new Pokemon(12, 'BELLSPROUT', ['Grama', 'Veneno'],'Usa seu aroma para atrair presas.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',50,75,35,70,40,4.0,['Fogo', 'Voo', 'Gelo', 'Psíquico'],['Chlorophyll']),
    new Pokemon(13, 'DROWZEE',['Psíquico'],'Induz o sono com ondas cerebrais.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png',60,48,45,42,42,32.4,['Fantasma', 'Sombrio'],['Insomnia', 'Forewarn']),
    new Pokemon(14,'PARAS',['Inseto', 'Grama'],'Usa seus esporos para controlar outros Pokémon e atacar.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',100,35,70,55,80,5.4,['Fogo', 'Voo', 'Pedra'], ['Effect Spore', 'Dry Skin', 'Damp']),
    new Pokemon(15,'NINETALES',['Fogo'],'Tem a capacidade de criar e controlar o fogo com sua cauda.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',100,50,45,75,75,19.9,['Água', 'Terra', 'Rocha'], ['Flash Fire', 'Drought', 'Snow Warning'])

    ];
    

    selectedPokemon?: Pokemon;

    showDetails(pokemon: Pokemon){
      this.selectedPokemon = pokemon;
    }
    closeModal(){
      this.selectedPokemon = undefined;
    }

    filterValue: string = '';
    filteredPokemons(): Pokemon[]{
      if (!this.filterValue){
        return this.pokemons;
      }
      return this.pokemons.filter (pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
    }
  }
