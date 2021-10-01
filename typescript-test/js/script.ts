function auth<T extends {new (...arg : any[])}>(constractor : T){
    console.log(constractor)
    return class extends constractor{
        auth = false
    }
}

@auth
class User {
    name = 'Saeidi'
    constructor(public message : string) {}

}

let user = new User ("AmirSaeidi");
console.log(user)