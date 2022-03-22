import { PokemonInputDTO } from "../model/Pokemon"
import { BaseDatabase } from "./BaseDatabase"

export class PokedexDatabase extends BaseDatabase {
    public async getPokemonsByData (
        input: PokemonInputDTO
    ) {
        try {
            let sort = "name"
            if(input.sort !== undefined) {
                sort = input.sort
            }

            let order = "DESC"
            if (input.order !== undefined) {
                order = input.order
            }

            let page = 1
            if (input.page) {
                page = input.page
            }

            let size = 10
            if (input.size) {
                size = input.size
            }

            const result = await this.getConnection()
                .where(input.column, "LIKE", `%${input.data}%`)
                .limit(size)
                .offset(size * (page -1))
                .from(this.tableNames.pokedex)

            return result
            
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}