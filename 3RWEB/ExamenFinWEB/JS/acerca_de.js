
var emp_request = new XMLHttpRequest ();
emp_request.open("GET", "https://jsonplaceholder.typicode.com/users");
emp_request.send();
emp_request.onload = () =>{
    console.log(emp_request);
    if (emp_request.status == 200){
        var json = JSON.parse(emp_request.response);
        console.log(json);
        var element = document.getElementById("employees");
        for (var i=0 ; i<json.length; i++){
            console.log(json[ i ]);
            element.insertAdjacentHTML("beforeend", "<br>" + json[i].name + "  (" + json[i].email + ") " + "<img src= 'assets/avatar.jpg' width = 40px>");
        
        }
    }else {
         console.log("error");
         var element = document.getElementById("employees");
         element.innerHTML = "Erro fetching employee data";
    }
    };
    