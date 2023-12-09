var parrafos = document.getElementsByTagName("p")
varpNom = document.getElementsById("parrafoNombre")
var pLor = document.getElementsByName("parrafoLorem")
alert(parrafos[0].textContent)

console.log(pNom)
console.log("___________________________")
console.log(pLor)

//document=html
//creamos un nodo elemento
var header3 = document.createElement("h3");
//creamos nodo texto
var header3txt = document.createTextNode("Este es el fin de la página")
//ligamos texto a nodo elemento
header3.appendChild(header3txt)
//ligamos el nodo elemento a 
document.body.appendChild(header3)
