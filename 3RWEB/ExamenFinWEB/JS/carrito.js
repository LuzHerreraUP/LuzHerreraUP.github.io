function validate(){
    var userinput= document.getElementById("formuser");
    var userpw = document.getElementById("formpw");
    if (userinput.value == "elenah" && userpw.value == "elenah00"){
        document.getElementById("activity-form").style.display= 'none';
        document.getElementById("contcarrito").style.display = 'block';
        load();
    } else {
        document.getElementById("logininfo").innerHTML = "Contraseña incorrecta";
    }
}

var load=async () => {
    var carrito = document.getElementById("carrito");
    const request = await fetch ('https://fakestoreapi.com/carts/user/1');
    const product = await request.json();
    console.log(product)
    var precio_total = 0;
    for(var i=0; i<product.length; i++){
        const request_item =await fetch('https://fakestoreapi.com/products/' + product[i].id);
        const item = await request_item.json();
        carrito.insertAdjacentHTML("beforeend", item.title + ", $" + item.price + "<br>");
        precio_total += item.price;
    }
    carrito.insertAdjacentHTML("beforeend", "Precio total: $" + precio_total);
}
    