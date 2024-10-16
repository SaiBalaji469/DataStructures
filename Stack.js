class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        let newNode = new Node(value);
        this.first = newNode;
        this.length = 1

    }

    push(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
        }

        newNode.next = this.first;
        this.first = newNode;
        this.length++;
        return this.length;
    }
    pop(){
        if(this.length === 0){
            return undefined;
        }

        let temp = this.first;
        this.first = this.first.next;
        temp.next = null
        this.length--;
        return temp;
    }
    peek(){
        return this.first;
    }
    isEmty(){
        return !this.length === 0;
    }
}

let myStack = new Stack(5);
myStack.push(3)
myStack.push(10)
myStack.push(6)
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.isEmty())
console.log(myStack)