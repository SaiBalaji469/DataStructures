class ArrayList{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length

    }
    pop(){
        let last = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return last; 
    }
    shift(){
        let first = this.data[0];
        for (let i=0;i<this.length;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1]
        this.length--;
        return first
    }

    insertAtIndex(item, index){
        for(let i = this.length;i >= index;i--){
            this.data[i] = this.data[i-1];
        }
        this.data[index] = item;
        this.length++;
        return this.length;

    }

    deleteAtIndex(index){
        let item = this.data[index]
        for (let i = index;i<this.length;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        return item
    }
    getElementAtIndex(index){
        return this.data[index];
    }
    includes(item){
        for(let i = 0;i<this.length;i++){
            if (this.data[i] === item) return true
            
        }
        return false
    }

}

let arr = new ArrayList();
arr.push("Sai")
arr.push("Balaji")
arr.push("Jayavarapu")
arr.insertAtIndex("Nani", 1)
// arr.deleteAtIndex(1)

// arr.pop()
// arr.shift()
console.log(arr)
console.log(arr.getElementAtIndex(1))
console.log(arr.includes("Nani"))


// ArrayList {
//     length: 4,
//     data: { '0': 'Sai', '1': 'Nani', '2': 'Balaji', '3': 'Jayavarapu' }
//   }
//   Nani
//   true