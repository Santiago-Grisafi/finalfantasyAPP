export interface Character {
    id: string;
    name: string;
    japaneseName: null | string;
    age: string;
    gender: Gender;
    race: string;
    job: string;
    height: null | string;
    weight: string;
    origin: Origin;
    description: null | string;
    pictures: Picture[];
    stats: Stat[];
}

export enum Gender {
    Androgynous = "Androgynous",
    Empty = "??",
    Female = "Female",
    Male = "Male",
}

export enum Origin {
    FinalFantasy = "Final Fantasy",
    FinalFantasyBE = "Final Fantasy BE",
    FinalFantasyII = "Final Fantasy II",
    FinalFantasyIII = "Final Fantasy III",
    FinalFantasyIV = "Final Fantasy IV",
    FinalFantasyIX = "Final Fantasy IX",
    FinalFantasyV = "Final Fantasy V",
    FinalFantasyVI = "Final Fantasy VI",
    FinalFantasyVII = "Final Fantasy VII",
    FinalFantasyVIII = "Final Fantasy VIII",
    FinalFantasyX = "Final Fantasy X",
    FinalFantasyX2 = "Final Fantasy X-2",
    FinalFantasyXII = "Final Fantasy XII",
    FinalFantasyXIII = "Final Fantasy XIII",
    FinalFantasyXIII2 = "Final Fantasy XIII-2",
    FinalFantasyXV = "Final Fantasy XV",
}

export interface Picture {
    id: string;
    url: string;
    primary: number;
    collectionId: string;
}

export interface Stat {
    id: string;
    platform: string;
    level: number;
    class: string;
    hitPoints: number;
    manaPoints: number;
    attack: number;
    defense: number;
    magic: number;
    magicDefense: number;
    agility: number;
    spirit: number;
    collectionId: string;
}