
const filmes= new Array(
    {titulo:"Renan",clasificacao:"14",descricao:"Professor qu fode todo mundo",lancamento:2010}
)


class Filme {

    Buscar() {
        return filmes
    }
    
    BuscarUm(id) {
        return filmes[id]
    }
    Criar(filme){
        filmes.push(filme)
    }
    Alterar(id,filme){
        filmes[id]=filme
    }
    AlterarLancamento(id,lancamento){
        if(filmes[id]){
            filmes[id],lancamento=lancamento
        }
    }
    Deletar(id){ 
        filmes.splice(id,1)
    }
      
}

export default new Filme()