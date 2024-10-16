class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }
    push(item){
        let newNode = new Node(item);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
      
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    pop(){

        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        let prev = this.head;

        while(temp.next){
            prev = temp
            temp = temp.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    unshift(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head
        this.head = newNode
        this.length++;
        return this
    }
    shift(){
        let first = this.head
        this.head = this.head.next;
        first.next = null
        this.length--;
        if(this.length === 0){
            this.tail = null
        }
        return first;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        return this.tail;
    }
    get(index){
        let counter = 0
        let temp = this.head;
        while(temp){
            if(counter === index){
                return temp
            }
            counter++;
            temp = temp.next
        }
        return null
    }
    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.value = value
            return true
        }
        return false
        
    }
    insert(index,value){
        if(index === 0){
            return this.unshift(value)
        }
        if(index === this.length){
            return this.push(value)
        }

        let newNode = new Node(value);
        const temp = this.get(index-1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
    size(){
        let counter = 0
        let temp = this.head;
        while(temp){
            counter++;
            temp = temp.next;
        }
        return counter;
    }
    clear(){
        this.head = null;

        
    }


}

let myLL = new LinkedList(0);
myLL.push(1)
myLL.push(2)
myLL.push(3)
myLL.unshift(4)
// myLL.pop()
myLL.shift();

// console.log(myLL)
// console.log(myLL.getFirst())
// console.log(myLL.getLast())
// console.log(myLL.get(3))
// console.log(myLL.get(2))
// myLL.set(2, 100)
// console.log(myLL.get(2))

// console.log(myLL.get(1))
// myLL.insert(1, 500)
console.log(myLL)
// console.log(myLL.get(1))
// console.log(myLL.size())
// console.log(myLL.length)
myLL.clear()
console.log(myLL)


