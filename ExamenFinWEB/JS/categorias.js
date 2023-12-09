
const getProducts  = async () => {
    const APIWomen = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=5");
    const productsWomen = await APIWomen.json();
    var element = document.getElementById("Ropa de mujer");
    for (var i=0 ; i<productsWomen.length; i++){
        console.log(productsWomen[ i ]);
        element.insertAdjacentHTML("beforeend", "<br>" + productsWomen[i].title + "  (" + productsWomen[i].price + ") + <button onclick=\"addToCart(" + productsWomen[i].id + ")\">Agregar al carrito</button>");
        
    }

    const APIMen = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=5");
    const productsMen = await APIMen.json();
    var element = document.getElementById("Ropa de hombre");
    for (var i=0 ; i<productsMen.length; i++){
        console.log(productsMen[ i ]);
        element.insertAdjacentHTML("beforeend", "<br>" + productsMen[i].title + "  (" + productsMen[i].price + ") + <button onclick=\"addToCart(" + productsMen[i].id + ")\">Agregar al carrito</button>");
        
        
    }

    const APIElectronics = await fetch("https://fakestoreapi.com/products/category/electronics?limit=5");
    const productsElectronics = await APIElectronics.json();
    var element = document.getElementById("Electronica");
    for (var i=0 ; i<productsElectronics.length; i++){
        console.log(productsElectronics[ i ]);
        element.insertAdjacentHTML("beforeend", "<br>" + productsElectronics[i].title + "  (" + productsElectronics[i].price + ") + <button onclick=\"addToCart(" + productsElectronics[i].id + ")\">Agregar al carrito</button>");
        
        
    }

    const APIJewelery = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=5");
    const productsJewelery = await APIJewelery.json();
    var element = document.getElementById("Joyería");
    for (var i=0 ; i<productsJewelery.length; i++){
        console.log(productsJewelery[ i ]);
        element.insertAdjacentHTML("beforeend", "<br>" + productsJewelery[i].title + "  (" + productsJewelery[i].price + ") + <button onclick=\"addToCart(" + productsJewelery[i].id + ")\">Agregar al carrito</button>");
        
        
    }
}

getProducts()

function showCategory(category){
    var categories = document.getElementsByClassName('categoría');
    for (var i=0; i < categories.length; i++){
        categories.item(i).style.display = 'none';
    }
    var to_show = document.getElementById(category);
    to_show.style.display = 'block';
}

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

