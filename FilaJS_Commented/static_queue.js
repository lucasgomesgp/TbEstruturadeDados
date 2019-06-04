class StaticQueue{
    //Criando o construtor da classe 
    constructor(){
        //Inicalizando o array que será manipilado, sendo o mesmo variável de instância
        this.data = [];
    }
    //Método para enfileirar
    //Como no array já tem os métodos implementados, basta usá-los em cada um dos casos
    enqueue(element) {
        //O método push, é usado na fila para inserir no final dela
        this.data.push(element);
    }
    //Método para desenfileirar
    dequeue(){
        //Remove o primeiro elemento da fila
        return this.data.shift();
    }
    //Método para mostrar o primeiro elemento da fila
    front() {
        //Retorna o elemento da primeira posição, ou seja, aquele que está no topo
        return this.data[0];
    }
    //Método para mostrar o último elemento da fila
    back(){
        //Retorna o último elemento da fila
        return this.data[this.size()-1];
    }
    //Método para verificar se a fila está vazia
    isEmpty() {
        /*Caso o tamanho da fila seja igual á 0, significa que ela está vázia, retornando true, caso contrário
        retorna false*/
        return this.data.length === 0;
    }
    //Retorna o tamanho da fila
    size() {
        //Faz uso do atributo do array, length, que guarda o tamanho do mesmo
        return this.data.length;
    }
    //Utilizado para limpar o array
    clear() {
        //data recebendo [], significa que todo o conteúdo que está no array é apagado e o mesmo fica vázio
        this.data = [];
    }
    //Método para retornar o array separado
    print(separator=" - ") {
        /*O join(), separa o array de acordo com um separador, neste caso o padrão sendo hífen(-), porém pode mudar
        de acordo com o usuário*/
        return this.data.join(separator);
    }
}