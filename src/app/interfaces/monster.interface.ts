export interface Monster {
    monsterId: string;
    name: Name;
    japaneseName: null | string;
    elementalAffinity: null | string;
    elementalWeakness: null | string;
    hitPoints: number;
    manaPoints: number;
    attack: number;
    defense: number;
    picture: string;
    description: null | string;
    game: string;
}

export enum Name {
    Antlion = "Antlion",
    Behemoth = "Behemoth",
    Chocobo = "Chocobo",
}