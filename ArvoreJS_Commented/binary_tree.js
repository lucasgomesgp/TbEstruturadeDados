class BinaryTree {
    // inicializa a raiz como nula
    constructor() {
        this.root = null;
    }

    //insere o elemento da arvores
    insert(element) {
        //Raiz recebe método recursivo de inserção de nó, passando a raiz principal e o elemento a ser inserido
        this.root = this.insertNode(this.root, element); 
    }
    //Método recursivo para inserção do elemento na árvore
    insertNode(rootNode, value) { 
        //Se o nó raiz for null significa que pode inserir na raiz porque ñ tem outros elementos 
        if (rootNode == null) { 
            // retorna novo nó com o valor a ser inserido
            return new Node(value); 
        }
        /* 
        Caso o rootNode não seja null, é feito a verificação para saber se o valor digitado é maior ou menor
        que o conteúdo do nó. Caso atenda uma das duas verificações o método recursivo é chamado, 
        no caso da direita se o valor for maior que o nó e na esquerda se o nó for menor que o valor digitado.
        */
        if (value > rootNode.content) { 
            rootNode.right = this.insertNode(rootNode.right, value);
        } 
        else {
            rootNode.left = this.insertNode(rootNode.left, value);
        }
        //Ao fim de cada inserção é retornado qual elemento foi inserido, para ser encorporado ao esqueleto da árvore
        return rootNode;
    }

    //retorna true se o valor já existe na arvore
    search(value) {
        //Chamada ao método recursivo que buscará o valor na árvore
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
    //Chamada ao método recursivo sumNodes(), que percorrerá a árvore e mostrará a sua soma de quantos nós existem
    return this.sumNodes(this.root);
}
//Método recursivo para retornar a quantidade de nós
sumNodes(node){
    //Caso a raiz passada seja nula, significa dizer que ñ tem sub-árvores, portanto não há nós, sendo retornado 0
    if(node == null) return 0;

    return 1 + this.sumNodes(node.left) + this.sumNodes(node.right);
}

//exibe o menor valor da arvore
min() {
    /*
        Assim como o método max(), receberá a raiz e verificará se é nula. Caso ñ seja significa que ela tem valor mínimo,
        valor este que estará na extrema esquerda, portanto a busca é feita pelo looping até encontrar o valor a extrema esquerda,
        que consequentemente será o menor/mínimo.
    */
    let node = this.root;
    if(node == null) return null
    while(node.left!=null){
        node = node.left;
    }
    return node.content;

 }

//exibe o maior valor da arvore
max() { 
    /*
        Receberá a raiz e caso seja nula não terá valor máximo.
        Se for diferente de null, procurará o elemento a extrema direita, que será consequentemente o maior/máximo valor.
     */
    let node = this.root;
    if(node == null) return null
    while(node.right!=null){
        node = node.right;
    }
    return node.content;
}
}