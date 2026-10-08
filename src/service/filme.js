import Filme from '../model/filme.js'

class ServiceFilme {

    Buscar() {
        return filme.Buscar()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        const filme=Filme.BuscarUm(id)
        if(!filme){
            throw new Error("Filme não encontrado")
        }
        return filme
    }
    
    Criar(titulo,classificacao,descricao,lancamento) {
        if(!titulo||!classificacao||!descricao||!lancamento){
            throw new Error("Favor informar todos os dados do filme")
        }
        Filme.Criar({titulo,classificacao,descricao,lancamento})
    }
    
    Alterar(id,titulo,classificacao,descricao,lancamento) {
        if(!id||isNaN(id)||!titulo||!classificacao||!descricao||!lancamento){
            throw new Error("Favor informar todos os dados do ID correto")
        }
        Filme.Alterar({id,titulo,classificacao,descricao,lancamento})
    }
    AlterarLancamento(id,lancamento){
        if(!id||isNaN(id) || lancamento===undefined){
            throw new Error("Favor informaro ID e o status de lancado corretamente")
        }
        Filme.AlterarLancamento(id,lancamento)
    }
    
    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar id corretamente")
        }
        Filme.Deletar(id)
    }
    
}

export default new ServiceFilme()