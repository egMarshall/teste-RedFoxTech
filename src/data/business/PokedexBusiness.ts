import { InvalidInputError } from "../../error/InvalidInputError"
import { PokemonInputDTO } from "../../model/Pokemon"
import { PokedexDatabase } from "../PokedexDatabase"

export class PokedexBusiness {
    constructor(
        private PokedexDatabase: PokedexDatabase
    ){}

    async getPokemonByData(input: PokemonInputDTO) {
        if (!input) {
            throw new InvalidInputError("Invalid Input to Get Pokémon Data")
        }

        return await this.PokedexDatabase.getPokemonsByData(input)
    }
}