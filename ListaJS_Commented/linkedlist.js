class LinkedList {

    constructor() {
        //Define os atributos que pertencerão a classe:
        //Cabeça da lista que inicialmente recebe null    
        this.head = null;
        //Define o tamanho da lista inicial como 0
        this.length = 0;
        //Ambas são varáveis de instância  
    }

    //verifica se a lista está vazia 
    isEmpty() {
        return this.head === null;
    }

    //Faz a inserção no final da lista
    append(element) {
        //Faz a criação do nó, e recebe os atributos da classe node (DA CLASSE NODE (CONTENT E NEXT)
        let node = new Node(element),
        //Recebe a referência da cabeça da lista
        current = this.head;
        //Antes de criar o nó ele verifica se a lista está vazia
        if (this.isEmpty()) {
            //Caso sim, faz-se a inserção no início da lista
            this.head = node;
        }
        //Se não estiver ele coloca no final da lista
        else {
            //Percorre toda a lista         
            while (current.next) {
                /*O primeiro elemento aponta para o segundo e assim até o final da lista, 
                sendo que no último elemento aponta para null*/
                current = current.next;
            }
            //Após percorrer, o último elemento recebe o nó criado 
            current.next = node;
        }
        //incrementa o tamanho da lista
        this.length++;
    }

    //Apresenta toda a lista 
    show(separator = ", ") {
        //O elemento atual recebe a cabeça da lista
        let current = this.head,
            //O output concatenará com os elementos da lista
            output = '';
        //caso tenha algum elemento ele entra 
        if (current != null) {
            //Como a lista tem que começar com (primeiro elemento, segundo elemento, ... , último elemento)
            output += current.content;
            //Percorre toda a lista 
            while (current.next) {
                //O elemento atual recebe o próximo 
                current = current.next;
                //Como já tem o primeiro elemento ele irá concatenar o separador e o próximo. Até chegar no último
                output += separator + current.content;
            }
        }
        //Retorna toda a lista com 1º elemento, 2º Elemento até...último elemento.
        return output;
    }
    //Faz-se a insersão em qualquer posição da lista
    insert(position, element) {
        /*Faz a verificação se a posição inserida está no padrão aceito, maior do que -1 e 
            menor ou igual ao tamanho da lista */
            if (position > -1 && position <= this.size()) {
                //Criação do Nó
                let node = new Node(element),
                //O current recebe a cabeça da lista 
                current = this.head,
                //Como vai inserir em qualquer posição, deve possuir a posição anterior
                previous = null, 
                //Indice que compara com a posição que foi especificada 
                index = 0; 
            //Caso a posição seja 0 não será necessário percorrer a lista 
            if (position == 0) {
                //O elemento .next no caso o 2º elemento passa a ser o valor do head 
                node.next = this.head; 
                //A cabeça da lista passa a ser o elemento criado (node)
                this.head = node;
                //O elemento que foi adicionado troca de lugar com a cabeça 
            }
            //Caso seja em outra posição percorre até encontrar a posição 
            else {
                //Enquanto o index que vale 0 for menor que a posição passada será executado o looping
                while (index < position) {
                    //O index será incrementado a cada iteração  
                    index++;
                    //Recebe a posição anterior 
                    previous = current;
                    //Recebe a proxima posição 
                    current = current.next;
                }
                //Depois de encontrar a posiçãi que foi passada:
                    //Fasta o elemento que está na posição e recebe uma posição depois
                    node.next = current;
                    //Na posição anterior recebe o elemento especificado
                    previous.next = node;
            }
            //Incrementa o tamanho da lista 
            this.length++;
            //Como fez a inserção retorna true mostrando que deu certo
            return true;
        }
        //Caso dê errado mostra false, que não inseriu
        return false;
    }
    //Faz a remoção na posição especificada 
    removeAt(position) {
        //Faz a verificação se está no limite das posições, maior que -1 e menor que o tamanho final da lista
        if (position > -1 && position < this.size()) {
            //O current recebe a cabeça da lista para percorrer
            let current = this.head,
                //O anterior (Previous)recebe de início null
                previous = null,
                //O índice é iniciado com 0
                index = 0;
            //Caso seja na posição 0 a cabeça da lista irá receber o proximo elemento
            if (position === 0) {
                //A cabeça da lista exclui o elemento que estava na posição inicial e aponta para o próximo
                this.head = current.next;
            } 
            //Caso contrário percorrerá a lista     
            else {
                //Enquanto o valor passado nos argumentos for maior do que o índice, prossegue o looping
                while (index < position) {
                    //O index é incrementado
                    index++;
                    //O anterior recebe o atual
                    previous = current;
                    //O atual recebe o proximo
                    current = current.next;
                }
                /*O elemento que está na posição anterior.next, no caso a posição próxima, recebe o current.next
                 excluindo o que está no current, apontando para o próximo*/
                previous.next = current.next;
            }
            //Faz a exclusão do elemento 
            current.next = null;
      
            //Decrementa um tamanho da lista, depois de excluir um elemento
            this.length--;
      
            //Apresenta o elemento excluído
            return current.content;
        }
        //Caso não esteja nos limites da posição retorna null
        return null;
    }
    //Ocorre a remoção do último elemento
    remove(element) { 
        //Faz a pesquisa do índice que será excluídoO
        let index = this.indexOf(element);
        //Retorna o elemento excluído 
        return this.removeAt(index);
    }
    //Retorna o índice do elemento
    indexOf(element) {
        //O current recebe a cabeça da lista, para poder percorre-la
        let current = this.head,
            //O índice inicia com 0 para ser incrementado posteriormente 
            index = 0;
        //Enquanto o current for diferente de null e apresentar um próximo elemento, continua o looping
        while (current !== null) {
            //Verifica se o elemento passado pelos argumentos é igual ao que está na lista
            if (current.content === element) {
                //Caso seja igual retorna o índice 
                return index;
            }
            //caso não sejam iguais, deve incrementar o índice para acompanhar a posição, até encontrar o que é igual
            index++
            //Entrega a próxima posição da lista para percorrer até encontrar os valores iguais entre element e current.content
            current = current.next;
        }
        //Caso não retorne -1, significa que não encontrou 
        return -1;
    }

    //Retorna o tamanho da lista
    size() {
        return this.length;
    }
    //Retorna o elemento que está na posição  
    getElement(position) {        
        //Faz a verificação se a posição é inválida, menor que 0 e maior ou igual ao tamanho da lista
        if (position < 0 && position >= this.length){
            //Retorna null e encerra a busca 
            return null;
        }
            //Current inicia apontando para a cabeça para percorrer a lista
            let current = this.head,
            //Index inicialmente recebe 0 para ser incrementado posteriormente
            index = 0;
        //Enquanto o current for diferent de null, no caso tenha um elemento na posição, continue o looping
        while (current !== null) {
            //Faz a verificação se o index é igual a posição passada nos argumentos
            if (index === position) {
                //Caso seja igual, retorna o conteúdo do elemento da posição na lista
                return current.content;
            }
            //Incrementa o index caso não encontre a posição
            index++;
            //Current recebe o próximo até encontrar o da posição
            current = current.next;
        }
    }
    //Faz a busca se o elemento existe ou não 
    search(value) {
        /*Se o índice dele for maior ou igual a zero significa
        que ele existe e retorna true, caso contrário retorna false*/
        return this.indexOf(value) >= 0;
    }

}