import express, { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import axios from "axios"
import {BASE_URL} from "./constants/BaseUrl"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 3003, () => {
    console.log("Rodando na porta 3003")
})

app.get("/:nome", async (req: Request, res: Response) => {
    try {
        const nome = req.params.nome
        const apiResponse = await axios.get(
            `${BASE_URL}/${nome}`
        )
        res.status(200).send([ ...apiResponse.data ])
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({ message: "Erro ao buscar"})
        }
    }
})