class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinerySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);

        if(this.root === null){
            this.root = newNode
        }

        let temp = this.root;
        while(true){
            if(newNode.value === temp.value){
                return undefined;
            }
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }else{
                    temp = temp.left
                }
            }else{
                if(temp.right === null){
                    temp.right = newNode;
                    return this
                }
                temp = temp.right;
            }
        }
    }

    include(value){
        if(!this.root){
            return undefined;
        }

        let temp = this.root;
        while(temp){
            if(value < temp.value){
                temp = temp.left;
            }else if(value > temp.value){
                temp = temp.right;
            }else if(value === temp.value){
                return true;
            }
        }
        return false;
    }
}

let tree = new BinerySearchTree();
tree.insert(5)
tree.insert(3)

tree.insert(8)
tree.insert(1)


console.log(tree)
console.log(tree.include(8))
console.log(tree.include(10))

