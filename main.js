window.onload = function () {
    let customers = [];

    
        let add = document.getElementById("add");
        add.addEventListener("click", function() {
        let adding = prompt("Eklemek istediğiniz kişiyi girin");
        customers.push(adding);

        let add2 = document.getElementById("add2");
        add2.addEventListener("click", function() {
            customers.length = 0; 
            document.getElementById("value").innerHTML = "";
        
        })
       
    
    





    console.log(typeof separation);



    let list = "<ul style='list-style: none; padding: 0; margin: 0;'>";

    for (let i = 0; i < customers.length; i++) {
        list += "<li>" + customers[i] + "</li>";
    }
    list += "</ul>";
    document.getElementById("value").innerHTML = list;
    
})
}


// let  customers =["Deniz","Ali","Mustafa"];

// cevirme=toString(customers);
// separation=customers.join("")
// console.log( separation);

// const arr = ["elma", "armut", "çilek", "muz", "portakal"];
// let list = "<ul>";
// for (let i = 0; i < arr.length; i++) {
//   list += "<li>" + arr[i] + "</li>";
// }
// list += "</ul>";
// document.getElementById("value").innerHTML = list;