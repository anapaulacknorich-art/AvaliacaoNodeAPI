import ServiceFilme from '../service/filme.js'

class ControllerFilme {

    Buscar(req, res) {
        try{
        const filmes = ServiceFilme.Buscar()
         res.send({filmes})
        }catch(e){
            res.send({message:e.message})
        }
       
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const filme = ServiceFilme.BuscarUm(id)
            res.send({ filme })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const {titulo,classificacao,descricao,lancamento}= req.body
            ServiceFilme.Criar(titulo,classificacao,descricao,lancamento)
            res.send({ message:"Criado com sucesso!"})
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const {titulo,classificacao,descricao,lancamento}=req.body
            ServiceFilme.Alterar(id,titulo,classificacao,descricao,lancamento)

            res.send({message:"Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    AlterarLancamento(req, res) {
        try {
            const id = req.params.id
            const {lancamento}=req.body
            ServiceFilme.AlterarLancamento(id,lancamento)
            res.send({message:"Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }


    Deletar(req, res) {
        try {
            const id = req.params.id
            ServiceFilme.Deletar(id)
            res.send({ message:"Deletado com sucesso!"})
        } catch (error) {
            res.send({ message: error.message })
        }
    }



}

export default new ControllerFilme()