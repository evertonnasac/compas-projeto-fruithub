const urlParams = new URLSearchParams(window.location.search)
const nameProduct = urlParams.get("name")
const price = urlParams.get("price")
const photo = urlParams.get("photo")

const imgProduct = document.querySelector(".photoProduct")
const pPrice = document.querySelector(".price-product")
const pName = document.querySelector(".name-product")
const btnBack = document.querySelector(".btn-back")

imgProduct.setAttribute("src",`../images/${photo}`)
pName.innerHTML = nameProduct
pPrice.innerHTML = price

btnBack.addEventListener("click", () =>{
    window.location.href = `./home.html`
})
