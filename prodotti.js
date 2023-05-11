let state = {
    data: [],
    pagination: 0,
    loading: false
}

const productsWrapper = document.querySelector("#productsWrapper");
const loading = document.querySelector("#loading");

function setState(obj) {
    state = {
        ...state,
        ...obj
        
    } 
    renderProducts()
}

async function getProducts(page) {
    setState({
        data: [],
        loading: true
    })

const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page}`)
const json = await response.json()

await new Promise((resolve, reject) => setTimeout(resolve, 2000))

setState({
    data: json.products,
    loading: false
})
state.loading || loading.classList.add('d-none')
}

getProducts(state.pagination)

function renderProducts() {
    state.data.forEach((prodotto) => {
        let div = document.createElement('div')
        div.classList.add('col-12','col-md-4','mb-3')
        div.innerHTML = `
          <div class="card pCustom">
              <img src="${prodotto.thumbnail}" class="card-img-top card-img" alt="...">
              <div class="card-body">
                <h5 class="card-title">${prodotto.title}</h5>
                <p class="card-text">${prodotto.price}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            `
            productsWrapper.append(div)
    })
};
