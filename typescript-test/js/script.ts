class myArry<T extends number | string , U>{
constructor(public data : T[] , private data2 : U[]){}
    addItem(item : T){
        this.data.push(item)
    }

    getItem(index : number){
        return this.data[index]
    }
}

let list = new myArry<string , boolean>(['item1' , 'item2'] , [true , false]);
list.addItem('4');
console.log(list.getItem(0))