export const searchInCards = (value:string,arr:{id:number,title:string,picture:string,price:number}[]) =>{
    const newArr =arr.filter(elem=>{
        if(elem.title.toUpperCase().includes(value.toUpperCase())) return elem;
    })
    return newArr;
}