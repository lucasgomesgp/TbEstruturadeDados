//Criação da classe que será o nó
class Node{
    //Construtor da classe, tendo como parâmetro element, que será digitado pelo usuário
    constructor(element){
        //content, armazenará o elemento dá vez, ou seja, o conteúdo do mesmo
        this.content=element;
        //next, assim como na fila,lista e pilha, referenciará o próximo elemento do nó
        this.next = null;
    }
}