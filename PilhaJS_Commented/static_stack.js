class StaticStack {

    constructor(){
       this.data = []; //cria um array vazio
    }
    //Insere elemento na última posição do array
    push (element) {
        this.data.push(element);
    }
    //Remove elemento na última posição do array
    pop() {
        return this.data.pop();
    }
    // Retorna a posição do elemento que está no topo
    peek() {
        return this.data.length -1; // 
    }
     //Retorna pilha vazia
    isEmpty() {
        return this.size() === 0; //Retorna true se a pilha for vazia e false se não for.
    }
    // Retorna tamanho do array
    size() {
        return this.data.length; 
    }
     //Limpa array
    clear() {
        this.data = [];
    }
    //Mostra os elementos da pilha
    print(separator=' - ') {
        let text = "";
        for (let i = (this.data.length -1); i>=0; i--){ //Variável local recebe tamanho do array menos 1
            //Para variável local maior ou igual a zero, decrementa o tamanho do array
            text += this.data[i] + separator.length;// variável de texto recebe elemento do array + separador que 
            //no caso é '-'
        }
        return text.substr(0, text.length - separator.length); // Retorna uma substring que remove o último separador 
    }
}