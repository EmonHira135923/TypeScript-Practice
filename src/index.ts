function person(name:string,age:number) :{name:string,age:number} {
    return {name,age};
};

const result = person("Emon",40);

console.log("Person is: ",result);