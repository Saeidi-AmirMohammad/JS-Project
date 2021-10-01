function Emoji(){
    return function(target : Object , key : string  | symbol){
        let val = target[key]

        Object.defineProperty(target , key , {
            get : () => val,
            set : (newVal) => {
                val = `${newVal}`
            },
            configurable : true,
            enumerable : true
        })
    }
}

classIceCream{
    @Emoji()
    flavor = "Vanilla"
}