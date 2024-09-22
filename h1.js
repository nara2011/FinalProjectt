let products = [
    {
        nameOfProduct: "Snickers",
        priceOfProduct: 2,
        quantityOfProduct: 200,
        image: "https://www.snickers.co.uk/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf751/files/migrate-product-files/upjxw9mxuydktugrpav0.png"
    },
    {
        nameOfProduct: "Mars",
        priceOfProduct: 1.5,
        quantityOfProduct: 500,
        image: "https://www.madeinmarket.eu/cdn/shop/files/71b85954-2dfa-4000-b967-4737b5af88cd.png?v=1706554579"
    },
    {
        nameOfProduct: "Bounty",
        priceOfProduct: 2.5,
        quantityOfProduct: 1000,
        image: "https://www.pngplay.com/wp-content/uploads/15/Bounty-Bar-PNG-HD-Quality.png"
    },
    {
        nameOfProduct: "Alpen Gold",
        priceOfProduct: 4,
        quantityOfProduct: 250,
        image: "https://alpengold.me/img/catalog/alpengold/product/1@2x.png"
    },
    {
        nameOfProduct: "Ritter Sport",
        priceOfProduct: 6,
        quantityOfProduct: 50,
        image: "https://images.squarespace-cdn.com/content/v1/5f1e7a8d356dcf5fdedfdeb2/1597846757712-1TJW0R6W75QYLB306Z9L/zgdqT47.png?format=1000w"
    }
]

function renderItem() {
    let tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = ""


    products.forEach(product => {

        let newRow =
            `<tr>
                <td><img src="${product.image}" alt="${product.nameOfProduct}"></td>
                <td>${product.nameOfProduct}</td>
                <td>${product.priceOfProduct} AZN</td>
                <td>${product.quantityOfProduct} </td>
            </tr>`

        tableBody.innerHTML += newRow
    })
}

renderItem()

let priceSort = document.getElementById("price-sort")

priceSort.addEventListener("change", function () {
    if (priceSort.value === "cheap") {
        products.sort(function (a, b) {
            return a.priceOfProduct - b.priceOfProduct
        })
        renderItem()
    }
    if (priceSort.value === "expensive") {
        products.sort(function (a, b) {
            return b.priceOfProduct - a.priceOfProduct
        })
        renderItem()
    }
    if (priceSort.value === "little") {
        products.sort(function (a, b) {
            return a.quantityOfProduct - b.quantityOfProduct
        })
        renderItem()
    }
    if (priceSort.value === "more") {
        products.sort(function (a, b) {
            return b.quantityOfProduct - a.quantityOfProduct
        })
        renderItem()
    }
})