class HashMap{
    constructor(size=5){
        this.keyMap = new Array(size);
    }
    _hashFunction(key) {
        let sum = 0;
        const PRIME_NUMBER = 31;
    
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          const charCode = key.charCodeAt(0) - 96;
          sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
        }
    
        return sum;
      }
    set(key, value){
        let index = this._hashFunction(key)
        console.log(index)
        if(!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value])
        return this;
    }

    get(key){
        const index = this._hashFunction(key);
        if(this.keyMap[index]){
            for(let i = 0;i<this.keyMap[index].length;i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    getKeys(){
        const keys = [];
        for(let i = 0;i<=this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j = 0;j<this.keyMap[i].length;j++){
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys;
    }

    getValues(){
        const values = [];
        for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length;j++){
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values;
    }


}

let myHashMap = new HashMap()
myHashMap.set("john", "891925")
myHashMap.set("nani", "995929")
myHashMap.set("mark", "809960")

console.log(myHashMap)
console.log(myHashMap.get("john"))
console.log(myHashMap.get("nani"))

console.log(myHashMap.get("mark"))
console.log(myHashMap.getKeys());
console.log(myHashMap.getValues());


