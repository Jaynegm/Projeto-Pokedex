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



  pokemons: Pokemon[] = [
    new Pokemon({ id: 1, name: 'PIKACHU', type: ['Elétrico'], description: 'Rato elétrico conhecido por sua fofura.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', healthPoints: 35, attackPower: 55, defense: 40, specialDefense: 50, speed: 90, weight: 6, weaknesses: ['Chão'], abilities: ['Estática', 'Raio de Eletricidade'] }),
    new Pokemon({ id: 2, name: 'BULBASAUR', type: ['Grama', 'Veneno'], description: 'Possui uma planta brotando em seu dorso.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', healthPoints: 45, attackPower: 49, defense: 49, specialDefense: 65, speed: 45, weight: 6.9, weaknesses: ['Fogo', 'Psíquico', 'Voo', 'Gelo'], abilities: ['Super Crescimento'] }),
    new Pokemon({ id: 3, name: 'IVYSAUR', type: ['Grama', 'Veneno'], description: 'Possui um botão de flor em sua planta.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png', healthPoints: 60, attackPower: 62, defense: 63, specialDefense: 80, speed: 60, weight: 13, weaknesses: ['Fogo', 'Psíquico', 'Gelo'], abilities: ['Super Crescimento'] }),
    new Pokemon({ id: 4, name: 'CHARMANDER', type: ['Fogo'], description: 'Possui uma chama na ponta da cauda.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png', healthPoints: 39, attackPower: 52, defense: 43, specialDefense: 50, speed: 65, weight: 8.5, weaknesses: ['Água', 'Terra', 'Pedra'], abilities: ['Brasas'] }),
    new Pokemon({ id: 5, name: 'CHARMELEON', type: ['Fogo'], description: 'Sua chama na cauda brilha mais forte.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png', healthPoints: 58, attackPower: 64, defense: 58, specialDefense: 65, speed: 80, weight: 19, weaknesses: ['Água', 'Terra', 'Pedra'], abilities: ['Brasas'] }),
    new Pokemon({ id: 6, name: 'SQUIRTLE', type: ['Água'], description: 'Pode disparar água de seu casco.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', healthPoints: 44, attackPower: 48, defense: 65, specialDefense: 50, speed: 43, weight: 9, weaknesses: ['Elétrico', 'Grama'], abilities: ['Torrente'] }),
    new Pokemon({ id: 7, name: 'CATERPIE', type: ['Inseto'], description: 'Fácil de capturar, mas muito fraco.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png', healthPoints: 45, attackPower: 30, defense: 35, specialDefense: 45, speed: 55, weight: 2.9, weaknesses: ['Fogo', 'Voo', 'Rocha'], abilities: ['Poeira de Escudo'] }),
    new Pokemon({ id: 8, name: 'BUTTERFREE', type: ['Inseto', 'Voo'], description: 'As asas são cobertas por pó brilhante.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png', healthPoints: 60, attackPower: 45, defense: 50, specialDefense: 80, speed: 70, weight: 32, weaknesses: ['Fogo', 'Voo', 'Elétrico', 'Gelo', 'Rocha'], abilities:['Olhos Compostos']}),
    new Pokemon({ id: 9, name: 'PIDGEY', type: ['Normal', 'Voo'], description: 'Um Pokémon pássaro comum.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png', healthPoints: 40, attackPower: 45, defense: 40, specialDefense: 35, speed: 56, weight: 1.8, weaknesses: ['Elétrico', 'Gelo', 'Rocha'], abilities: ['Olho Vivo', 'Pés Embolados']}),
    new Pokemon({ id: 10, name: 'RATTATA', type: ['Normal'], description: 'Um roedor noturno muito rápido.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png', healthPoints: 30, attackPower: 56, defense: 35, specialDefense: 25, speed: 72, weight: 3.5, weaknesses: ['Lutador', 'Inseto'], abilities: ['Fugir', 'Vísceras']}),
    new Pokemon({ id: 11, name: 'NIDOQUEEN', type: ['Veneno', 'Terra'], description: 'A Rainha Venenosa do Nido.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png', healthPoints: 90, attackPower: 82, defense: 87, specialDefense: 76, speed: 75, weight: 60, weaknesses: ['Água', 'Psíquico', 'Gelo', 'Elétrico', 'Terra'], abilities: ['Pontos de Veneno', 'Rivalidade'] }),
    new Pokemon({ id: 12, name: 'BELLSPROUT', type: ['Grama', 'Veneno'], description: 'Usa seu aroma para atrair presas.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png', healthPoints: 50, attackPower: 75, defense: 35, specialDefense: 70, speed: 40, weight: 4, weaknesses: ['Fogo', 'Voo', 'Gelo', 'Psíquico'], abilities: ['Clorofila'] }),
    new Pokemon({ id: 13, name: 'DROWZEE', type: ['Psíquico'], description: 'Induz o sono com ondas cerebrais.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png', healthPoints: 60, attackPower: 48, defense: 45, specialDefense: 42, speed: 42, weight: 32.4, weaknesses: ['Fantasmas', 'Sombrio'], abilities: ['Insônia', 'Presságio'] }),
    new Pokemon({ id: 14, name: 'PARAS', type: ['Inseto', 'Grama'], description: 'Usa seus esporos para controlar outros Pokémon e atacar.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png', healthPoints: 100, attackPower: 35, defense: 70, specialDefense: 55, speed: 80, weight: 5.4, weaknesses: ['Fogo', 'Voo', 'Pedra'], abilities: ['Efeito Esporo', 'Pelego Seco', 'Umidade'] }),
    new Pokemon({ id: 15, name: 'NINETALES', type: ['Fogo'], description: 'Tem a capacidade de criar e controlar o fogo com sua cauda.', photo: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png', healthPoints: 100, attackPower: 50, defense: 45, specialDefense: 75, speed: 75, weight: 19.9, weaknesses: ['Água', 'Terra', 'Rocha'], abilities: ['Fogo Flash', 'Seca', 'Alerta de Neve'] })

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