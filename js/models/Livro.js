class Livro
{
    constructor(titulo, autor, editora, genero)
    {
        this._titulo = titulo;
        this._autor = autor;
        this._editora = editora;
        this._genero = genero;
        Object.freeze(this);
    }

    get nome()
    {
        return this._titulo;
    }

    get autor()
    {
        return this._autor;
    }

    get editora()
    {
        return this._editora;
    }

    get genero()
    {
        return this._genero;
    }
}