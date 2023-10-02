export class Pokemon {
    id: number;
    name: string;
    type: string[];
    description: string;
    photo: string;
    healthPoints: number;
    attackPower: number;
    defense: number;
    specialDefense: number;
    speed: number;
    weight: number;
    weaknesses: string[];
    abilities: string[];

    constructor( 
    id: number,
    name: string,
    type: string[],
    description: string,
    photo: string,
    healthPoints: number,
    attackPower: number,
    defense: number,
    specialDefense: number,
    speed: number,
    weight: number,
    weaknesses: string[],
abilities: string[]
      ) {

        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.photo = photo;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.defense = defense;
        this.specialDefense = specialDefense;
        this.speed = speed;
        this.weight = weight;
        this.weaknesses = weaknesses;
        this.abilities = abilities;
    }
}
