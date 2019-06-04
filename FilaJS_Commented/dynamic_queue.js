class DynamicQueue{
    //Criando o construtor da classe fila dinâmica
    constructor(){
        //Todos sendo variáveis de instância
        //Criando a cabeça da fila, iniciando-a com null
        this.head = null;
        //Criando a calda da fila, inicando-a com null
        this.tail =null;
        //Criando o lenght, já que diferente do array ele não vem implementado na fila dinâmica
        this.length = 0;
    }
    //Método para enfileirar, inserindo sempre a partir da última referência da calda
    enqueue(element) {
        //Criando o nó atual, tendo como modelo a classe node.js
        let node = new Node(element);
        /*Caso o tamanho da fila seja igual à 0, significa dizer que a cabeça da fila referenciará o nó atual
        , já até o momento a mesma está vazia*/
        if(this.length===0){
            this.head=node;
        }
        //Caso contrário, o último elemento inserido até o momento, referenciará o nó atual, no caso o node
        else{
            this.tail.next=node;
        }
        //Independente de entrar no if ou no else, a calda sempre receberá o último elemento inserido
        this.tail = node;
        //Sendo incrementado +1 a cada inserção
        this.length++;
    }
    //Método para desenfileirar
    dequeue(){
        //Variável criada para guardar o elemento que será excluído da fila
        let deadElement = null;
        /*Caso o tamanho da fila seja 1, 
        deadElement que guarda o conteúdo do nó morto, recebendo o conteúdo da calda*/
        if (this.length===1) {
            deadElement = this.tail.content;
            //Utilizando o método clear para limpar todas as variáveis de instância, head, tail e length
            this.clear();
        }
        //Caso o tamanho da fila seja maior que 1
        else if(this.length>1){
            //O nó morto será a cabeça da fila
            let deadNode = this.head;
            //A cabeça da fila apontará para o próximo elemento, sendo this.head.next
            this.head = this.head.next; 
            //O nó morto perde a referência do próximo elemento
            deadNode.next = null;
            //deadElement recebe o conteúdo do nó morto, no caso o número excluído 
            deadElement = deadNode.content;
            //Decrementado -1, na lista, ou seja o elemento excluído
            this.length--;
        }
        //Retornado o elemento que foi excluído
        return deadElement;
    }
    //Método para retornar o elemento que está no início da fila
    front() {
        //Retornando o elemento head.content, que têm o primeiro da fila
        return this.head.content;
    }
    //Método para retornar o último elemento da fila, no caso a calda
    back(){
        return this.tail.content;
    }
    //Método para verificar se a fila está vazia
    isEmpty() {
        /*Se a calda referenciar null, significa que não têm último e nem primeiro elemento
        ,mostrando que a fila está vazia e retornando true, caso contrário retorna false*/
        return this.tail===null;
    }
    //Método para retornar o tamanho da fila
    size() {
        //Utilizando o atributo length, para retornar o tamanho da fila
        return this.length;
    }
    //Método para limpar toda a fila
    clear() {
        //Retira as referências da cabeça e da calda, esvaziando a lista
        this.head = null;
        this.tail = null;
        //Faz o atributo que tem o tamanho receber 0, ou seja, mostrando que a lista está vazia
        this.length = 0;
    }
    //Método para mostrar o conteúdo da fila
    print(separator=" - ") {
        //output guardará o conteúdo que será mostrado 
        let output = "";
        /*É necessário um looping para percorrer toda a fila, a cada rodada é verificada se:
        ,o nó referencia null, ou seja se ele está vazio, e o node recebe o próximo para continuar o looping*/
        for (let node = this.head; node != null; node = node.next) {
            //A cada looping, é concatenado o elemento e o separador. Exemplo: 1ELEMENTO,2ELEMENTO,...,ULTIMO
            output+=node.content+separator;
        }
        /*Retorna o output que têm o todos os nós, retirando o último separador, para não ficar:
            Exemplo: 1ELEMENTO,2ELEMENTO,...,ULTIMO,.
        */
        return output.substr(0, output.length-separator.length);
    }
}