
const getProducts  = async () => {
    const APIResponse = await fetch('https://fakestoreapi.com/products?limit=5');
    const products = await APIResponse.json();
    var element = document.getElementById("Productos");
    for (var i=0 ; i<products.length; i++){
        console.log(products[ i ]);
        element.insertAdjacentHTML("beforeend", "<br>" + products[i].title + "  (" + products[i].price + ") + <button onclick=\"addToCart(" + products[i].id + ")\">Agregar al carrito</button>");
        
        
    }
}
getProducts()
function addToCart(id) {
    fetch('https://fakestoreapi.com/carts/1' ,{
            method:"PATCH",
            body:JSON.stringify(
                {
                    userId:1,
                    date:2019-12-10,
                    products:[{productId:id,quantity:1}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
    
    