import { Character } from "./character.model";

export interface ListCharacters {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    },
    results: Character[];
}