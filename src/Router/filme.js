import express from "express"
import ControllerFilme from '../controller/filme.js'

const router = express.Router()

router.get("/buscar", ControllerFilme.Buscar)
router.get("/buscarUm/:id", ControllerFilme.BuscarUm)
router.post("/criar", ControllerFilme.Criar)
router.put("/alterar/:id", ControllerFilme.Alterar)
router.put("/alterarLancamento/:id", ControllerFilme.Alterar)
router.post("/deletar", ControllerFilme.Deletar)


export default router