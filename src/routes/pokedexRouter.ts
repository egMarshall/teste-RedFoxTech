import express from "express"
import { PokedexController } from "../controller/PokedexController"

export const pokedexRouter = express.Router()
const pokedexController = new PokedexController()

pokedexRouter.get("/get", pokedexController.getByData)