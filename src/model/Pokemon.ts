export interface PokemonInputDTO {
    column: POKEMON_COLUMN,
    data: string | number,
    sort?: POKEMON_COLUMN | undefined,
    order?: POKEMON_ORDER | undefined,
    page?: number,
    size?: number
}

export enum POKEMON_ORDER {
    DESC = "DESC",
    ASC = "ASC"
}

export enum POKEMON_COLUMN {
    ID =  "id",
    NAME = "name",
    POKEDEX_NUMBER = "pokedex_number",
    IMG_NAME = "img_name",
    GENERATION = "generation",
    EVOLUTION_STAGE = "evolution_stage",
    EVOLVED = "evolved",
    FAMILY_ID = "family_id",
    CROSS_GEN = "cross_gen",
    TYPE_1 = "type_1",
    TYPE_2 = "type_2",
    WEATHER_1 = "weather_1",
    WHEATHER_2 = "weather_2",
    STAT_TOTAL = "stat_total",
    ATK = "atk",
    DEF = "def",
    STA = "sta",
    LEGENDARY = "legendary",
    AQUIREABLE = "aquireable",
    SPAWNS = "spawns",
    REGIONAL = "regional",
    RAIDABLE = "raidable",
    HATCHABLE = "hatchable",
    SHINY = "shiny",
    NEST = "nest",
    NEW = "new",
    NOT_GETTABLE = "not_gettable",
    FUTURE_EVOLVE = "future_evolve",
    CP_40 = "100%cp@40",
    CP_39 = "100%cp@39"
}