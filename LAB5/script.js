function makeproducts() {
    return fetch("products.json")
    .then((response)=>response.json())
    .then((json) => json.products);
}

makeproducts().then((products)=>{
    console.log(products);
    showproducts(products);
});

function showproducts(products){
    const productbox = document.querySelector(".imagecontent");
    productbox.innerHTML = products.map((product)=>makehtmlli(product)).join("");
    let search = document.getElementById("search").value.toLowerCase();
    
    
}


function makehtmlli(product){
    return `<div class="in" id="${product.name}"><img class="bigger" src="${product.image}" alt="${product.name}"></div>`;
}

function filter(){
    let search = document.getElementById("search").value.toLowerCase();
    for(let i = 0; i<21; i++){
        if(product[i].name.toLowerCase().includes(search)){
            product[i].style.display = "flex"
        }
        else{
            product[i].style.display = "none"
        }
    }
}




