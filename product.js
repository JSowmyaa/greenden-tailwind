var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//product search functionality
var productContainer = document.getElementById("product-container");//selecting the whole container
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div") //selecting individual products

search.addEventListener("keyup", function() {
    var enteredValue = event.target.value.toUpperCase() //storing the value typed in search

    for (let count = 0; count < productlist.length; count=count+1)
         {
        var productname = productlist[count].querySelector("h1").textContent; //selecting h1 from a particular div
        
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } 
        else {
            productlist[count].style.display = "block"
        }
    }
})
