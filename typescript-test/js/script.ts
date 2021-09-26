type MyObject = {
    fullname : string,
    age : (num : number) => string
}

let person : MyObject = {
    fullname : 'AmirSaeidi',
    age : (num : number) => {
        return `age : ${num}`
    }
};
