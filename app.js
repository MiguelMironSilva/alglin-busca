//console.log(dados[1].titulo);

function pesquisar() {
    // Inicia a função de pesquisa e indica que foi chamada.
    //console.log("clicou")

    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Verifica se a seção foi encontrada corretamente.
    //console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se campoPesquisa é uma string sem nada
    /*(if (campoPesquisa == ""){
        section.innerHTML = "Nada encontrado"
        return
    }*/
    
    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Cria uma string vazia para armazenar os resultados, titulo e descricao
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Cria uma string vazia para armazenar os resultados.
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //console.log(dado.titulo.includes(campoPesquisa))
        // Se no dado "titulo" includes campoPesquisa, eh executado o resto do código.
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href = "#" target="_blank">${dado.titulo} </a>
            </h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <a href=${dado.link} target="_blank">
            Saiba mais
            </a>
        </div>
        `
        
            }
        }

        if(!resultados){
            resultados = "<p>Nada foi encontrado</p>";
        }

        // Atualiza o conteúdo da seção com os resultados.
        section.innerHTML = resultados
       
        // Adiciona um novo resultado à string de resultados.       
}



