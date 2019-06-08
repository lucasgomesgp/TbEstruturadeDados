class BinaryTree {
    // inicializa a raiz como nula
    constructor() {
        this.root = null;
    }

    //insere o elemento da arvores
    insert(element) {
        this.root = this.insertNode(this.root, element); //Raiz recebe método recursivo de inserção de nó
    }
    insertNode(rootNode, value) { 
        if (rootNode == null) { //Se o nó raiz for null 
            return new Node(value); // retorna novo nó com o valor a ser inserido
        }
        //Se o valor a ser inserido for maior do que o conteúdo do nó raiz
            // Nó da direita recebe método recursivo que faz as validações para encontrar um nó nulo.
            // A cada iteração é verificado se há um nó e se ele é menor ou maior, caso seja nulo ele é inserido.
        rootNode.right = this.insertNode(rootNode.right, value);
        if (value > rootNode.content) { 

        } else {
            rootNode.left = this.insertNode(rootNode.left, value);
        }
        return rootNode;
    }

    //retorna true se o valor já existe na arvore
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(rootNode, value) {
        if (rootNode == null) return false;
        if (rootNode.content == value) return true;
        if (value > rootNode.content)
            return this.searchNode(rootNode.right, value);
        else
            return this.searchNode(rootNode.left, value);
    }


    //executa a função callback para cada nó, em ordem
    inOrderTraverse(callback) {
        this.inOrder(this.root, callback);
    }
    inOrder(rootNode, callback) {
        if (rootNode == null) return;
        this.inOrder(rootNode.left, callback);
        callback(rootNode.content);
        this.inOrder(rootNode.right, callback);
    }

    //executa a função callback para cada nó, em pré-ordem
    preOrderTraverse(callback) {
        this.inpreOrder(this.root, callback)

    }
    inpreOrder(rootNode, callback) {
        if (rootNode == null) return;
        callback(rootNode.content);
        this.inpreOrder(rootNode.left, callback);
        this.inpreOrder(rootNode.right, callback);
    }

    //executa a função callback para cada nó, em pós-ordem
    postOrderTraverse(callback) {
        this.inpostOrder(this.root, callback);
    }
    inpostOrder(rootNode, callback) {
        if (rootNode == null) return;
        this.inpostOrder(rootNode.left, callback);
        this.inpostOrder(rootNode.right, callback);
        callback(rootNode.content);
    }


    //remove um elemento existente na arvore e retorna a arvore atualizada
    remove(value) {
        this.heigth.removeNode(thisroot, value);
    }
    removeNode(rootNode, value) {
        if (rootNode == null) return null;
        if (value == rootNode.content) {
            if (rootNode.left === rootNode.right) { //Quando a sub arvore ão tem filhos(null) Grau 0
                 return null;
            } else if (rootNode.right == null) { //Só tem filhos na esquerda Grau 1
                 rootNode = rootNode.left;
            } else if (rootNode.left == null) { //Só tem filhos na direita Grau 1
                 rootNode = rootNode.right;
            } else { //Tem filhos nos dois lados Grau 2
               let i = rootNode.right;
               while(i.left!=null){
                   i - i.left;
               }
               i.left = rootNode.left;
               rootNode = rootNode.right;
            }

        } else if (value > rootNode.content) {
            rootNode.right = this.removeNode(rootNode.right, value);
        } else {
            rootNode.left = this.removeNode(rootNode.left, value);
        }
        return rootNode;
    }


//exibe a altura da arvore
heigth(){
    return this.heigthNode(this.root);
}
heigthNode(node){
    if(node == null) return -1;
    let leftHeigth = this.heigthNode(node.left),
        rightHeigth = this.heigthNode(node.right);
    if(leftHeigth > rightHeigth){
        return 1 + leftHeigth;
    }else{
        return 1 + rightHeigth;
    }
}

// informa quantos nós existem na arvore
size(){
    return this.sumNodes(this.root);
}

sumNodes(node){
    if(node == null) return 0;
    return 1 + this.sumNodes(node.left) + this.sumNodes(node.right);
}

//exibe o menor valor da arvore
min() {
    let node = this.root;
    if(node == null) return null
    while(node.left!=null)
    node = node.left;
    return node.content;

 }

//exibe o maior valor da arvore
max() { 
    let node = this.root;
    if(node == null) return null
    while(node.right!=null)
    node = node.right;
    return node.content;
}
}