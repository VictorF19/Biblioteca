class ViewEstante
{
    constructor()
    {
        this._prateleira = document.querySelector("#estante").querySelector("tbody");        
    }

    insertView(livroController)
    {
        let novaLinha = document.createElement("tr");
        let novoLivro = livroController._estante._livros;
        
        let n = novoLivro.length - 1;

        let celulas = `
            <tr>
                <td><input type="checkbox" name="${n}"</td>
                <td>${novoLivro[n][0]}</td>
                <td>${novoLivro[n][1]}</td>
                <td>${novoLivro[n][2]}</td>
                <td>${novoLivro[n][3]}</td>
            <tr>
        `

        novaLinha.innerHTML = celulas;
        this._prateleira.appendChild(novaLinha);
    }
}