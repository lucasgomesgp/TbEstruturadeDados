class DinamicStack {  

    constructor(){
        this.top = null; //Topo recebe null(vazio)
        this.length = 0; // Tamanho recebe zero
    }
     //Inserir elemento no topo
    push (element) {
        let node = new Node(element); // Instância do nó
        if(!this.isEmpty()) { // Se nó for diferente de vazio
            node.next = this.top; // Próximo recebe referência de topo
        }
        this.top = node; // Topo recebe elemento do nó
        this.length++; // Tamanho da pilha é incrementada +1
    }
     //Remover elemento do topo
    pop() {
        let output = null; // Variável local recebe null
        if(!this.isEmpty()){ // Se nó for diferente de vazio
            let diedNode = this.top; //Variável local recebe o nó topo
            this.top = this.top.next; //Topo recebe referência de próximo topo
            diedNode.next = null; // Elemento removido (recebe null)
            this.length--; // Tamanho decrementado
            output = diedNode.content; // Variável recebe elemento removido
        }
        return output; //Mostra elemento removido
    }
//Retorna a posição do elemento que está no topo da pilha
    peek() {
        return this.length -1; // Retorna a posição do elemento que está no topo
    }
        // Pilha vazia
    isEmpty() {
        return this.top === null; // Retorna se topo for vazio; pilha vazia
    }
        // Mostra tamanho da pilha
    size() {
        return this.length; // Retorna tamanho
    }
 // Remove todos os elementos da pilha
    clear() {
        this.top = null; // Topo recebe vazio
        this.length = 0; // Tamanho recebe zero
    }
     // Mostra todos os elementos inseridos na pilha
    print(separator=' - ') {
        let text = ""; // Criação de variável local do tipo texto, vazia
        for (let current = this.top; current!== null; current=current.next){ // Estrutura de repetição onde cria uma 
            // variável local para receber o elemento corrente(topo); para elemento corrente diferente de vazio,
            //receber o próximo elemento
            text += current.content + separator; // Variável de texto recebe elemento corrente + separador que 
            //no caso é '-'
        }
        return text.substr(0, text.length - separator.length);  // Retorna uma substring que remove o último separador 
    }
}