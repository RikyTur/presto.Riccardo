fetch("https://dummyjson.com/products")
.then((response) => response.json())
.then((data) => {
    const allProducts = data.products;
    let categorie = [];
    allProducts.forEach(prodotto => {
        if (!categorie.some(el => el.category == prodotto.category)) {
        
           categorie.push(prodotto)
        }   
    }); 

    console.log(categorie)
    const categorieCardWrapper = document.querySelector("#categorieCardWrapper");
    categorie.forEach(categorie => {
        let div = document.createElement('div')
        div.classList.add("col-9", "col-md-4", "my-5")
        div.innerHTML = `
                <div class="card text-bg-dark border-0 cardCustom">
                <img src="${categorie.images[0]}" class="card-img" alt="...">
                <div class="card-img-overlay d-flex align-items-end" style="width: 18rem;">
                <button class="btn bg-warning text-start">
                  <span>${categorie.category}<span>
                </button>
                </div>
              </div>
       `
       categorieCardWrapper.appendChild(div)
    })
})
