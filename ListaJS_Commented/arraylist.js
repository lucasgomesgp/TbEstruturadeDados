class ArrayList {
    //Diferente da lista que precisa percorrer, o array já contém os métodos indexados  
    constructor() { //Criando o construtor  
        //Criando o array
        this.data = [];
    }
    //Método criado para passar o separador que será utilizado no join do array, separando os dados
    show(separator = ', ') {
        return this.data.join(separator); //Utilizando o join para juntar os dados do array de acordo com o separador
    }
    //Faz a inserção na ultima posição da lista
    append(element) {
        this.data.push(element);//Faz usoi do método push do array, inserindo o elemento passado por argumentos
    }
    //Faz a inserção na posição desejada
    insert(position, element) {
        if (position > -1 && position <= this.size())/*Compara se a posição que foi digitada se encontra na faixa aceitável
        posição maior ou igual a -1 e posição menor ou igual ao tamanho do array*/
            this.data.splice(position, 0, element);/*usando o método splice para adicionar o elemento,
            na posição especificada, não excluind nenhum, e adicionando o elemento passado nos argumentos*/
    }

    //Ocorre a remoção na posição desejada
    removeAt(position) {
        /*É feita uma comparação se a posição passada é maior que -1 e menor que o array
        , pois só pode ser removido na faixa de valores existentes no array de 0 ao tamanho do array*/
        if (position > -1 && position < this.size())
            /*Informando a posição e a quantidade de elementos que serão removidos
            , para o método splice.*/
            this.data.splice(position, 1);
    }
    //Remoção do elemento
    remove(element) {
        //Recebendo o índice retornado através do elemento passado para o método indexof
        let index = this.indexOf(element);
        //Utilizando o método removeat() criado na classe, que remove o elemento através do índice
        this.removeAt(index);
    }
    //Localiza o índice do elemento 
    indexOf(element) {
        //Utilizando o looping para encontrar o índice do elemento
        for (let index = 0; index < this.data.length; index++) {
            //A cada iteração será comparado se o valor passado é igual ao da posição atual do arraATUAL DO ARRAY
            if (element === this.data[index]) {
                //Caso a resposta seja true, será mostrado o índice encontrado
                return index;
            }
        }
        //Caso contrario será retornado -1, significando que o indice não foi encontrado
        return -1;
    }

    //Faz  a verificação se o array está vazio
    isEmpty() {
        /*
        Compara se o array está vazio, se retornar true significa que ele tem o tamanho igual a 0,
        casi contrario retorna false, significando que ele está preenchido.
        */
        return this.size() === 0;
    }

    //Retorna o tamanho do array
    size() {
        return this.data.length;
    }

    //Busca o elemento na posição especificada 
    getElement(position) {
        /*Faz a verificação se a posição passada está na faixa aceitável, 
        sendo maior ou igual a zero e menor que a posição final do array.*/
        if (position >= 0 && position < this.size()){
            //Retorna o elemento presente na posição
            return this.data[position];
        }
    //Caso o elemento não seja localizado retorna null, mostrando que o mesmo não existe  
        return null;
    }
    //Faz uma consulta se o valor existe 
    search(value) {
        //Percorre todo o array e retorna true se o elemento for igual ao passado no argumento, caso não,retorna false
        return this.data.some((n) => n === value)
    }
}