class LivroController
{
    constructor()
    {
        let $ = document.querySelector.bind(document);

        this._titulo = $("#titulo");
        this._autor = $("#autor");
        this._editora = $("#editora");
        this._genero = $("#genero");

        this._estante = new Estante();
        this._viewEstante = new ViewEstante();
    }

    adicionaLivro(event)
    {
        event.preventDefault();

        let livro = this.criaLivro();

        this._estante.adiciona(livro);
        this._viewEstante.insertView(this);

        this.limpaCampos()
    }

    criaLivro()
    {
        return new Livro(this._titulo.value,
            this._autor.value,
            this._editora.value,
            this._genero.value);
    }

    limpaCampos()
    {
        this._titulo.value = "";
        this._autor.value = "";
        this._editora.value = "";
        this._genero.value = "";

        this._titulo.focus();
    }
}