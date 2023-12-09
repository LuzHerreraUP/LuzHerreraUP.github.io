
const API_call = async () => {
    const APIResponse = await fetch ('https://fakestoreapp/product')
    const products = await APIResponse.json();
    console.log(products);
    console.log("El producto número 13 es:  ")
    var p13 = products[12]
    console.log(p13.title)
     
}