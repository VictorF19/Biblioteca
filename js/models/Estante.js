class Estante
{
    constructor()
    {
        this._livros = [];
        Object.freeze(this);
    }

    adiciona(livro)
    {
        this._livros.push(
            [livro._titulo,
             livro._autor,
             livro._editora,
             livro._genero]);
    }

    retira()
    {
        //Utilizar checkbox para selecionar o livro a ser retirado
    }
}